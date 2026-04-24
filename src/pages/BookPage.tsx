import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Send, Phone, Mail, ChevronRight, User, Hash, Info } from 'lucide-react';
import { useState } from 'react';

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const services = [
    "Initial Assessment (£70)",
    "Follow-up Session (£60)",
    "Sports Performance Screen (£120)",
    "Online Consultation (£50)",
    "Post-Op Rehab (£85)"
  ];

  const times = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  return (
    <div className="bg-slate-50 min-h-screen py-32 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Left: Info Card */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 blur-[60px] rounded-full" />
              <h1 className="text-3xl font-bold mb-8 tracking-tighter relative z-10 leading-tight">Start Your <span className="text-blue-500 italic font-normal">Recovery.</span></h1>
              <p className="text-slate-400 mb-12 text-sm font-medium leading-relaxed relative z-10">
                Choose your service and preferred time. Our team will review your request and confirm via email within 2 hours.
              </p>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors"><Phone size={18} /></div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Call Us</div>
                    <div className="font-bold text-sm">+44 123 456 789</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors"><Mail size={18} /></div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Us</div>
                    <div className="font-bold text-sm">booking@adamsfitness.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors"><MapPin size={18} /></div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Clinic Center</div>
                    <div className="font-bold text-sm text-wrap">123 Wellness Way, London</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sleek">
              <h4 className="font-bold mb-6 flex items-center gap-3 text-slate-900 tracking-tight">
                <Info size={18} className="text-blue-600" /> Clinic Policy
              </h4>
              <ul className="space-y-4 text-xs text-slate-500 font-medium leading-relaxed">
                <li className="flex gap-2"><span>•</span> <span>All initial sessions include a full biomechanical screen.</span></li>
                <li className="flex gap-2"><span>•</span> <span>Please bring comfortable clothing for movement testing.</span></li>
                <li className="flex gap-2"><span>•</span> <span>24-hour cancellation policy applies to all bookings.</span></li>
                <li className="flex gap-2"><span>•</span> <span>We accept all major insurance providers.</span></li>
              </ul>
            </div>
          </div>

          {/* Right: Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-[3rem] shadow-sleek border border-slate-100 overflow-hidden"
          >
            {/* Form Progress */}
            <div className="flex border-b border-slate-50">
               {[1, 2, 3].map(i => (
                 <div 
                   key={i} 
                   className={`flex-1 py-8 text-center text-[10px] font-black uppercase tracking-[0.2em] border-r border-slate-50 last:border-0 transition-all ${step >= i ? 'text-blue-600 bg-slate-50/50' : 'text-slate-300'}`}
                 >
                   Step {i}
                 </div>
               ))}
            </div>

            <div className="p-10 md:p-20">
              {step === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Select Service</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {services.map(s => (
                         <button 
                           key={s} 
                           onClick={() => setFormData({...formData, service: s})}
                           className={`p-6 rounded-2xl border text-left text-sm font-bold transition-all ${formData.service === s ? 'border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-100' : 'border-slate-100 hover:border-blue-200 bg-slate-50/50 text-slate-700'}`}
                         >
                            {s}
                         </button>
                       ))}
                    </div>
                  </div>
                  <div className="flex justify-end pt-6">
                    <button 
                      disabled={!formData.service}
                      onClick={handleNext} 
                      className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold hover:bg-blue-600 flex items-center gap-3 disabled:opacity-10 transition-all shadow-xl shadow-slate-200"
                    >
                       Continue <ChevronRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Select Date</label>
                      <input 
                        type="date" 
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 outline-none focus:border-blue-600 transition-colors font-bold text-slate-900"
                        id="booking-date"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Select Time</label>
                      <div className="grid grid-cols-3 gap-3">
                        {times.map(t => (
                          <button 
                            key={t}
                            onClick={() => setFormData({...formData, time: t})}
                            className={`py-4 rounded-xl border text-center text-xs font-black tracking-tighter transition-all ${formData.time === t ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-100' : 'bg-slate-50 border-slate-100 hover:border-blue-100 text-slate-600'}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-10 border-t border-slate-50">
                    <button onClick={handleBack} className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">Back</button>
                    <button 
                      disabled={!formData.date || !formData.time}
                      onClick={handleNext} 
                      className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold flex items-center gap-3 disabled:opacity-10 transition-all shadow-xl shadow-slate-200"
                    >
                      Continue <ChevronRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-14 pr-6 py-5 outline-none focus:border-blue-600 transition-colors font-medium text-slate-900 shadow-sm"
                        id="user-name"
                      />
                    </div>
                    <div className="relative">
                      <Mail size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-14 pr-6 py-5 outline-none focus:border-blue-600 transition-colors font-medium text-slate-900 shadow-sm"
                        id="user-email"
                      />
                    </div>
                    <div className="relative md:col-span-2">
                       <input 
                        type="tel" 
                        placeholder="Phone Number (optional)" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 outline-none focus:border-blue-600 transition-colors font-medium text-slate-900 shadow-sm"
                        id="user-phone"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <textarea 
                        rows={4}
                        placeholder="Anything we should know? (History of injury, goals, etc.)" 
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 outline-none focus:border-blue-600 transition-colors font-medium text-slate-900 shadow-sm"
                        id="booking-notes"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-10 border-t border-slate-50">
                    <button onClick={handleBack} className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">Back</button>
                    <button 
                      disabled={!formData.name || !formData.email}
                      className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200"
                    >
                      Request Appointment <Send size={18} />
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}