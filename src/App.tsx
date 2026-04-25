import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  ShieldCheck, 
  CheckCircle, 
  ClipboardSignature,
  PiggyBank,
  UserCheck,
  Star,
  ChevronDown,
  ChevronUp,
  XCircle,
  FileCheck,
  Percent
} from 'lucide-react';

export default function App() {
  const [isCookieBannerVisible, setCookieBannerVisible] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (activeModal || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeModal, mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveModal(null);
    const el = document.getElementById(id);
    if (el) {
      // Offset for sticky header
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openAppModal = (modalName: string) => {
    setMobileMenuOpen(false);
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Is this a free service?",
      a: "Yes, our comparison service is 100% free to use. There are no hidden fees or charges for connecting you with insurance providers or getting quotes."
    },
    {
      q: "Who will contact me?",
      a: "Depending on your selection, you'll hear directly from a licensed insurance agent or a partner carrier who can provide specialized quotes for your specific needs."
    },
    {
      q: "What information do I need to get started?",
      a: "To get the most accurate quotes, having basic details like your ZIP code, age, and coverage preferences will help. For auto insurance, knowing your vehicle details is beneficial."
    },
    {
      q: "How fast will I hear back?",
      a: "In many cases, you can connect with an agent immediately by calling the phone number on this site. If you use the form, an agent will typically contact you within a few minutes during business hours."
    },
    {
      q: "Will checking my rates affect my credit score?",
      a: "Checking your rates typically involves a soft pull on your credit by the carriers, which does not impact your credit score. Rest assured, comparing options is penalty-free."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      quote: "I was skeptical at first, but checking my auto insurance options here ended up saving me over $400 a year. Process was quick and straightforward.",
      rating: 5
    },
    {
      name: "David H.",
      quote: "Finding good health insurance is usually a nightmare. An agent walked me through my options perfectly. So glad I called.",
      rating: 5
    },
    {
      name: "Elena R.",
      quote: "Excellent experience. I filled out the form and had competitive life insurance quotes presented to me very clearly. Highly recommended.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50 flex flex-col relative pb-16 lg:pb-0">
      
      {/* Cookie Banner */}
      {isCookieBannerVisible && (
        <div className="bg-gray-900 text-white text-sm py-3 px-4 flex flex-col sm:flex-row justify-center items-center gap-4 relative z-50">
          <p className="text-center font-medium text-gray-200">
            We use cookies to improve your experience and enable personalized services. By using our site, you agree to our use of cookies according to our Privacy Policy.
          </p>
          <button 
            onClick={() => setCookieBannerVisible(false)}
            className="bg-transparent border border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white text-xs font-bold py-1.5 px-4 rounded transition-colors whitespace-nowrap"
          >
            Got it
          </button>
        </div>
      )}

      {/* Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div 
            className="text-2xl font-black text-[#1a3c6e] cursor-pointer flex items-center gap-2"
            onClick={() => scrollToSection('home')}
          >
            <ShieldCheck size={28} className="text-[#f97316]" />
            vctors
          </div>
          
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
            <button onClick={() => scrollToSection('home')} className="hover:text-[#1a3c6e] transition-colors">Home</button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-[#1a3c6e] transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-[#1a3c6e] transition-colors">FAQ</button>
            <button onClick={() => openAppModal('Privacy Policy')} className="hover:text-[#1a3c6e] transition-colors">Privacy Policy</button>
            <button onClick={() => openAppModal('Contact Us')} className="hover:text-[#1a3c6e] transition-colors">Contact</button>
          </nav>

          <a href="tel:+19147755291" className="hidden md:flex items-center gap-2 bg-[#1a3c6e] hover:bg-[#122b51] text-white px-5 py-2.5 rounded-md font-bold transition-colors">
            <Phone size={18} />
            +1 914 775 5291
          </a>

          <button 
            className="md:hidden text-gray-800 p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-black text-[#1a3c6e] flex items-center gap-2">
              <ShieldCheck size={28} className="text-[#f97316]" />
              vctors
            </div>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close Menu">
              <X size={32} className="text-gray-800" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-xl font-semibold text-gray-800">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 border-b">Home</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-left py-2 border-b">How It Works</button>
            <button onClick={() => scrollToSection('faq')} className="text-left py-2 border-b">FAQ</button>
            <button onClick={() => openAppModal('Privacy Policy')} className="text-left py-2 border-b">Privacy Policy</button>
            <button onClick={() => openAppModal('Contact Us')} className="text-left py-2 border-b">Contact</button>
          </nav>
          <div className="mt-auto pb-8">
            <a href="tel:+19147755291" className="flex items-center justify-center gap-3 w-full bg-[#f97316] text-white py-4 rounded-lg font-bold text-xl">
              <Phone size={24} />
              Call +1 914 775 5291
            </a>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="bg-[#1a3c6e] text-white py-12 lg:py-20 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-[-50%] left-[-10%] w-[150%] h-[150%] bg-[#f97316] rounded-full blur-[120px] mix-blend-overlay"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            <div className="lg:w-1/2 flex flex-col text-center lg:text-left pt-6 lg:pt-0">
              <span className="inline-block bg-blue-900/50 text-[#f97316] font-bold text-sm tracking-wider uppercase px-3 py-1 rounded-full mb-6 w-fit self-center lg:self-start">
                Top Rated Auto, Health, Life & Home
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-6">
                Compare Insurance Rates & Save — Speak to a Specialist Today
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0">
                Are you overpaying for insurance? Connect with licensed agents to compare quotes from top carriers in minutes. It's 100% free with zero obligation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <a href="tel:+19147755291" className="flex items-center justify-center gap-3 bg-[#f97316] hover:bg-orange-600 text-white text-xl font-bold py-4 px-8 rounded-lg shadow-xl transition-all transform hover:-translate-y-0.5">
                  <Phone size={26} />
                  +1 914 775 5291
                </a>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-semibold text-blue-200">
                <span className="flex items-center gap-2"><CheckCircle size={18} className="text-[#f97316]"/> Free Service</span>
                <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-[#f97316]"/> Secure & Confidential</span>
                <span className="flex items-center gap-2"><PiggyBank size={18} className="text-[#f97316]"/> No Obligation</span>
              </div>
            </div>

            <div className="lg:w-1/2 w-full max-w-md lg:max-w-none mx-auto lg:ml-auto lg:flex lg:justify-end py-4">
              <div id="get-quote" className="bg-white rounded-xl shadow-2xl p-6 lg:p-8 w-full max-w-md text-gray-800">
                <h3 className="text-2xl font-extrabold text-[#1a3c6e] mb-2 text-center">Get Your Free Quote</h3>
                <p className="text-sm text-gray-500 text-center mb-6">Find out how much you could save today.</p>
                
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Form submitted successfully! Note: this is a static demo."); }}>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="name">Full Name</label>
                    <input type="text" id="name" required className="w-full text-base border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="zip">ZIP Code</label>
                      <input type="text" id="zip" required pattern="[0-9]{5}" maxLength={5} className="w-full text-base border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all" placeholder="12345" />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" required className="w-full text-base border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none transition-all" placeholder="+1 914 775 5291" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="type">Insurance Type</label>
                    <select id="type" required className="w-full text-base border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none bg-white transition-all">
                      <option value="">Select an option...</option>
                      <option value="auto">Auto Insurance</option>
                      <option value="health">Health Insurance</option>
                      <option value="life">Life Insurance</option>
                      <option value="home">Home Insurance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full mt-2 bg-[#f97316] hover:bg-orange-600 active:bg-orange-700 text-white font-black text-lg py-4 rounded-md shadow-lg transition-all flex justify-center items-center gap-2">
                    Get My Free Quote
                  </button>
                  <p className="text-[10px] text-gray-500 leading-tight mt-4 text-center">
                    By submitting, you consent to be contacted by licensed insurance agents at the number provided, including via automated dialing systems. This is not required to purchase. Message & data rates may apply.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </section>

        {/* Affiliate Disclosure (Home page visible) */}
        <div className="bg-blue-50 py-3 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600 font-medium">
            <span className="font-bold text-[#1a3c6e]">Affiliate Disclosure:</span> This site contains affiliate links. We may receive compensation when you click on links or submit your information to insurance providers. This does not affect the price you pay.
          </div>
        </div>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-[#1a3c6e] sm:text-4xl text-balance">How It Works</h2>
              <p className="mt-4 text-xl text-gray-600 font-medium max-w-2xl mx-auto">Three simple steps to finding the coverage you need.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-[2px] bg-blue-100 z-0"></div>
              
              <div className="flex flex-col items-center text-center relative z-10 group">
                <div className="w-20 h-20 bg-white border-4 border-blue-100 text-[#1a3c6e] rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-[#f97316] group-hover:text-[#f97316] transition-all bg-white">
                  <ClipboardSignature size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">1. Form or Call</h3>
                <p className="text-gray-600 leading-relaxed px-4">Begin by calling our specialist hotline or filling out our secure, short lead form with basic details.</p>
              </div>

              <div className="flex flex-col items-center text-center relative z-10 group">
                <div className="w-20 h-20 bg-white border-4 border-blue-100 text-[#1a3c6e] rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-[#f97316] group-hover:text-[#f97316] transition-all bg-white">
                  <FileCheck size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">2. Compare Quotes</h3>
                <p className="text-gray-600 leading-relaxed px-4">Licensed agents review your info and pull competitive quotes from top carriers matching your profile.</p>
              </div>

              <div className="flex flex-col items-center text-center relative z-10 group">
                <div className="w-20 h-20 bg-white border-4 border-blue-100 text-[#1a3c6e] rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-[#f97316] group-hover:text-[#f97316] transition-all bg-white">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">3. Pick & Save</h3>
                <p className="text-gray-600 leading-relaxed px-4">Pick your ideal rate and secure your policy. Enjoy peace of mind knowing you made a smart choice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Use Us / Benefits */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-[#1a3c6e] sm:text-4xl">Why Use vctors?</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-orange-100 text-[#f97316] rounded-lg flex items-center justify-center mb-6">
                  <Percent size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">Save Up to 40%</h4>
                <p className="text-gray-600">Comparing multiple quotes is the easiest way to keep more money in your pocket each month.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 text-[#1a3c6e] rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">Top Carriers</h4>
                <p className="text-gray-600">We connect you with highly-rated, national and regional insurance providers you can trust.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-orange-100 text-[#f97316] rounded-lg flex items-center justify-center mb-6">
                  <UserCheck size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">Licensed Agents</h4>
                <p className="text-gray-600">Speak confidently with licensed professionals who understand regulations and coverage limits.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 text-[#1a3c6e] rounded-lg flex items-center justify-center mb-6">
                  <PiggyBank size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">100% Free Service</h4>
                <p className="text-gray-600">Our matching and quote comparison service costs you nothing. It is entirely free to use.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-[#1a3c6e] sm:text-4xl">Real Stories. Real Savings.</h2>
              <p className="mt-4 text-xl text-gray-600 font-medium">Join thousands who stopped overpaying.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-gray-50 p-8 rounded-xl shadow-inner border border-gray-100">
                  <div className="flex text-[#f97316] mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">"{t.quote}"</p>
                  <p className="font-bold text-[#1a3c6e]">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-[#1a3c6e] sm:text-4xl">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white border text-left border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <button 
                    className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-bold text-gray-800 text-lg text-left">{faq.q}</span>
                    {openFaq === index ? 
                      <ChevronUp className="text-[#f97316] flex-shrink-0" /> : 
                      <ChevronDown className="text-gray-400 flex-shrink-0" />
                    }
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Banner Area placed strictly before Footer */}
        <div className="bg-[#1a3c6e] text-center py-16 px-4">
          <h2 className="text-3xl font-extrabold text-white mb-6">Ready to see your options?</h2>
          <a href="tel:+19147755291" className="inline-flex items-center justify-center gap-3 bg-[#f97316] hover:bg-orange-600 text-white text-2xl font-bold py-5 px-10 rounded-lg shadow-xl transition-all transform hover:-translate-y-1">
            <Phone size={28} />
            Call Now: +1 914 775 5291
          </a>
          <p className="mt-4 text-blue-200 font-medium text-sm">Free service, no obligation.</p>
        </div>
      </main>

      {/* Sticky Mobile Click-to-Call (Only visible below lg screens) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40">
        <a href="tel:+19147755291" className="w-full flex items-center justify-center gap-2 bg-[#f97316] active:bg-orange-600 text-white font-bold text-lg py-3 rounded shadow">
          <Phone size={20} />
          Call +1 914 775 5291 For Quotes
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 text-sm pb-24 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div className="text-2xl font-black text-white flex items-center gap-2">
              <ShieldCheck size={28} className="text-[#f97316]" />
              vctors
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 font-semibold text-gray-400">
              <button onClick={() => openAppModal('Privacy Policy')} className="hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={() => openAppModal('Terms of Use')} className="hover:text-white transition-colors">Terms of Use</button>
              <button onClick={() => openAppModal('Affiliate Disclosure Page')} className="hover:text-white transition-colors">Affiliate Disclosure</button>
              <button onClick={() => openAppModal('Contact Us')} className="hover:text-white transition-colors">Contact Us</button>
              <button onClick={() => openAppModal('Privacy Policy')} className="hover:text-white transition-colors">Do Not Sell My Personal Information</button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 space-y-6 text-xs text-gray-400 leading-relaxed text-justify sm:text-left">
            <p>
              <strong className="text-gray-300">Affiliate Disclosure:</strong> This site contains affiliate links. We may receive compensation when you click on links or submit your information to insurance providers. This compensation may impact how and where products appear on this site. This does not affect the price you pay.
            </p>
            <p>
              <strong className="text-gray-300">FTC Disclosure:</strong> This website is not affiliated with any government agency. Insurance rates vary heavily by state, driving record, claim history, and individual circumstances. Not available in all states. The information provided is for general matching and educational purposes.
            </p>
            <p>
              <strong className="text-gray-300">TCPA Notice:</strong> By using this site and submitting forms, you explicitly agree to receive calls, pre-recorded messages, and texts from licensed insurance agents and carrier partners at the number provided.
            </p>
          </div>

          <div className="mt-10 text-center text-gray-500 text-xs font-semibold">
            &copy; 2026 vctors. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Modal Overlay / Inline Legal Pages */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-full rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
              <h2 className="text-2xl font-extrabold text-[#1a3c6e]">{activeModal}</h2>
              <button 
                onClick={closeModal} 
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                aria-label="Close modal"
              >
                <XCircle size={28} />
              </button>
            </div>
            
            <div className="p-6 sm:p-8 overflow-y-auto text-gray-600 leading-relaxed space-y-4">
              {activeModal === 'Privacy Policy' && (
                <>
                  <p>Last Updated: October 2026</p>
                  <h3 className="text-lg font-bold text-gray-800 mt-4">1. Data Collection</h3>
                  <p>We collect information you provide directly to us (such as name, phone number, and ZIP code) as well as data collected automatically (such as cookies, IP address, and browser type).</p>
                  <h3 className="text-lg font-bold text-gray-800 mt-4">2. Use of Information</h3>
                  <p>Your information is primarily used to match you with suitable insurance carriers and agents. We do not use your information for unrelated marketing purposes without consent.</p>
                  <h3 className="text-lg font-bold text-gray-800 mt-4">3. Third-Party Sharing</h3>
                  <p>By submitting your lead form, you consent to us sharing your details with our network of licensed agents, aggregators, and insurance companies to fulfill your request for quotes.</p>
                  <h3 className="text-lg font-bold text-gray-800 mt-4">4. CCPA / GDPR Rights (Do Not Sell My Info)</h3>
                  <p>California and EU residents have specific rights regarding personal data. You may request access, deletion, or opt-out of the "sale" of your personal information by contacting us directly.</p>
                </>
              )}

              {activeModal === 'Terms of Use' && (
                <>
                  <p>Last Updated: October 2026</p>
                  <h3 className="text-lg font-bold text-gray-800 mt-4">1. Acceptance of Terms</h3>
                  <p>By accessing our website, you agree to be bound by these Terms of Use and all applicable laws and regulations.</p>
                  <h3 className="text-lg font-bold text-gray-800 mt-4">2. No Promises or Assurances</h3>
                  <p>We provide a matching service. We do not underwrite insurance or promise any specific rates, approvals, or terms. All quotes are estimates provided by third parties.</p>
                  <h3 className="text-lg font-bold text-gray-800 mt-4">3. Limitation of Liability</h3>
                  <p>vctors shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the site or our matching services.</p>
                  <h3 className="text-lg font-bold text-gray-800 mt-4">4. Governing Law</h3>
                  <p>These terms are governed by the laws of the United States. Any disputes must be resolved in a court of competent jurisdiction located in the US.</p>
                </>
              )}

              {activeModal === 'Affiliate Disclosure Page' && (
                <>
                  <h3 className="text-lg font-bold text-gray-800 mt-4">Affiliate & Compensation Relationships</h3>
                  <p>vctors is an independent, advertising-supported comparison service. The offers that appear on this site are from third-party advertisers from which we receive compensation.</p>
                  <p>This compensation may impact how and where products appear on this site (including, for example, the order in which they appear). We do not include all products or all offers available in the marketplace.</p>
                  <p>Any recommendation or suggestion made is fully independent, though our matching algorithm is designed to fulfill leads to our paying partners.</p>
                </>
              )}

              {activeModal === 'Contact Us' && (
                <div className="text-center py-8">
                  <ShieldCheck size={64} className="mx-auto text-blue-100 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">We are here to help.</h3>
                  <p className="mb-8 text-lg">For general inquiries, data requests, or compliance concerns, reach out to us:</p>
                  <div className="space-y-4 text-xl">
                    <p className="flex items-center justify-center gap-3">
                      <strong className="text-gray-800">Email:</strong> support@vctors-example.com
                    </p>
                    <p className="flex items-center justify-center gap-3">
                      <strong className="text-gray-800">Phone:</strong> +1 914 775 5291
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button 
                onClick={closeModal}
                className="bg-[#1a3c6e] hover:bg-[#122b51] text-white px-6 py-2 rounded font-bold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
