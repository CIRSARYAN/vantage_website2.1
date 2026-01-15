import { Eye, Mail, MapPin, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t-8 border-cyan-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-500">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Vantage</h3>
            </div>
            <p className="text-slate-400 leading-relaxed border-l-4 border-slate-700 pl-4">
              A cyber-physical navigation co-pilot designed to replace dependency on sighted guides
              with the precision of AI.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 bg-slate-800 p-3 border-l-4 border-cyan-400">
              <Award className="w-5 h-5 text-cyan-400" />
              Project Information
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li className="pl-4 border-l-2 border-slate-700">Learning Planet Youth Design Challenge</li>
              <li className="pl-4 border-l-2 border-slate-700">Theme: Community Impact</li>
              <li className="pl-4 border-l-2 border-slate-700">Focus: Peace, Democracy & Inclusion</li>
              <li className="pl-4 border-l-2 border-cyan-400 text-cyan-300">Status: Active Development</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 bg-slate-800 p-3 border-l-4 border-cyan-400">
              <MapPin className="w-5 h-5 text-cyan-400" />
              Creator
            </h4>
            <div className="space-y-3 text-slate-400">
              <p className="font-bold text-white text-lg">Aryan India Gavaskar</p>
              <p className="pl-4 border-l-2 border-slate-700">Student & Innovator</p>
              <p className="pl-4 border-l-2 border-slate-700">Tamil Nadu, India</p>
              <div className="flex items-center gap-2 mt-4 bg-slate-800 p-3 border-l-4 border-cyan-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">Student Dean & Deep Learning Specialist</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-slate-800 pt-8">
          <div className="bg-gradient-to-r from-blue-900 to-cyan-900 p-8 border-l-8 border-cyan-400">
            <div className="inline-block bg-cyan-500 px-6 py-2 mb-4 border-b-4 border-cyan-700">
              <h4 className="text-xl font-bold uppercase tracking-wide">Mission Statement</h4>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-4xl">
              "True inclusion means a person with a disability can navigate their city with the same autonomy
              as a sighted person. High-end assistive technology should not be expensive proprietary hardware—it
              must be accessible, easy to use, and affordable. By leveraging advanced AI tools, we can create
              a world where physical barriers are dismantled by innovation."
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-4 border-slate-800 text-center text-slate-500 text-sm">
          <p>© 2026 Vantage Project. Building a more inclusive future through AI-powered assistive technology.</p>
        </div>
      </div>
    </footer>
  );
}
