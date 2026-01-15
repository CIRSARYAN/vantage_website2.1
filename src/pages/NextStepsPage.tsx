import { Cpu, Puzzle, Brain, TestTube, Calendar } from 'lucide-react';

export default function NextStepsPage() {
  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 mb-6 border-b-4 border-blue-800">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">6-12 Month Roadmap</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 border-l-8 border-blue-600 pl-6">
            Next Steps
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl border-l-4 border-slate-300 pl-6">
            From prototype to full-fledged production system
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="bg-blue-500 px-6 py-4 border-b-4 border-blue-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-sm font-bold uppercase tracking-wider">Step 1</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">
                Hardware Integration
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Migrate software to Raspberry Pi 5 "Pocket-Compute" unit. Prototype the 3D-printed headset
                with micro-camera and bone-conduction transducers.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-cyan-600 to-cyan-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="bg-cyan-500 px-6 py-4 border-b-4 border-cyan-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white flex items-center justify-center">
                  <Puzzle className="w-8 h-8 text-cyan-600" />
                </div>
                <div className="text-sm font-bold uppercase tracking-wider">Step 2</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">
                System Fusion
              </h3>
              <p className="text-sm text-cyan-100 leading-relaxed">
                Integrate the Macro-Navigation layer using GPS APIs and Voice Chatbot interface for
                natural language destination setting.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-green-600 to-green-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="bg-green-500 px-6 py-4 border-b-4 border-green-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white flex items-center justify-center">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-sm font-bold uppercase tracking-wider">Step 3</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">
                Arbitrator Logic
              </h3>
              <p className="text-sm text-green-100 leading-relaxed">
                Develop the "Decision Engine" to manage alert hierarchy, ensuring vision-based safety
                warnings override GPS routing when necessary.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-orange-600 to-orange-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="bg-orange-500 px-6 py-4 border-b-4 border-orange-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white flex items-center justify-center">
                  <TestTube className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-sm font-bold uppercase tracking-wider">Step 4</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">
                Field Testing
              </h3>
              <p className="text-sm text-orange-100 leading-relaxed">
                Conduct controlled navigation trials in Tamil Nadu to calibrate the system for local
                street noise, lighting, and environmental conditions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-900 to-blue-900 p-12 text-white border-t-8 border-cyan-400">
          <div className="text-center mb-8">
            <div className="inline-block bg-cyan-500 px-8 py-3 border-b-4 border-cyan-700 mb-6">
              <h3 className="text-3xl font-bold uppercase tracking-wide">
                Why the Learning Planet Challenge Matters
              </h3>
            </div>
          </div>
          <p className="text-lg text-cyan-100 leading-relaxed max-w-4xl mx-auto text-center mb-10">
            This challenge offers the mentorship and resources required to move Vantage from a conceptual framework
            to a full-fledged project. With guidance and support, we can create a world where physical barriers
            are dismantled by innovation, and high-end assistive technology becomes accessible and affordable for all.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800 p-6 border-l-4 border-cyan-400">
              <h4 className="font-bold mb-3 text-lg uppercase tracking-wide text-cyan-300">Mentorship</h4>
              <p className="text-sm text-cyan-100">
                Expert guidance to refine technical implementation and scale the solution
              </p>
            </div>
            <div className="bg-slate-800 p-6 border-l-4 border-blue-400">
              <h4 className="font-bold mb-3 text-lg uppercase tracking-wide text-blue-300">Resources</h4>
              <p className="text-sm text-cyan-100">
                Access to hardware, testing environments, and development support
              </p>
            </div>
            <div className="bg-slate-800 p-6 border-l-4 border-green-400">
              <h4 className="font-bold mb-3 text-lg uppercase tracking-wide text-green-300">Community</h4>
              <p className="text-sm text-cyan-100">
                Connection with other innovators working on education and inclusion challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
