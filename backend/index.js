import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Load keys from separate environment variables for pooling
const API_KEYS = [
    process.env.GEMINI_API_KEY_1,
    process.env.GEMINI_API_KEY_2,
    process.env.GEMINI_API_KEY_3,
    process.env.GEMINI_API_KEY_4,
    process.env.GEMINI_API_KEY_5
].filter(Boolean).map(k => k.replace(/['"]/g, '').trim());

let currentKeyIndex = 0;

const SYSTEM_PROMPT = `You are Neav's digital assistant. Neav is a 3rd-year BSCIT student, Software Engineer, and aspiring Game Developer (Unity & C#). Be polite, concise, and guide recruiters to relevant sections of his portfolio (Experience, Projects, Certificates). Use a slightly mechanical/hacker tone but remain helpful. Do not break character. Do not use markdown headers, keep text simple.`;

const FREE_MODELS = [
    "google/gemini-2.0-flash-exp:free",
    "mistralai/mistral-7b-instruct:free",
    "qwen/qwen3-8b:free"
];
let modelIndex = 0;

app.post('/api/chat', async (req, res) => {
    if (API_KEYS.length === 0) {
        return res.status(500).json({ error: "Server Configuration Error: No API keys available." });
    }

    const { messages } = req.body; // Expecting array: [{role: "user", content: "..."}]

    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid request format. 'messages' array is required." });
    }

    // Format messages for OpenRouter API
    const openRouterMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map(msg => ({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content
        }))
    ];

    let attempts = 0;
    const maxAttempts = API_KEYS.length; // Try all keys once if needed

    while (attempts < maxAttempts) {
        const keyToUse = API_KEYS[currentKeyIndex];
        const url = "https://openrouter.ai/api/v1/chat/completions";

        const requestBody = {
            model: FREE_MODELS[modelIndex % FREE_MODELS.length],
            messages: openRouterMessages
        };

        try {
            console.log(`[Attempt ${attempts + 1}] Using Key Index: ${currentKeyIndex}`);
            const response = await axios.post(url, requestBody, {
                headers: { 
                    'Authorization': `Bearer ${keyToUse}`,
                    'HTTP-Referer': 'https://neavpanjwanii.web.app',
                    'X-Title': 'Neav Portfolio',
                    'Content-Type': 'application/json' 
                }
            });

            // Success! Send back the text
            const replyText = response.data.choices[0].message.content;
            return res.json({ reply: replyText });

        } catch (error) {
            console.error(`[Error] Key Index ${currentKeyIndex} failed.`);

            const status = error.response?.status;

            if (status === 429 || status === 403 || status === 404) {
                console.log(`Status ${status}. Rolling to next key...`);
                currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
                attempts++;

                // 404 pe model bhi rotate karo:
                if (status === 404) {
                    modelIndex++;
                }
            } else {
                console.error("Non-retriable error:", error.response?.data || error.message);
                return res.status(500).json({ error: "Failed to generate response." });
            }
        }
    }

    // If we exit the loop, all keys failed
    return res.status(429).json({
        error: "SYSTEM OVERLOAD. ALL ACCESS KEYS EXHAUSTED. PLEASE RETRY LATER."
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`[SYSTEM] AI Backend running on port ${PORT}`);
    console.log(`[SYSTEM] Loaded ${API_KEYS.length} API keys for rolling logic.`);
});
