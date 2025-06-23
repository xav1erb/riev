"use client";

import Image from "next/image";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Layout, Section, ContentBlock } from "../components/Layout";
import { Heading1, Heading2, Heading3, Paragraph, SmallText, Highlight } from "../components/Typography";
import { ProductFeatures } from "../components/Accordion";
import { useEffect, useState, useRef } from "react";

export default function BlogPage2() {
  const [countdown, setCountdown] = useState({
    hours: 1,
    minutes: 22,
    seconds: 15
  });

  const asideRef = useRef<HTMLDivElement | null>(null);
  const [stopStick, setStopStick] = useState(false);

  useEffect(() => {
    const initializeTimer = () => {
      const lastVisit = localStorage.getItem('lastVisitTimestamp2');
      const currentTime = Date.now();
      
      if (!lastVisit || (currentTime - parseInt(lastVisit)) > 30 * 60 * 1000) {
        setCountdown({
          hours: 1,
          minutes: 22,
          seconds: 15
        });
      } else {
        const savedCountdownStr = localStorage.getItem('countdownState2');
        if (savedCountdownStr) {
          try {
            const savedCountdown = JSON.parse(savedCountdownStr);
            if (typeof savedCountdown.hours === 'number' && 
                typeof savedCountdown.minutes === 'number' && 
                typeof savedCountdown.seconds === 'number') {
              setCountdown(savedCountdown);
            } else {
              setCountdown({
                hours: 1,
                minutes: 22,
                seconds: 15
              });
            }
          } catch (e) {
            console.error("Error parsing countdown state:", e);
            setCountdown({
              hours: 1,
              minutes: 22,
              seconds: 15
            });
          }
        }
      }
      
      localStorage.setItem('lastVisitTimestamp2', currentTime.toString());
    };
    
    initializeTimer();
    
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
        
        localStorage.setItem('countdownState2', JSON.stringify(updatedCountdown));
        
        return updatedCountdown;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!asideRef.current) return;
      const infoBox = document.getElementById('important-info');
      if (!infoBox) return;
      const asideRect = asideRef.current.getBoundingClientRect();
      const infoRect = infoBox.getBoundingClientRect();
      if (asideRect.bottom >= infoRect.top - 20) {
        setStopStick(true);
      } else {
        setStopStick(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      {/* Full-width colored background wrapper */}
      <div className="bg-[#F4B0B0] w-full">
        {/* Header with logo */}
        <header className="py-4">
          <Container>
            <nav className="text-sm text-[#4A3F3F] mb-2">
              <ol className="list-none p-0 m-0 flex gap-2 flex-wrap">
                <li><a href="#" className="hover:text-[#2D2424]">Home</a></li>
                <li className="text-[#4A3F3F]">{`>`}</li>
                <li><a href="#" className="hover:text-[#2D2424]">Beauty</a></li>
                <li className="text-[#4A3F3F]">{`>`}</li>
                <li><a href="#" className="hover:text-[#2D2424]">Huid</a></li>
                <li className="text-[#4A3F3F]">{`>`}</li>
                <li className="text-[#2D2424] font-medium">Foundation test</li>
              </ol>
            </nav>
            <h1 className="font-serif text-4xl text-[#2D2424]">De Beauty Blog</h1>
          </Container>
        </header>
      </div>

      {/* New flex container for main content and sidebar */}
      <div className="max-w-[1400px] mx-auto px-6 flex relative">
        {/* Main content column */}
        <div className="flex-1 lg:max-w-[70%]">
          <div className="pr-0 lg:pr-8">
            {/* Main content starts */}
            <div className="bg-white">
              <Container className="max-w-none p-0">
                <article className="max-w-[720px]">
                  <h1 className="font-serif text-[40px] leading-tight mb-6">
                    Mijn collega zei… <span className="italic">"Je lijkt wel tien jaar jonger!"</span> en dat zónder iets te laten doen
                  </h1>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Alles wat ik deed, was één eenvoudige foundation elke ochtend gebruiken. Zo kreeg ik weer die frisse, jeugdige uitstraling waar ik zo naar verlangde.
                  </p>

                  {/* Author info with refined styling */}
                  <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-8">
                    <Image
                      src="/Elise de Vries.png"
                      alt="Bianca Kremers"
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-gray-100"
                    />
                    <div>
                      <p className="font-medium">Door Bianca Kremers</p>
                      <p className="text-sm text-gray-500">3 mei 2025</p>
                    </div>
                  </div>

                  {/* Images with better spacing and layout */}
                  <div className="grid grid-cols-2 gap-6 mb-12">
                    <figure>
                      <div className="aspect-[3/4] relative">
                        <Image
                          src="/Before-After1.jpg"
                          alt="Voor en na gebruik van May foundation"
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm text-gray-500 text-center">Voor en na 4 weken gebruik</figcaption>
                    </figure>
                    <figure>
                      <div className="aspect-[3/4] relative">
                        <Image
                          src="/foundation-image.jpg"
                          alt="May foundation textuur"
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm text-gray-500 text-center">De zachte textuur van May foundation</figcaption>
                    </figure>
                  </div>

                  {/* Narrative section with refined typography */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Het was zo'n ochtend waarop alles op de automatische piloot draait: de kinderen riepen om ontbijt, de koffiemachine pruttelde en ik probeerde mijn gedachten bij de dagplanning te krijgen.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      Ik keek vluchtig in de spiegel – en bleef ineens hangen.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Niet omdat ik iets bizars zag, maar omdat ik mezelf <span className="font-medium">niet direct herkende</span>.
                    </p>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-8 mb-6">Ik wilde dat de buitenkant weer liet zien hoe ik me vanbinnen voelde</h2>

                  <p className="mb-6 text-black">
                    Die gedachte zette alles in beweging. Ik besloot dat mijn huid net zo energiek moest ogen als ik me voelde – zonder zware make-up of dure salonbehandelingen.
                  </p>

                  <div className="mb-10">
                    <Image
                      src="/Sandra-stralendehuid.jpg"
                      alt="Bianca denkt na"
                      width={900}
                      height={550}
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Ik voelde me jong..</h2>

                  <p className="mb-4 text-black">Maar dit zag ik niet meer terug in mijn gezicht.</p>
                  <p className="mb-4 text-black">De glans bleef weg.<br/>De fijne lijntjes bleven zitten.</p>

                  <p className="mb-4 text-black">
                    En als ik er iets over zei tegen vriendinnen, dan kreeg ik vaak te horen:<br/>
                    <span className="italic">"Tja, dat hoort erbij na je veertigste."</span><br/>
                    Of erger nog:<br/>
                    <span className="italic">"Je moet het gewoon accepteren."</span>
                  </p>

                  <p className="mb-4 text-black font-semibold">Maar dat voelde niet eerlijk.</p>
                  <p className="mb-4 text-black">
                    Ik <span className="font-semibold">vóélde</span> me niet oud.<br/>
                    Ik <span className="font-semibold">vóélde</span> me niet moe.<br/>
                    Ik voelde me juist… <span className="font-bold">jong en energiek.</span>
                  </p>

                  <p className="mb-6 text-black">Alleen mijn huid liet iets anders zien.</p>

                  <p className="mb-6 text-black">
                    Het ene product verdween na het andere in mijn badkamerkastje. Soms voelde mijn huid daarna wel iets zachter, maar <span className="italic">dat was het dan ook</span>.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4">Ik heb écht van alles geprobeerd..</h2>
                  {/* Vervolg van het verhaal */}

                  {/* Foto van 'kast vol producten' */}
                  <div className="mb-6">
                    <Image
                      src="/badkamer-skincare.webp"
                      alt="Plank vol oude huidproducten"
                      width={900}
                      height={550}
                      className="rounded-lg w-full h-auto object-cover opacity-90"
                    />
                  </div>

                  <p className="mb-4 text-black"><span className="font-bold">Crèmes, serums, maskers…</span> niks werkte écht…</p>
                  <p className="mb-4 text-black">Totdat mijn vriendin me op een ochtend een selfie stuurde. Haar huid straalde zó, dat ik meteen appte: <span className="italic">Heb jij iets laten doen?</span></p>
                  <p className="mb-4 text-black">Ze lachte: <span className="italic">"Nee joh, ik gebruik sinds kort een foundation die écht werkt. Gewoon thuis."</span></p>

                  <p className="mb-6 text-black">Ze vertelde me over de <span className="font-semibold">May Changing Foundation</span>, een slimme formule die zich aanpast aan je huidskleur en – belangrijker nog – boordevol huidverzorgende ingrediënten zit. Geen dikke laag cosmetica, maar een lichte textuur die je huid tegelijkertijd voedt.</p>

                  <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">Ik was eerlijk gezegd sceptisch</h2>

                  {/* Twee kolommen met visuals */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src="/Before-After2.jpg"
                        alt="Voor de test"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="aspect-[4/5] relative">
                      <Image
                        src="/foundation-image.jpg"
                        alt="May foundation druppel"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>

                  <p className="mb-4 text-black">Ik had vaker gedacht: <span className="italic">Misschien werkt dit wél.</span> Maar meestal was het een teleurstelling.</p>
                  <p className="mb-4 text-black">Toch klonk dit anders: geen vage belofte, geen 'magisch' serum. Gewoon een foundation die verzorgt terwijl je hem draagt – logisch eigenlijk.</p>
                  <p className="mb-4 text-black">De <span className="font-semibold">Skin Adapting Blend™</span> in May zorgt dat pigmenten zich pas op de huid tonen en tegelijk actieve stoffen zoals niacinamide en peptiden dieper inwerken.</p>
                  <p className="mb-6 text-black">Geen oppervlakkige camouflage, maar verbetering van binnenuit. <span className="font-bold">Dat</span> had ik nog niet gezien bij andere make-upproducten.</p>

                  <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4">Wetenschappelijk onderbouwd</h2>
                  <div className="mb-8">
                    <Image
                      src="/foundation-comparison.svg"
                      alt="May Skin Adapting Technology"
                      width={900}
                      height={550}
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  </div>

                  <p className="mb-4 text-black">Ik bleef er maar aan denken en heb uiteindelijk uitgezocht <span className="font-semibold">waarom</span> deze foundation zo bijzonder werkt. Het geheim zit in de combinatie van een <span className="italic">slimme pigment-capsule</span> en huidverbeterende ingrediënten.</p>

                  <p className="mb-4 text-black">De micro-capsules openen zodra je de foundation inmasseert, waardoor werkstoffen als <span className="font-semibold">niacinamide, peptiden en vitamine&nbsp;C</span> dieper komen dan gewone crèmes ooit zouden kunnen.</p>

                  <p className="font-bold text-black mt-6 mb-4">Dermatoloog Eva van Dijk vertelde me dat de May Foundation daardoor in <span className="underline">drie huidlagen</span> tegelijk werkt:</p>

                  <ol className="list-decimal pl-6 space-y-3 mb-6 text-black">
                    <li><span className="font-bold">Oppervlakte:</span> Niacinamide en vitamine&nbsp;C verhelderen pigmentvlekken en verminderen roodheid.</li>
                    <li><span className="font-bold">Diepere huid:</span> Peptiden ondersteunen collageen-aanmaak zodat fijne lijntjes zichtbaar zachter worden.</li>
                    <li><span className="font-bold">Huidbarrière:</span> Ceramiden en beta-glucan kalmeren, versterken en houden vocht vast voor een vollere, soepelere huid.</li>
                  </ol>

                  <p className="mb-8 text-black">Het resultaat is een huid die niet alleen <span className="font-semibold">zachter en egaler</span> oogt, maar ook <span className="font-semibold">van binnenuit</span> sterker wordt.</p>

                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Aanbevolen door experts</h2>
                  <p className="mb-2 text-black flex items-center gap-2"><span className="text-green-600 text-lg">★★★★★</span> 4,8 | 5.800+ Reviews</p>

                  <div className="mb-8">
                    <Image
                      src="/Productrender.jpg"
                      alt="May Changing Foundation flacon"
                      width={900}
                      height={550}
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  </div>

                  <div className="flex justify-center mb-10">
                    <a
                      href="https://maycosmetics.nl/products/may-changing-foundation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#F4B0B0] text-black text-center py-4 rounded-lg font-bold text-xl shadow-md hover:bg-[#E39D9D] transition-all"
                    >
                      Bekijk beschikbaarheid
                    </a>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Het resultaat? Weer stralen van binnenuit</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src="/Before-After3.jpg"
                        alt="May kit in de badkamer"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="aspect-[4/5] relative">
                      <Image
                        src="/Elise de Vries.png"
                        alt="Bianca na gebruik"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>

                  {/* Story paragraphs */}
                  <p className="mb-4 text-black">Mijn dochter zei laatst: <span className="italic">"Mam, je straalt zo de laatste tijd!"</span> – ze had geen idee dat de verandering simpelweg in een nieuw flesje foundation zat. Ik glimlachte alleen maar, wetend dat maanden van onzekerheid eindelijk achter me lagen.</p>

                  <p className="mb-4 text-black">Na de <span className="font-semibold">allereerste dag</span> merkte ik subtiel verschil: fijne lijntjes leken minder uitgesproken. Dat motiveerde me om door te gaan.</p>

                  <p className="mb-4 text-black">En toen ik hoorde dat May tijdelijk een grote korting aanbood, wist ik zeker: dit moeten méér vrouwen weten. Want je hoeft echt geen kliniek binnen te stappen om je huid weer dat frisse, jeugdige gevoel te geven.</p>

                  <h3 className="font-bold text-black mb-2">Waarom ik de May Changing Foundation niet meer wil missen:</h3>
                  <ul className="space-y-1 mb-6 text-black">
                    <li>✅ Ik kan het gewoon thuis gebruiken, zonder arts of salon.</li>
                    <li>✅ Mijn huid voelde direct zachter en voller – niet alleen aan de oppervlakte.</li>
                    <li>✅ Na een paar dagen zag ik zichtbaar resultaat dat ik niet durfde te hopen.</li>
                    <li>✅ Alles zit erbij: de foundation, een praktische pomp, en duidelijke uitleg.</li>
                    <li>✅ 30 dagen geld-terug-garantie: nul risico.</li>
                  </ul>

                  <h3 className="font-bold text-black mb-2">En het mooiste?</h3>
                  <p className="mb-4 text-black">Geef je huid de kans om weer te doen wat ze ooit vanzelf deed: stralen, zacht aanvoelen, vol eruitzien. Ik ben zó blij dat ik deze stap heb genomen.</p>

                  <p className="mb-4 text-black font-semibold">Jij verdient dat gevoel ook — niet "perfectie", maar rust, zelfvertrouwen en zichtbaar resultaat.</p>

                  <p className="text-center mb-6 font-semibold">Klik hieronder en ontdek zelf waarom zóveel vrouwen de May Foundation nooit meer willen missen.</p>

                  <div className="flex flex-col items-center gap-3 mb-10">
                    <a
                      href="https://maycosmetics.nl/products/may-changing-foundation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#F4B0B0] text-black text-center py-4 rounded-lg font-bold text-xl shadow-md hover:bg-[#E39D9D] transition-all"
                    >
                      Bekijk beschikbaarheid
                    </a>
                    <p className="text-sm text-gray-700">✔️ Geen risico: 30 dagen op proef – niet tevreden? 100% geld terug.</p>
                  </div>

                  {/* Important info box */}
                  <div id="important-info" className="bg-red-50 border-l-8 border-red-700 mb-12">
                    <div className="bg-red-700 text-white font-bold px-4 py-2">BELANGRIJKE INFORMATIE</div>
                    <div className="px-4 py-4 space-y-3 text-black">
                      <p className="font-bold">UPDATE</p>
                      <p>May Cosmetics heeft nu een tijdelijke actie voor lezers van dit artikel.</p>
                      <p>Je kunt de May Changing Foundation nu bestellen met 40% korting — zolang de voorraad strekt.</p>
                      <p>Omdat May kleine batches produceert om kwaliteit te garanderen, kan het <span className="font-semibold">snel uitverkocht</span> zijn.</p>
                      <p className="italic">💡 Tip: check altijd even of er nog voorraad is via de officiële website.</p>
                      <p className="font-bold">Waarom ik alleen via de officiële site bestel?</p>
                      <p>Daar weet ik zeker dat ik de echte formule krijg én de 30-dagen geld-terug-garantie.</p>
                    </div>
                  </div>

                  {/* Comments heading */}
                  <h2 className="text-2xl font-bold mb-4 text-black text-center">Lees de ervaringen van andere gebruikers hieronder in de comments</h2>

                  {/* Comments mockup */}
                  <div className="space-y-8">
                    {/* Comment 1 */}
                    <div className="flex gap-4">
                      <div className="w-[50px] h-[50px] rounded-full bg-[#FDF3F3] flex items-center justify-center">
                        <span className="text-2xl">👤</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-sm">Esther Willems <span className="font-normal text-gray-500">1 dag geleden</span></p>
                        <p className="text-black mb-2 text-sm">Ik had alles geprobeerd, maar niks hield écht aan. Met May zag ik binnen een week verschil – rustiger, zachter, voller. Mijn collega vroeg serieus: <em>"Heb je iets laten doen?"</em> Ik durf eindelijk weer zonder make-up de deur uit. En dat voelt zó goed.</p>
                        <div className="flex items-center gap-2 text-sm text-red-600"><span>❤️ 38 likes</span><span className="text-gray-500 cursor-pointer">Reageren</span></div>
                      </div>
                    </div>

                    {/* Comment 2 */}
                    <div className="flex gap-4">
                      <div className="w-[50px] h-[50px] rounded-full bg-[#FDF3F3] flex items-center justify-center">
                        <span className="text-2xl">👤</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-sm">Sophie Mertens <span className="font-normal text-gray-500">1 dag geleden</span></p>
                        <p className="text-black mb-2 text-sm">Ik twijfelde eerst, maar het voelde direct goed. Ik gebruik May nu 5 weken. M'n huid ziet er frisser uit. Voelt voller. En m'n man zei laatst: <em>"Je straalt weer."</em></p>
                        <div className="flex items-center gap-2 text-sm text-red-600"><span>❤️ 15 likes</span><span className="text-gray-500 cursor-pointer">Reageren</span></div>
                      </div>
                    </div>

                    {/* Comment 3 */}
                    <div className="flex gap-4">
                      <div className="w-[50px] h-[50px] rounded-full bg-[#FDF3F3] flex items-center justify-center">
                        <span className="text-2xl">👤</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-sm">Marijke de Graaf <span className="font-normal text-gray-500">1 dag geleden</span></p>
                        <p className="text-black mb-2 text-sm">Eerlijk? Ik dacht dat ik aan botox moest beginnen. Maar deze foundation verraste me. Geen schilfers, geen roodheid – gewoon een huid die zachter oogt, gladder aanvoelt.</p>
                        <div className="flex items-center gap-2 text-sm text-red-600"><span>❤️ 21 likes</span><span className="text-gray-500 cursor-pointer">Reageren</span></div>
                      </div>
                    </div>
                  </div>
                </article>
              </Container>
            </div>
          </div>
        </div>

        {/* Sidebar column */}
        <div className="hidden lg:block w-[380px]">
          <div className="sticky top-6">
            <div className="bg-white rounded-2xl shadow-md">
              <div className="p-8">
                <h2 className="font-serif text-[32px] leading-tight mb-4">Een huid die zachter, voller en frisser oogt</h2>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-medium mb-2">Aangeraden:</h3>
                  <div className="flex justify-center items-center gap-1 mb-1">
                    <span className="text-emerald-500 text-2xl">✦✦✦✦✦</span>
                  </div>
                  <p className="text-center text-[15px] text-gray-700">4,8 | 5.800+ Reviews</p>
                </div>

                <div className="relative w-full aspect-[4/3] mb-6">
                  <Image
                    src="/6-2.jpg"
                    alt="May Foundation"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                <div className="text-center mb-8">
                  <div className="font-serif text-[42px] tracking-wider text-[#394149] mb-6">MAY.</div>
                  <div className="space-y-2 mb-8">
                    <em className="text-xl text-[#394149] font-medium italic block">Changing Foundation</em>
                    <h4 className="text-2xl font-medium text-center">
                      Foundation die zó slim<br />zich aanpast aan<br />jouw huidskleur.
                    </h4>
                  </div>
                  <p className="text-[#4A5662] text-center leading-relaxed mb-6">
                    CI 77891 zorgt voor de<br />
                    kleurverandering, terwijl<br />
                    Centella Asiatica je huid<br />
                    kalmeert en herstelt.
                  </p>
                  <div className="bg-[#FDF3F3] rounded-xl p-6 text-center">
                    <p className="text-[#4A5662] text-lg mb-6">
                      GLOW SALE: Ontvang tot 40% korting én gratis verzending!
                    </p>
                    <a
                      href="https://maycosmetics.nl/products/may-changing-foundation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#F4B0B0] text-black text-center py-3.5 rounded-xl font-medium hover:bg-[#E39D9D] transition-colors mb-6"
                    >
                      Bekijk beschikbaarheid
                    </a>
                    <div className="space-y-3 text-[#4A5662] text-sm">
                      <div className="flex items-center gap-2">
                        <span>✓</span>
                        <span>Zolang de voorraad strekt</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✓</span>
                        <span>30 dagen garantie</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra bottom padding to avoid overlap with sticky banner */}
      <div className="pb-24"></div>

      {/* Bottom sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-3 z-50">
        <Container className="max-w-[1120px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-gray-800 font-medium">Bekijk de 40% kortingsactie</span>
                <span className="text-amber-400">👉</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span>✓</span>
                <span>Geen risico: 30 dagen op proef – niet tevreden? 100% geld terug.</span>
              </div>
            </div>
            <a
              href="https://maycosmetics.nl/products/may-changing-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F4B0B0] text-black px-8 py-2.5 rounded-full font-medium hover:bg-[#E39D9D] transition-colors"
            >
              Bekijk beschikbaarheid
            </a>
          </div>
        </Container>
      </div>
    </Layout>
  );
} 