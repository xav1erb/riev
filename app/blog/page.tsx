"use client";

import Image from "next/image";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Layout, Section, ContentBlock } from "../components/Layout";
import { Heading1, Heading2, Heading3, Paragraph, SmallText, Highlight } from "../components/Typography";
import { ProductFeatures } from "../components/Accordion";
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

      {/* Navigation tabs - updated to match German site */}
      <div className="w-full bg-[#17b2c3] text-white mt-8">
        <div className="max-w-[960px] mx-auto flex">
          <div className="flex-1 py-2 px-6 flex justify-center">
            <a href="#test-method" className="hover:underline flex items-center">
              <span className="text-lg font-medium">Hoe we testen</span>
            </a>
          </div>
          
          <div className="w-px bg-white/30 h-full"></div>
          
          <div className="flex-1 py-2 px-6 flex justify-center">
            <a href="#test-winner" className="hover:underline flex items-center">
              <span className="text-2xl mr-2">🏆</span>
              <span className="text-lg font-medium">Testwinnaar</span>
            </a>
          </div>
        </div>
      </div>

      {/* Article content */}
      <Section>
        {/* Product image section */}
        <div className="flex justify-center mx-auto mb-16" style={{ maxWidth: '720px', marginTop: '40px' }}>
          <Image
            src="/May Image 1.png"
            alt="5 Premium Foundations voor Rijpere Huid"
            width={720}
            height={480}
            className="rounded-lg object-cover"
            priority
          />
        </div>

        {/* Intro paragraph */}
        <Heading2>De hype rond foundations – Wat zit erachter?</Heading2>
        <Paragraph>
          Misschien heb je van vrienden, beautyexperts of zelfs beroemdheden gehoord
          die de voordelen van hoogwaardige foundations prijzen. Daarbij vallen termen als
          <strong className="text-black"> natuurlijke look, vlekkeloze huid</strong> en <strong className="text-black">huidvriendelijke ingrediënten</strong>. 
          Geen wonder dat het internet overspoeld wordt met enthousiasme. Maar waarom
          zijn deze &quot;premium foundations&quot; zo populair? De volgende vijf kenmerken hebben de huidige trend 
          aanzienlijk beïnvloed.
        </Paragraph>
        
        {/* Product Features Accordion */}
        <ProductFeatures />
        
        {/* New Georgia section */}
        <div className="w-full bg-white py-10 mt-10">
          <div className="max-w-[800px] mx-auto px-6 font-[Georgia]">
            <h3 className="text-[24px] font-bold mb-3 text-black">
              Maar welke foundation kies je dan?
            </h3>
            <p className="text-[18px] leading-[1.6] text-black">
              Met zoveel foundations op de markt is het logisch dat veel vrouwen door de bomen het bos niet meer zien. Want laten we eerlijk zijn: <strong>niet alle foundations zijn hetzelfde.</strong> Verschillen in formule, ingrediënten en huidreactie kunnen leiden tot <strong>grote verschillen in resultaat en gebruiksgemak.</strong>
            </p>
          </div>
        </div>

        {/* Test Criteria Section - Light Blue Container */}
        <div className="w-full bg-white py-10">
          <div className="max-w-[800px] mx-auto px-6">
            {/* Main Criteria Box */}
            <div className="bg-[#f0f7ff] rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-black">
                5 Populaire foundations op de proef gesteld
              </h3>
              
              <p className="mb-6 text-black">
                Om te ontdekken welke foundations echt werken, hebben we vijf van de populairste merken 30 dagen lang getest en ons hierbij op de volgende vijf criteria gericht:
              </p>

              <div className="space-y-6">
                <div>
                  <p className="font-bold mb-1 text-black">1. Natuurlijk resultaat & draagcomfort</p>
                  <p className="text-black">
                    We hebben beoordeeld hoe goed de foundation zich <strong>aanpast aan de huid</strong> en hoe comfortabel het product de hele dag blijft zitten.
                  </p>
                </div>

                <div>
                  <p className="font-bold mb-1 text-black">2. Effect op de huid</p>
                  <p className="text-black">
                    We hebben gekeken naar de <strong>huidvriendelijkheid</strong> – zoals het verminderen van roodheid, het hydraterend vermogen en hoe goed het geschikt is voor de gevoelige huid.
                  </p>
                </div>

                <div>
                  <p className="font-bold mb-1 text-black">3. Kwaliteit & duurzaamheid</p>
                  <p className="text-black">
                    We hebben de <strong>ingrediënten, textuur en houdbaarheid</strong> beoordeeld en gekeken hoe goed het product zich houdt bij dagelijks gebruik.
                  </p>
                </div>

                <div>
                  <p className="font-bold mb-1 text-black">4. Klanttevredenheid</p>
                  <p className="text-black">
                    We hebben <strong>klantrecensies en retourpercentages</strong> meegenomen om te bepalen hoe tevreden klanten zijn met hun aankoop.
                  </p>
                </div>

                <div>
                  <p className="font-bold mb-1 text-black">5. Prijs & waarde</p>
                  <p className="text-black">
                    We hebben de prijs van elk product vergeleken met de <strong>kwaliteit, werking en extra voordelen</strong> (zoals SPF of geld-terug-garanties) om te bepalen of het een slimme investering is.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Box */}
            <div className="bg-[#f0f7ff] rounded-lg p-6">
              <p className="text-black">
                We verwachtten een spannende strijd tussen de merken, maar <strong>één foundation sprong er echt uit</strong>. Hieronder vind je onze volledige beoordeling – inclusief onze keuze voor de absolute winnaar.
              </p>
            </div>
          </div>
        </div>
        
        {/* Product Winner Section */}
        <div className="w-full bg-white py-12 mt-6" id="test-winner">
          <div className="max-w-4xl mx-auto px-6">
            {/* Product card with beige background */}
            <div className="bg-[#f2f1e8] rounded-lg p-6 relative">
              {/* Header with trophy and product title */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                  <span>1.</span>
                  <span className="text-amber-500">🏆</span>
                  <span>May Cosmetics – Changing Foundation</span>
                </h3>
                
                {/* Winner badge */}
                <div className="hidden md:block">
                  <div className="bg-white border-2 border-amber-400 rounded-lg p-3 text-center w-32">
                    <div className="text-xs text-gray-500">
                      De Beauty Blog
                    </div>
                    <div className="text-4xl font-bold text-cyan-500">
                      9.72
                    </div>
                    <div className="bg-amber-400 text-black font-bold text-sm py-1 px-2 my-1">
                      Testwinnaar
                    </div>
                    <div className="text-amber-500 font-semibold text-sm">
                      ⭑ May ⭑
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Rating and price section */}
              <div className="mb-6 flex items-center">
                <span className="text-5xl font-bold text-cyan-500">9.72</span>
                <span className="text-xl text-black ml-2">/10 | €24,95</span>
              </div>
              
              {/* Product image and description */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Product image */}
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="aspect-square w-full bg-white flex items-center justify-center p-4">
                    <div className="relative w-full h-full max-w-[300px] mx-auto">
                      <Image
                        src="/6-2.jpg"
                        alt="Woman holding May Cosmetics foundation"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Product description */}
                <div className="space-y-4">
                  <p className="text-black">
                    De Changing Foundation van May Cosmetics laat zien wat een <strong>écht innovatieve foundation</strong> kan doen voor vrouwen boven de 45. De formule past zich automatisch aan je huidtint aan voor een natuurlijke finish zonder maskereffect. Zelfs bij pigmentvlekken, fijne lijntjes of gevoelige huidtypes ziet de foundation er egaal uit.
                  </p>
                  <p className="text-black">
                    Wat deze foundation extra bijzonder maakt is dat hij <strong>niet in rimpels trekt</strong>, langdurig blijft zitten (tot wel 16 uur), en de huid hydrateert terwijl hij beschermt met SPF 15. De Changing Foundation is hypoallergeen, vegan en waterproof. Kortom: een betrouwbare all-in-one oplossing.
                  </p>
                </div>
              </div>
              
              {/* Rating bars */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">1. Kleuradaptatie & Natuurlijk effect</span>
                    <span className="text-3xl font-semibold text-cyan-500">9.9</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '99%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">2. Huidvriendelijkheid</span>
                    <span className="text-3xl font-semibold text-cyan-500">9.7</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '97%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">3. Duurzaamheid & kwaliteit</span>
                    <span className="text-3xl font-semibold text-cyan-500">9.8</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '98%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">4. Klanttevredenheid</span>
                    <span className="text-3xl font-semibold text-cyan-500">9.7</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '97%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">5. Prijs & waarde</span>
                    <span className="text-3xl font-semibold text-cyan-500">9.5</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Bonus guarantee box */}
              <div className="bg-white rounded-lg p-6 mb-8">
                <h3 className="font-bold text-xl text-black mb-3">BONUS: 30 Dagen Niet-goed-geld-terug Garantie</h3>
                <p className="text-black mb-4">
                  May biedt een <strong>30-daagse risicovrije test</strong> aan. Ben je om welke reden dan ook niet tevreden? Dan stuur je de foundation gewoon terug — zonder gedoe. Zo kun je het volledig risicoloos zelf ervaren.
                </p>
              </div>
              
              {/* Pros and cons */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-xl text-black mb-4">Voordelen:</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Perfecte kleurmatch:</strong> Past zich aan je eigen huidkleur aan
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Comfortabel & huidvriendelijk:</strong> Trekt niet in lijntjes, voelt licht en hydrateert
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Geschikt voor iedereen:</strong> Werkt ook bij pigmentvlekken of gevoelige huid
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Zichtbare verbetering:</strong> Geeft een frisse glow zonder plamuurlaag
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Zekerheid:</strong> 30 dagen risicoloos proberen
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl text-black mb-4">Nadelen:</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <div>
                        <strong className="text-black">Vaak uitverkocht:</strong> Door grote vraag niet altijd direct leverbaar
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Warning note */}
              <div className="bg-white p-6 rounded-lg mb-8 border-l-4 border-amber-400">
                <p className="flex items-start gap-2 text-black">
                  <span className="text-amber-500 font-bold">⚠️</span>
                  <span><strong>Let op:</strong> Op dit moment biedt May Cosmetics tijdelijk een korting tot wel 60%. Als je twijfelt om een nieuwe foundation te proberen, dan is dit hét moment.</span>
                </p>
              </div>
              
              {/* Countdown */}
              <div className="flex justify-center items-center space-x-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">{countdown.hours.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-600">Uur</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">{countdown.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-600">Minuten</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">{countdown.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-600">Seconden</div>
                </div>
              </div>
              
              {/* CTA Button */}
              <a 
                href="https://maycosmetics.nl/products/may-"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#F4B0B0] text-black text-center py-4 rounded-lg font-bold flex items-center justify-center shadow-md hover:bg-[#E39D9D] transition-all"
              >
                CONTROLEER BESCHIKBAARHEID ➤
              </a>
            </div>
          </div>
        </div>
        
        {/* Second place product - Meroda Cosmetics */}
        <div className="w-full bg-white py-12">
          <div className="max-w-4xl mx-auto px-6">
            {/* Product card with light gray background */}
            <div className="bg-[#f5f5f5] rounded-lg p-6 relative">
              {/* Header with silver medal and product title */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                  <span>2.</span>
                  <span>🥈</span>
                  <span>Meroda Cosmetics – Colour Changing Foundation</span>
                </h3>
              </div>
              
              {/* Rating and price section */}
              <div className="mb-6 flex items-center">
                <span className="text-5xl font-bold text-cyan-500">8.64</span>
                <span className="text-xl text-black ml-2">/10 | €34,95</span>
              </div>
              
              {/* Product image and description */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Product image */}
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="aspect-square w-full bg-white flex items-center justify-center p-4">
                    <div className="relative w-full h-full max-w-[300px] mx-auto">
                      <Image
                        src="/Meroda PP 1.webp"
                        alt="Meroda foundation product"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Product description */}
                <div className="space-y-4">
                  <p className="text-black">
                    Meroda's Changing Foundation is een populaire keuze binnen de branche en wordt vaak geprezen om de lichte textuur en natuurlijke finish. De dekking is degelijk en het aanbrengen gaat vlot, wat het product toegankelijk maakt voor dagelijks gebruik. Toch geven veel gebruikers aan dat de foundation iets sneller vervaagt bij langdurig dragen, vooral op warmere dagen. Met een hogere prijs per milliliter is Meroda een bekende naam — maar niet per se de meest slimme keuze als je kijkt naar prijs-kwaliteitverhouding.
                  </p>
                </div>
              </div>
              
              {/* Rating bars */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">1. Gebruiksgemak & Comfort</span>
                    <span className="text-3xl font-semibold text-cyan-500">9.1</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '91%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">2. Huidverbetering</span>
                    <span className="text-3xl font-semibold text-cyan-500">8.7</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '87%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">3. Kwaliteit & Houdbaarheid</span>
                    <span className="text-3xl font-semibold text-cyan-500">8.8</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '88%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">4. Klanttevredenheid</span>
                    <span className="text-3xl font-semibold text-cyan-500">8.5</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">5. Prijs-Kwaliteit</span>
                    <span className="text-3xl font-semibold text-cyan-500">8.1</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '81%' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Pros and cons */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-xl text-black mb-4">Voordelen:</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Prettige textuur</strong> – Makkelijk aan te brengen
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Goede dekking</strong> – Egale finish zonder vlekken
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Luxe uitstraling</strong> – Mooi verpakt
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl text-black mb-4">Nadelen:</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <div>
                        <strong className="text-black">Hogere prijs</strong> dan vergelijkbare foundations
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <div>
                        <strong className="text-black">Minder langhoudend</strong> bij vettige huid
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* CTA Button */}
              <a 
                href="#" 
                className="w-full bg-[#F4B0B0] text-black text-center py-4 rounded-lg font-bold flex items-center justify-center shadow-md hover:bg-[#E39D9D] transition-all"
              >
                BEKIJK BESCHIKBAARHEID
              </a>
            </div>
          </div>
        </div>
        
        {/* Third place product - Hera Reflection Skin Glow Foundation */}
        <div className="w-full bg-white py-12">
          <div className="max-w-4xl mx-auto px-6">
            {/* Product card with very light background */}
            <div className="bg-[#fafafa] rounded-lg p-6 relative">
              {/* Header with bronze medal and product title */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                  <span>3.</span>
                  <span>🥉</span>
                  <span>Hera Reflection Skin Glow Foundation</span>
                </h3>
              </div>
              
              {/* Rating and price section */}
              <div className="mb-6 flex items-center">
                <span className="text-5xl font-bold text-cyan-500">7.92</span>
                <span className="text-xl text-black ml-2">/10 | €39,75</span>
              </div>
              
              {/* Product image and description */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Product image - HERA bottle */}
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="aspect-square w-full bg-white flex items-center justify-center p-4">
                    <div className="relative w-full h-full max-w-[300px] mx-auto">
                      <Image
                        src="/Hera PP 1.jpg"
                        alt="Hera Reflection Skin Glow Foundation"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Product description */}
                <div className="space-y-4">
                  <p className="text-black">
                    De Reflection Skin Glow Cushion Foundation van HERA wordt gepresenteerd als een luxe product dat een stralende finish biedt en tegelijkertijd huidverzorgende ingrediënten bevat. Hoewel het een aantrekkelijk concept is, blijkt uit gebruikerservaringen dat de foundation in de praktijk enkele tekortkomingen heeft.
                  </p>
                  <p className="text-black">
                    Gebruikers merken op dat de foundation, ondanks de beloofde 24-uurs hydratatie, niet altijd langdurig blijft zitten, vooral in warme en vochtige omstandigheden. Daarnaast kan de glanzende finish bij sommige huidtypes, met name de gecombineerde tot vette huid, leiden tot een ongewenst glimmend effect. De dekking is licht tot medium, wat betekent dat extra producten nodig kunnen zijn om oneffenheden volledig te camoufleren.
                  </p>
                </div>
              </div>
              
              {/* Rating bars */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">1. Gebruiksgemak & Comfort</span>
                    <span className="text-3xl font-semibold text-cyan-500">8.0</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">2. Huidverbetering</span>
                    <span className="text-3xl font-semibold text-cyan-500">7.4</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '74%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">3. Kwaliteit & Houdbaarheid</span>
                    <span className="text-3xl font-semibold text-cyan-500">8.3</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '83%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">4. Klanttevredenheid</span>
                    <span className="text-3xl font-semibold text-cyan-500">7.9</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '79%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">5. Prijs-Kwaliteit</span>
                    <span className="text-3xl font-semibold text-cyan-500">7.9</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '79%' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Pros and cons */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-xl text-black mb-4">Voordelen:</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Lichte textuur</strong> – Ideaal voor droge of rijpere huid
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Automatisch kleur aanpassend</strong> – Eén tint voor meerdere huidtypes
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Fris gevoel op de huid</strong>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl text-black mb-4">Nadelen:</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <div>
                        <strong className="text-black">Niet accuraat op alle huidtypes</strong>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <div>
                        <strong className="text-black">Beperkte dekking</strong> bij pigmentvlekken of roodheid
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <div>
                        <strong className="text-black">Vervaagt sneller</strong> zonder setting spray
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* CTA Button */}
              <a 
                href="#" 
                className="w-full bg-[#F4B0B0] text-black text-center py-4 rounded-lg font-bold flex items-center justify-center shadow-md hover:bg-[#E39D9D] transition-all"
              >
                BEKIJK BESCHIKBAARHEID
              </a>
            </div>
          </div>
        </div>
        
        {/* Fourth place product - Studio Fix Fluid Foundation */}
        <div className="w-full bg-white py-12">
          <div className="max-w-4xl mx-auto px-6">
            {/* Product card with very light background */}
            <div className="bg-[#fafafa] rounded-lg p-6 relative">
              {/* Header with product title */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                  <span>4.</span>
                  <span>MAC Studio Fix Fluid Foundation</span>
                </h3>
              </div>
              
              {/* Rating and price section */}
              <div className="mb-6 flex items-center">
                <span className="text-5xl font-bold text-cyan-500">7.58</span>
                <span className="text-xl text-black ml-2">/10 | €44</span>
              </div>
              
              {/* Product image and description */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Product image - MAC foundation */}
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="aspect-square w-full bg-white flex items-center justify-center p-4">
                    <div className="relative w-full h-full max-w-[300px] mx-auto">
                      <Image
                        src="/MAC PP 1.avif"
                        alt="MAC Studio Fix Fluid Foundation"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Product description */}
                <div className="space-y-4">
                  <p className="text-black">
                    De Studio Fix Fluid Foundation van MAC biedt een sterke, langdurige dekking met een matte finish. Het product is vooral geschikt voor mensen met een vettere huid, omdat het helpt glans onder controle te houden gedurende de dag.
                  </p>
                  <p className="text-black">
                    Toch geven sommige gebruikers aan dat de textuur vrij dik is, wat kan leiden tot een minder natuurlijk effect. Ook bevat de formule parfum en alcohol, wat voor mensen met een gevoelige of rijpere huid als oncomfortabel kan worden ervaren.
                  </p>
                </div>
              </div>
              
              {/* Rating bars */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">1. Gebruiksgemak & Comfort</span>
                    <span className="text-3xl font-semibold text-cyan-500">7.4</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '74%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">2. Huidverbetering</span>
                    <span className="text-3xl font-semibold text-cyan-500">7.6</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '76%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">3. Kwaliteit & Houdbaarheid</span>
                    <span className="text-3xl font-semibold text-cyan-500">7.8</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '78%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">4. Klanttevredenheid</span>
                    <span className="text-3xl font-semibold text-cyan-500">7.3</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '73%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">5. Prijs-Kwaliteit</span>
                    <span className="text-3xl font-semibold text-cyan-500">7.4</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '74%' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Pros and cons */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-xl text-black mb-4">Voordelen:</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Matte finish</strong> – Perfect voor vettige huidtypes
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Stijlvolle verpakking</strong>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Geurloos en vrij van parabenen</strong>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl text-black mb-4">Nadelen:</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <div>
                        <strong className="text-black">Droogt snel – moeilijk te blenden</strong>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <div>
                        <strong className="text-black">Niet ideaal voor de droge of gevoelige huid</strong>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <div>
                        <strong className="text-black">Prijs aan de hoge kant voor de prestaties</strong>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* CTA Button */}
              <a 
                href="#" 
                className="w-full bg-[#F4B0B0] text-black text-center py-4 rounded-lg font-bold flex items-center justify-center shadow-md hover:bg-[#E39D9D] transition-all"
              >
                BEKIJK BESCHIKBAARHEID
              </a>
            </div>
          </div>
        </div>
        
        {/* Fifth place product - Douglas Make-up Ultimate 24H Perfect Wear Foundation */}
        <div className="w-full bg-white py-12">
          <div className="max-w-4xl mx-auto px-6">
            {/* Product card with very light background */}
            <div className="bg-[#fafafa] rounded-lg p-6 relative">
              {/* Header with product title */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                  <span>5.</span>
                  <span>Douglas Make-up Ultimate 24H Perfect Wear Foundation</span>
                </h3>
              </div>
              
              {/* Rating and price section */}
              <div className="mb-6 flex items-center">
                <span className="text-5xl font-bold text-cyan-500">7.16</span>
                <span className="text-xl text-black ml-2">/10 | €19,99</span>
              </div>
              
              {/* Product image and description */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Product image - Douglas foundation */}
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="aspect-square w-full bg-white flex items-center justify-center p-4">
                    <div className="relative w-full h-full max-w-[300px] mx-auto">
                      <Image
                        src="/Douglas PP 1.jpg"
                        alt="Douglas Make-up Ultimate 24H Perfect Wear Foundation"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Product description */}
                <div className="space-y-4">
                  <p className="text-black">
                    De Douglas Make-up Ultimate 24H Perfect Wear Foundation is een betaalbare keuze met een sterke, langdurige dekking. De formule is ontworpen om tot 24 uur te blijven zitten en belooft een natuurlijke finish. Tijdens onze test scoorde het product degelijk op algemene prestaties, maar het mist de finesse waar de rijpere huid juist baat bij heeft.
                  </p>
                  <p className="text-black">
                    Hoewel het prettig is dat de foundation licht aanvoelt en breed beschikbaar is in verschillende tinten, merkten we dat het product zich snel kan ophopen in fijne lijntjes en de huid gedurende de dag ietwat droog aan kan voelen. Ook mist de foundation extra verzorgende eigenschappen, zoals SPF of hydraterende ingrediënten – iets waar vrouwen van 45+ juist naar op zoek zijn.
                  </p>
                </div>
              </div>
              
              {/* Rating bars */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">1. Gebruiksgemak & Comfort</span>
                    <span className="text-3xl font-semibold text-cyan-500">7.1</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '71%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">2. Huidverbetering</span>
                    <span className="text-3xl font-semibold text-cyan-500">6.9</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '69%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">3. Kwaliteit & Houdbaarheid</span>
                    <span className="text-3xl font-semibold text-cyan-500">7.4</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '74%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">4. Klanttevredenheid</span>
                    <span className="text-3xl font-semibold text-cyan-500">7.2</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '72%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-black">5. Prijs-Kwaliteit</span>
                    <span className="text-3xl font-semibold text-cyan-500">7.3</span>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 via-gray-400 to-teal-500 rounded-full" 
                      style={{ width: '73%' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Pros and cons */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-xl text-black mb-4">Voordelen:</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Lichtgewicht textuur</strong> – voelt niet zwaar aan
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Degelijke houdbaarheid</strong> – blijft lang zitten
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <div>
                        <strong className="text-black">Breed scala aan tinten beschikbaar</strong>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl text-black mb-4">Nadelen:</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <div>
                        <strong className="text-black">Mist hydraterende ingrediënten</strong> – minder geschikt voor de rijpere huid
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <div>
                        <strong className="text-black">Geen SPF</strong> – extra zonbescherming nodig
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <div>
                        <strong className="text-black">Kan zich ophopen in lijntjes</strong> na een aantal uur
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* CTA Button */}
              <a 
                href="#" 
                className="w-full bg-[#F4B0B0] text-black text-center py-4 rounded-lg font-bold flex items-center justify-center shadow-md hover:bg-[#E39D9D] transition-all"
              >
                BEKIJK BESCHIKBAARHEID
              </a>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Educational Foundation Guide Section */}
      <div className="w-full bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Introduction to foundations */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Waarom zou je een foundation gebruiken?
            </h2>
            
            <p className="text-black text-lg mb-4">
              Goede foundations zorgen ervoor dat je huid zich natuurlijk kan gedragen zoals het bedoeld is: vrij, zonder een zware laag die poriën verstopt of je gelaat verslapt doet aanvoelen. Door zich aan te passen aan jouw huidstructuur en teint, helpen foundations bij het verminderen van oneffenheden en het versterken van je natuurlijke uitstraling.
            </p>
            <p className="text-black text-lg mb-4">
              Veel gebruikers geven aan dat ze zich zelfverzekerder voelen, hun huid beter verzorgd is en hun make-uproutine eenvoudiger wordt – vooral dankzij de hydratatie, dekking en textuur.
            </p>
            <p className="text-black text-lg font-medium">
              Voor iedereen die op zoek is naar een natuurlijke, stralende huid en een foundation die méér doet dan alleen camoufleren, is een kwalitatieve foundation een uitstekend alternatief voor dikke of onnatuurlijke make-up.
            </p>
          </div>
          
          {/* What to look for - Pros */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-6">
              Waar je op moet letten bij het kiezen van een foundation
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-green-600 font-bold mt-1">✅</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Goede kleurmatch</h3>
                  <p className="text-black">
                    Zorg dat je foundation perfect aansluit op jouw huidkleur en ondertoon. Een verkeerde tint kan je dof, grijzig of juist te oranje laten lijken.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-green-600 font-bold mt-1">✅</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Lichtgewicht formule</h3>
                  <p className="text-black">
                    Een foundation zonder zware of verstoppende ingrediënten voelt fijner aan en helpt je huid te ademen, waardoor je minder snel last krijgt van puistjes of irritatie.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-green-600 font-bold mt-1">✅</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Hydratatie & verzorging</h3>
                  <p className="text-black">
                    Kies een formule die niet alleen dekt, maar ook verzorgt — denk aan toevoegingen zoals hyaluronzuur of vitamine E, die je huid gehydrateerd en gezond houden.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-green-600 font-bold mt-1">✅</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Dekking & textuur</h3>
                  <p className="text-black">
                    Let op hoe goed de foundation blendt met je huid en of hij zich aanpast aan je poriën en fijne lijntjes zonder te 'cakey' te worden.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-green-600 font-bold mt-1">✅</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Ervaringen van gebruikers</h3>
                  <p className="text-black">
                    Lees altijd ervaringen van andere gebruikers om te weten hoe de foundation presteert op verschillende huidtypes en gedurende de dag.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* What to avoid - Cons */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-black mb-6">
              Pas op met deze eigenschappen bij foundations
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-red-600 font-bold mt-1">❌</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Te dikke of verstoppende formule</h3>
                  <p className="text-black">
                    Sommige foundations bevatten zware oliën of siliconen die de huid afsluiten, waardoor poriën verstopt raken en onzuiverheden toenemen.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-red-600 font-bold mt-1">❌</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Onnatuurlijke finish</h3>
                  <p className="text-black">
                    Een overdreven matte of juist extreem glanzende finish kan je huid er onnatuurlijk uit laten zien en maakt kleine imperfecties juist zichtbaarder.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-red-600 font-bold mt-1">❌</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Beperkt kleurenaanbod</h3>
                  <p className="text-black">
                    Merken die slechts een paar tinten aanbieden sluiten vaak veel huidtypes uit en geven een slechtere match, wat leidt tot een onnatuurlijke look.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-red-600 font-bold mt-1">❌</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Vage beloftes zonder bewijs</h3>
                  <p className="text-black">
                    Let op als merken medische of verzorgende claims maken zonder onderbouwing van dermatologen of klinische tests.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-red-600 font-bold mt-1">❌</div>
                <div>
                  <h3 className="font-bold text-lg text-black">Goedkope imitaties</h3>
                  <p className="text-black">
                    Nepmerken of dubieuze webshops bieden vaak foundations aan die slecht presteren, je huid irriteren of gewoon niet doen wat ze beloven.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Conclusion Section */}
      <Section className="bg-white">
        <div className="space-y-8">
          {/* First conclusion block */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Zijn foundations zoals die van May echt de oplossing voor een perfecte huid?
            </h2>
            
            <p className="text-black text-lg mb-4">
              De meeste signalen wijzen daarop. Recensies, feedback van make-upartiesten én onze eigen tests tonen aan dat de juiste foundation niet alleen zorgt voor een egalere teint, maar ook bijdraagt aan huidverzorging, zelfvertrouwen én gemak in je dagelijkse routine. Een foundation die zich aanpast aan jouw huidskleur, fijne lijntjes opvult en hydrateert, maakt écht verschil.
            </p>
            
            <p className="text-black text-lg">
              Onze vergelijkingen lieten duidelijke trends zien – van betere houdbaarheid tot een natuurlijker resultaat zonder cakey effect – waardoor we met overtuiging kunnen zeggen dat de juiste foundation voor veel vrouwen een echte gamechanger is op weg naar een verzorgde, stralende huid.
            </p>
          </div>
          
          {/* Final verdict box */}
          <div className="bg-[#f2f1e8] rounded-lg p-6 border-l-4 border-amber-500">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
              Eindconclusie: May Cosmetics is de absolute winnaar
            </h3>
            
            <p className="text-black text-lg">
              Na uitvoerige tests van vijf verschillende foundations komt May Cosmetics met kop en schouders als beste uit de bus. Deze foundation scoort hoog op elk belangrijk punt — van kleurmatching en dekking tot huidverzorgende eigenschappen en klanttevredenheid.
            </p>
          </div>
          
          {/* Exclusive deal box */}
          <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
            <div className="text-center mb-4">
              <span className="bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-lg inline-block mb-2">💥 EXCLUSIEVE DEAL: Vandaag 60% korting</span>
            </div>
            
            <div className="space-y-2 mb-6">
              <p className="flex items-start gap-2 text-black">
                <span className="text-green-600 font-bold">✅</span>
                <span><strong>Risicoloos testen</strong> – 30 dagen geld-terug-garantie</span>
              </p>
              <p className="flex items-start gap-2 text-black">
                <span className="text-green-600 font-bold">✅</span>
                <span><strong>Gratis verzending</strong> – zolang de voorraad strekt</span>
              </p>
              <p className="flex items-start gap-2 text-black">
                <span className="text-green-600 font-bold">✅</span>
                <span><strong>Slechts tijdelijk beschikbaar</strong></span>
              </p>
            </div>
            
            {/* Large CTA Button */}
            <a 
              href="https://maycosmetics.nl/products/may-"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-b from-amber-400 to-amber-600 text-white text-center py-5 rounded-lg font-bold text-xl flex items-center justify-center shadow-md hover:from-amber-500 hover:to-amber-700 transition-all"
            >
              PROFITEER NU VAN DEZE AANBIEDING ➤
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  );
} 