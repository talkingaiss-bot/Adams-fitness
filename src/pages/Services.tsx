import { motion } from 'motion/react';
import { Activity, Dumbbell, Zap, Heart, Shield, Apple, UserCheck, Microscope, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Activity className="w-10 h-10 text-blue-600" />,
      title: "Physiotherapy",
      price: "from £70",
      description: "Comprehensive assessment and treatment for joint, muscle, and nerve-related issues using manual therapy and specific exercise.",
      details: ["Manual Therapy", "Joint Mobilization", "Pain Management", "Posture Correction"]
    },
    {
      icon: <Dumbbell className="w-10 h-10 text-emerald-600" />,
      title: "Sports Rehab",
      price: "from £85",
      description: "Specialized return-to-sport programs designed to bridge the gap between clinical rehab and on-field performance.",
      details: ["ACL Rehab", "Return to Run", "Plyometric Progressions", "Field-based Testing"]
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-500" />,
      title: "Performance",
      price: "from £120/mo",
      description: "Expertly programmed strength and conditioning to help you break plateaus and reach your physical peak.",
      details: ["Strength Programming", "Overspeed Training", "Mobility Drills", "Performance Testing"]
    },
    {
      icon: <Microscope className="w-10 h-10 text-slate-600" />,
      title: "Biometrics",
      price: "£150",
      description: "Advanced video analysis and movement screening to identify inefficiencies and prevent future injuries.",
      details: ["Gait Analysis", "Lifting Mechanics", "Squat Efficiency", "Force Plate Testing"]
    }
  ];

  const maintenance = [
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Soft Tissue",
      description: "Release tension and improve recovery with deep tissue massage and myofascial release."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Prevention",
      description: "Regular check-ins to stay ahead of niggles and ensure your training remains consistent."
    },
    {
      icon: <Apple className="w-6 h-6 text-emerald-500" />,
      title: "Nutrition",
      description: "Optimize your fuel to support recovery and lean muscle development."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-slate-600" />,
      title: "Post-Op",
      description: "Expert guidance from daily activities back to full independence after surgery."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Clinical Excellence.<br/><span className="text-blue-500 font-normal italic">Elite Performance.</span></h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
              We offer a complete spectrum of services to take you from injury back to peak performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-slate-50/50 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:border-blue-600 transition-all duration-500 shadow-sleek"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-slate-50 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">{service.icon}</div>
                  <span className="text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full">{service.price}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed font-medium">{service.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {detail}
                    </div>
                  ))}
                </div>
                <Link to="/book" className="mt-10 inline-flex items-center gap-2 font-bold text-slate-900 group/link bg-slate-50 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                  Book Treatment <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-900">Total Body Care</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Additional expertise to ensure you have a comprehensive strategy.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {maintenance.map((m, i) => (
              <div key={i} className="text-center md:text-left group">
                <div className="inline-flex p-4 bg-slate-50 rounded-2xl mb-6 shadow-sm group-hover:bg-blue-50 transition-colors">{m.icon}</div>
                <h4 className="font-bold mb-3 text-slate-900">{m.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-slate-900">Why choose <br/><span className="text-blue-600 font-normal italic">Adams Fitness?</span></h2>
              <div className="space-y-8">
                {[
                  { title: "Expert Clinicians", desc: "Our team consists of Chartered Physios with elite sport experience." },
                  { title: "Digital Integration", desc: "All rehab plans delivered via our custom mobile app." },
                  { title: "Direct Insurance", desc: "Approved by Bupa, AXA, and all major providers." }
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="text-lg font-bold mb-2 flex items-center gap-3 text-slate-900">
                      <CheckCircle2 size={20} className="text-blue-600" />
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed ml-8 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 translate-x-4 translate-y-4 rounded-[3rem] opacity-5 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000" 
                alt="Gym Setting" 
                className="rounded-[3rem] shadow-2xl aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="bg-slate-900 p-16 md:p-24 rounded-[4rem] text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter relative z-10">Need a <span className="text-blue-500 italic font-normal">custom plan?</span></h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg font-medium relative z-10">Contact us for a free 15-minute discovery call to discuss your injury and how we can help.</p>
            <Link to="/book" className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all inline-block relative z-10">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}