import React from 'react';

export const ComparisonSection = () => {
  return (
    <div className="mt-12 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-black mb-8">Which Sleep Supplement Should You Choose?</h2>
      
      <p className="text-black mb-6">
        With so many sleep supplements on the market, it's understandable that many people feel overwhelmed. 
        Let's be honest: <strong>not all sleep supplements are created equal</strong>. Differences in formulation, 
        ingredient quality, and dosing can lead to significant variations in effectiveness and side effects.
      </p>

      <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
        <h3 className="text-xl font-bold text-black mb-4">Common Issues with Other Sleep Supplements:</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-red-500">⚠️</span>
            <p className="text-black">
              <strong>Excessive Melatonin:</strong> Many brands use 5-10mg of melatonin, which can lead to grogginess and disrupted sleep cycles
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-red-500">⚠️</span>
            <p className="text-black">
              <strong>Artificial Ingredients:</strong> Some products contain unnecessary fillers, artificial colors, and preservatives
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-red-500">⚠️</span>
            <p className="text-black">
              <strong>Incomplete Formulas:</strong> Many supplements rely solely on melatonin, missing other crucial sleep-supporting nutrients
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-bold text-black mb-4">Why RIEV Stands Out:</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-green-500">✓</span>
            <p className="text-black">
              <strong>Perfect Dose Technology:</strong> Scientifically optimized 2mg melatonin dose for natural sleep support
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-green-500">✓</span>
            <p className="text-black">
              <strong>Comprehensive Formula:</strong> Includes 7 natural sleep amplifiers that work synergistically
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-green-500">✓</span>
            <p className="text-black">
              <strong>Clean Label:</strong> Vegan, Non-GMO, no artificial ingredients or allergens
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 