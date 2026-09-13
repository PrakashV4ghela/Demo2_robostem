import React from 'react';
import { PageHero, SectionHeading, CTASection } from '../components/ui';
import { projects } from '../data';
import { Layers } from 'lucide-react';

export function Projects() {
  return (
    <>
      <PageHero 
        title="What Will You Build?" 
        subtitle="Explore the types of projects and technologies our students work with."
        badge="Example Projects"
      />

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="mb-12 p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl max-w-4xl mx-auto flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center shrink-0 mt-0.5 text-white">i</div>
            <p className="text-indigo-200 text-sm md:text-base leading-relaxed">
              <strong>Example Learning & Project Areas:</strong> The projects shown below represent the types of builds and technologies explored in our curriculum. Not every student completes every project, as learning paths are customized to age, interest, and skill level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group flex flex-col hover:border-slate-700 transition-colors">
                {/* Image Placeholder */}
                <div className="aspect-video bg-slate-950 flex flex-col items-center justify-center text-slate-600 border-b border-slate-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <Layers size={32} className="mb-2 relative z-10 opacity-50" />
                  <p className="text-sm font-medium relative z-10">Project Image Placeholder</p>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-md uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider ${
                      project.difficulty === 'Beginner' ? 'bg-emerald-500/10 text-emerald-400' :
                      project.difficulty === 'Intermediate' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-rose-500/10 text-rose-400'
                    }`}>
                      {project.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-indigo-300 font-mono mb-6">{project.technology}</p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-800">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Skills Focus</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 bg-slate-950 border border-slate-800 text-slate-400 rounded">
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
      </section>

      <CTASection />
    </>
  );
}
