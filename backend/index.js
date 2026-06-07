import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.GROQ_API_KEY_1;

const SYSTEM_PROMPT = `You are Neav's digital assistant. Neav is a 3rd-year BSCIT student, Software Engineer, and aspiring Game Developer (Unity & C#). Be polite, concise, and guide recruiters to relevant sections of his portfolio (Experience, Projects, Certificates). Use a slightly mechanical/hacker tone but remain helpful. Do not break character. Do not use markdown headers, keep text simple.`;

app.post('/api/chat', async (req, res) => {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid request format." });
    }

    const groqMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map(msg => ({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content
        }))
    ];

    try {
        const response = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                model: "llama-3.1-8b-instant", // ✅ Current working model
                messages: groqMessages,
                temperature: 0.7
            },
            {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const replyText = response.data.choices[0].message.content;
        return res.json({ reply: replyText });

    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        return res.status(500).json({ error: "Failed to generate response." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[SYSTEM] Running on port ${PORT}`));