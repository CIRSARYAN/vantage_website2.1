import { CheckCircle2, Code, Zap } from 'lucide-react';

export default function ProgressPage() {
  return (
    <section className="py-32 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 mb-6 border-b-4 border-green-800">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Development Status</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 border-l-8 border-green-600 pl-6">
            What We've Accomplished
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl border-l-4 border-slate-300 pl-6">
            Significant progress on the most critical component: real-time safety detection
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white shadow-xl border-t-8 border-green-600">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-600 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 border-b-4 border-green-600 pb-2">
                  Micro-Safety Layer Complete
                </h3>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed bg-green-50 p-6 border-l-4 border-green-600">
                Successfully developed the core "Micro-Safety" layer, focusing on the most critical challenge
                for navigation: <strong>Verticality Detection</strong>.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-green-600">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">
                    Custom YOLOv8n (Nano) model trained using PyTorch and OpenCV
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-green-600">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">
                    Optimized for high-speed inference on edge devices
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-green-600">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">
                    Real-time detection of high-stakes hazards: construction pits, staircases, uneven curbs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl border-t-8 border-blue-600">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Code className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">
                  Technical Achievements
                </h3>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed bg-blue-50 p-6 border-l-4 border-blue-600">
                The model has been fine-tuned on datasets representing chaotic urban environments,
                achieving the performance necessary for real-world deployment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-blue-600">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">
                    Low-latency detection proven on development hardware
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-blue-600">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">
                    Semantic situational awareness delivered fast enough to prevent injuries
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-blue-600">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">
                    Foundation established for full system integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-slate-900 to-blue-900 p-12 text-white text-center max-w-4xl mx-auto border-l-8 border-cyan-400">
          <div className="inline-block mb-6 bg-cyan-500 px-8 py-3 border-b-4 border-cyan-700">
            <h3 className="text-2xl font-bold uppercase tracking-wide">Proof of Concept Validated</h3>
          </div>
          <p className="text-lg text-cyan-100 leading-relaxed">
            The most technically challenging component—real-time hazard detection in unstructured environments—
            has been successfully demonstrated. This proves that AI-powered situational awareness can work
            at the speed and accuracy required for safe navigation.
          </p>
        </div>
      </div>
    </section>
  );
}
