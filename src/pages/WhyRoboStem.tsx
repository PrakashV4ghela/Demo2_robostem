import React from 'react';
import { PageHero, SectionHeading, CTASection } from '../components/ui';
import { Brain, HeartHandshake, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';

export function WhyRoboStem() {
  return (
    <>
      <PageHero 
        title="Skills That Go Beyond the Classroom." 
        subtitle="We prepare children not just for exams, but for life. Discover why parents trust RoboSTEM Academy."
        badge="Why Choose Us"
      />

      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <SectionHeading title="Why Hands-On Learning Matters" />
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  In a rapidly changing world, the ability to memorize facts is becoming less important than the ability to solve complex, novel problems. Traditional education often struggles to provide the practical, iterative environments where these skills are forged.
                </p>
                <p>
                  At RoboSTEM Academy, we bridge this gap. By combining physical building (Robotics, LEGO, Electronics) with logical structures (Coding, AI), children experience the entire cycle of creation. They learn that a failed test isn't a bad grade—it's essential data needed to improve their design.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Logical Thinking', icon: Brain, desc: 'Breaking down complex problems into manageable steps.' },
                { title: 'Creative Confidence', icon: Lightbulb, desc: 'Trusting their ability to imagine and build new things.' },
                { title: 'Collaboration', icon: HeartHandshake, desc: 'Working effectively in teams to achieve a common goal.' },
                { title: 'Resilience', icon: TrendingUp, desc: 'Learning to iterate and improve after encountering setbacks.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-4">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Building Confidence Through Creation</h2>
              <p className="text-lg text-indigo-200/80 mb-10 leading-relaxed">
                When a child writes a line of code and sees a physical robot move across the room, something clicks. It's a powerful moment of realization that they can control and create technology, not just consume it on a screen. This builds a profound, lasting confidence.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Safe environment to test ideas and make mistakes.',
                  'Curriculum that scales with their growing abilities.',
                  'Exposure to tools used by real-world engineers.',
                  'Focus on innovation rather than just memorization.'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 size={24} className="text-indigo-500 shrink-0" />
                    <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-24 bg-slate-900 border-t border-slate-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Student & Parent Stories</h2>
          <p className="text-slate-400 text-lg mb-12">Hear from the families who are already building the future with us.</p>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl flex flex-col items-center justify-center min-h-[250px] opacity-70">
                <p className="italic text-slate-500 mb-4 text-center">"Testimonials coming soon."</p>
             </div>
             <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl flex flex-col items-center justify-center min-h-[250px] opacity-70">
                <p className="italic text-slate-500 mb-4 text-center">"Testimonials coming soon."</p>
             </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
