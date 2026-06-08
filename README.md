# Neav Panjwani - Personal Portfolio

Hey there! Welcome to the source code of my personal portfolio website. 

I'm a BSCIT student and an aspiring Software Engineer with a huge passion for web development and game dev (specifically Unity & C#). I built this portfolio not just to list my projects, but to experiment with cool animations, modern UI patterns, and an integrated AI chatbot.

You can check out the live site here: [neavpanjwanii.web.app](https://neavpanjwanii.web.app)

## What's inside?

The project is split into two main parts: the frontend and a lightweight backend.

### 1. The Frontend (`/premium-portfolio`)
This is where the visual magic happens. I wanted the site to feel premium, smooth, and highly interactive.
- **Frameworks:** React (built with Vite) and Tailwind CSS for the styling.
- **Animations:** Framer Motion brings the components to life with smooth scroll transitions.
- **3D & Particles:** Built a dynamic interactive particle profile image that reacts to your cursor.
- **AI Chatbot (CIPHER):** A fully functional AI assistant sitting right on the site, ready to answer questions about my background or guide visitors around.
- **Live Contact Form:** Integrated with Web3Forms so any messages sent through the site land straight in my inbox.
- **Hosting:** Deployed on Firebase Hosting.

### 2. The Backend (`/backend`)
A small, fast Express.js server that handles the heavy lifting for the AI chatbot.
- **Tech:** Node.js and Express.
- **AI Integration:** Uses the Groq API (specifically the lightning-fast Llama 3 models) to power the frontend chatbot. It's set up with automatic API key pooling so the bot stays reliable and never crashes from rate limits.
- **Hosting:** Deployed on Firebase.

## Want to run it locally?

If you want to clone this repo and poke around the code, here's how to get it running:

**1. Clone the repo:**
```bash
git clone https://github.com/neavpanjwani99/Portfolio.git
cd Portfolio
```

**2. Start the Backend:**
Open your terminal and run:
```bash
cd backend
npm install
# You'll need to create a .env file here and add: GROQ_API_KEY_1=your_key_here
npm run dev
```

**3. Start the Frontend:**
Open a new terminal tab and run:
```bash
cd premium-portfolio
npm install
npm run dev
```

That's it! The site should now be running on your `localhost`.

## Let's Connect! 
If you find a bug, have a suggestion, or just want to talk about game dev or web technologies, feel free to reach out.

- **GitHub:** [@neavpanjwani99](https://github.com/neavpanjwani99)
- **Itch.io:** [neavpanjwani.itch.io](https://neavpanjwani.itch.io)

---
*Built with and way too much caffeine.*
