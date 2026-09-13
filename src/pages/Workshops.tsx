import React from 'react';
import { PageHero, SectionHeading, CTASection } from '../components/ui';
import { Trophy, Wrench, Users, FlaskConical, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Workshops() {
  return (
    <>
      <PageHero 
        title="From Classroom Projects to Real-World Challenges." 
        subtitle="We encourage students to push their boundaries through workshops, team challenges, and robotics competitions."
        badge="Activities"
      />

      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Competitions */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-amber-500/30 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-8">
                <Trophy size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Robotics Competitions</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Competition breeds innovation. Students may have opportunities to participate in internal and external robotics competitions, testing their designs against real-world constraints and other creative minds.
              </p>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <p className="text-sm text-slate-500 text-center italic">
                  Upcoming competition details will be announced by RoboSTEM Academy.
                </p>
              </div>
            </div>

            {/* Workshops */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-indigo-500/10 transition-colors"></div>
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-8">
                <Wrench size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Specialized Workshops</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Deep dive into specific technologies through intensive, short-term workshops. These sessions often focus on new platforms, advanced techniques, or seasonal themes outside the regular curriculum.
              </p>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <p className="text-sm text-slate-500 text-center italic">
                  Please contact us for the current workshop schedule.
                </p>
              </div>
            </div>
          </div>

          <SectionHeading 
            title="Learning Through Challenges" 
            subtitle="How we structure our problem-solving events."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FlaskConical, title: 'The Challenge', desc: 'Students are presented with a specific problem and constraints.' },
              { icon: Users, title: 'Team Strategy', desc: 'Teams brainstorm, allocate roles, and design a solution.' },
              { icon: Wrench, title: 'Rapid Prototyping', desc: 'Building and coding the initial design under time pressure.' },
              { icon: Trophy, title: 'The Arena', desc: 'Testing the prototype in the challenge environment.' },
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-indigo-400 mb-4">
                  <step.icon size={20} />
                </div>
                <h4 className="text-white font-bold mb-2">Step {idx + 1}: {step.title}</h4>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTASection 
        title="Want to Join the Next Challenge?"
        subtitle="Contact us to learn about upcoming workshops and events."
      />
    </>
  );
}
