import React from 'react';
import { motion } from 'motion/react';
import { PageHero, SectionHeading, CTASection } from '../components/ui';
import { Target, Users, Lightbulb, Zap, Rocket, Puzzle, Settings } from 'lucide-react';

export function About() {
  return (
    <>
      <PageHero 
        title="Learning Beyond the Classroom." 
        subtitle="RoboSTEM Academy is a future-ready learning center focused on STEM education and Robotics for kids."
        badge="About Us"
      />

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading title="Who We Are" />
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  RoboSTEM Academy is a dedicated technology education center located in Rajkot, Gujarat. We specialize in providing comprehensive, hands-on courses in robotics, coding, STEM, AI, electronics, and creative thinking for children and young learners aged 6 to 20.
                </p>
                <p>
                  We believe that traditional education often separates subjects that naturally belong together in the real world. Our programs integrate Science, Technology, Engineering, and Mathematics in a way that is engaging, practical, and highly relevant to the 21st century.
                </p>
                <p>
                  Using industry-standard tools alongside student-friendly platforms like LEGO and Arduino, we help children transition from being passive consumers of technology to active creators and innovators.
                </p>
              </div>
            </div>
            <div className="aspect-square md:aspect-video lg:aspect-square bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-slate-900 to-purple-500/10"></div>
                <div className="z-10 text-center">
                   <p className="font-medium text-lg text-slate-400">Academy Facility Placeholder</p>
                   <p className="text-sm mt-2 text-slate-500">View of our modern learning lab</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 border-y border-slate-800 relative">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Learning Philosophy" 
            subtitle="We don't just teach code or mechanics; we teach a mindset."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Target, title: 'Learning By Doing', desc: 'Theory is important, but practical application is where real understanding happens. Every concept is tied to a physical build or digital project.' },
              { icon: Lightbulb, title: 'Embracing Failure', desc: 'In engineering, a failed test is just data. We teach students to debug, iterate, and see mistakes as stepping stones to the solution.' },
              { icon: Users, title: 'Collaborative Innovation', desc: 'Real-world problems are rarely solved alone. Our classes emphasize teamwork, communication, and collaborative problem-solving.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 p-8 rounded-2xl">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Approach" 
            subtitle="The RoboSTEM Journey for every project."
            align="center"
          />
          
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {[
                { icon: Lightbulb, title: 'Discover', desc: 'Understanding the problem and brainstorming creative solutions.' },
                { icon: Puzzle, title: 'Build', desc: 'Constructing the physical or structural foundation.' },
                { icon: Zap, title: 'Experiment', desc: 'Wiring, coding, and bringing the build to life.' },
                { icon: Target, title: 'Solve', desc: 'Overcoming technical hurdles and debugging issues.' },
                { icon: Settings, title: 'Improve', desc: 'Refining the design for better performance.' },
                { icon: Rocket, title: 'Create', desc: 'Finalizing a working prototype to showcase.' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 bg-slate-900 border border-slate-800 rounded-2xl group hover:border-indigo-500/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-xl">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Parent & Child Experience</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                We designed RoboSTEM Academy to be a space where children feel an overwhelming sense of excitement ("I want to build that!"), while parents feel complete trust and confidence in our professional, structured, and future-focused educational environment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-10">
                <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50">
                  <h3 className="text-indigo-400 font-bold mb-2">For Children</h3>
                  <p className="text-slate-300 text-sm">An exciting, futuristic playground where they can build, experiment, and turn their wildest ideas into working tech.</p>
                </div>
                <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50">
                  <h3 className="text-purple-400 font-bold mb-2">For Parents</h3>
                  <p className="text-slate-300 text-sm">A safe, professional academy focused on developing essential 21st-century skills like logic, teamwork, and innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
