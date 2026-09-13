import React from 'react';
import { Bot } from 'lucide-react';
import { LinkButton } from '../components/ui';

export function NotFound() {
  return (
    <div className="flex-grow flex items-center justify-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="w-32 h-32 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 mx-auto mb-8 border border-indigo-500/20">
          <Bot size={64} className="opacity-50" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-300 mb-6">Oops! This Robot Took a Wrong Turn.</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist, has been moved, or is currently under construction in our lab.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LinkButton to="/">
            Back to Home
          </LinkButton>
          <LinkButton to="/programs" variant="secondary">
            Explore Programs
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
