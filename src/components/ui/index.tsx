import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { ArrowRight, ChevronRight, Bot, Code, BrainCircuit, Cpu, Blocks, Microchip, Microscope, Lightbulb } from 'lucide-react';
import { Program } from '../../types';

// Icons Map
export const Icons = {
  Bot, Code, BrainCircuit, Cpu, Blocks, Microchip, Microscope, Lightbulb
};

// --- Buttons ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]',
      secondary: 'bg-slate-800 text-white hover:bg-slate-700',
      outline: 'border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400',
      ghost: 'text-slate-300 hover:text-white hover:bg-slate-800/50',
    };
    
    const sizes = {
      sm: 'text-sm px-4 py-2',
      md: 'text-base px-6 py-3',
      lg: 'text-lg px-8 py-4',
    };
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export const LinkButton = ({ 
  to, 
  variant = 'primary', 
  size = 'md', 
  className, 
  children,
  icon = false
}: { 
  to: string; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; 
  size?: 'sm' | 'md' | 'lg'; 
  className?: string; 
  children: React.ReactNode;
  icon?: boolean;
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950';
  
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 hover:border-slate-600',
    outline: 'border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400 hover:text-indigo-300',
    ghost: 'text-slate-300 hover:text-white hover:bg-slate-800/50',
  };
  
  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  return (
    <Link to={to} className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </Link>
  );
};

// --- Page Hero ---

export const PageHero = ({ 
  title, 
  subtitle, 
  badge 
}: { 
  title: string; 
  subtitle?: string; 
  badge?: string 
}) => {
  return (
    <div className="relative py-20 lg:py-32 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full rounded-t-none pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950 pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {badge && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            {badge}
          </motion.div>
        )}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

// --- Section Heading ---

export const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'left',
  className
}: { 
  title: string; 
  subtitle?: string; 
  align?: 'left' | 'center';
  className?: string;
}) => {
  return (
    <div className={cn("mb-12", align === 'center' ? 'text-center' : 'text-left', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

// --- Program Card ---

export const ProgramCard = ({ program, key }: { program: Program; key?: React.Key }) => {
  const IconComponent = Icons[program.icon as keyof typeof Icons] || Icons.Bot;
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="p-8 relative z-10 flex flex-col h-full">
        <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
          <IconComponent size={28} />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
          {program.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {program.shortDescription}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800">
          <span className="text-xs font-medium px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md">
            {program.ageGroup}
          </span>
          <Link to={`/programs`} className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1 group/link">
            Learn More
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// --- CTA Section ---

export const CTASection = ({
  title = "Ready to Turn Curiosity Into Creation?",
  subtitle = "Give your child the opportunity to explore robotics, coding, AI and STEM through hands-on learning.",
  primaryText = "Book a Trial Class",
  secondaryText = "Contact RoboSTEM"
}: {
  title?: string;
  subtitle?: string;
  primaryText?: string;
  secondaryText?: string;
}) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-950/40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-indigo-600/30 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-indigo-200/80 mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LinkButton to="/contact" size="lg" className="w-full sm:w-auto">
              {primaryText}
            </LinkButton>
            <LinkButton to="/contact" variant="outline" size="lg" className="w-full sm:w-auto bg-slate-950/50">
              {secondaryText}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};
