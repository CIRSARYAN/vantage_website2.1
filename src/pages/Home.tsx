import { Eye, Navigation, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="p-3 bg-cyan-500 clip-path-hexagon">
            <Eye className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-7xl font-bold tracking-tight">Vantage</h1>
        </div>

        <div className="inline-block mb-6">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-4"></div>
          <p className="text-2xl md:text-3xl font-light text-cyan-100 leading-relaxed">
            Your Wearable Navigation Co-Pilot
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-4 mx-auto"></div>
        </div>

        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          AI-powered assistive technology that merges GPS routing with real-time computer vision,
          enabling complete autonomy for the visually impaired.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Link
            to="/problem"
            className="px-8 py-4 bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition-all transform hover:scale-105 border-b-4 border-cyan-700 hover:border-cyan-600"
          >
            Explore the Challenge
          </Link>
          <Link
            to="/solution"
            className="px-8 py-4 bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-all border border-slate-600 hover:border-slate-500"
          >
            See the Solution
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div className="flex flex-col items-center p-8 bg-slate-900/50 backdrop-blur-sm border-l-4 border-cyan-400 hover:bg-slate-900/70 transition-all">
            <Navigation className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">GPS Routing</h3>
            <p className="text-sm text-slate-300">Voice-guided navigation to any destination</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-slate-900/50 backdrop-blur-sm border-l-4 border-blue-400 hover:bg-slate-900/70 transition-all">
            <Eye className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">AI Vision</h3>
            <p className="text-sm text-slate-300">Real-time hazard detection with YOLOv8</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-slate-900/50 backdrop-blur-sm border-l-4 border-green-400 hover:bg-slate-900/70 transition-all">
            <Zap className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Smart Arbitrator</h3>
            <p className="text-sm text-slate-300">Intelligent decision engine for safe navigation</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700">
          <p className="text-sm text-slate-400 mb-2">Learning Planet Youth Design Challenge</p>
          <p className="text-lg text-cyan-300 font-medium">Community Impact: Peace, Democracy and Inclusion</p>
        </div>
      </div>
    </section>
  );
}
