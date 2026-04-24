import { motion } from 'motion/react';
import { Video, Smartphone, Clock, Globe, ArrowRight, Play, Check, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OnlineRehab() {
  const features = [
    {
      icon: <Video className="text-blue-600" />,
      title: "Video Assessments",
      description: "1-on-1 calls with our elite therapists to diagnose your injury and track your progress from anywhere in the world."
    },
    {
      icon: <Smartphone className="text-blue-600" />,
      title: "Mobile App Access",
      description: "Get your personalized rehab plan delivered via our app with clear video demos and sets/reps tracking."
    },
    {
      icon: <Clock className="text-blue-600" />,
      title: "24/7 Messaging",
      description: "Have a question about an exercise? Message your physiotherapist anytime for support and adjustments."
    },
    {
      icon: <Globe className="text-blue-600" />,
      title: "Location Flexible",
      description: "Perfect for frequent travelers or those who prefer the comfort and privacy of rehabilitating at home."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 w-fit shadow-sm">
                Global Digital Care
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[1.1] text-slate-900">
                Rehab From <br /><span className="text-blue-600 font-normal italic">Anywhere.</span>
              </h1>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl font-medium">
                Expert physiotherapy is no longer limited by geography. Our online rehab platform combines state-of-the-art technology with clinical expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/book" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-blue-200 transition-all flex items-center gap-2">
                  Start Online Rehab <Video size={18} />
                </Link>
                <a href="#how-it-works" className="px-8 py-4 rounded-2xl font-bold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
                   See How it Works <Play size={16} />
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=online${i}`} alt="User" className="w-10 h-10 rounded-xl border-4 border-white shadow-sm" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <p className="text-xs text-slate-400 font-black uppercase tracking-widest">Joined by 500+ global athletes</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 p-4 bg-white rounded-[3rem] shadow-sleek border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="Online Rehab Session" 
                  className="rounded-[2.5rem] shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl z-20 border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                   <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                     <ShieldCheck size={24} />
                   </div>
                   <div>
                     <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Security</div>
                     <div className="font-bold text-slate-900 tracking-tight">Verified Expert Care</div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">The Digital <span className="text-blue-600">Edge.</span></h2>
            <p className="text-slate-500 font-medium">Why our online rehab platform is leading the industry in remote recovery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sleek"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm">{f.icon}</div>
                <h3 className="font-bold mb-4 text-slate-900 text-lg tracking-tight">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Tiers */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Online Rehab <span className="text-blue-600">Plans.</span></h2>
              <p className="text-slate-500 font-medium">Flexible options for every stage of your recovery journey.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {/* Tier 1 */}
              <div className="p-12 glass rounded-[3rem] border border-slate-200 flex flex-col justify-between hover:border-blue-200 transition-colors">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Essential</h3>
                  <div className="text-5xl font-black mb-8 text-slate-900 tracking-tighter">£49<span className="text-base font-bold text-slate-400 tracking-normal ml-1">/mo</span></div>
                  <ul className="space-y-5 mb-12">
                    {["App Based Rehab Plan", "Video Library Access", "Weekly Progress Checks"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                        <Check size={18} className="text-blue-600" /> {item}
                      </li>
                    ))}
                    <li className="flex items-center gap-3 text-sm text-slate-400 font-medium opacity-50">
                      <Check size={18} /> Monthly Video Call
                    </li>
                  </ul>
                </div>
                <Link to="/book" className="w-full py-4 bg-slate-100 text-slate-900 rounded-2xl font-bold text-center hover:bg-slate-200 transition-all">Choose Plan</Link>
              </div>

              {/* Tier 2 - Featured */}
              <div className="p-12 bg-slate-900 text-white rounded-[3rem] flex flex-col justify-between relative shadow-2xl lg:scale-105 border border-slate-800">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full">Most Popular</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance</h3>
                  <div className="text-5xl font-black mb-8 text-white tracking-tighter">£99<span className="text-base font-bold text-slate-500 tracking-normal ml-1">/mo</span></div>
                  <ul className="space-y-5 mb-12">
                    {["Everything in Essential", "Bi-Weekly 30m Video Call", "Unlimited Messaging", "Movement Analysis"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                        <Check size={18} className="text-blue-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/book" className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold text-center hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5">Get Started</Link>
              </div>

              {/* Tier 3 */}
              <div className="p-12 glass rounded-[3rem] border border-slate-200 flex flex-col justify-between hover:border-blue-200 transition-colors">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Elite</h3>
                  <div className="text-5xl font-black mb-8 text-slate-900 tracking-tighter">£199<span className="text-base font-bold text-slate-400 tracking-normal ml-1">/mo</span></div>
                  <ul className="space-y-5 mb-12">
                    {["Everything in Performance", "Weekly 45m Video Call", "Concierge Access", "Equipment Guidance"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                        <Check size={18} className="text-blue-600" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/book" className="w-full py-4 bg-slate-100 text-slate-900 rounded-2xl font-bold text-center hover:bg-slate-200 transition-all">Choose Elite</Link>
              </div>
            </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight leading-tight">
              "Working with world-class physios from my home was a <span className="text-blue-600 italic font-normal">game changer.</span>"
            </h2>
            <div className="flex items-center justify-center gap-5">
               <img src="https://i.pravatar.cc/100?u=quote" alt="Sarah" className="w-16 h-16 rounded-[1.5rem]grayscale shadow-lg" referrerPolicy="no-referrer" />
               <div className="text-left">
                  <div className="font-bold text-lg text-slate-900">James Wilson</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Ultra Runner / Global Client</div>
               </div>
            </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white flex flex-col md:flex-row justify-between items-center gap-16 text-center md:text-left relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-blue-600/5 blur-[120px] rounded-full" />
                <div className="max-w-xl relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to <span className="text-blue-500 italic font-normal">join?</span></h2>
                    <p className="text-slate-400 text-lg font-medium leading-relaxed">Join our global community and start your journey towards pain-free movement today.</p>
                </div>
                <Link to="/book" className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap shadow-xl shadow-white/5 relative z-10">
                   Book Video Consultation
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}