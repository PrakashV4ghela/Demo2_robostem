import React, { useState } from 'react';
import { PageHero, CTASection } from '../components/ui';
import { galleryCategories } from '../data';
import { Image as ImageIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Generate some placeholder images based on categories
  const placeholderImages = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    category: galleryCategories[(i % (galleryCategories.length - 1)) + 1],
    title: `Student Activity ${i + 1}`
  }));

  const filteredImages = activeCategory === 'All' 
    ? placeholderImages 
    : placeholderImages.filter(img => img.category === activeCategory);

  return (
    <>
      <PageHero 
        title="Our Gallery" 
        subtitle="A glimpse into the hands-on learning, projects, and activities at RoboSTEM Academy."
        badge="Inside The Academy"
      />

      <section className="py-20 relative min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={img.id}
                  onClick={() => setSelectedImage(img.id)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 aspect-[4/3]"
                >
                  {/* Placeholder Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-slate-600 group-hover:scale-105 transition-transform duration-500">
                    <ImageIcon size={48} className="mb-4 opacity-30" />
                    <p className="text-sm font-medium">Image Placeholder</p>
                    <p className="text-xs mt-2 opacity-50">{img.category}</p>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-bold px-2 py-1 bg-indigo-500 text-white rounded mb-2 inline-block">
                      {img.category}
                    </span>
                    <h3 className="text-white font-bold text-lg">{img.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              <p>No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-slate-800 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageIcon size={64} className="text-slate-700 mb-6" />
              <p className="text-xl text-slate-500 font-medium">Full Size Image Placeholder</p>
              <p className="text-slate-600 mt-2">ID: {selectedImage}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
}
