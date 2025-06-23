'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleAccordion: () => void;
  index: number;
}

const AccordionItem = ({ title, content, isOpen, toggleAccordion, index }: AccordionItemProps) => {
  return (
    <div 
      className={`accordion mb-3 rounded-[12px] overflow-hidden border border-gray-100 transition-all duration-300 
        ${isOpen ? 'shadow-md bg-white' : 'bg-[#f9f9f9]'} 
        hover:shadow-[0_2px_10px_rgba(0,0,0,0.04)]`}
    >
      <button
        onClick={toggleAccordion}
        className="w-full text-left py-4 px-5 flex justify-between items-center transition-colors duration-300"
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <div className="w-[26px] h-[26px] rounded-full bg-white flex items-center justify-center text-black font-semibold text-[14px] border border-[#ccc] mr-[14px]">
            {index + 1}
          </div>
          <h3 className="font-[Playfair Display] text-[18px] text-black font-[600] leading-[1.4]">
            {title}
          </h3>
        </div>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-black w-5 h-5 flex-shrink-0 flex items-center justify-center"
        >
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M19 9L12 16L5 9" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -5 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -5 }}
            transition={{ 
              height: { duration: 0.4, ease: "easeInOut" },
              opacity: { duration: 0.3, ease: "easeInOut" },
              y: { duration: 0.3, ease: "easeInOut" }
            }}
            className="accordion-content bg-white"
          >
            <div className="px-5 pb-4 pt-0 pl-[68px] font-[Inter] text-[15px] text-[#444] leading-[1.6] mt-[10px]">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function ProductFeatures() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const features = [
    {
      title: 'Past zich aan je huidskleur aan',
      content: 'Deze foundation past zich automatisch aan jouw huidtint aan voor een perfecte match zonder kleurstress.'
    },
    {
      title: 'Trekt niet in fijne lijntjes of rimpels',
      content: 'Dankzij de lichte textuur blijft het product mooi op de huid liggen zonder zich te verzamelen in lijntjes.'
    },
    {
      title: 'Hydrateert en beschermt met SPF 15',
      content: 'Bevat verzorgende ingrediënten die de huid hydrateren en beschermen tegen schadelijke zonnestraling.'
    },
    {
      title: 'Geschikt voor gevoelige huid (hypoallergeen)',
      content: 'Vrij van parfum en irriterende stoffen, ideaal voor vrouwen met een gevoelige of rijpere huid.'
    },
    {
      title: 'Blijft tot 16 uur zitten',
      content: 'Langhoudende formule die je look de hele dag fris houdt, zonder bijwerken.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="my-10">
      <h2 className="font-[Playfair Display] text-2xl md:text-3xl text-black mb-6 font-semibold">
        Belangrijkste kenmerken van onze winnende foundation
      </h2>
      
      <div className="max-w-3xl mx-auto">
        {features.map((feature, index) => (
          <AccordionItem
            key={index}
            title={feature.title}
            content={feature.content}
            isOpen={openItem === index}
            toggleAccordion={() => toggleAccordion(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
} 