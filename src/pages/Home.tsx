import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Cpu, Microscope, Rocket, CheckCircle2, Code, BrainCircuit } from 'lucide-react';
import { Button, LinkButton, SectionHeading, ProgramCard, CTASection } from '../components/ui';
import { programs, ageGroups, projects } from '../data';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              For Young Innovators • Age 6+ • Rajkot, Gujarat
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Where Young Minds <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">Build the Future.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Learn Robotics, Coding, AI & STEM through hands-on experiences that turn curiosity into innovation.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <LinkButton to="/programs" size="lg" className="w-full sm:w-auto">
                Explore Programs
              </LinkButton>
              <LinkButton to="/contact" variant="outline" size="lg" className="w-full sm:w-auto bg-slate-950/50">
                Book a Trial Class
              </LinkButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-slate-900 border-y border-slate-800 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Learning Beyond the Classroom."
                subtitle="RoboSTEM Academy is a future-ready learning center where children don't just consume technology—they create it."
              />
              <div className="space-y-6 mt-8">
                {[
                  { icon: Settings, text: 'Hands-on learning with real physical projects' },
                  { icon: Code, text: 'Practical coding, from visual blocks to Python & C++' },
                  { icon: BrainCircuit, text: 'Creative problem solving and critical thinking' },
                  { icon: Rocket, text: 'Fostering innovation and teamwork in a fun environment' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 mt-1">
                      <item.icon size={20} className="text-indigo-400" />
                    </div>
                    <p className="text-slate-300 text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <LinkButton to="/about" variant="secondary" icon>
                  Discover RoboSTEM
                </LinkButton>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 mix-blend-overlay"></div>
                {/* Placeholder for an image of kids building robots */}
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 p-8 text-center bg-slate-900">
                   <Cpu size={64} className="mb-4 text-indigo-500/50" />
                   <p className="font-medium text-lg text-slate-400">Real Academy Image Placeholder</p>
                   <p className="text-sm mt-2">Kids collaborating on a robotics project</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-600/30 blur-2xl rounded-full pointer-events-none"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-600/30 blur-2xl rounded-full pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Explore. Build. Code. Create."
            subtitle="Discover our core learning tracks designed to prepare young minds for the technology-driven future."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {programs.slice(0, 8).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          <div className="text-center mt-12">
            <LinkButton to="/programs" variant="outline" size="lg">
              View All Programs
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Hands-On Process Section */}
      <section className="py-24 bg-slate-900 border-y border-slate-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Kids Don't Just Learn. They Build."
            subtitle="Our practical methodology ensures concepts are deeply understood through physical experimentation."
            align="center"
          />
          
          <div className="relative mt-20 max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {[
                { step: '1', title: 'Imagine', desc: 'Brainstorm ideas' },
                { step: '2', title: 'Build', desc: 'Construct physical models' },
                { step: '3', title: 'Code', desc: 'Program the logic' },
                { step: '4', title: 'Test', desc: 'Experiment and verify' },
                { step: '5', title: 'Improve', desc: 'Iterate and create' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center text-xl font-bold text-indigo-400 mb-6 group-hover:scale-110 group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-all shadow-xl">
                    {item.step}
                  </div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Age-Based Learning Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Learning That Grows With Them.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our programs adapt to your child's developmental stage. The exact curriculum can be customized according to the student's level.
              </p>
            </div>
            <LinkButton to="/age-based-learning" variant="secondary" className="shrink-0">
              Explore Age-Based Learning
            </LinkButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((age) => (
              <div key={age.id} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col">
                <div className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 font-bold rounded-md mb-6 w-fit">
                  {age.range}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{age.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{age.focus}</p>
                <Link to="/age-based-learning" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1 mt-auto">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Parents Choose Us */}
      <section className="py-24 bg-slate-900 border-y border-slate-800 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {[
                'Problem Solving', 'Creativity', 'Logical Thinking', 
                'Teamwork', 'Innovation', 'Future-Ready Skills'
              ].map((skill, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 p-6 rounded-xl flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-indigo-500 shrink-0" />
                  <span className="text-slate-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading 
                title="Skills That Go Beyond the Classroom."
                subtitle="We prepare children not just for exams, but for life. The logical frameworks and creative confidence they build here translate to every aspect of their future."
              />
              <LinkButton to="/why-robostem" variant="secondary" icon className="mt-8">
                Why RoboSTEM?
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops & Competitions Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                From Classroom Projects to Real-World Challenges.
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our students regularly participate in robotics competitions, STEM challenges, and specialized workshops that test their skills in practical, time-sensitive environments.
              </p>
              <ul className="space-y-4 mb-10">
                {['Robotics competitions', 'STEM challenges', 'Practical workshops', 'Team innovation activities'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <LinkButton to="/workshops" variant="primary">
                Explore Workshops & Competitions
              </LinkButton>
            </div>
            <div className="lg:w-1/2 w-full aspect-video rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="text-center p-6 z-10 relative">
                   <p className="font-medium text-lg text-slate-400">Workshop Image Placeholder</p>
                   <p className="text-sm mt-2 text-slate-500">Students participating in a team challenge</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Will You Build?"
            subtitle="Explore Example Learning & Project Areas that students tackle during our programs."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 group hover:border-slate-700 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-medium px-2.5 py-1 bg-indigo-500/10 text-indigo-400 rounded-md">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-500 mb-6 font-mono">{project.technology}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.slice(0, 2).map((skill, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-slate-900 border border-slate-800 text-slate-400 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <LinkButton to="/projects" variant="outline">
              View All Project Areas
            </LinkButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
