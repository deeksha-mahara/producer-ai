'use client';

import { useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';

const ASSETS = [
  {
    id: '1',
    title: 'Cyberpunk_City_Render.mp4',
    status: 'Live Stream',
    duration: '00:15',
    playbackId: 'FtYjWgley2Sg27vXFHrLDmOidx5Hl6GUiqHx2BfSX2s',
    thumbnail: 'bg-purple-900',
  },
  {
    id: '2',
    title: 'Nature_Drone_Flyover.mp4',
    status: 'Ready to Stream',
    duration: '00:22',
    playbackId: 'pwoin91aZk301aOuwPGPq6SjHYXb625i8eLO29Qdz6to',
    thumbnail: 'bg-emerald-900',
  },
  {
    id: '3',
    title: 'Tech_Interface_Loop.mp4',
    status: 'Ready to Stream',
    duration: '00:10',
    playbackId: 'Ez8Pr1INOc4DlHrEkU1sO00EpwFQVDRLr01FdvrKSAPEw',
    thumbnail: 'bg-blue-900',
  },
  {
    id: '4',
    title: 'Deep_Space_Nebula.mp4',
    status: 'Processing (98%)',
    duration: '01:05',
    playbackId: 'DS00Spx1CV902MCtPj5WknGlR102V5HFkDe', // Reuse IDs for now or add new ones
    thumbnail: 'bg-indigo-900',
  },
  
];

export default function DashboardPage() {
  const [activeVideo, setActiveVideo] = useState(ASSETS[0]);
  const [showStats, setShowStats] = useState(false); // State for the "Pro" stats toggle

  return (
    <div className="min-h-screen bg-black pt-28 px-6 pb-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <div>
                <h1 className="text-4xl font-bold text-white tracking-tight">Studio Command</h1>
                <p className="text-zinc-400 mt-1">Real-time asset generation & playback monitoring.</p>
            </div>
            <div className="flex gap-3">
                 {/* Toggle Stats Button */}
                 <button 
                    onClick={() => setShowStats(!showStats)}
                    className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${
                        showStats 
                        ? 'bg-zinc-800 border-zinc-600 text-white' 
                        : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white'
                    }`}
                >
                    {showStats ? 'Hide Stream Data' : 'Show Stream Data'}
                </button>
                 
                 <button className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all">
                    + New Generation
                </button>
            </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN: Main Player */}
            <div className="lg:col-span-2 space-y-6">
                <div className="relative group">
                    {/* Live Badge */}
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-red-500">
                            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span className="text-xs font-bold tracking-widest uppercase">Live Preview</span>
                        </div>
                        <span className="text-xs text-zinc-500 font-mono">ID: {activeVideo.playbackId.slice(0, 8)}...</span>
                    </div>
                    
                    {/* The Player */}
                    <div className="rounded-xl overflow-hidden shadow-2xl border border-zinc-800">
                        <VideoPlayer playbackId={activeVideo.playbackId} />
                    </div>

                    {/* Technical Stats Overlay (Upgrade 2) */}
                    {showStats && (
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 font-mono text-xs animate-in fade-in slide-in-from-top-2">
                            <div>
                                <div className="text-zinc-500 uppercase mb-1">Current Bitrate</div>
                                <div className="text-emerald-400 font-bold">4,500 kbps</div>
                            </div>
                            <div>
                                <div className="text-zinc-500 uppercase mb-1">Latency</div>
                                <div className="text-emerald-400 font-bold">0.8s (LL-HLS)</div>
                            </div>
                            <div>
                                <div className="text-zinc-500 uppercase mb-1">Resolution</div>
                                <div className="text-white font-bold">1920x1080</div>
                            </div>
                            <div>
                                <div className="text-zinc-500 uppercase mb-1">Protocol</div>
                                <div className="text-blue-400 font-bold">HLS / Mux Video</div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Video Details Card */}
                <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 transition-all flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-semibold text-white">{activeVideo.title}</h3>
                        <div className="flex gap-6 mt-4 text-sm text-zinc-400">
                            <div className="flex flex-col">
                                <span className="text-zinc-600 text-xs uppercase mb-1">Duration</span>
                                <span className="text-zinc-200">{activeVideo.duration}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-zinc-600 text-xs uppercase mb-1">Status</span>
                                <span className="text-emerald-400 font-medium">{activeVideo.status}</span>
                            </div>
                        </div>
                    </div>

                    {/* Share Button (Upgrade 3) */}
                    <button 
                        onClick={() => alert("Stream URL copied to clipboard!")}
                        className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                        title="Share Stream"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                    </button>
                </div>
            </div>

            {/* RIGHT COLUMN: Interactive Playlist */}
            <div className="space-y-4">
                <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/20 h-full max-h-[600px] overflow-y-auto custom-scrollbar">
                    <h3 className="text-zinc-100 font-semibold mb-4 sticky top-0 bg-black/0 backdrop-blur-sm py-2">Production Queue</h3>
                    <div className="space-y-3">
                        
                        {ASSETS.map((video) => (
                          <div 
                            key={video.id}
                            onClick={() => setActiveVideo(video)}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer border ${
                              activeVideo.id === video.id 
                                ? 'bg-zinc-800 border-zinc-600 shadow-lg scale-[1.02]' 
                                : 'hover:bg-zinc-800/50 border-transparent hover:scale-[1.01]'
                            }`}
                          >
                            {/* Thumbnail */}
                            <div className={`w-16 h-10 rounded-lg flex items-center justify-center ${video.thumbnail} shrink-0`}>
                                <span className="text-[10px] text-white/50 font-bold">VID</span>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                                <div className={`text-sm font-medium truncate transition-colors ${
                                  activeVideo.id === video.id ? 'text-blue-400' : 'text-zinc-200'
                                }`}>
                                  {video.title}
                                </div>
                                <div className="text-xs text-zinc-500">{video.status}</div>
                            </div>
                            
                            {/* Indicator */}
                            {activeVideo.id === video.id && (
                              <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
                            )}
                          </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}