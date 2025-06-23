"use client";

import Image from "next/image";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Layout, Section, ContentBlock } from "../../components/Layout";
import { Heading1, Heading2, Heading3, Paragraph, SmallText, Highlight } from "../../components/Typography";
import { ProductFeatures } from "../../components/Accordion";
import { useEffect, useState } from "react";

export default function BlogPage2() {
  const [countdown, setCountdown] = useState({
    hours: 1,
    minutes: 22,
    seconds: 15
  });

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
            Foundations in de hardheidstest: Mijn eerlijke ervaringsverhaal van de 3 populairste merken
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
                  src="/blog2/Bianca Cremers.png" 
                  alt="Bianca Kremers" 
                  width={70}
                  height={70}
                  className="rounded-full border-2 border-gray-100"
                />
                <div>
                  <p className="font-bold text-black text-lg mb-1">Door Bianca Kremers | 3 mei 2025 | 09:47 uur</p>
                  <p className="text-gray-700 mb-0 text-base leading-relaxed">
                    Ik ben Bianca, 58, en heb in de afgelopen jaren zo ongeveer alles geprobeerd wat tegen mijn huidproblemen en oneffenheden zou moeten helpen - niets werkte langdurig. Normale foundations kon ik nauwelijks nog verdragen.
                  </p>
                  <p className="text-gray-700 mt-4">
                    Dus heb ik drie van de populairste foundations zelf gekocht en grondig getest - en daarbij een duidelijke favoriet gevonden.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-black mb-6">Eindelijk weer een stralende huid</h2>
            <p className="text-black mb-6">
              Op een gegeven moment kon ik nauwelijks nog make-up dragen: Mijn huid voelde als een betonblok, mijn poriën als verstopt en daarbij constant een trekkerig gevoel. Normale foundations waren voor mij een absolute ramp.
            </p>
            <p className="text-black mb-6">
              Ik haatte ze. Ik werd er gek van. Alles was te zwaar, te dik, te dekkend. In plaats van te helpen, leken die producten mijn huid alleen maar verder te irriteren. Te dik, te zwaar, constant drukplekken - en het gevoel dat ze mijn huidproblemen alleen maar erger maakten.
            </p>
            <p className="text-black mb-6">
              Toen kwam het moment dat ik geen foundation meer wou dragen – ik voelde me er simpelweg niet meer goed bij en het werd alleen maar erger.
            </p>
            <p className="text-black mb-8">
              Een paar dagen later zei mijn huidspecialist: "Probeer eens de nieuwe generatie foundations. Die kunnen wonderen doen."
            </p>
            <p className="text-black mb-8">
              Ik was sceptisch - maar ook ten einde raad. Dus heb ik me erin verdiept en besteld. Drie merken die volgens reviews tot de beste behoren: May, Meroda en Hera.
            </p>

            <div className="bg-[#f5f7f2] p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl text-black mb-4">Wat ik wilde weten:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Welke brengen echt verbetering?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Welke zijn het dagelijks gebruik waard?</span>
                </li>
              </ul>
            </div>

            <p className="text-black mb-8">
              Ik heb ze 30 dagen lang bij alle activiteiten gedragen - tijdens het winkelen, op kantoor, zelfs tijdens het sporten.
            </p>
          </div>
        </Container>
      </div>

      <Section className="bg-white py-12">
        <Container className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            De test: 3 foundations, 30 dagen lang
          </h2>

          {/* May Foundation Review */}
          <div className="mb-16">
            <div className="bg-[#f5f7f2] rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">1. May Changing Foundation</h3>
                  <p className="text-lg text-green-600 font-bold mt-1">Cijfer: 9.8/10</p>
                </div>
                <div className="bg-amber-500 text-white px-4 py-1 rounded-full font-bold">
                  Testwinnaar
                </div>
              </div>

              {/* Image at the top, full width */}
              <div className="flex justify-center mb-8">
                <Image
                  src="/6-2.jpg"
                  alt="May Foundation Review"
                  width={350}
                  height={350}
                  className="rounded-xl"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Text content below image, full width */}
              <div>
                <p className="text-black mb-4">
                  Ik herinner me nog goed mijn eerste ervaring met de May Foundation.
                </p>
                <p className="text-black mb-4">
                  Het was een warme dag, ik was net klaar met mijn ochtendroutine - en al na een paar minuten was het duidelijk: Dit voelt heel anders aan.
                </p>
                <p className="text-black mb-4">
                  Geen trekkerig gevoel, geen zwaar masker, maar licht, flexibel en verrassend dekkend. De foundation past zich aan mijn huid aan, niet andersom.
                </p>
                <p className="text-black mb-4">
                  En na ongeveer tien dagen - ik kon het nauwelijks geloven - waren mijn huidproblemen merkbaar verminderd.
                </p>
                <p className="text-black mb-4 font-bold text-green-700">
                  Gezicht, poriën, textuur: alles zichtbaar verbeterd.
                </p>
                <p className="text-black">
                  De dunne, aanpasbare textuur beschermt zonder te verstikken - geen dikke laag meer en eindelijk geen verstopte poriën.
                </p>
                <p className="text-black mt-4">
                  Of het nu een warme of koele dag is - ik kan er overal comfortabel mee voor de dag komen. En zelfs na een lange dag blijft mijn huid aangenaam fris - geen glimmende zones meer.
                </p>
                <p className="text-black mt-4">
                  Ik gebruik de May Foundation inmiddels dagelijks - voor werk, speciale gelegenheden, zelfs tijdens het sporten.
                </p>
                <p className="text-black mt-4 font-bold">
                  Voor mij is het duidelijk: May is mijn persoonlijke favoriet.
                </p>
                <p className="text-black mt-4">
                  Wie een natuurlijke, comfortabele en effectieve foundation zoekt, moet deze absoluut proberen.
                </p>

                <p className="flex items-center justify-center gap-2 text-amber-600 font-bold text-lg mt-8 mb-2">
                  <span>⚡</span>Toen ik bestelde was er €10 korting – van €34,95 voor €24,95
                </p>
                <p className="text-center mb-8">
                  Ik heb direct een tweede foundation besteld – zo tevreden was ik over het resultaat.
                </p>

                <div className="flex justify-center items-center space-x-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#20b2aa]">{countdown.hours.toString().padStart(2, '0')}</div>
                    <div className="text-sm text-gray-600">Uur</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#20b2aa]">{countdown.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-sm text-gray-600">Minuten</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#20b2aa]">{countdown.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-sm text-gray-600">Seconden</div>
                  </div>
                </div>

                <a 
                  href="https://maycosmetics.nl/products/may-changing-foundation" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#F4B0B0] text-black text-center py-4 rounded-lg font-bold text-xl flex items-center justify-center shadow-md hover:bg-[#E39D9D] transition-all"
                >
                  BESCHIKBAARHEID CONTROLEREN ➤
                </a>
              </div>
            </div>
          </div>

          {/* Meroda Foundation Review */}
          <div className="mb-16">
            <div className="bg-[#f5f7f2] rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">2. Meroda Foundation</h3>
                  <p className="text-lg text-gray-600 font-bold mt-1">Cijfer: 7.2/10</p>
                </div>
                <div className="bg-gray-500 text-white px-4 py-1 rounded-full font-bold">
                  Tweede plaats
                </div>
              </div>

              {/* Image at the top, full width */}
              <div className="flex justify-center mb-8">
                <Image
                  src="/Meroda PP 1.webp"
                  alt="Meroda Foundation Review"
                  width={350}
                  height={350}
                  className="rounded-xl"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Text content below image, full width */}
              <div>
                <p className="text-black mb-4">
                  Meroda's foundation is een populaire keuze en wordt vaak geprezen om de lichte textuur en natuurlijke finish. De dekking is degelijk en het aanbrengen gaat vlot, wat het product toegankelijk maakt voor dagelijks gebruik.
                </p>
                <p className="text-black mb-4">
                  De eerste indruk was positief - de foundation voelt licht aan en geeft een mooie, natuurlijke uitstraling. Het aanbrengen gaat soepel en de dekking is in eerste instantie precies goed.
                </p>
                <p className="text-black mb-4">
                  Maar na ongeveer 3 uur begon de foundation te vervagen en werd de dekking ongelijkmatig. Op warmere dagen was dit effect nog sterker merkbaar, wat regelmatig bijwerken noodzakelijk maakte.
                </p>
                <p className="text-black mb-4">
                  Met een hogere prijs per milliliter is Meroda een bekende naam — maar niet per se de meest verstandige keuze als je kijkt naar prijs-kwaliteitverhouding, vooral gezien de korte houdbaarheid op de huid.
                </p>
                <div className="mt-8">
                  <div 
                    aria-disabled="true"
                    className="w-full bg-[#F4B0B0] text-black text-center py-4 rounded-lg font-bold text-xl flex items-center justify-center shadow-md opacity-60 select-none cursor-default"
                  >
                    NIET BESCHIKBAAR
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hera Foundation Review */}
          <div className="mb-16">
            <div className="bg-[#f5f7f2] rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">3. Hera Foundation</h3>
                  <p className="text-lg text-gray-600 font-bold mt-1">Cijfer: 6.5/10</p>
                </div>
                <div className="bg-gray-500 text-white px-4 py-1 rounded-full font-bold">
                  Derde plaats
                </div>
              </div>

              {/* Image at the top, full width */}
              <div className="flex justify-center mb-8">
                <Image
                  src="/Hera PP 1.jpg"
                  alt="Hera Foundation Review"
                  width={350}
                  height={350}
                  className="rounded-xl"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Text content below image, full width */}
              <div>
                <p className="text-black mb-4">
                  Hera belooft veel met hun nieuwe foundation formule. De verpakking is luxe en de marketing spreekt over "revolutionaire technologie". Helaas bleef de praktijkervaring wat achter bij de beloftes.
                </p>
                <p className="text-black mb-4">
                  Ik heb de foundation grondig getest in verschillende situaties - tijdens het sporten, op kantoor, tijdens buitenactiviteiten en zelfs tijdens een warme dag op het strand. Ook heb ik verschillende applicatiemethoden geprobeerd: met een kwast, beauty blender en mijn vingers.
                </p>
                <p className="text-black mb-4">
                  Na twee weken intensief testen onder verschillende omstandigheden werd het patroon duidelijk: de foundation voelt zwaarder aan dan verwacht en heeft de neiging om in de loop van de dag wat te gaan "zitten". 
                </p>
                <p className="text-black mb-4">
                  Ondanks het uitgebreide testen en verschillende applicatiemethoden bleef het resultaat teleurstellend. Voor de premium prijs had ik eerlijk gezegd meer verwacht.
                </p>
                <div className="mt-8">
                  <div 
                    aria-disabled="true"
                    className="w-full bg-[#F4B0B0] text-black text-center py-4 rounded-lg font-bold text-xl flex items-center justify-center shadow-md opacity-60 select-none cursor-default"
                  >
                    NIET BESCHIKBAAR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Comparison Table Section - moved here */}
      <Section className="bg-white py-8">
        <Container className="max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-lg mb-2 font-bold">Vergelijking in één oogopslag:</p>
            <p className="mb-6">Hier zie je in één overzicht welke foundation voor mij echt werkte – en welke minder. Misschien helpt het je bij je eigen keuze.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg bg-white">
              <thead>
                <tr className="bg-[#f5f7f2]">
                  <th className="p-4 text-left font-bold text-lg"></th>
                  <th className="p-4 text-center font-bold text-lg">
                    <div className="flex flex-col items-center">
                      <Image src="/6-2.jpg" alt="May" width={80} height={80} className="mb-2 rounded" />
                      <span className="font-bold">May</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-bold text-lg">
                    <div className="flex flex-col items-center">
                      <Image src="/Meroda PP 1.webp" alt="Meroda" width={80} height={80} className="mb-2 rounded" />
                      <span className="font-bold">Meroda</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-bold text-lg">
                    <div className="flex flex-col items-center">
                      <Image src="/Hera PP 1.jpg" alt="Hera" width={80} height={80} className="mb-2 rounded" />
                      <span className="font-bold">Hera</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-center text-base">
                <tr>
                  <td className="p-3 font-semibold text-left">Direct comfortabel gevoel</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✗</td>
                </tr>
                <tr className="bg-[#f5f7f2]">
                  <td className="p-3 font-semibold text-left">Past zich aan de huid aan</td>
                  <td>✅</td>
                  <td>✗</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-left">Blijft de hele dag mooi</td>
                  <td>✅</td>
                  <td>✗</td>
                  <td>✅</td>
                </tr>
                <tr className="bg-[#f5f7f2]">
                  <td className="p-3 font-semibold text-left">Geen glimmende zones</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✗</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-left">Licht & natuurlijk</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr className="bg-[#f5f7f2]">
                  <td className="p-3 font-semibold text-left">Goede prijs-kwaliteit</td>
                  <td>✅</td>
                  <td>✗</td>
                  <td>✗</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-left">Breed kleurenaanbod</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section className="bg-white py-12">
        <Container className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Mijn eerlijke conclusie:</h2>
          <h3 className="text-2xl font-bold mb-4">Hoe één foundation mijn huidproblemen eindelijk oploste</h3>
          <p className="mb-4 text-lg">
            Na <span className="font-bold">jaren van worstelen met een gevoelige huid</span>, onzuiverheden en teleurstellende make-up, heb ik eindelijk een foundation gevonden die <span className="font-bold">echt het verschil maakt</span>:
          </p>
          <p className="mb-4 text-lg font-bold">De May Changing Foundation is voor mij zonder twijfel de favoriet!</p>
          <p className="mb-4 text-lg">
            Al na de eerste dagen voelde mijn huid zich "juist" aan – licht, comfortabel, natuurlijk.
          </p>
          <p className="mb-4 text-lg">
            En na slechts een paar dagen gebeurde wat ik zelf bijna niet kon geloven: <span className="font-bold">mijn huid was zichtbaar rustiger en egaler</span>.
          </p>
          <p className="mb-4 text-lg font-bold">Geen trekkerig gevoel meer, geen glimmende zones – ik kon eindelijk weer zelfverzekerd de deur uit.</p>
          <p className="mb-4 text-lg">
            In vergelijking met de andere merken was May niet alleen prettiger in gebruik, maar ook <span className="font-bold">merkbaar effectiever</span>.
          </p>
          <p className="mb-4 text-lg font-bold">Voor mij was dit de beste keuze in lange tijd.</p>
          <p className="mb-4 text-lg">
            En het mooiste: <span className="font-bold">je kunt het risicovrij proberen</span> met 30 dagen geld-terug-garantie en gratis verzending.
          </p>
        </Container>
      </Section>

      {/* Final callout card at the bottom */}
      <Section className="bg-[#f5f5f5] py-10">
        <Container className="max-w-2xl mx-auto px-4">
          <div className="bg-[#ededed] rounded-xl p-8 shadow-md border border-amber-200">
            <p className="text-2xl font-bold mb-2 flex items-center gap-2">
              <span>⚠️</span> <span className="text-gray-800">Let op:</span>
            </p>
            <h3 className="text-2xl font-extrabold mb-4 text-gray-800">De May Foundation is vaak snel uitverkocht.</h3>
            <p className="mb-4 text-lg text-gray-800">Toen ik mijn May Foundation bestelde, had ik geluk dat hij nog beschikbaar was – inmiddels is het product regelmatig binnen enkele dagen uitverkocht.</p>
            <p className="mb-4 font-bold text-black">Wie zeker wil zijn van een exemplaar, moet NU handelen!</p>
            <p className="mb-4 font-bold text-red-600">Op dit moment is er zelfs een ongelofelijke 60% korting! Dit mag je niet missen!</p>
            <p className="mb-4 font-bold text-black">Ik kan mijn favoriet echt van harte aanbevelen, want ik kan eindelijk weer vol vertrouwen de deur uit – zelfs na een lange dag.</p>
            <p className="mb-4 font-bold text-black">Alles weer stralend en comfortabel.</p>
            <p className="mb-4 text-gray-800">En ik weet zeker: voor jou werkt het ook!</p>
            <a
              href="https://maycosmetics.nl/products/may-changing-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-b from-amber-300 to-amber-500 text-black text-center py-4 rounded-lg font-bold text-xl flex items-center justify-center shadow-md hover:from-amber-400 hover:to-amber-600 transition-all mt-6 border border-gray-400"
            >
              NU BESTELLEN ➤
            </a>
          </div>
        </Container>
      </Section>
    </Layout>
  );
} 