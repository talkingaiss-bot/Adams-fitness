import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Zap, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Marathon Runner",
      content: "The rehab program was tailored perfectly. I was back running faster than expected with zero pain.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "David Chen",
      role: "Software Engineer",
      content: "After years of sedentary work, the sessions here changed my posture and my life completely.",
      avatar: "https://i.pravatar.cc/150?u=david"
    },
    {
      name: "Mark Thompson",
      role: "Professional Athlete",
      content: "Elite level care. They understand the demands of sport better than any other clinic I've visited.",
      avatar: "https://i.pravatar.cc/150?u=mark"
    }
  ];

  return (
    <div className="overflow-hidden hero-gradient">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-8 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Next Available: Today 4:00 PM
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Movement is the <br/><span className="text-blue-600">Medicine</span> for Life.
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed font-medium max-w-xl">
              Advanced physiotherapy and rehabilitation tailored to your lifestyle. We combine clinical excellence with human performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/book" 
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-blue-200 transition-all text-center flex items-center justify-center gap-2 group"
              >
                View Treatment Plans <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
                to="/services" 
                className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all text-center"
              >
                Watch Intro Video
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative z-10 p-4 bg-white rounded-[3rem] shadow-sleek border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=800" 
                alt="Movement Assessment" 
                className="w-full h-auto rounded-[2.5rem]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-100 animate-bounce-slow">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <CheckCircle2 size={24} />
                 </div>
                 <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Recovery Rate</div>
                    <div className="text-xl font-bold text-slate-900">98.4% Success</div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400 text-center mb-10">Trusted health partners</p>
          <div className="flex flex-wrap justify-between items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
            <div className="text-xl font-black italic tracking-tighter">NIKE PERFORMANCE</div>
            <div className="text-xl font-black italic tracking-tighter">CROSSFIT INTL</div>
            <div className="text-xl font-black italic tracking-tighter">ELITE HEALTH</div>
            <div className="text-xl font-black italic tracking-tighter">PHYSIO TECH</div>
            <div className="text-xl font-black italic tracking-tighter">SPORT SCIENCE</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">Better Results. <span className="text-blue-600">Smarter Methods.</span></h2>
            <p className="text-slate-500 leading-relaxed font-medium">
              Our approach merges clinical physiotherapy with elite performance coaching to deliver sustainable, long-term physical freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
                title: "Hybrid Rehab",
                description: "In-person clinical care integrated with a custom mobile rehab program through our app."
              },
              {
                icon: <Zap className="w-8 h-8 text-emerald-600" />,
                title: "Dynamic Therapy",
                description: "We don't just use tables. We use movement to retrain your nervous system and muscles."
              },
              {
                icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
                title: "Longevity Focus",
                description: "Recovering the injury is step one. Building a resilient body for life is our ultimate goal."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:border-blue-100 transition-all shadow-sleek"
              >
                <div className="mb-8 p-4 bg-slate-50 w-fit rounded-2xl">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Promotion Card - Sleek dark theme */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-white">
           <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                   <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">Recovery <span className="text-blue-500 font-normal italic">Workshops.</span></h2>
                   <p className="text-slate-400 mb-12 text-lg font-medium leading-relaxed">
                     Group sessions focused on mobility, injury prevention, and athletic performance for local teams and individual athletes.
                   </p>
                   <div className="flex items-center gap-6 mb-12">
                     <div className="flex -space-x-3">
                        {[1,2,3].map(i => (
                          <img key={i} src={`https://i.pravatar.cc/100?u=group${i}`} className="w-12 h-12 rounded-full border-4 border-slate-900" />
                        ))}
                     </div>
                     <span className="text-sm font-bold text-slate-300">12 spots left next month</span>
                   </div>
                   <Link to="/workshops" className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5">
                      View Workshop Schedule <ArrowRight size={20} />
                   </Link>
                </div>
                <div className="hidden lg:block">
                   <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
                    className="rounded-[2.5rem] shadow-2xl skew-y-3"
                    referrerPolicy="no-referrer"
                   />
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Success <span className="text-blue-600">Stories.</span></h2>
             <p className="text-slate-500 font-medium">Real results from our dedicated client base.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-10 glass rounded-[2.5rem] border border-slate-100 shadow-sleek">
                <div className="flex text-blue-600 mb-8">
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                </div>
                <p className="text-slate-700 font-medium italic mb-10 leading-relaxed text-lg">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} className="w-12 h-12 rounded-2xl grayscale" />
                  <div className="text-left">
                     <div className="font-bold text-slate-900">{t.name}</div>
                     <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center bg-blue-50/50 p-20 rounded-[4rem] border border-blue-100/50">
           <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter">Your move. <span className="text-blue-600 font-normal italic">Let's start.</span></h2>
           <p className="text-slate-500 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto italic opacity-80">
             Don't live with limitations. Expert assessment is just one click away.
           </p>
           <Link to="/book" className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200 inline-block">
              Request Your Consultation
           </Link>
        </div>
      </section>
    </div>
  );
}
