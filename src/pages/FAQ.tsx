import React, { useState } from 'react';
import { PageHero, CTASection } from '../components/ui';
import { faqs } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <>
      <PageHero 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about our programs, curriculum, and admissions."
        badge="Support"
      />

      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category}>
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-4">{category}</h2>
                <div className="space-y-4">
                  {faqs.filter(faq => faq.category === category).map((faq) => (
                    <div 
                      key={faq.id}
                      className={cn(
                        "border rounded-2xl overflow-hidden transition-colors duration-300",
                        openId === faq.id ? "bg-slate-900 border-indigo-500/50" : "bg-slate-950 border-slate-800 hover:border-slate-700"
                      )}
                    >
                      <button
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                      >
                        <span className="font-bold text-lg text-slate-200 pr-8">{faq.question}</span>
                        <ChevronDown 
                          className={cn(
                            "shrink-0 text-slate-400 transition-transform duration-300",
                            openId === faq.id ? "rotate-180 text-indigo-400" : ""
                          )} 
                          size={20} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {openId === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-6 pt-0 text-slate-400 leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-indigo-900/20 border border-indigo-500/30 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
            <p className="text-slate-400 mb-0">
              Please contact RoboSTEM Academy for current availability, program details, and specific inquiries.
            </p>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
