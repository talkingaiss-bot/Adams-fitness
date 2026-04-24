import { motion } from 'motion/react';
import { Calendar, MapPin, Users, Ticket, ArrowRight, User, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Workshop() {
  const workshops = [
    {
      id: 1,
      title: "ACL Prevention Masterclass",
      date: "May 15",
      time: "10:00 AM - 2:00 PM",
      location: "Adams Fitness Central",
      capacity: "15 Participants",
      price: "£120",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      description: "Learn the essential biomechanics and strength protocols to reduce your risk of ACL injury and improve performance."
    },
    {
      id: 2,
      title: "Running Mechanics Seminar",
      date: "June 02",
      time: "2:00 PM - 5:00 PM",
      location: "Hybrid Session",
      capacity: "50 Participants",
      price: "£75",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800",
      description: "A deep dive into efficient running form, shoe selection, and common running injury management for all levels."
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Skill <span className="text-blue-500 italic font-normal">Expansion.</span></h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
              We believe education is the key to injury prevention. Join our expert clinicians for hands-on learning seminars.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshop List */}
      <section className="py-24 bg-slate-50/50 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {workshops.map((w, i) => (
              <motion.div 
                key={w.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 flex flex-col md:flex-row group hover:shadow-sleek transition-all duration-500 shadow-sm"
              >
                <div className="w-full md:w-2/5 relative overflow-hidden">
                  <img src={w.image} alt={w.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-100">Limited Spots</div>
                </div>
                <div className="w-full md:w-3/5 p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                       <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">{w.date}</span>
                       <span className="text-xl font-bold text-slate-900">{w.price}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">{w.title}</h3>
                    <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">{w.description}</p>
                    
                    <div className="space-y-3 mb-10">
                       <div className="flex items-center gap-3 text-xs text-slate-500 font-bold">
                          <MapPin size={14} className="text-blue-600" /> {w.location}
                       </div>
                       <div className="flex items-center gap-3 text-xs text-slate-500 font-bold">
                          <Users size={14} className="text-blue-600" /> {w.capacity}
                       </div>
                    </div>
                  </div>
                  
                  <Link to="/book" className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-center flex items-center justify-center gap-2 hover:bg-blue-600 transition-all group-hover:gap-4 shadow-xl shadow-slate-200">
                    Secure Spot <Ticket size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Training for Clubs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Bespoke <br /><span className="text-blue-500 italic font-normal">Team Care.</span></h2>
                    <p className="text-slate-400 mb-10 text-lg font-medium leading-relaxed">
                       We provide custom injury prevention screenings and performance seminars for sports clubs and corporate programs. 
                    </p>
                    <ul className="mb-12 space-y-4">
                       {["On-site Screenings", "Team Biomechanics", "Coach Education"].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                            <CheckCircle className="text-blue-600" size={18} /> {item}
                         </li>
                       ))}
                    </ul>
                    <Link to="/book" className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5">
                       Inquire for your team <ArrowRight size={20} />
                    </Link>
                 </div>
                 <div className="hidden lg:block relative">
                    <img 
                      src="https://images.unsplash.com/photo-1574680096144-d29b1c9599aa?auto=format&fit=crop&q=80&w=800" 
                      alt="Team Workshop" 
                      className="rounded-[2.5rem] shadow-2xl grayscale"
                      referrerPolicy="no-referrer"
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Newsletter / Notifications */}
      <section className="py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">Stay updated</h3>
            <p className="text-slate-500 mb-10 font-medium">Sign up to get notified about new workshop dates and clinical content.</p>
            <form className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 outline-none focus:border-blue-600 transition-colors font-medium shadow-sm"
                  id="newsletter-email"
                />
                <button type="submit" className="bg-slate-900 text-white px-10 rounded-2xl font-bold hover:bg-blue-600 transition-colors shadow-xl shadow-slate-100">Join</button>
            </form>
            <p className="text-[10px] text-slate-400 mt-6 uppercase tracking-[0.2em] font-black">We respect your privacy.</p>
        </div>
      </section>
    </div>
  );
}