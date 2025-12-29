'use client';

import MuxPlayer from '@mux/mux-player-react';

export default function VideoPlayer({ playbackId }: { playbackId: string }) {
  return (
    <div className="w-full aspect-video overflow-hidden rounded-2xl border border-zinc-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-black relative group">
      
      {/* The Mux Player */}
      <MuxPlayer
        streamType="on-demand"
        playbackId={playbackId}
        metadata={{ video_title: 'ProducerAI Generated Video' }}
        primaryColor="#2563eb" // Brand Blue
        secondaryColor="#ffffff"
        accentColor="#a855f7" // Purple accent
        className="w-full h-full"
      />
      
      {/* Optional: "Live" badge overlay for style */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
        <span className="text-xs font-bold text-white tracking-widest uppercase">Mux Stream</span>
      </div>
    </div>
  );
}