import React, { useState } from 'react';
import { PageHero, Button } from '../components/ui';
import { MapPin, Send, Loader2 } from 'lucide-react';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset form after a few seconds
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <>
      <PageHero 
        title="Ready to Turn Curiosity Into Creation?" 
        subtitle="Give your child the opportunity to explore robotics, coding, AI and STEM through hands-on learning."
        badge="Contact Us"
      />

      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-12 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Rajkot, Gujarat,<br />
                      India
                    </p>
                    <p className="text-sm text-slate-500 mt-2 italic">Please contact us to arrange a visit or trial class.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 shrink-0">
                    <InstagramIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Social Media</h3>
                    <a 
                      href="https://www.instagram.com/robostemacademy/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-400 transition-colors inline-block mb-1"
                    >
                      Follow us on Instagram
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 shrink-0">
                    <YoutubeIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">YouTube</h3>
                    <a 
                      href="https://www.youtube.com/@RoboSTEMAcademy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-400 transition-colors inline-block mb-1"
                    >
                      Subscribe to our Channel
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Book a Trial Class</h3>
                
                {formState === 'success' ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-2xl text-center flex flex-col items-center justify-center h-[400px]">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-4">
                      <Send size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-slate-400">
                      Thank you for your interest. We will get back to you shortly to schedule your trial class.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="parentName" className="block text-sm font-medium text-slate-300">Parent's Name *</label>
                        <input 
                          type="text" 
                          id="parentName" 
                          required
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="Enter parent's name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="studentName" className="block text-sm font-medium text-slate-300">Student's Name</label>
                        <input 
                          type="text" 
                          id="studentName" 
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="Enter student's name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="studentAge" className="block text-sm font-medium text-slate-300">Student's Age *</label>
                        <input 
                          type="number" 
                          id="studentAge" 
                          min="5"
                          max="20"
                          required
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="E.g., 10"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="programInterest" className="block text-sm font-medium text-slate-300">Program Interest</label>
                        <select 
                          id="programInterest" 
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select a program...</option>
                          <option value="robotics">Robotics</option>
                          <option value="coding">Coding</option>
                          <option value="ai">Artificial Intelligence</option>
                          <option value="electronics">Electronics</option>
                          <option value="lego">LEGO Robotics</option>
                          <option value="arduino">Arduino</option>
                          <option value="not_sure">Not Sure Yet</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contactInfo" className="block text-sm font-medium text-slate-300">Phone or Email *</label>
                      <input 
                        type="text" 
                        id="contactInfo" 
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="How can we reach you?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message (Optional)</label>
                      <textarea 
                        id="message" 
                        rows={4}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                        placeholder="Any specific questions or requirements?"
                      ></textarea>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={formState === 'submitting'}
                    >
                      {formState === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Book Trial Class'
                      )}
                    </Button>
                    <p className="text-xs text-slate-500 text-center mt-4">
                      This is a demo form. Submission connects to a simulated backend for UI demonstration purposes.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
