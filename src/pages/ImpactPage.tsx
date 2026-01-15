import { Users, Heart, TrendingUp, DollarSign } from 'lucide-react';

export default function ImpactPage() {
  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 mb-6 border-b-4 border-orange-800">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Impact</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 border-l-8 border-orange-600 pl-6">
            Impact & Innovation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl border-l-4 border-slate-300 pl-6">
            Why Vantage is different from existing solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 border-b-4 border-blue-600 pb-4 inline-block">
              Who Benefits
            </h3>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 border-l-8 border-blue-600 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Visually Impaired Individuals</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Gain complete autonomy to navigate from doorstep to destination without depending on sighted guides,
                      particularly in chaotic urban environments like those in India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 border-l-8 border-green-600 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Families & Communities</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Peace of mind knowing their loved ones can navigate safely and independently,
                      reducing the burden on caregivers while promoting dignity and inclusion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 p-6 border-l-8 border-cyan-600 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-cyan-600 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Society at Large</h4>
                    <p className="text-slate-600 leading-relaxed">
                      A more inclusive society where physical disabilities are not barriers to economic participation,
                      education, and social engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-1">
            <div className="bg-white p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b-4 border-cyan-600 pb-4">
                What Makes Vantage Different
              </h3>
              <div className="space-y-5">
                <div className="bg-slate-50 p-6 border-l-4 border-blue-600">
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-sm text-blue-700">
                    End-to-End Autonomy
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    First solution combining GPS routing <span className="font-bold">AND</span> real-time hazard detection.
                    No more choosing between navigation and safety.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 border-l-4 border-green-600">
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-sm text-green-700">
                    Affordable Technology
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Built with accessible hardware (Raspberry Pi), eliminating the $3,000+ "safety tax"
                    imposed by proprietary solutions.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 border-l-4 border-cyan-600">
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-sm text-cyan-700">
                    Context-Aware Intelligence
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The Arbitrator makes split-second decisions, prioritizing immediate safety over planned routes
                    when conflicts arise.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 border-l-4 border-orange-600">
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-sm text-orange-700">
                    Ambient Awareness
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Bone-conduction audio keeps ears open for traffic, conversations, and environmental sounds—
                    critical for urban safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-cyan-600 p-12 text-white border-t-8 border-green-400">
          <DollarSign className="w-20 h-20 mx-auto mb-8" />
          <h3 className="text-4xl font-bold mb-6 text-center uppercase tracking-wide">
            Breaking the Financial Barrier
          </h3>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-center leading-relaxed">
            Vantage aims to provide professional-grade assistive navigation at a fraction of the cost,
            making safety and autonomy accessible to communities in developing regions.
          </p>
          <div className="flex items-center justify-center gap-12 text-lg font-bold max-w-3xl mx-auto">
            <div className="bg-white/10 p-8 border-4 border-white">
              <p className="text-sm mb-3 uppercase tracking-wider">Existing Solutions</p>
              <p className="text-5xl font-black">$3,000+</p>
            </div>
            <div className="text-6xl font-black">→</div>
            <div className="bg-white/10 p-8 border-4 border-white">
              <p className="text-sm mb-3 uppercase tracking-wider">Vantage Target</p>
              <p className="text-5xl font-black">Accessible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
