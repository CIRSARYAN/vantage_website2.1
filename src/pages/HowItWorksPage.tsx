import { MapPin, Camera, Brain, AlertCircle, ArrowRight } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <section className="py-32 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 mb-6 border-b-4 border-cyan-800">
            <Brain className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Architecture</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 border-l-8 border-cyan-600 pl-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl border-l-4 border-slate-300 pl-6">
            A dual-layer AI system connected by an intelligent arbitrator
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white shadow-xl border-t-8 border-blue-600 hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <MapPin className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 border-b-4 border-blue-600 pb-2 inline-block">
                Layer 1: The Macro
              </h3>
              <p className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wide">GPS + Voice Chatbot</p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                The user says, "Vantage, take me to the library." The AI calculates the route using satellite data,
                optimized for walking.
              </p>
              <div className="bg-blue-50 p-5 border-l-4 border-blue-600">
                <p className="text-sm text-slate-700">
                  <strong className="block mb-2 text-blue-700">RESPONSIBILITY:</strong>
                  Getting you to your destination via the optimal route
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl border-t-8 border-cyan-600 hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="p-8">
              <div className="w-16 h-16 bg-cyan-600 flex items-center justify-center mb-6">
                <Camera className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 border-b-4 border-cyan-600 pb-2 inline-block">
                Layer 2: The Micro
              </h3>
              <p className="text-sm font-bold text-cyan-600 mb-4 uppercase tracking-wide">YOLOv8 Computer Vision</p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Scans the video feed 15-30 times per second. It doesn't care about the destination;
                it only cares about the next 5 feet.
              </p>
              <div className="bg-cyan-50 p-5 border-l-4 border-cyan-600 space-y-3">
                <p className="text-sm font-bold text-cyan-700 uppercase">DETECTS:</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-600"></span>
                    Verticality (stairs/potholes)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-600"></span>
                    Dynamic threats (cars/people)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl border-t-8 border-green-600 hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="p-8">
              <div className="w-16 h-16 bg-green-600 flex items-center justify-center mb-6">
                <Brain className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 border-b-4 border-green-600 pb-2 inline-block">
                The Arbitrator
              </h3>
              <p className="text-sm font-bold text-green-600 mb-4 uppercase tracking-wide">The Secret Sauce</p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                The logic that connects the two layers. When GPS and Vision conflict, it prioritizes safety.
              </p>
              <div className="bg-green-50 p-5 border-l-4 border-green-600">
                <p className="text-sm text-slate-700">
                  <strong className="block mb-2 text-green-700">DECISION ENGINE:</strong>
                  Intercepts and overrides routing commands when hazards are detected
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-12 text-white border-l-8 border-cyan-400">
          <h3 className="text-4xl font-bold mb-10 text-center">Real-World Example</h3>

          <div className="grid md:grid-cols-5 gap-6 items-center max-w-5xl mx-auto">
            <div className="bg-slate-800 p-6 border-l-4 border-blue-400">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-600 mb-4 mx-auto">
                <MapPin className="w-7 h-7" />
              </div>
              <p className="text-sm text-center font-medium">GPS says: "Turn right in 2 meters"</p>
            </div>

            <ArrowRight className="w-10 h-10 mx-auto text-cyan-400 hidden md:block" />

            <div className="bg-slate-800 p-6 border-l-4 border-red-400">
              <div className="flex items-center justify-center w-14 h-14 bg-red-600 mb-4 mx-auto">
                <AlertCircle className="w-7 h-7" />
              </div>
              <p className="text-sm text-center font-medium">Vision detects: Construction barrier ahead</p>
            </div>

            <ArrowRight className="w-10 h-10 mx-auto text-cyan-400 hidden md:block" />

            <div className="bg-slate-800 p-6 border-l-4 border-green-400">
              <div className="flex items-center justify-center w-14 h-14 bg-green-600 mb-4 mx-auto">
                <Brain className="w-7 h-7" />
              </div>
              <p className="text-sm text-center font-medium">Arbitrator: "Path blocked. Walk forward 3 steps, then turn right"</p>
            </div>
          </div>

          <div className="mt-10 p-8 bg-cyan-600 border-4 border-cyan-400">
            <p className="text-center text-xl font-bold uppercase tracking-wide">
              The user avoids the barrier and continues safely to their destination
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
