"use client";

import Image from "next/image";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Layout, Section, ContentBlock } from "../components/Layout";
import { Heading1, Heading2, Heading3, Paragraph, SmallText, Highlight } from "../components/Typography";
import { ProductFeatures } from "../components/Accordion";
import { useEffect, useState } from "react";

export default function BlogPage2() {
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 7,
    seconds: 29
  });

  useEffect(() => {
    // Check if this is a new session and reset the countdown
    const initializeTimer = () => {
      const lastVisit = localStorage.getItem('lastVisitTimestamp2'); // Changed key to avoid conflict
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
        const savedCountdownStr = localStorage.getItem('countdownState2'); // Changed key to avoid conflict
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
      localStorage.setItem('lastVisitTimestamp2', currentTime.toString());
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
        localStorage.setItem('countdownState2', JSON.stringify(updatedCountdown));
        
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
            <div className="text-sm uppercase tracking-wider text-gray-700">DE</div>
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-gray-800">Beauty</h1>
            <div className="uppercase tracking-widest text-xl font-medium text-gray-700">BLOG</div>
          </div>
        </Container>
      </header>

      {/* Main content */}
      <div className="bg-[#fefaf8] py-12 md:pt-16 md:pb-20">
        <Container className="max-w-[960px] mx-auto px-4">
          <h1 className="text-3xl md:text-[42px] font-bold leading-[1.3] text-center mb-4">
            Wij hebben 5 populaire foundations getest – <br />
            <span className="text-[#6B4B4B] underline decoration-2 underline-offset-8 mt-1 inline-block">Dit is de verrassende winnaar</span>
          </h1>

          <div className="flex justify-center mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6 text-[15px] text-[#7a7a7a]">
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-5 text-center">⚖️</span>
                <span>Onafhankelijk beoordeeld</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-5 text-center">🛡️</span>
                <span>Geen gesponsorde inhoud</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-5 text-center">👩‍🔬</span>
                <span>Advies door experts</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
            {/* Author section - single card with profile image (updated to match German layout) */}
            <div className="w-full bg-[#fefaf8] shadow-md rounded-lg p-6 border border-gray-100">
              <div className="flex items-start gap-5">
                <Image 
                  src="/Elise de Vries.png" 
                  alt="Elise de Vries" 
                  width={70}
                  height={70}
                  className="rounded-full border-2 border-gray-100"
                />
                <div>
                  <p className="font-bold text-black text-lg mb-1">Door Elise de Vries | 1 mei 2025 | 09:48 uur</p>
                  <p className="text-gray-700 mb-0 text-base leading-relaxed">
                    Elise de Vries is een Nederlandse schoonheidsspecialiste met meer dan 15 jaar ervaring in huidverzorging. 
                    Ze heeft tientallen foundations getest op echte vrouwen van 45+, en deelt nu haar verrassende ontdekking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Rest of the content structure remains the same, just copied from page.tsx */}
      {/* You can now modify the content as needed for your new angle */}
    </Layout>
  );
} 