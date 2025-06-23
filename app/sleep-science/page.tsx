"use client";

import Image from "next/image";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Layout, Section, ContentBlock } from "../components/Layout";
import { Heading1, Heading2, Heading3, Paragraph, SmallText, Highlight } from "../components/Typography";
import { ProductFeatures } from "../components/Accordion";
import { ComparisonSection } from "../components/ComparisonSection";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 7,
    seconds: 29
  });

  useEffect(() => {
    // Check if this is a new session and reset the countdown
    const initializeTimer = () => {
      const lastVisit = localStorage.getItem('lastVisitTimestamp');
      const currentTime = Date.now();
      
      // If no last visit recorded or it was more than 30 minutes ago, reset the timer
      if (!lastVisit || (currentTime - parseInt(lastVisit)) > 30 * 60 * 1000) {
        setCountdown({
          hours: 0,
          minutes: 7,
          seconds: 29
        });
      } else {
        // Try to restore previous countdown state if within the same session
        const savedCountdownStr = localStorage.getItem('countdownState');
        if (savedCountdownStr) {
          try {
            const savedCountdown = JSON.parse(savedCountdownStr);
            // Basic validation of the parsed object
            if (typeof savedCountdown.hours === 'number' && 
                typeof savedCountdown.minutes === 'number' && 
                typeof savedCountdown.seconds === 'number') {
              setCountdown(savedCountdown);
            } else {
              // Reset if structure is invalid
              setCountdown({
                hours: 0,
                minutes: 7,
                seconds: 29
              });
            }
          } catch (e) {
            // If there's an error parsing, reset to default
            console.error("Error parsing countdown state:", e);
            setCountdown({
              hours: 0,
              minutes: 7,
              seconds: 29
            });
          }
        }
      }
      
      // Update last visit timestamp
      localStorage.setItem('lastVisitTimestamp', currentTime.toString());
    };
    
    // Initialize timer when component mounts
    initializeTimer();
    
    // Set up a timer that decrements the countdown
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        const newSeconds = prevCountdown.seconds - 1;
        const newMinutes = newSeconds < 0 ? prevCountdown.minutes - 1 : prevCountdown.minutes;
        const newHours = newMinutes < 0 ? prevCountdown.hours - 1 : prevCountdown.hours;
        
        const updatedCountdown = {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        };
        
        // Save current countdown state to localStorage
        localStorage.setItem('countdownState', JSON.stringify(updatedCountdown));
        
        return updatedCountdown;
      });
    }, 1000);

    // Clear the timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Header with logo */}
      <header className="bg-white py-3 px-6 flex justify-center border-b border-gray-200">
        <Container>
          <div className="text-center">
            <div className="text-sm uppercase tracking-wider text-gray-700">THE</div>
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-gray-800">Sleep Science</h1>
            <div className="uppercase tracking-widest text-xl font-medium text-gray-700">REVIEW</div>
          </div>
        </Container>
      </header>

      {/* Main content */}
      <div className="bg-[#f8fafe] py-12 md:pt-16 md:pb-20">
        <Container className="max-w-[960px] mx-auto px-4">
          <h1 className="text-3xl md:text-[42px] font-bold leading-[1.3] text-center mb-4">
            Oxford Researchers Test Popular Sleep Supplements – <br />
            <span className="text-[#4B4B6B] underline decoration-2 underline-offset-8 mt-1 inline-block">The Results Will Surprise You</span>
          </h1>

          <div className="flex justify-center mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6 text-[15px] text-[#7a7a7a]">
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-5 text-center">⚖️</span>
                <span>Independent Review</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-5 text-center">🛡️</span>
                <span>No Sponsored Content</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-5 text-center">👨‍🔬</span>
                <span>Expert Analysis</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
            {/* Author section - single card with profile image */}
            <div className="w-full bg-[#f8fafe] shadow-md rounded-lg p-6 border border-gray-100">
              <div className="flex items-start gap-5">
                <Image 
                  src="/images/Simon.png" 
                  alt="Professor Simon Kyle" 
                  width={70}
                  height={70}
                  className="rounded-full border-2 border-gray-100"
                />
                <div>
                  <p className="font-bold text-black text-lg mb-1">By Professor Simon Kyle | April 17, 2025 | 09:48 AM</p>
                  <p className="text-gray-700 mb-0 text-base leading-relaxed">
                    Professor Simon Kyle is a leading expert in sleep science with over 15 years of experience. 
                    As Professor of Experimental and Clinical Sleep Research at Oxford, he has tested dozens of sleep supplements 
                    and shares his surprising findings about the latest breakthrough in sleep science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Navigation tabs */}
      <div className="w-full bg-[#1b2c3b] text-white mt-8">
        <div className="max-w-[960px] mx-auto flex">
          <div className="flex-1 py-2 px-6 flex justify-center">
            <a href="#research-method" className="hover:underline flex items-center">
              <span className="text-lg font-medium">Research Method</span>
            </a>
          </div>
          
          <div className="w-px bg-white/30 h-full"></div>
          
          <div className="flex-1 py-2 px-6 flex justify-center">
            <a href="#test-winner" className="hover:underline flex items-center">
              <span className="text-2xl mr-2">🏆</span>
              <span className="text-lg font-medium">Top Rated</span>
            </a>
          </div>
        </div>
      </div>

      {/* Test Criteria Section - Light Blue Container */}
      <div className="w-full bg-white py-10">
        <div className="max-w-[800px] mx-auto px-6">
          {/* Main Criteria Box */}
          <div className="bg-[#f0f7ff] rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-black">
              5 Popular Sleep Supplements Put to the Test
            </h3>
            
            <p className="mb-6 text-black">
              To discover which sleep supplements truly work, we tested five of the most popular brands for 30 days, focusing on these five critical criteria:
            </p>

            <div className="space-y-6">
              <div>
                <p className="font-bold mb-1 text-black">1. Perfect Dose Formula</p>
                <p className="text-black">
                  We measured the accuracy and consistency of the <strong>2mg melatonin dosage</strong>, the scientifically optimal amount for natural sleep.
                </p>
              </div>

              <div>
                <p className="font-bold mb-1 text-black">2. Sleep Architecture Support</p>
                <p className="text-black">
                  Each supplement was evaluated for how well it supports natural sleep cycles and maintains healthy sleep architecture.
                </p>
              </div>

              <div>
                <p className="font-bold mb-1 text-black">3. Natural Ingredient Quality</p>
                <p className="text-black">
                  We analyzed the purity and effectiveness of key ingredients like L-Theanine, Magnesium, and the Rest Well Blend.
                </p>
              </div>

              <div>
                <p className="font-bold mb-1 text-black">4. Safety & Side Effects</p>
                <p className="text-black">
                  Each product was tested for morning grogginess, dependency risks, and other potential side effects.
                </p>
              </div>

              <div>
                <p className="font-bold mb-1 text-black">5. Long-term Effectiveness</p>
                <p className="text-black">
                  We monitored how well the supplements maintained their effectiveness over the 30-day testing period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Product Cards Section */}
      {/* 1. RIEV - Winner */}
      <div className="w-full bg-[#faf9f6] py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header with badge */}
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span>1.</span>
              <span>🏆</span>
              <span>RIEV – Perfect Dose Melatonin Gummies</span>
            </h2>
            <div className="bg-white border-2 border-amber-400 rounded-lg px-4 py-2">
              <div className="text-sm text-amber-600 font-medium">#1 WINNER 2025</div>
            </div>
          </div>

          {/* Score and Price */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-6xl font-bold text-cyan-500">9.82</span>
            <span className="text-2xl text-black">/10</span>
          </div>

          {/* Product Image and Description */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Product Image */}
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden">
                <div className="aspect-square w-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/Rievproductrender.png"
                      alt="RIEV Perfect Dose Melatonin Gummies"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="w-full md:w-2/3">
              <p className="text-black text-lg mb-6">
                RIEV's Perfect Dose Melatonin Gummies emerged as the clear winner in our tests, combining scientific precision with natural effectiveness. The carefully calibrated 2mg melatonin dose proved optimal for supporting natural sleep without morning grogginess.
              </p>

              {/* Key Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Perfect 2mg melatonin dose</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Works within 30 minutes</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>No morning grogginess</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Natural sleep support</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>7 sleep amplifiers included</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Vegan & Non-GMO formula</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rating Bars */}
          <div className="space-y-6 mb-12">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">1. Sleep Quality & Effectiveness</span>
                <span className="text-3xl font-semibold text-cyan-500">9.8</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '98%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">2. Natural Formula & Safety</span>
                <span className="text-3xl font-semibold text-cyan-500">9.7</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '97%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">3. Onset Speed & Duration</span>
                <span className="text-3xl font-semibold text-cyan-500">9.9</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '99%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">4. User Satisfaction</span>
                <span className="text-3xl font-semibold text-cyan-500">9.8</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '98%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">5. Value for Money</span>
                <span className="text-3xl font-semibold text-cyan-500">9.9</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '99%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-xl text-black mb-4">Advantages:</h3>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Perfect Dosing:</strong> Scientifically optimized 2mg melatonin
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Fast & Natural:</strong> Works in 30 minutes without grogginess
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Complete Formula:</strong> Includes 7 natural sleep amplifiers
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Risk-Free:</strong> 30-day money-back guarantee
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl text-black mb-4">Disadvantages:</h3>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong className="text-black">Often Sold Out:</strong> High demand means limited availability
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bonus Box */}
          <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">BONUS: 30-Day Money-Back Guarantee</h3>
            <p className="text-black mb-0">
              RIEV offers a 30-day risk-free trial. Not satisfied for any reason? Simply return the product for a full refund — no questions asked. Try it completely risk-free.
            </p>
          </div>

          {/* Urgency Notice */}
          <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 mb-8">
            <p className="flex items-start gap-2 text-black">
              <span className="text-amber-500 font-bold">⚠️</span>
              <span><strong>Note:</strong> RIEV is currently offering a limited-time 50% discount on their Perfect Dose Melatonin Gummies. If you've been considering trying a natural sleep solution, now is the perfect time.</span>
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-black">{countdown.hours.toString().padStart(2, '0')}</div>
              <div className="text-sm text-gray-600">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black">{countdown.minutes.toString().padStart(2, '0')}</div>
              <div className="text-sm text-gray-600">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black">{countdown.seconds.toString().padStart(2, '0')}</div>
              <div className="text-sm text-gray-600">Seconds</div>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="https://myriev.com/products/melatonin-gummies"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-b from-amber-400 to-amber-600 text-white text-center py-4 rounded-lg font-bold text-xl flex items-center justify-center shadow-md hover:from-amber-500 hover:to-amber-700 transition-all"
          >
            CHECK AVAILABILITY NOW ➤
          </a>
        </div>
      </div>
      
      {/* 2. Olly */}
      <div className="w-full bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span>2.</span>
              <span>Olly – Extra Strength Sleep Gummies</span>
            </h2>
          </div>

          {/* Score */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-6xl font-bold text-cyan-500">9.1</span>
            <span className="text-2xl text-black">/10</span>
          </div>

          {/* Product Description */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden bg-gray-50 p-4">
                <div className="aspect-square w-full flex items-center justify-center">
                  <Image
                    src="/images/olly-sleep.jpg"
                    alt="Olly Extra Strength Sleep Gummies"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-black text-lg mb-6">
                Olly's Extra Strength Sleep Gummies offer a reliable solution with their 5mg melatonin formula. While effective, some users report the higher melatonin dose can lead to morning grogginess.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>5mg melatonin per serving</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>L-Theanine included</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Botanical blend</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Pleasant berry flavor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rating Bars */}
          <div className="space-y-6 mb-12">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">1. Sleep Quality & Effectiveness</span>
                <span className="text-3xl font-semibold text-cyan-500">9.0</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">2. Natural Formula & Safety</span>
                <span className="text-3xl font-semibold text-cyan-500">9.2</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '92%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">3. Onset Speed & Duration</span>
                <span className="text-3xl font-semibold text-cyan-500">9.1</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '91%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">4. User Satisfaction</span>
                <span className="text-3xl font-semibold text-cyan-500">9.0</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">5. Value for Money</span>
                <span className="text-3xl font-semibold text-cyan-500">9.2</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '92%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-xl text-black mb-4">Advantages:</h3>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Strong Formula:</strong> 5mg melatonin for deeper sleep
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Trusted Brand:</strong> Well-established reputation
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Great Taste:</strong> Pleasant berry flavor
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl text-black mb-4">Disadvantages:</h3>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong className="text-black">Morning Grogginess:</strong> Higher melatonin dose can cause drowsiness
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong className="text-black">Limited Formula:</strong> Fewer sleep-supporting ingredients
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="https://www.amazon.com/OLLY-Strength-L-Theanine-Chamomile-Blackberry/dp/B084QP2XB6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 text-center py-4 rounded-lg font-bold text-xl flex items-center justify-center shadow-md hover:from-gray-200 hover:to-gray-400 transition-all"
          >
            VIEW PRICE ➤
          </a>
        </div>
      </div>

      {/* 3. Natrol */}
      <div className="w-full bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span>3.</span>
              <span>Natrol – Advanced Sleep Melatonin</span>
            </h2>
          </div>

          {/* Score */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-6xl font-bold text-cyan-500">8.9</span>
            <span className="text-2xl text-black">/10</span>
          </div>

          {/* Product Description */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden bg-gray-50 p-4">
                <div className="aspect-square w-full flex items-center justify-center">
                  <Image
                    src="/images/natrol-sleep.jpg"
                    alt="Natrol Advanced Sleep Melatonin"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-black text-lg mb-6">
                Natrol's Advanced Sleep Melatonin tablets provide a time-release formula with 10mg of melatonin. While potent, the higher dose may be too strong for some users and could lead to dependency concerns.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>10mg time-release melatonin</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>100% drug-free</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Vitamin B6 included</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Easy-to-dissolve tablets</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rating Bars */}
          <div className="space-y-6 mb-12">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">1. Sleep Quality & Effectiveness</span>
                <span className="text-3xl font-semibold text-cyan-500">8.8</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '88%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">2. Natural Formula & Safety</span>
                <span className="text-3xl font-semibold text-cyan-500">8.9</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '89%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">3. Onset Speed & Duration</span>
                <span className="text-3xl font-semibold text-cyan-500">9.0</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">4. User Satisfaction</span>
                <span className="text-3xl font-semibold text-cyan-500">8.8</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '88%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">5. Value for Money</span>
                <span className="text-3xl font-semibold text-cyan-500">9.0</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-xl text-black mb-4">Advantages:</h3>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Time-Release:</strong> Sustained sleep support
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Fast Dissolve:</strong> Quick absorption
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Added B6:</strong> Supports sleep hormone production
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl text-black mb-4">Disadvantages:</h3>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong className="text-black">High Dose:</strong> May be too strong for some users
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong className="text-black">Basic Formula:</strong> Limited sleep-supporting ingredients
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong className="text-black">Tolerance Risk:</strong> Possible dependency with regular use
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="https://www.amazon.com/Natrol-Melatonin-Advanced-Tablets-Count/dp/B001E0YJ6O"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 text-center py-4 rounded-lg font-bold text-xl flex items-center justify-center shadow-md hover:from-gray-200 hover:to-gray-400 transition-all"
          >
            VIEW PRICE ➤
          </a>
        </div>
      </div>

      {/* 4. Nature Made */}
      <div className="w-full bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span>4.</span>
              <span>Nature Made – Sleep & Recovery Gummies</span>
            </h2>
          </div>

          {/* Score */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-6xl font-bold text-cyan-500">8.7</span>
            <span className="text-2xl text-black">/10</span>
          </div>

          {/* Product Description */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden bg-gray-50 p-4">
                <div className="aspect-square w-full flex items-center justify-center">
                  <Image
                    src="/images/nature-made-sleep.jpg"
                    alt="Nature Made Sleep & Recovery Gummies"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-black text-lg mb-6">
                Nature Made's Sleep & Recovery Gummies combine 4mg melatonin with L-Theanine for sleep support. While the formula is straightforward, some users report inconsistent effectiveness and sugar content concerns.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>4mg melatonin dose</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>L-Theanine blend</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>USP verified quality</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Strawberry flavor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rating Bars */}
          <div className="space-y-6 mb-12">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">1. Sleep Quality & Effectiveness</span>
                <span className="text-3xl font-semibold text-cyan-500">8.6</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '86%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">2. Natural Formula & Safety</span>
                <span className="text-3xl font-semibold text-cyan-500">8.8</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '88%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">3. Onset Speed & Duration</span>
                <span className="text-3xl font-semibold text-cyan-500">8.7</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '87%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">4. User Satisfaction</span>
                <span className="text-3xl font-semibold text-cyan-500">8.6</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '86%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">5. Value for Money</span>
                <span className="text-3xl font-semibold text-cyan-500">8.8</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '88%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-xl text-black mb-4">Advantages:</h3>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Quality Verified:</strong> USP certified ingredients
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Moderate Dose:</strong> 4mg melatonin suitable for most
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Good Value:</strong> Affordable price point
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl text-black mb-4">Disadvantages:</h3>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong className="text-black">Inconsistent Results:</strong> Effectiveness varies by user
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong className="text-black">Sugar Content:</strong> Higher than competitors
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong className="text-black">Basic Formula:</strong> Lacks additional sleep support
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="https://www.amazon.com/Nature-Made-Melatonin-L-Theanine-Strawberry/dp/B00M4Q8L44"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 text-center py-4 rounded-lg font-bold text-xl flex items-center justify-center shadow-md hover:from-gray-200 hover:to-gray-400 transition-all"
          >
            VIEW PRICE ➤
          </a>
        </div>
      </div>

      {/* 5. Vitafusion */}
      <div className="w-full bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span>5.</span>
              <span>Vitafusion – Max Strength Melatonin</span>
            </h2>
          </div>

          {/* Score */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-6xl font-bold text-cyan-500">8.5</span>
            <span className="text-2xl text-black">/10</span>
          </div>

          {/* Product Description */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden bg-gray-50 p-4">
                <div className="aspect-square w-full flex items-center justify-center">
                  <Image
                    src="/images/vitafusion-sleep.jpg"
                    alt="Vitafusion Max Strength Melatonin"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-black text-lg mb-6">
                Vitafusion's Max Strength Melatonin gummies deliver a high 10mg dose in a tasty format. While popular for its flavor, the high melatonin content and basic formula may not be ideal for all users.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>10mg melatonin per serving</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Natural fruit flavors</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Gluten-free formula</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>No artificial sweeteners</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rating Bars */}
          <div className="space-y-6 mb-12">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">1. Sleep Quality & Effectiveness</span>
                <span className="text-3xl font-semibold text-cyan-500">8.4</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '84%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">2. Natural Formula & Safety</span>
                <span className="text-3xl font-semibold text-cyan-500">8.5</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">3. Onset Speed & Duration</span>
                <span className="text-3xl font-semibold text-cyan-500">8.6</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '86%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">4. User Satisfaction</span>
                <span className="text-3xl font-semibold text-cyan-500">8.5</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-black">5. Value for Money</span>
                <span className="text-3xl font-semibold text-cyan-500">8.5</span>
              </div>
              <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" 
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-xl text-black mb-4">Advantages:</h3>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Great Taste:</strong> Natural fruit flavors
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Strong Effect:</strong> High melatonin content
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong className="text-black">Clean Formula:</strong> No artificial sweeteners
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl text-black mb-4">Disadvantages:</h3>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong className="text-black">Too Strong:</strong> 10mg dose may be excessive
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong className="text-black">Morning Drowsiness:</strong> Common side effect
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong className="text-black">Single Ingredient:</strong> No additional sleep support
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="https://www.amazon.com/Vitafusion-Melatonin-Gummy-Vitamins-Count/dp/B074F1P3RF"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 text-center py-4 rounded-lg font-bold text-xl flex items-center justify-center shadow-md hover:from-gray-200 hover:to-gray-400 transition-all"
          >
            VIEW PRICE ➤
          </a>
        </div>
      </div>

      {/* Story Section */}
      <div className="w-full bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Introduction to foundations */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-black mb-6">The Breakthrough in Sleep Science</h2>
            <p className="text-black mb-6">
              At one point, I could barely get a good night's sleep: My mind racing at bedtime, tossing and turning for hours, and waking up feeling like I hadn't slept at all. Traditional sleep aids were an absolute nightmare.
            </p>
            <p className="text-black mb-6">
              I hated them. They drove me crazy. Everything was either too strong or ineffective. Instead of helping, these products seemed to only make my sleep problems worse. Too sedating, too harsh, constant grogginess – and the feeling that they were making my sleep patterns even more irregular.
            </p>
            <p className="text-black mb-6">
              That's when I reached the point where I didn't want to take sleep supplements anymore – I simply didn't feel good about them, and things were only getting worse.
            </p>
            <p className="text-black mb-8">
              A few days later, my sleep specialist said: "Try the new generation of sleep supplements. They're revolutionizing sleep science."
            </p>
            <p className="text-black mb-8">
              I was skeptical – but also at my wit's end. So I dove into the research and ordered the most promising options. Three brands that consistently topped the reviews: RIEV, Natrol, and Nature Made.
            </p>
          </div>
          
          {/* What to look for - Pros */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-6">
              What to Look for in Sleep Supplements
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-green-600 font-bold mt-1">✅</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Optimal Dosage</h3>
                  <p className="text-black">
                    Ensure the supplement contains scientifically-proven doses. Too much or too little of active ingredients can affect effectiveness and side effects.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-green-600 font-bold mt-1">✅</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Natural Formula</h3>
                  <p className="text-black">
                    Look for supplements with clean, natural ingredients that support your body's sleep cycle without harsh chemicals or artificial additives.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-green-600 font-bold mt-1">✅</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Clinical Validation</h3>
                  <p className="text-black">
                    Choose products backed by scientific research and clinical studies that demonstrate both effectiveness and safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* What to avoid - Cons */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-black mb-6">
              Warning Signs to Watch For in Sleep Supplements
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-red-600 font-bold mt-1">❌</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Excessive Melatonin Dosage</h3>
                  <p className="text-black">
                    Many supplements contain 5-10mg of melatonin, which can disrupt natural sleep patterns and cause morning grogginess.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-red-600 font-bold mt-1">❌</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Artificial Ingredients</h3>
                  <p className="text-black">
                    Avoid products filled with artificial colors, flavors, or preservatives that might interfere with sleep quality.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-red-600 font-bold mt-1">❌</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Single-Ingredient Formulas</h3>
                  <p className="text-black">
                    Products that rely on just one ingredient often miss the complex nature of sleep, leading to incomplete results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Conclusion Section */}
      <div className="w-full bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Question Title */}
          <h2 className="text-4xl font-bold text-black mb-8">
            Are Sleep Supplements Like RIEV Really the Solution for Better Sleep?
          </h2>

          {/* Answer Paragraphs */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-black">
              Most signs point to yes. Reviews, feedback from sleep specialists, and our own tests show that the right sleep supplement doesn't just help you fall asleep – it also contributes to sleep quality, confidence, and comfort in your daily routine. A supplement that adapts to your natural sleep cycle, supports deep rest, and maintains healthy sleep patterns makes a real difference.
            </p>

            <p className="text-black">
              Our comparisons revealed clear trends – from better sleep consistency to more natural results without grogginess – leading us to confidently say that the right sleep supplement can be a real game-changer for those seeking quality sleep and energized mornings.
            </p>
          </div>

          {/* Final Conclusion Box */}
          <div className="bg-[#faf9f6] rounded-lg p-8 border-l-4 border-amber-500 mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Final Conclusion: RIEV is the Clear Winner
            </h3>
            <p className="text-lg text-black">
              After extensive testing of five different sleep supplements, RIEV stands head and shoulders above the rest. Their Perfect Dose Melatonin Gummies score exceptionally high on every important aspect — from optimal dosing and sleep support to natural ingredients and user satisfaction.
            </p>
          </div>

          {/* Exclusive Deal Box */}
          <div className="bg-[#faf9f6] rounded-lg p-8 border border-amber-100">
            {/* Deal Badge */}
            <div className="flex justify-center mb-6">
              <div className="bg-amber-500 text-white px-8 py-3 rounded-full inline-block">
                <span className="text-xl font-bold">💥 EXCLUSIVE DEAL: Today 50% OFF</span>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-black text-lg">
                  <strong>Risk-free trial</strong> – 30-day money-back guarantee
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-black text-lg">
                  <strong>Free shipping</strong> – while supplies last
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-black text-lg">
                  <strong>Limited time offer</strong>
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="https://myriev.com/products/melatonin-gummies"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-b from-amber-400 to-amber-600 text-white text-center py-5 rounded-lg font-bold text-xl flex items-center justify-center shadow-md hover:from-amber-500 hover:to-amber-700 transition-all"
            >
              CLAIM YOUR SPECIAL OFFER NOW ➤
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
} 