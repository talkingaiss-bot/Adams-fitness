import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, Instagram, Facebook, ArrowRight, CheckCircle2, ChevronRight, Activity, Users, Video, Calendar, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import OnlineRehab from './pages/OnlineRehab';
import Workshop from './pages/Workshop';
import BookPage from './pages/BookPage';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Online Rehab', path: '/online-rehab' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Book Now', path: '/book' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-xl group-hover:rotate-6 transition-transform shadow-lg shadow-blue-200">
                <Activity className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 uppercase">ADAMS<span className="text-blue-600 italic lowercase font-medium">fitness</span></span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-semibold transition-all relative py-1",
                    location.pathname === link.path 
                      ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600" 
                      : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 hover:shadow-blue-200"
              >
                Book Session
              </Link>
            </div>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600"
              id="mobile-menu-toggle"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 bg-white z-40 border-b border-slate-100 py-8 px-4 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-2xl font-bold",
                    location.pathname === link.path ? "text-blue-600" : "text-slate-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/online-rehab" element={<OnlineRehab />} />
              <Route path="/workshops" element={<Workshop />} />
              <Route path="/book" element={<BookPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="footer-gradient bg-white border-t border-slate-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-lg shadow-md shadow-blue-100">
                  <Activity className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-lg tracking-tight text-slate-900 uppercase">ADAMS<span className="text-blue-600 italic font-medium lowercase">fitness</span></span>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Advanced physiotherapy and human performance coaching. Recover faster and move with confidence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"><Instagram size={18} /></a>
                <a href="#" className="p-2 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"><Facebook size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6 font-black">Practice</h4>
              <ul className="flex flex-col gap-4">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6 font-black">Treatments</h4>
              <ul className="flex flex-col gap-4 text-slate-600 text-sm font-medium">
                <li className="hover:text-blue-600 cursor-pointer">Sports Physio</li>
                <li className="hover:text-blue-600 cursor-pointer">Post-Op Rehab</li>
                <li className="hover:text-blue-600 cursor-pointer">Gait Analysis</li>
                <li className="hover:text-blue-600 cursor-pointer">Manual Therapy</li>
                <li className="hover:text-blue-600 cursor-pointer">Performance Coaching</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6 font-black">Connect</h4>
              <ul className="flex flex-col gap-4 text-slate-600 text-sm font-medium">
                <li className="flex items-center gap-3"><Phone size={16} className="text-blue-600" /> +44 123 456 789</li>
                <li className="flex items-center gap-3"><Mail size={16} className="text-blue-600" /> hello@adams-fitness.com</li>
                <li>42 Health Plaza, Downtown London</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
            <p>© 2024 Adams Fitness. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
