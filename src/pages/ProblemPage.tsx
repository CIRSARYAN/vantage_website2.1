import { AlertTriangle, Map, Cpu } from 'lucide-react';

export default function ProblemPage() {
  return (
    <section className="py-32 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 mb-6 border-b-4 border-red-800">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Critical Gap</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 border-l-8 border-red-600 pl-6">
            The Challenge
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl border-l-4 border-slate-300 pl-6">
            Bridging the gap between spatial awareness and situational safety
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 border-b-4 border-blue-600 pb-4 inline-block">
              GPS Knows Where, But Not What
            </h3>

            <p className="text-lg text-slate-700 mb-6 leading-relaxed bg-white p-6 border-l-4 border-blue-500">
              Current assistive technology relies heavily on GPS. GPS is <span className="font-bold text-blue-700">spatial</span> and
              tells a blind person where they are, but it fails to be <span className="font-bold text-blue-700">situational</span>,
              as it cannot tell them there is an open manhole nearby or a silent electric vehicle passing by.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed bg-white p-6 border-l-4 border-orange-500">
              In India, where urban environments are chaotic and unstructured, this gap is dangerous.
              The lack of real-time semantic understanding keeps the visually impaired dependent on sighted guides,
              stripping them of their agency.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 shadow-xl border-l-8 border-blue-600 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Map className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Spatial, Not Situational</h4>
                  <p className="text-slate-600 leading-relaxed">
                    GPS tells you where you are but cannot detect immediate hazards like potholes,
                    stairs, or moving vehicles in real-time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 shadow-xl border-l-8 border-orange-600 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-orange-600 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Leading Cause of Injury</h4>
                  <p className="text-slate-600 leading-relaxed">
                    "Verticality" (unexpected curbs/stairs) and dynamic obstacles are the primary causes
                    of injury for the visually impaired.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 shadow-xl border-l-8 border-red-600 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-red-600 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Financial Barrier</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Existing high-tech solutions cost $3,000+, creating a prohibitive "safety tax"
                    that most people in developing regions cannot afford.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
