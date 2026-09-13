import React from 'react';
import { PageHero, SectionHeading, CTASection } from '../components/ui';
import { ageGroups } from '../data';
import { ArrowRight } from 'lucide-react';

export function AgeBasedLearning() {
  return (
    <>
      <PageHero 
        title="Learning That Grows With Them." 
        subtitle="Our curriculum is carefully structured to match developmental stages, ensuring students are challenged appropriately."
        badge="Age-Based Learning"
      />

      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeading 
            title="A Journey of Continuous Growth" 
            subtitle="As students grow, our programs evolve from playful exploration to advanced engineering and leadership."
            align="center"
          />

          <div className="mt-20 relative">
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-[50px] top-0 bottom-0 w-1 bg-slate-800 rounded-full"></div>

            <div className="flex flex-col gap-12 md:gap-16">
              {ageGroups.map((age, index) => (
                <div key={age.id} className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-[31px] top-10 w-10 h-10 rounded-full bg-slate-950 border-4 border-slate-800 items-center justify-center z-10 group-hover:border-indigo-500 transition-colors">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  {/* Age Indicator */}
                  <div className="md:w-32 shrink-0 md:pt-8 relative z-20">
                    <div className="inline-flex md:flex items-center justify-center px-4 py-2 bg-indigo-500 text-white font-bold rounded-lg shadow-lg">
                      {age.range}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-grow bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 hover:border-indigo-500/30 transition-colors">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{age.title}</h2>
                    <p className="text-indigo-400 font-medium mb-6">{age.focus}</p>
                    <p className="text-slate-300 leading-relaxed mb-8">
                      {age.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Core Skills Focus</h4>
                      <div className="flex flex-wrap gap-3">
                        {age.skills.map((skill, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-md text-sm text-slate-300 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-purple-500"></span>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 p-6 bg-slate-900 border border-slate-800 rounded-2xl flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">i</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              <strong className="text-slate-300">Note:</strong> Age ranges are general guidelines. The exact curriculum can be customized according to the student's individual level, prior experience, and learning pace.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
