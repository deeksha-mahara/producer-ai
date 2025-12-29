'use client';

import { useState, useRef, useEffect } from 'react';
import VideoPlayer from '@/components/VideoPlayer';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false); // New state for loading
  const messagesEndRef = useRef<HTMLDivElement>(null); // For auto-scrolling

  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'ProducerAI Studio online. Describe the footage you need (e.g., "cyberpunk city", "nature", "tech").',
      type: 'text',
      playbackId: '' 
    }
  ]);

  const VIDEO_LIBRARY = {
    nature: 'pwoin91aZk301aOuwPGPq6SjHYXb625i8eLO29Qdz6to',   
    city: 'FtYjWgley2Sg27vXFHrLDmOidx5Hl6GUiqHx2BfSX2s',     
    tech: 'Ez8Pr1INOc4DlHrEkU1sO00EpwFQVDRLr01FdvrKSAPEw',    
    default: 'DS00Spx1CV902MCtPj5WknGlR102V5HFkDe'  
  };

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isProcessing]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userText = input.toLowerCase();
    
    // 1. Add User Message immediately
    setMessages(prev => [...prev, { role: 'user', content: input, type: 'text', playbackId: '' }]);
    setInput('');
    setIsProcessing(true); 

    // 2. Determine Video Logic
    let selectedId = VIDEO_LIBRARY.default;
    let replyText = 'Rendering complete. Here is the generated clip:';

    if (userText.includes('nature') || userText.includes('forest')) {
        selectedId = VIDEO_LIBRARY.nature;
        replyText = 'I have generated a cinematic nature sequence based on your prompt.';
    } else if (userText.includes('city') || userText.includes('urban') || userText.includes('cyberpunk')) {
        selectedId = VIDEO_LIBRARY.city;
        replyText = 'Urban environment rendered. Applied "Neon" color grading.';
    } else if (userText.includes('tech') || userText.includes('future')) {
        selectedId = VIDEO_LIBRARY.tech;
        replyText = 'Futuristic tech assets compiled. Streaming via Mux:';
    }

    // 3. Simulate AI Delay
    setTimeout(() => {
        setIsProcessing(false);
        
        const aiMsg = { 
            role: 'assistant', 
            content: replyText,
            type: 'video',
            playbackId: selectedId
        };
        setMessages(prev => [...prev, aiMsg]);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen bg-black pt-20">
      <div className="flex-1 overflow-y-auto p-4 space-y-6 max-w-3xl mx-auto w-full pb-32">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-300`}>
            <div className={`max-w-[85%] ${msg.role === 'user' ? 'bg-blue-600' : 'bg-zinc-900 border border-zinc-800'} rounded-2xl p-4 text-white`}>
              <p className="text-sm leading-relaxed">{msg.content}</p>
              {msg.type === 'video' && msg.playbackId && (
                  <div className="mt-4 rounded-lg overflow-hidden shadow-lg border border-white/10">
                      <VideoPlayer playbackId={msg.playbackId} />
                  </div>
              )}
            </div>
          </div>
        ))}

        {/* THE NEW LOADING INDICATOR */}
        {isProcessing && (
          <div className="flex justify-start animate-pulse">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              </div>
              <span className="text-xs text-zinc-400 font-mono">ProducerAI is generating assets...</span>
            </div>
          </div>
        )}
        
        {/* Invisible element to scroll to */}
        <div ref={messagesEndRef} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black to-transparent">
        <div className="max-w-3xl mx-auto relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            type="text"
            placeholder="e.g., 'Generate a cyberpunk city...'"
            className="w-full bg-zinc-900/90 backdrop-blur-xl text-white border border-zinc-700 rounded-full pl-6 pr-14 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-2xl transition-all"
            disabled={isProcessing} // Disable input while loading
          />
          <button 
            onClick={handleSend}
            disabled={isProcessing}
            className={`absolute right-2 top-2 p-2 rounded-full text-white transition-colors ${
              isProcessing ? 'bg-zinc-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
}