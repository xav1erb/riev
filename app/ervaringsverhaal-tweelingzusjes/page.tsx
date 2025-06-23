import Image from "next/image";
import { Container } from "../components/Container";
import { Layout, Section } from "../components/Layout";
import { Button } from "../components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tweelingzusjes Testen May Foundation - Verrassend Resultaat | De Beauty Blog",
  description: "Zou één foundation werken voor een tweeling met verschillende huidtypes? Sandra en Marjon (53) testten de May Changing Foundation - het verschil was verbluffend.",
};

export default function BlogPage2() {
  return (
    <Layout>
      {/* Header with logo */}
      <header className="bg-white py-2 px-6 flex justify-center border-b border-gray-200">
        <div className="max-w-[600px] mx-auto px-6">
          <div className="text-center">
            <div className="text-sm uppercase tracking-wider text-gray-700">DE</div>
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-gray-800">Beauty</h1>
            <div className="uppercase tracking-widest text-xl font-medium text-gray-700">BLOG</div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <Section className="bg-[#fefaf8] py-12 md:pt-16 md:pb-20">
        <Container className="max-w-[960px] mx-auto px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center mb-6 md:mb-10">
            Zou één foundation echt werken voor een tweeling met verschillende huidtypes? Hoe een unieke formule Sandra en Marjon (53) hielp hun "perfecte glow" te vinden.
          </h1>

          {/* Trust icons strip – NEW */}
          <div className="flex items-center justify-center gap-6 text-gray-700 text-sm mb-6">
            <div className="flex items-center gap-2">
              <span className="inline-block w-5 h-5 text-center">🧪</span>
              <span>Tweeling-getest</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-5 h-5 text-center">🔬</span>
              <span>Dermatone™ Tech</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-5 h-5 text-center">✅</span>
              <span>30 dagen garantie</span>
            </div>
          </div>

          {/* Main image of the twins */}
          <div className="mb-12 flex justify-center">
            <Image
              src="/Twinsisters.png"
              alt="Tweelingzussen Sandra en Marjon met en zonder May Changing Foundation"
              width={700}
              height={466}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              Kan één foundation de oplossing zijn voor twee zussen met totaal verschillende huidtypes? De 53-jarige tweeling Sandra en Marjon besloten het experiment aan te gaan met een nieuwe, revolutionaire 'Changing Foundation'.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              De belofte? Een formule die zich perfect aanpast aan <span className="font-semibold">elke huidskleur en -type</span>. Sandra documenteerde haar opmerkelijke resultaten naast die van haar zus Marjon, die met heel andere huidproblemen worstelt. Het verschil was verbluffend.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              In dit artikel lees je over hun fascinerende verhaal en ontdek je de technologie achter deze unieke foundation.
            </p>

            {/* CTA 1 */}
            <a href="#final-cta" className="block bg-black py-2 px-3 rounded-lg text-center my-8 md:my-10 mx-auto w-fit shadow-lg no-underline">
              <div>
                <span className="font-sans text-base font-bold !text-white block leading-tight">Test hier de May Changing Foundation!</span>
                <span className="font-sans text-sm !text-white font-normal block leading-tight">(Profiteer nu: €10 Korting!)</span>
              </div>
            </a>

            <div className="text-sm text-gray-600 mb-12 italic">
              <p>Door: Redactie De Beauty Blog, Huidverzorgingsexperts</p>
              <p>Gepubliceerd: 16 september 2024 - Meer dan 150.000 keer gelezen</p>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Jarenlang zochten de ontwikkelaars van May Cosmetics naar een alternatief voor de eindeloze zoektocht naar de perfecte foundationkleur, een probleem waar vooral vrouwen met unieke of gemengde huidtinten mee worstelen.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              De doorbraak kwam met een revolutionaire technologie genaamd <span className="font-semibold">Dermatone</span>: micro-ingekapselde pigmenten die bij contact met de huid vrijkomen en zich <span className="font-semibold">direct aanpassen aan de individuele teint</span>. Een universele oplossing die de noodzaak voor meerdere tinten overbodig maakt.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Deze innovatieve formule "ontwaakt" als het ware op de huid, egaliseert oneffenheden en zorgt voor een natuurlijke, stralende finish zonder een zwaar of maskerachtig gevoel.
            </p>

            <h2 className="text-3xl font-bold text-center my-10 text-black">"Onze huid had echt een oppepper nodig"</h2>

            <p className="text-lg leading-relaxed mb-6">
              Sandra en Marjon (53), een eeneiige tweeling, stonden ondanks hun genetische gelijkenis voor heel verschillende uitdagingen. Sandra, met een licht olijfkleurige ondertoon, merkte dat fijne lijntjes en droogheid steeds zichtbaarder werden. Marjon, met haar koelere, porseleinachtige teint, had juist meer last van roodheid en een ongelijkmatige textuur.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              "We hadden het er vaak over," vertelt Sandra. "Je kijkt in de spiegel en ziet dat je huid verandert. De foundations die we gebruikten, voelden vaak als een masker of hadden net niet de juiste kleur." Marjon knikt instemmend: "Ik was constant bezig mijn roodheid te verbergen, maar de meeste producten maakten het alleen maar erger of zagen er onnatuurlijk uit. We waren beiden toe aan iets nieuws, iets dat écht werkte."
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Frustratie over dure miskopen en de eindeloze zoektocht naar de perfecte match was een bekend gevoel. Toen ontdekte Sandra via een beautyblog een artikel over de May Changing Foundation, een product dat claimde zich aan te passen aan <span className="font-semibold">elke</span> huidskleur en textuur. Het leek te mooi om waar te zijn, maar het wekte hun nieuwsgierigheid.
            </p>

            {/* Expert Section */}
            <h2 className="text-3xl font-bold text-center my-10 pt-8 text-black">Beauty Experts Staan Versteld van deze Unieke Foundation</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
              <div>
                <Image 
                  src="/Productshot.jpg" 
                  alt="May Changing Foundation product shot"
                  width={500} 
                  height={500} 
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
                <div>
                <Image 
                  src="/Expert.jpg" 
                  alt="Bekende beauty expert beveelt May Changing Foundation aan"
                  width={500} 
                  height={500} 
                  className="rounded-lg shadow-lg mx-auto"
                />
            </div>
          </div>

            <p className="text-lg leading-relaxed mb-6">
              Op een avond scrolde Sandra door haar favoriete beauty-community en stuitte op een video die viraal ging. Een bekende Nederlandse visagiste, bekend om haar kritische en eerlijke reviews, testte de May Changing Foundation live. De visagiste was aanvankelijk sceptisch, vooral over de claim dat één kleur zich perfect zou aanpassen.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Haar belofte deed Sandra opveren:
            </p>
            <p className="text-xl font-semibold italic text-center text-gray-700 my-6">
              "Past zich perfect aan, binnen enkele minuten – ongeacht je huidskleur – wetenschappelijk onderbouwd!"
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Sandra was sprakeloos.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Zouden vrouwen zoals zij en Marjon, met zulke verschillende huidbehoeften, eindelijk een product kunnen vinden dat voor <span className="font-semibold">beiden</span> werkt?
            </p>
            <p className="text-lg italic leading-relaxed mb-6">
              "Zou dit dé oplossing kunnen zijn?" dacht Sandra hoopvol.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Toen ze hoorde van de 30-dagen tevredenheidsgarantie, gaf ze zichzelf een duwtje en bestelde.
            </p>
            <p className="text-lg leading-relaxed mb-10">
              Tenslotte had ze al honderden euro's uitgegeven aan allerlei foundations die beloftes maakten maar niet werkten. Dit nieuwe product van May leek in vergelijking zelfs gunstig geprijsd, zeker als het écht zou werken voor zowel haar als Marjon.
            </p>
            
            {/* CTA 2 */}
            <a href="#final-cta" className="block bg-black py-2 px-3 rounded-lg text-center my-8 md:my-10 mx-auto w-fit shadow-lg no-underline">
              <div>
                <span className="font-sans text-base font-bold !text-white block leading-tight">Test hier de May Changing Foundation!</span>
                <span className="font-sans text-sm !text-white font-normal block leading-tight">(Profiteer nu: €10 Korting!)</span>
              </div>
            </a>


            <p className="text-lg italic leading-relaxed mb-6">
              "Ik was zo benieuwd! Zou één foundation echt mijn ongelijkmatige teint kunnen perfectioneren en tegelijkertijd de roodheid van Marjon kunnen camoufleren?" vertelt Sandra.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Ze probeerde de May Changing Foundation direct uit.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Eerst een kleine hoeveelheid op haar handrug. De witte crème transformeerde onmiddellijk naar een tint die perfect bij haar huid leek te passen. "Het voelde meteen anders," merkte ze op. "De textuur was licht en voelde totaal niet zwaar aan op de huid."
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Toen ze het op haar gezicht aanbracht, was het resultaat direct zichtbaar.
            </p>
            <p className="text-xl font-semibold italic text-center text-gray-700 my-8">
              "Ik was verbluft. Mijn huid was direct egaal, de fijne lijntjes leken minder diep en mijn teint zag er fris en natuurlijk uit. Het was alsof ik een filter over mijn gezicht had, maar dan zonder het onnatuurlijke effect. Het was gewoon... mijn huid, maar dan beter!"
            </p>



            <p className="text-lg leading-relaxed mb-6">
              Haar tweelingzus Marjon bleef echter sceptisch en zette haar gebruikelijke, omslachtige make-up routine voort, die bestond uit meerdere producten om haar roodheid te camoufleren en haar huidtint te evenaren – met wisselend succes.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Sinds die dag zijn er vier weken verstreken – en de verschillen tussen Sandra en Marjon zijn opzienbarend.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              "We worden voortdurend aangesproken omdat niemand kan geloven dat we een tweeling zijn," vertelt Sandra. "Ik kijk vol ongeloof in de spiegel en kan nauwelijks bevatten hoeveel beter mijn huid er nu uitziet en aanvoelt, terwijl Marjon nog steeds worstelt met haar huidproblemen en het vinden van de juiste dekking."
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Sandra's huid lijkt met de dag egaler, fijne lijntjes zijn verzacht. De huid rond haar ogen is steviger, voller en zachter.
            </p>
            <p className="text-lg italic leading-relaxed mb-6 text-center">
              "Alsof iemand een verkreukeld laken heeft gladgestreken!" vertelt ze en lacht daarbij zichtbaar opgelucht.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Marjon daarentegen oogt, ondanks dat ze op de minuut even oud zijn, zichtbaar meer getekend door haar specifieke huidzorgen die haar oude foundation niet kon verhullen.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Sandra's verwachtingen werden inderdaad overtroffen.
            </p>
            <p className="text-lg leading-relaxed mb-10">
              Haar specifieke huidproblemen (droogheid, fijne lijntjes) zijn vandaag de dag minder zichtbaar, en haar zelfvertrouwen is duidelijk versterkt – zonder dure behandelingen of pijnlijke ingrepen, maar simpelweg door een foundation die écht werkt voor haar unieke huid.
            </p>



            <h3 className="text-2xl md:text-3xl font-bold text-center my-10 text-black">Werkt May Changing Foundation écht voor iedere vrouw?</h3>
            <p className="text-lg leading-relaxed mb-6">
              De vraag rijst: functioneert de innovatieve May Changing Foundation ook bij iedere vrouw, ongeacht huidskleur, -type of leeftijd? De ervaringen van Sandra en vele anderen, en de wetenschap achter de kleur-aanpassende technologie, suggereren van wel.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              De positieve effecten zijn niet alleen gebaseerd op anekdotes. De foundation maakt gebruik van de <span className="font-semibold">Dermatone&trade; technologie</span>, die micro-ingekapselde pigmenten bevat die pas bij contact met de huid vrijkomen. Deze passen zich aan de unieke pH-waarde en textuur van de huid aan, wat zorgt voor een natuurlijke, egale teint zonder maskereffect. Daarnaast bevat de formule vaak huidverzorgende ingrediënten die bijdragen aan hydratatie en een gezonde uitstraling op lange termijn.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Ook Marjon is inmiddels overtuigd – nadat ze het drastische verschil bij haar tweelingzus met eigen ogen heeft gezien. "Ik was stomverbaasd," geeft ze toe. "Ik heb Sandra's foundation geleend, en voor het eerst sinds jaren voelde mijn huid comfortabel aan mét make-up, en zag mijn roodheid er rustiger uit zonder dikke lagen product."
            </p>

            {/* Social Proof Section */}
            <p className="text-lg leading-relaxed mb-6">
              Sinds May Changing Foundation op de markt is, staat het internet vol met positieve ervaringsberichten en spectaculaire voor-en-na-foto's – zoals die van de tweelingzussen Sandra en Marjon, die we u hebben laten zien.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Daarmee zijn de tweeling niet alleen: Hier zijn vier verdere voorbeelden van in totaal meer dan <span className="font-bold">230.000 tevreden klanten</span>.
            </p>

            {/* Before/After Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <Image src="/Before-After1.jpg" alt="Voor en na Klant 1" width={500} height={250} className="rounded-md shadow-sm w-full object-cover" />
              <Image src="/Before-After2.jpg" alt="Voor en na Klant 2" width={500} height={250} className="rounded-md shadow-sm w-full object-cover" />
              <Image src="/Before-After3.jpg" alt="Voor en na Klant 3" width={500} height={250} className="rounded-md shadow-sm w-full object-cover" />
              <Image src="/Before-After4.jpg" alt="Voor en na Klant 4" width={500} height={250} className="rounded-md shadow-sm w-full object-cover" />
            </div>

            {/* Disclaimer */}
            <p className="text-sm italic text-gray-600 text-center mb-8">
              *Resultaten kunnen variëren / zijn mogelijk niet typisch.
            </p>

            <div className="bg-white py-12">
              <p className="text-lg text-center mb-8">
                De zeer effectieve May Changing Foundation heeft absoluut het potentieel om de beautywereld op zijn kop te zetten. Wilt u ook uw schoonheidsroutine revolutioneren?
              </p>

              {/* Sandra's Conclusion */}
              <div className="max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-6">Sandra's Conclusie:</h2>
                <blockquote className="border-l-4 border-gray-300 pl-4 mb-6">
                  <p className="text-lg italic mb-4">"Ik kan de May Changing Foundation echt iedere vrouw aanbevelen.</p>
                  <p className="text-lg italic mb-4">'s Ochtends na het wakker worden voelt mijn huid strak en soepel aan.</p>
                  <p className="text-lg italic mb-4">Mijn teint straalt en ik heb het gevoel er frisser en meer uitgerust uit te zien – zonder dure behandelingen!</p>
                  <p className="text-lg italic mb-4">De fijne lijntjes zijn als 'weggeslagen'.</p>
                  <p className="text-lg italic">Dit nieuwe zelfbewustzijn voelt goed en geeft me weer meer levensvreugde."</p>
                </blockquote>
                <p className="text-lg mb-8">"En het beste: Na jaren waarin we er precies hetzelfde uitzagen, kan men nu voor het eerst een duidelijk verschil zien tussen mij en mijn tweelingzus Marjon!"</p>
              </div>

              {/* Marjon's Conclusion */}
              <div className="max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-6">Marjon's Conclusie:</h2>
                <blockquote className="border-l-4 border-gray-300 pl-4 mb-6">
                  <p className="text-lg italic">"Nadat ik gezien heb hoe fantastisch Sandra's huid er in vergelijking met de mijne uitziet, ben ik overtuigd. Ik ben nu ook met de May Changing Foundation begonnen en hoop snel mijn zus bij te benen!"</p>
                </blockquote>
              </div>

              {/* Beauty Blog Test Result */}
              <div className="max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-6">De Beauty Blog Testresultaat:</h2>
                <p className="text-lg mb-4">
                  Bent u nieuwsgierig geworden en wilt u net als Sandra en binnenkort Marjon een foundation die zich perfect aanpast en uw huid laat stralen?
                </p>
                <p className="text-lg mb-4">
                  Dan bevelen wij u de May Changing Foundation van harte aan.
                </p>
                <p className="text-lg mb-4">
                  Sinds Sandra en Marjon hun verhaal in ons interview met de openbaarheid gedeeld hebben, bereiken ons steeds weer berichten van enthousiaste gebruiksters.
                </p>
                <p className="text-lg mb-4">
                  Kortgeleden konden we een tijdelijk beperkt aanbod voor onze De Beauty Blog community bedingen, dat echter alleen geldt zolang de huidige voorraad strekt.
                </p>
                <p className="text-lg font-bold mb-4">
                  Wanneer u nog van dit aanbod wilt profiteren, controleer dan het beste direct of het aanbod nog beschikbaar is!
                </p>
                <p className="text-red-500 italic mb-12">
                  Update: Dit gelimiteerde aanbod geldt alleen voor de huidige voorraad en zal in deze vorm vermoedelijk binnenkort niet meer beschikbaar zijn.
                </p>

                {/* Product Stats Section - Duplicated */}
                <div id="final-cta" className="bg-[#F7FAFC] p-12 rounded-lg max-w-5xl mx-auto">
                  <div className="flex flex-col md:flex-row items-start gap-12">
                    <div className="md:w-2/5">
                      <Image 
                        src="/Productrender.jpg"
                        alt="May Changing Foundation met kwast"
                        width={500}
                        height={500}
                        className="rounded-lg w-full"
                      />
                    </div>
                    <div className="md:w-3/5 flex flex-col justify-center">
                      <h2 className="text-5xl font-playfair font-bold mb-6">May Changing Foundation voor tot wel 79%* minder zichtbare oneffenheden!</h2>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="flex text-[#FFD700] text-2xl">⭐⭐⭐⭐⭐</div>
                        <span className="text-gray-600 text-xl">467 Beoordelingen</span>
                      </div>
                      <a href="https://maycosmetics.nl/products/changing-foundation-45ml" className="block w-full bg-black text-white text-center py-5 px-8 rounded text-xl font-medium mb-6 hover:bg-gray-900 transition-colors">
                        NU HET AANBOD GEBRUIKEN! ➤
                      </a>
                      <p className="text-green-500 text-center text-xl font-medium">(U bespaart momenteel €10!)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
} 