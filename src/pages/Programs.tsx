import React from 'react';
import { PageHero, CTASection } from '../components/ui';
import { programs } from '../data';
import { Icons } from '../components/ui';

export function Programs() {
  return (
    <>
      <PageHero 
        title="Explore. Build. Code. Create." 
        subtitle="Our comprehensive curriculum covers every aspect of modern technology and engineering, designed specifically for young minds."
        badge="Our Programs"
      />

      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col gap-12">
            {programs.map((program, index) => {
              const IconComponent = Icons[program.icon as keyof typeof Icons] || Icons.Bot;
              
              return (
                <div key={program.id} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col md:flex-row group hover:border-slate-700 transition-colors">
                  {/* Visual Side */}
                  <div className="md:w-2/5 relative bg-slate-950 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
                    <div className="relative z-10">
                      <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 mx-auto group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                        <IconComponent size={40} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{program.title}</h2>
                      <div className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-sm font-medium rounded-md mt-4">
                        Ages: {program.ageGroup}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                      {program.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-4">Skills Developed</h4>
                        <ul className="space-y-2">
                          {program.skills.map((skill, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-4">Example Activities</h4>
                        <ul className="space-y-2">
                          {program.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"></span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Start Learning?"
        subtitle="Contact us to discuss which program is the best fit for your child's age and interests."
      />
    </>
  );
}
