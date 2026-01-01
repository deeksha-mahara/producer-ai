# 🎬 ProducerAI: The Real-Time Generative Video Studio

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![Mux](https://img.shields.io/badge/Video-Mux-pink) ![Tailwind](https://img.shields.io/badge/Style-Tailwind-blue)

**ProducerAI** is a next-generation video studio concept that bridges the gap between **Generative AI** and **Instant Streaming**.

While traditional generative video workflows involve long render times and heavy file downloads, ProducerAI simulates a future where an AI Agent understands creative intent and streams the result instantly using **Mux's zero-latency infrastructure**.

---

## 🚀 Live Demo
**[https://producer-ai-a251-69h153dn4-deeksha-maharas-projects.vercel.app/]**

## 💡 The Problem & Solution
* **The Problem:** The "Render Gap." Creators using tools like Sora or Runway often wait minutes for videos to generate and download. This breaks the creative flow.
* **The Solution:** ProducerAI acts as a real-time "Director." You chat with it, and it instantly broadcasts the requested asset.
* **The Enabler:** **Mux**. By utilizing Mux's HLS streaming, we treat video assets as lightweight, instant building blocks rather than heavy files.

---

## ⚡ Key Features

### 1. The "Director" Chat Agent (`/chat`)
An intelligent interface that parses natural language prompts.
* **Smart Selection:** Detects keywords (e.g., "Cyberpunk", "Nature", "Tech") to select the perfect video asset.
* **Visual Feedback:** Features a "Processing..." pulse animation to simulate AI generation time.
* **Contextual Responses:** The AI replies like a film director, confirming the style and grading.

### 2. Studio Command Center (`/dashboard`)
A professional-grade dashboard for monitoring streams.
* **Playlist Queue:** Clickable sidebar to instantly switch between active streams.
* **Stream Telemetry:** Visualize simulated Bitrate, Latency, and Resolution data.
* **Zero-Latency Switching:** Powered by the Mux Player's instant load capabilities.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS (Glassmorphism, Bento Grid layout)
* **Video Engine:** **Mux** (`@mux/mux-player-react`)
* **Deployment:** Vercel

---

## 🎥 Mux Integration

This project participates in the **"Best Use of Mux"** category. Mux is utilized in three key ways:

1.  **Instant Playback:** We use `@mux/mux-player-react` to handle rapid source switching without the buffering lag found in standard HTML5 players.
2.  **Asset Management:** The application logic maps user intents (text) to specific Mux `playbackId`s, simulating a real-time generation pipeline.
3.  **HLS Delivery:** All assets are delivered via HTTP Live Streaming (HLS), ensuring broadcast-quality playback on any device.

---

## 🧪 How to Test (For Judges)

1.  Open the **[Live Demo]**.
2.  Navigate to the **Chat** tab.
3.  Type one of the following prompts:
    * *"I need a cyberpunk city background"*
    * *"Show me a cinematic nature shot"*
    * *"Generate a futuristic tech loop"*
4.  Watch the AI "process" the request and instantly stream the video via Mux.
5.  Visit the **Dashboard** and toggle **"Show Stream Data"** to see the technical metrics.

---

## 🔮 Future Roadmap

* **Real GenAI API:** Connect to OpenAI Sora / Stable Video to generate *new* assets on the fly, upload them to Mux via API, and stream them.
* **Mux Video Stitching:** Use Mux's editing API to combine multiple generated clips into a single seamless broadcast.
* **Real-Time Data:** Integrate the Mux Data SDK to monitor real-world Quality of Experience (QoE) scores.

---

## 👨‍💻 Author

Built for the **Mux x Dev.to Hackathon** by **[Deeksha]**.
