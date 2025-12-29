import Navbar from './../components/Navbar';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white pt-20">
      
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="z-10 text-center max-w-4xl px-4">
        <div className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-900/20 px-4 py-1.5 text-sm text-purple-300 backdrop-blur-sm">
          ✨ The Future of Video Production
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight bg-gradient-to-b from-white via-white/90 to-white/40 bg-clip-text text-transparent pb-4">
          Imagine it. <br/>
          <span className="text-blue-500">Stream it.</span>
        </h1>
        
        <p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto">
          Turn your text prompts into cinematic videos instantly. Powered by AI, streamed by Mux.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/chat" className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:bg-blue-500 hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-1">
            Start Generating
          </a>
          <a href="/dashboard" className="rounded-full border border-zinc-700 bg-zinc-900/50 px-8 py-4 font-semibold text-white hover:bg-zinc-800 transition-all backdrop-blur-sm">
            View Studio
          </a>
        </div>
      </div>
    </main>
  );
}