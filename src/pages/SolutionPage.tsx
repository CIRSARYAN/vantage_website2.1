import { Glasses, Cpu, Volume2, Mic } from 'lucide-react';

export default function SolutionPage() {
  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 mb-6 border-b-4 border-green-800">
            <Glasses className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Innovation</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 border-l-8 border-green-600 pl-6">
            The Solution
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl border-l-4 border-slate-300 pl-6">
            Not just an app or glasses, but a complete cyber-physical navigation co-pilot
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
            <div className="bg-white p-8 h-full">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                <Glasses className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b-4 border-blue-600 pb-2 inline-block">
                The Headset: The "Eyes"
              </h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                A sleek, 3D-printed frame that looks like premium eyewear, containing:
              </p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3 bg-blue-50 p-4 border-l-4 border-blue-600">
                  <span className="w-2 h-2 bg-blue-600 mt-2 flex-shrink-0"></span>
                  <span><strong>High-resolution micro-camera</strong> for real-time vision processing</span>
                </li>
                <li className="flex items-start gap-3 bg-blue-50 p-4 border-l-4 border-blue-600">
                  <span className="w-2 h-2 bg-blue-600 mt-2 flex-shrink-0"></span>
                  <span><strong>Bone-conduction transducers</strong> that vibrate your skull to send audio to your inner ear, leaving your actual ears open to hear traffic and ambient noise</span>
                </li>
                <li className="flex items-start gap-3 bg-blue-50 p-4 border-l-4 border-blue-600">
                  <span className="w-2 h-2 bg-blue-600 mt-2 flex-shrink-0"></span>
                  <span>Lightweight design for all-day comfort</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-1">
            <div className="bg-white p-8 h-full">
              <div className="w-16 h-16 bg-slate-800 flex items-center justify-center mb-6">
                <Cpu className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b-4 border-slate-800 pb-2 inline-block">
                The Pocket-Compute Unit: The "Brain"
              </h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                A palm-sized box that clips to your belt or sits in your pocket, housing:
              </p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-slate-700">
                  <span className="w-2 h-2 bg-slate-700 mt-2 flex-shrink-0"></span>
                  <span><strong>Raspberry Pi 5</strong> for powerful edge AI processing</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-slate-700">
                  <span className="w-2 h-2 bg-slate-700 mt-2 flex-shrink-0"></span>
                  <span><strong>GPS module</strong> for precise location tracking</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-slate-700">
                  <span className="w-2 h-2 bg-slate-700 mt-2 flex-shrink-0"></span>
                  <span><strong>Battery</strong> for extended operation</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-slate-700">
                  <span className="w-2 h-2 bg-slate-700 mt-2 flex-shrink-0"></span>
                  <span>Connected via a single, discrete wire to the headset</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-cyan-900 p-12 text-white border-t-8 border-cyan-400">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-10 text-center border-b-4 border-cyan-400 pb-4 inline-block mx-auto block">
              The User Experience
            </h3>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-900 border-4 border-cyan-400 flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-10 h-10 text-cyan-300" />
                </div>
                <div className="bg-cyan-500 text-white font-bold py-2 mb-3">1. INPUT</div>
                <p className="text-sm text-cyan-100">
                  User speaks a destination into the headset
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-slate-900 border-4 border-blue-400 flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-10 h-10 text-blue-300" />
                </div>
                <div className="bg-blue-500 text-white font-bold py-2 mb-3">2. PROCESSING</div>
                <p className="text-sm text-cyan-100">
                  Pocket unit routes the path and monitors obstacles
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-slate-900 border-4 border-green-400 flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="w-10 h-10 text-green-300" />
                </div>
                <div className="bg-green-500 text-white font-bold py-2 mb-3">3. OUTPUT</div>
                <p className="text-sm text-cyan-100">
                  Spatialized audio warnings from direction of hazards
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-slate-900 border-4 border-orange-400 flex items-center justify-center mx-auto mb-4">
                  <Glasses className="w-10 h-10 text-orange-300" />
                </div>
                <div className="bg-orange-500 text-white font-bold py-2 mb-3">4. RESULT</div>
                <p className="text-sm text-cyan-100">
                  Navigate safely, head up, hands free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
