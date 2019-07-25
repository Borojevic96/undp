import React from 'react';
import ContentPage from './';

import { Link } from 'react-router-dom';
import Toolpit from '../../common/Toolpit';

export const Page_2_1 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>DRUGA FAZA ( Izrada šeme ) - Definiranje izlaznih rezultata šeme. </b></div>
                <div className="custom_tables custom_table_2">
                    <div className="d-flex">
                        <div className="d-flex-s-9 bg-darkblue d-flex d-flex-jcc d-flex-aac">
                        <h2 className="content_heading mb-0"><b>DRUGA FAZA</b>: Izrada šeme </h2>
                        </div>
                        <div className="d-flex-s-3">
                            <h3 className="content_heading blue ta-c">TRAJANJE FAZE:</h3>
                            <p className="content_text ta-c">4-5 sedmica</p>

                            <h3 className="content_heading blue ta-c">ZAHTJEVI</h3>
                            <p className="content_text ta-c mb-0">Mali tim sastavljen od operativnih i stručnjaka za politike</p>
                        </div>
                    </div>

                    <div className="d-flex mb-25">
                        <div className="d-flex-s-9 p-20">
                            <p className="content_text"><b>Detaljno planiranje sadržaja javnog poziva i pratećih dokumenata</b></p>

                            <p className="content_text"><b>Definicija faze:</b></p>

                            <p className="content_text">Do kraja ove faze svi ključni elementi šeme će biti osmišljeni, razrađeni i napisani. To će uključivati obiman tehnički posao za tim za izradu, u relativno kratkom vremenskom roku i po mogućnosti uz pomoć drugih u određenim tehničkim pitanjima. U idealnom slučaju, elementi koji proiziđu iz ovog rada bit će usaglašeni u okviru tima za izradu nakon daljnjih konsultacija s akterima i dokumentirani, često u formi dostavljenih tipskih obrazaca i alata.</p>

                            <p className="content_text">Fazu izrade karakteriziraju: daljnje pojašnjenje i kvantificiranje rezultata/ishoda šeme; definiranje izlaznih rezultata šeme (u odnosu na tipove, vjerovatni obim i broj projekata koji će se podržati i njihove aktivnosti); nivoi sufinansiranja koji se traže od aplikanata; omogućavanje optimalnih odgovora aplikanata na šemu; definiranje prihvatljivih aplikanata, aktivnosti i troškova; definiranje budžeta šeme zasnovanog na razmatranju raspoloživosti, apsorpcijskih kapaciteta i troškova inputa; procjena scenarija za implementaciju; procjena izvodljivosti cjelokupne šeme, uključujući i analizu rizika; daljnja konsolidacija aktera u izradi šeme i vjerovatni scenarij implementacije.</p>

                        </div>

                        <div className="d-flex-s-3 p-10 bg-blue">
                            <h3 className="content_heading ta-c mb-25 white">KORACI U FAZI (SAŽETAK)</h3>
                            <p className="content_text">1. Definicija izlaznih rezultata šeme, pojašnjenje i kvantificiranje rezultata/ ishoda šeme (indikatori)</p>
                            <p className="content_text mb-10">2. Definicija prihvatljivih aplikanata, mjera i troškova</p>
                            <p className="content_text mb-10">3. Omogućavanje odgovora optimalnih aplikanata na šemu</p>
                            <p className="content_text mb-10">4. Kriteriji odabira</p>
                            <p className="content_text mb-10">5. Scenarij za implementaciju</p>
                            <p className="content_text mb-10">6. Opća procjena izvodljivosti šeme (uklj. vrijednost za novac)</p>
                            <p className="content_text mb-10 mb-0">7. Izrada plana za monitoring i izvještavanje</p>
                        </div>
                    </div>

                    <div className="custom_tables d-flex mb-25">
                        <div className="d-flex-s-4 d-flex bg-darkblue d-flex-aac d-flex-jcc p-20">
                            <h3 className="content_heading ta-c">DRUGA FAZA: <br></br> IZRADA ŠEME </h3>
                        </div>

                        <div className="d-flex-s-8 d-flex">
                            <div className="d-flex-s-12 bg-red d-flex">
                                <div className="d-flex-s-2 d-flex d-flex-d-c br-white">
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">2.1</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">2.2</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">2.3</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">2.4</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">2.5</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">2.6</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">2.7</p>
                                </div>
                                <div className="d-flex-s-10 d-flex d-flex-d-c">
                                    <Link to={'/page=1&subpage=1'} className="content_text p-10 mb-0 blue bb-white">Definicija izlaznih rezultata šeme</Link>
                                    <Link to={'/page=1&subpage=2'} className="content_text p-10 mb-0 blue bb-white">Definicija prihvatljivih aplikanata, aktivnosti i troškova</Link>
                                    <Link to={'/page=1&subpage=3'} className="content_text p-10 mb-0 blue bb-white">Omogućavanje odgovora optimalnih aplikanata na šemu</Link>
                                    <Link to={'/page=1&subpage=4'} className="content_text p-10 mb-0 blue bb-white">Kriteriji odabira</Link>
                                    <Link to={'/page=1&subpage=5'} className="content_text p-10 mb-0 blue bb-white">Scenarij za implementaciju</Link>
                                    <Link to={'/page=1&subpage=6'} className="content_text p-10 mb-0 blue bb-white">Opća procjena izvodljivosti šeme</Link>
                                    <Link to={'/page=1&subpage=7'} className="content_text p-10 mb-0 blue bb-white">Izrada plana za monitoring i izvještavanje</Link>
                                </div>
                            </div>
                            <div className="d-flex-s-12 bg-yellow d-flex">
                                <div className="d-flex-s-2 d-flex">
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">STUDIJE SLUČAJA</p>
                                </div>
                                <div className="d-flex-s-10 d-flex d-flex-d-c bb-white bl-white d-flex-jcc d-flex-aac">
                                    <Link to={'/page=1&subpage=1'} className="content_text p-10 mb-0 blue ">Kako se to može uraditi: Definiranje indikatora - priča iz Irske</Link>
                                    <Link to={'/page=1&subpage=1'} className="content_text p-10 mb-0 blue ">Primjeri tabela za bodovanje kvalitativnih kriterija odabira</Link>
                                    <Link to={'/page=1&subpage=1'} className="content_text p-10 mb-0 blue ">Analiza kriterija prihvatljivosti i kriterija odabira za dodjelu grantova iz strukturalnih i investicijskih fondova EU</Link>
                                </div>
                            </div>

                            <div className="d-flex-s-12 bg-blue d-flex">
                                <div className="d-flex-s-2 d-flex br-white d-flex-aac d-flex-jcc">
                                    <p className="content_text p-10 blue ta-c mb-0 ta-c">ALATI I TIPSKI OBRASCI</p>
                                </div>
                                <div className="d-flex-s-10 d-flex d-flex-d-c bb-white bl-white d-flex-jcc d-flex-aac">
                                    <Link to={'/page=1&subpage=3#anchor_alat1'} className="content_text p-10 mb-0 blue bb-white d-block">Provjera prihvatljivosti</Link>
                                    <Link to={'/page=1&subpage=1'} className="content_text p-10 mb-0 blue bb-white d-block">Tabele za ocjenjivanje (relevantnost, kvalitet projekta, održivost)</Link>
                                    <Link to={'/page=1&subpage=4#anchor_alat3'} className="content_text p-10 mb-0 blue bb-white d-block">Scenarij provedbe</Link>
                                    <Link to={'/page=1&subpage=5#anchor_alat4'} className="content_text p-10 mb-0 blue bb-white d-block">Kontrolna lista za provjeru izvodljivosti</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="blue_overlay_heading">
                    Korak 2.1  DEFINIRANJE IZLAZIH REZULTATE ŠEME, POJAŠNJENJE I KVANTIFICIRANJE REZULTATA/ISHODA ŠEME (INDIKATORI)
                </h2>

                <div className="custom_tables blue_yellow_table_2 d-flex">
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KADA?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">9-10. sedmica</p>
                        </div>
                    </div>
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KOLIKO DUGO?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">2 dana (ne kontinuirano); ovaj korak radi tim za izradu šeme interno</p>
                        </div>
                    </div>
                </div>

                <p className="content_text">U prvom koraku Druge faze trebate odrediti:</p>

                <ul className="mb-25">
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> glavne <b>vrste i količine izlaznih rezultata</b> koje očekujete da će šema proizvesti</li>
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> glavne <b>ishode (rezultate) – i njihov približan broj</b> – koji se izvode iz njih</li>
                </ul>

                <p className="content_text">Već ste odredili formulaciju ishoda i izlaznih rezultata u koraku 6 Faze 1. Ovdje se trebate pobrinuti da ona bude jasna, konkretna i kvantificirana. To će potencijalnim aplikantima poslati jasan signal kakvu vrstu projekata tražite, jer će korištenjem općih pojmova opisati prirodu i ciljani broj svojih izlaznih rezultata i ishoda. Kasnije, u fazi implementacije, oni će se ponašati kao „indikatori“ koji vam šalju signal u kojoj mjeri finansirani projekti proizvode (zbirno) ciljani broj ishoda i izlaznih rezultata.</p>

                <h2 className="blue_overlay_heading">IZRADA INDIKATORA ISHODA I IZLAZIH REZULTATA</h2>

                <p className="content_text d-flex no-wrap d-flex-aafs"><img src="../images/warrning_sign.svg" alt="warrning sign" className="mr-25 image_width" /> <span>U većini slučajeva, izlazni rezultati su lako razumljivi i konkretni; formuliranje indikatora koji npr. pokazuje da su „3 programa obuke provedena“ skoro je identično dobrom opisu izlaznog rezultata, tj. „provedena 3 programa obuke prema transparentnim standardima kvaliteta za najmanje 300 učesnika.“ Jedina razlika je u tome što u indikatoru navodite da mora postojati transparentan standard kvaliteta (to je nešto što se treba izraditi i primjenjivati u okviru svakog programa) i što projekti moraju biti određenog obima kako bi vam pomogli da ispunite ciljani broj šeme od 300 učesnika. Na nivou ishoda stvari su obično teže. Po svojoj prirodi, ishodi su uglavnom složeniji, često kvalitativni i na njih utječe nekoliko izlaznih rezultata. Za njihovo opisivanje u tekstu ponekad je potrebno mnogo riječi. Dakle, uz pomoć indikatora nastojite signalizirati „suštinu“ korisnih promjena čijem će ostvarenju šema doprinijeti.</span></p>

                <p className="content_text d-flex no-wrap d-flex-aafs"><img src="../images/lightbulb_yellow.svg" alt="lightbul" className="mr-25 image_width" /> <span>Primjer (iz oblasti upravljanja ljudskim potencijalima): želite da obuka koju finansirate pomogne ljudima da steknu bolje vještine kako bi se zaposlili. Međutim, ovaj jednostavan opis je složeniji nego što izgleda. Postoje dvije realnosti: (i) razvijanje vještina (u čemu,
                prema kom standardu i koliko osoba će steći dodatne vještine?) i (ii) pronalaženje posla (kakvog posla, koliko osoba će dobiti posao itd.). Osim toga, znate da dobijanje posla zavisi od više faktora, a ne samo od vašeg programa obuke (npr. situacija na tržištu rada, ekonomski uvjeti itd.).</span></p>

                <p className="content_text">Stoga, u ovom slučaju trebate utvrditi jasan, konkretan i mjerljiv „indikator“ ili „indikatore“ koji pokazuju šta namjeravate, a time će aplikanti steći jasnu sliku o tome šta vi zaista želite! Dakle, u ovom slučaju možemo zamisliti najmanje dva indikatora ishoda kojima se iskazuje realnost koju imamo na umu: (i) do završetka programa 70% učenika će steći vještine u skladu s određenim standardom (dakle, mora postojati neka vrsta testa kako bi se potvrdilo stjecanje vještina) i (ii) 50% uspješnih učesnika (oni za koje je potvrđeno da su se kvalificirali/stekli vještine) nastavljaju obrazovanje/počinju stažirati ili pronalaze posao. Stoga, ovdje postaje jasno na šta se ishod odnosi i šta želite postići, a istovremeno svakom projektu ostavljate dovoljno prostora da predloži vlastita rješenja. Neki će se možda fokusirati na pomaganje učesnicima da nastave obrazovanje ili obuku, dok će se drugi usmjeriti na direktan ulazak u svijet rada (bilo kroz stažiranje ili pravi posao). Pravac koji želite da projekti prate je jasan – i vama i aplikantima.</p>

                <div className="yellow_box">
                    <h3 className="content_heading d-flex d-flex-aac mb-20"><img src="../images/lightbulb.svg" alt="lightbulb"></img> <b>Ko treba izraditi indikatore ishoda i izlaznih rezultata?</b></h3>
                    <ul>
                        <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Indikatore trebaju izraditi <b>oni koji su blisko povezani s ukupnom izradom i provedbom intervencije (predviđene u šemi): to znači da se indikatori mogu uspješno izraditi kroz proces koji okuplja različite osobe s različitih nivoa, a koje su u svom domenu uključene u izradu i provedbu intervencije</b>.</li>
                        <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Nijedan voditelj programa samostalno u svom kutku, i izoliran od ostalih, ne može izraditi mjerljive indikatore.</li>
                    </ul>
                </div>

                <p className="content_text">Ovaj korak je izuzetno težak. Naročito je težak ako se šema uvodi prvi put, a tijelu koje je priprema nedostaje iskustva s tipom šeme koju nastoji izraditi i provesti. Takvo tijelo možda neće moći lako vizualizirati veze između aktivnosti (projekata) – izlaznih rezultata - ishoda i nema jasnu ideju o potrebnom broju izlaznih rezultata koji bi mogli dovesti do potrebnog nivoa ishoda. Također, možda nije u stanju da lako poveže nivoe inputa (budžet) s nivoom izlaznih rezultata. Osim toga, ovaj posao nije i nikada ne može biti egzaktna nauka: djelomično podrazumijeva nagađanje i grubu procjenu, ali i dobro nagađanje je mnogo bolje od pukog kopiranja ili izmišljanja.</p>

                <p className="content_text blue d-flex no-wrap d-flex-aafs"><img src="../images/warrning_sign.svg" alt="warrning sign" className="mr-25 image_width" /> <span><b>U PRILOGU 2 (Studija slučaja 2) nalazi se detaljna studija slučaja koja se temelji na stvarnom slučaju. Pročitajte je prije nego krenete dalje!</b></span></p>

                <h3 className="content_heading blue d-flex d-flex-aac mb-25 no-wrap"><img src="../images/lightbulb_yellow.svg" alt="lightbul" className="mr-15" /> <b>KVANTIFICIRANJE ISHODA I IZLAZNIH REZULTATA I IZRADA INDIKATORA: PRISTUP „KORAK PO KORAK“</b> </h3>

                <p className="content_text">Sljedeći pristup će se pokazati najuspješnijim i pomoći vam da kvantificirate ishode i izlazne rezultate vaše šeme. Krenimo od ishoda.</p>

                <p className="content_text blue">Kvantificiranje ishoda</p>

                <p className="content_text mb-10"><b>1. </b>Fokusirajte se na vrste ishoda koje ste već utvrdili. Sada ih želite svesti na mali broj (najviše 4) mjerljivih ishoda za svaku komponentu šeme (ili za čitavu šemu, ako uključuje samo jednu komponentu)</p>
                <p className="content_text mb-10"><b>2. </b>Pokušajte identificirati najmanje dva ishoda čije je ostvarenje direktno „omogućeno“ vrstama izlaznih rezultata koje imate na umu. Oni trebaju opisati važne koristi koje su: (a) konkretne i opipljive i (b) direktno i neposredno omogućene, bar djelomično, vrstama izlaznih rezultata koje ste već utvrdili (u Fazi 1).</p>
                <p className="content_text mb-10"><b>3. </b>Potom, fokusirajte se na one ishode koji su nesporno povezani s izlaznim rezultatima, ali ne tako direktno. Oni vam se mogu činiti važnijim - npr. više zapošljavanja, veći prihodi od turizma, čišći zrak. Međutim, ovi ishodi proizilaze iz nekoliko vrsta aktivnosti i izlaznih rezultata (možda i više nego što vaša šema može finansirati) i kroz duži vremenski period. Oni se ne mogu neposredno i jednostavno povezati s određenim izlaznim rezultatom ili aktivnošću. Nastojte odabrati i dva ovakva ishoda, s tim da oni trebaju biti mjerljivi.</p>
                <p className="content_text mb-10"><b>4. </b>Prethodno opisani postupak će vam dati listu ishoda. Sada ih trebate provjeriti u odnosu na:</p>

                <ul className="mb-25">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>ciljeve šeme</b> (naročito kada se radi o specifičnom cilju šeme – trebate se zapitati: da li je specifični cilj ispunjen ako su ishodi ostvareni?)</li>
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>izlazne rezultate</b> koje imate na umu.</li>
                </ul>

                <p className="content_text blue">Pri tome trebate se pobrinuti da:</p>

                <p className="content_text mb-10"><b>a. </b>svi izlazni rezultati koje ste zamislili doprinose,manje ili više direktno (često u kombinacij i s drugim izlaznim rezultatima), ishodima koje ste odabrali i kvantificirali</p>
                <p className="content_text mb-10"><b>b. </b>na sve ishode koje ste odabrali, kada se posmatraju zajedno, mogu utjecati ključne vrste izlaznih rezultata koje smatrate presudnim za vašu šemu</p>

                <div className="custom_tables d-flex mb-25">
                    <div className="d-flex bg-darkblue p-10 no-wrap d-flex-aac bb-white">
                        <img src="../images/lightbulb_yellow.svg" className="mr-15 image_width" alt="lightbulb" />
                        <span className="content_heading white">PRIMJER 1: <b>ŠEMA OBUKE ZA NEZAPOSLENE MLADE LJUDE (LJUDSKI POTENCIJALI) – KOMPONENTA 1</b></span>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex-s-5 bg-red">
                            <h3 className="content_heading blue p-10 ta-c bb-white">KOMPONENTA</h3>
                            <p className="content_text p-10 mb-0"><span className="blue">Komponenta 1:</span> Grantovi su ponuđeni za 6 priznatih organizacija koje se bave edukacijom, kako bi provele programe obuke o osnovnim vještinama za najviše 33 učesnika (6 organizacija x najviše 33 učesnika = cca. 200 učesnika).</p>
                        </div>
                        <div className="d-flex-s-7 bg-yellow d-flex d-flex-d-c">
                            <h3 className="content_heading blue p-10 ta-c bb-white">KOMPONENTA</h3>
                            <p className="content_text p-10 mb-0 bb-white"><span className="blue">Direktni ishod:</span> 150 osoba (75%) uspješno (podrazumijeva dokazani nivo postignuća) završava (podrazumijeva da nisu odustali) program obuke.</p>
                            <p className="content_text p-10 mb-0 bb-white"><span className="blue">Manje direktan ishod:</span> 100 osoba (50%) nastavlja studije, pronalazi posao ili stiče radno iskustvo (obuka to ne garantira, ali ga može djelomično omogućiti. Ovo ne proizilazi direktno iz obuke i ne može se razumno pretpostaviti da će to biti moguće za sve osobe, pa čak i ni za one koji uspješno završe program).</p>
                        </div>
                    </div>
                </div>

                <div className="custom_tables d-flex mb-25">
                    <div className="d-flex bg-darkblue p-10 no-wrap d-flex-aac bb-white">
                        <img src="../images/lightbulb_yellow.svg" className="mr-15 image_width" alt="lightbulb" />
                        <span className="content_heading white">PRIMJER 2: <b>ŠEMA OBUKE ZA NEZAPOSLENE MLADE LJUDE (LJUDSKI POTENCIJALI) – KOMPONENTA 2</b></span>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex-s-5 bg-red">
                            <h3 className="content_heading blue p-10 ta-c bb-white">KOMPONENTA</h3>
                            <p className="content_text p-10 mb-0"><span className="blue">Komponenta 2:</span>Javnim organima i organizacijama civilnog društva nude se mali grantovi kako bi omogućili učesnicima da stažiraju (rade na radnim mjestima); (6 mjeseci).</p>
                        </div>
                        <div className="d-flex-s-7 bg-yellow d-flex d-flex-d-c">
                            <h3 className="content_heading blue p-10 ta-c bb-white">KVANTIFICIRANI REZULTATI – ISHODI</h3>
                            <p className="content_text p-10 mb-0 bb-white"><span className="blue">Direktni ishod:</span> 50 organizacija pruža mogućnost stažiranja (u ovom slučaju, radi se o ishodu, jer ga je grant omogućio, a ne uzrokovao. Pretpostavlja se da organizacije pripravnicima nude interno mentorstvo; one ih angažiraju i djelomično moraju pokrivati njihove troškove. Dakle, ovo je korist).</p>
                            <p className="content_text p-10 mb-0 bb-white"><span className="blue">Manje direktan ishod:</span> 
                                <ul className="mt-25">
                                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> 80 osoba (40%) dobija priliku da stažira</li>
                                    <li className="pos-rel content_text "><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> 70 osoba (35%) uspješno završava stažiranje (od kojih 44 (22%) osobe kasnije pronalaze posao).</li>
                                </ul>
                                (obuka to ne garantira, ali ga može djelomično omogućiti. Ovo ne proizilazi direktno iz obuke i ne može se razumno pretpostaviti da će to biti moguće za sve osobe, pa čak ni za one koji uspješno završe program).
                            </p>
                        </div>
                    </div>
                </div>

                <p className="content_text">Primjer iz <b>oblasti razvoja MSP-a</b></p>
                
                <div className="custom_tables d-flex mb-25">
                    <div className="d-flex bg-darkblue p-10 no-wrap d-flex-aac bb-white d-block">
                        <img src="../images/lightbulb_yellow.svg" className="mr-15 image_width" alt="lightbulb" />
                        <span className="content_heading white">PRIMJER 3: <b>ŠEMA ZA RAZVOJ MSP-A (JEDNA KOMPONENTA)</b></span>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex-s-5 bg-red">
                            <h3 className="content_heading blue p-10 ta-c bb-white">KOMPONENTA</h3>
                            <p className="content_text p-10 mb-0">Grantovi koji podrazumijevaju maksimalno 50% ukupnih prihvatljivih troškova odobravaju se MSP-ovima koji trguju na međunarodnom tržištu u IT sektoru (usluge i aplikacije). Grantovima će se podržati poslovni razvoj koji vodi do partnerstava s kompanijama koje nisu iz BiH; kupovina licenci, marketinške studije, kupovina konsultantskih usluga.</p>
                        </div>
                        <div className="d-flex-s-7 bg-yellow d-flex d-flex-d-c">
                            <h3 className="content_heading blue p-10 ta-c bb-white">KVANTIFICIRANI REZULTATI – ISHODI</h3>
                            <p className="content_text p-10 mb-0 bb-white"><span className="blue">Direktni ishod:</span> U roku od 24 mjeseca nakon finansiranja, 15 kompanija povećava promet po osnovu prodaje u inostranstvu u prosjeku za 20% u odnosu na polaznu vrijednost iz godine koja je prethodila pokretanju šeme.</p>
                            <p className="content_text p-10 mb-0 bb-white"><span className="blue">Manje direktan ishod:</span> 
                            Još 30 osoba (u odnosu na polazište iz godine koja je prethodila pokretanju šeme) zaposleno je u podržanim kompanijama u roku od 24 mjeseca nakon odobravanja granta.
                            </p>
                        </div>
                    </div>
                </div>

                <p className="content_text"><b>Sektor turizma</b></p>

                <div className="custom_tables d-flex mb-25">
                    <div className="d-flex bg-darkblue p-10 no-wrap d-flex-aac bb-white d-block">
                        <img src="../images/lightbulb_yellow.svg" className="mr-15 image_width" alt="lightbulb" />
                        <span className="content_heading white">PRIMJER 4: <b>ŠEMA ZA RURALNI TURIZAM (JEDNA KOMPONENTA)</b></span>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex-s-5 bg-red">
                            <h3 className="content_heading blue p-10 ta-c bb-white">OPIS</h3>
                            <p className="content_text p-10 mb-0">1A: Grantovi koji podrazumijevaju maksimalno 70% ukupnih prihvatljivih troškova odobravaju se općinama i nevladinim organizacijama, zasebno ili zajednički, koje se bave razvojem turističkih proizvoda i usluga. Grantovi mogu obuhvatati troškove razvoja proizvoda/usluga, marketinga mjesta (turističke destinacije), nabavke manje opreme i male infrastrukturne zahvate potrebne za pružanje usluge smještaja za grupe (npr. hosteli za mlade).</p>
                            <p className="content_text"> 1B: Grantovi koji podrazumijevaju maksimalno 50% ukupnih prihvatljivih troškova odobravaju se MSP-ovima ili grupama MSP- ova za ulaganja u poboljšanje ili povećanje nivoa usluge za turiste, naročito za smještaj, restorane i opremu/malu smještajnu infrastrukturu.</p>
                        </div>
                        <div className="d-flex-s-7 bg-yellow d-flex d-flex-d-c">
                            <h3 className="content_heading blue p-10 ta-c bb-white">KVANTIFICIRANI REZULTATI – ISHODI</h3>
                            <p className="content_text mb-0 p-10 bb-white"><span className="blue">Direktni ishod:</span> <br></br>
                            1A: Osmišljeno i uvedeno 10 novih usluga i proizvoda ruralnog turizma (npr. staze prirode/kulturne staze); 3 objekta za grupni smještaj s ukupno 90 kreveta razvijena i stavljena u funkciju.<br></br>
                            1B: Dva „indoor“ (unutrašnja) kulturna objekta osmišljena i stavljena u funkciju; 24 mjeseca nakon osnivanja, podržane kulturne objekte posjećuje 7.000 osoba godišnje; Opremljeno i otvoreno 6 dodatnih restorana ukupnog kapaciteta od 250 osoba; 15 prenoćišta ili malih hotela s ukupno 100 kreveta opremljeno i stavljeno u funkciju.<br></br>
                            (1A i 1B): Povećan broj noćenja za 75% u roku od 24 mjeseca po odobravanju granta; Povećan broj posjetitelja za 100% u roku od 24 mjeseca po odobravanju granta.
                            </p>
                            <p className="content_text p-10 mb-0 bb-white"><span className="blue">Manje direktan ishod:</span> 
                            Ukupan prihod općina od turizma povećan za 100% u roku od 24 mjeseca po odobravanju grantova; Otvoreno još 80 radnih mjesta na području općina u sektoru turizma u roku od 24 mjeseca po odobravanju grantova (od čega je 50% stalnih zaposlenja).
                            </p>
                        </div>
                    </div>
                </div>

                <p className="content_text blue">Kvantificiranje izlaznih rezultata:</p>
                <p className="content_text"><b>5. </b> Sada se okrenite samim izlaznim rezultatima. Trebate ih kvantificirati. Ti izlazni rezultati se izvode iz projekata i aktivnosti koje finansirate kroz svoju šemu. Ovdje trebate stvoriti jasnu sliku hoće li predloženi izlazni rezultati mogućih finansiranih projekata biti realizirani i tako omogućiti ishode ili ne.</p>
                <p className="content_text">Imajući na umu navedene primjere, trebate biti sigurni da ćete, kada finansiranje prestane i kada se završe sve projektne aktivnosti, imati dovoljno potrebnih izlaznih rezultata za ostvarivanje navedenih ishoda. Ako to nije slučaj, onda trebate prilagoditi ishode, a naročito njihovu kvantifikaciju.</p>

                <p className="content_text">Dakle, u prvom prijedlogu se može razmotriti sljedeće:</p>

                <div className="custom_tables d-flex mb-25">
                    <div className="d-flex bg-darkblue p-10 no-wrap d-flex-aac bb-white d-block">
                        <img src="../images/lightbulb_yellow.svg" className="mr-15 image_width" alt="lightbulb" />
                        <span className="content_heading white">PRIMJER 1: <b> ŠEMA OBUKE ZA NEZAPOSLENE MLADE LJUDE (LJUDSKI POTENCIJALI) – KOMPONENTA 1</b></span>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex-s-5 bg-red">
                            <h3 className="content_heading blue p-10 ta-c bb-white">KOMPONENTA</h3>
                            <p className="content_text p-10 mb-0"><span className="blue">Komponenta 1: </span> Grantovi su ponuđeni za 6 priznatih organizacija koje se bave edukacijom, kako bi provele programe obuke o osnovnim vještinama za najviše 33 učesnika (6 organizacija x najviše 33 učesnika = cca. 200 učesnika).</p>
                        </div>
                        <div className="d-flex-s-7 bg-yellow d-flex d-flex-d-c">
                            <h3 className="content_heading blue p-10 ta-c bb-white">KVANTIFICIRANI REZULTATI – ISHODI</h3>
                            <p className="content_text mb-0 p-10 bb-white"><span className="blue">Izlazni rezultat</span> <br></br>
                            provedeno 6 programa obuke za zapošljavanje mladih za 200 učesnika;
                            </p>
                            <p className="content_text p-10 mb-0 bb-white"><span className="blue">Izlazni rezultat</span> 
                            170 osoba završilo obuku i steklo osnovne vještine.
                            </p>
                            <p className="content_text p-10 mb-0 bb-white"><em>(Napomena: Pretpostavljate da će neki učesnici odustati; osim toga, proći obuku nije ista stvar što i postati kompetentan, ali to je proizvod šeme te je stoga utvrđeno kao izlazni rezultat.)</em></p>
                        </div>
                    </div>
                </div>

                <p className="content_text">Imajući u vidu ranija objašnjenja, primjer u tabeli izgleda kao razumna kvantifikacija izlaznog rezultata.</p>
                <p className="content_text"><em><b>Napomena:</b> Ako se vratite na isti primjer (s rezultatima/ishodima), jasno ćete vidjeti da s ovim izlaznim rezultatom postoje razumni izgledi da će se ishod ostvariti. Tamo smo pretpostavili da će 150 (ne 170) uspješno završiti program (implikacija je da 20 neće proći završni test i da stoga nisu kompetentni, ni uspješni).</em></p>

                <p className="content_text">Vratimo se na komponentu 2 istog primjera:</p>

                <div className="custom_tables d-flex mb-25">
                    <div className="d-flex bg-darkblue p-10 no-wrap d-flex-aac bb-white d-block">
                        <img src="../images/lightbulb_yellow.svg" className="mr-15 image_width" alt="lightbulb" />
                        <span className="content_heading white">PRIMJER 2: <b> ŠEMA OBUKE ZA NEZAPOSLENE MLADE LJUDE (LJUDSKI POTENCIJALI) – KOMPONENTA 2</b></span>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex-s-5 bg-red">
                            <h3 className="content_heading blue p-10 ta-c bb-white">KOMPONENTA</h3>
                            <p className="content_text p-10 mb-0"><span className="blue">Komponenta 2: </span> Javnim organima i organizacijama civilnog društva se nude mali grantovi kako bi omogućili učesnicima da stažiraju (rade na radnim mjestima); (6 mjeseci).</p>
                        </div>
                        <div className="d-flex-s-7 bg-yellow d-flex d-flex-d-c">
                            <h3 className="content_heading blue p-10 ta-c bb-white">KVANTIFICIRANI REZULTATI – ISHODI</h3>
                            <p className="content_text mb-0 p-10 bb-white"><span className="blue">Izlazni rezultat</span> <br></br>
                            70 organizacija koje ispunjavaju minimalne standarde potpisalo je ugovor o dodjeli granta kako bi omogućile adekvatno stažiranje (najosnovniji izlazni rezultat).
                            </p>
                            <p className="content_text p-10 mb-0 bb-white"><em>(Napomena: U poređenju s ishodom u odgovarajućoj tabeli u gornjem tekstu, ovo podrazumijeva da je 70 organizacija ispunilo zahtjevne uvjete za omogućavanje stažiranja, ali 20 nije bilo u stanju omogućiti adekvatna stažiranja, te stoga stažiranje u njima nije ni počelo ili se od njih moralo odustati.)</em></p>
                        </div>
                    </div>
                </div>

                <p className="content_text">Ovo, također, izgleda kao razumna kvantifikacija izlaznog rezultata, koja je koherentna s planiranim ishodom. Jasno je da nećete moći osigurati da prave organizacije ponude prave vrste stažiranja tako što ćete jednostavno dati novac. Za to su presudne druge aktivnosti (npr. informiranje, utvrđivanje uvjeta i standarda, nadzor). Sve će se te aktivnosti morati poduzeti prije nego se pripravnici upute na stažiranje.</p>

                <p className="content_text">Pogledajmo sada izlazne rezultate u primjerima koji se odnose na MSP i turizam: ponovo, ključno pitanje je: Kojim vrstama izlaznih rezultata bi se razumno omogućilo ostvarivanje navedenih ishoda?</p>

                <div className="custom_tables d-flex mb-25">
                    <div className="d-flex bg-darkblue p-10 no-wrap d-flex-aac bb-white d-block">
                        <img src="../images/lightbulb_yellow.svg" className="mr-15 image_width" alt="lightbulb" />
                        <span className="content_heading white">PRIMJER 3: <b> ŠEMA ZA RAZVOJ MSP-A (JEDNA KOMPONENTA)</b></span>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex-s-5 bg-red">
                            <h3 className="content_heading blue p-10 ta-c bb-white">OPIS</h3>
                            <p className="content_text p-10 mb-0">
                            Grantovi koji podrazumijevaju maksimalno 50% ukupnih prihvatljivih troškova odobravaju se MSP- ovima koji trguju na međunarodnom tržištu u IT sektoru (usluge i aplikacije).<br></br>
                            Grantovima će se podržati poslovni razvoj koji vodi do partnerstava s kompanijama koje nisu iz BiH; kupovina licenci, marketinške studije, kupovina konsultantskih usluga.
                            </p>
                        </div>
                        <div className="d-flex-s-7 bg-yellow d-flex d-flex-d-c">
                            <h3 className="content_heading blue p-10 ta-c bb-white">KVANTIFICIRANI REZULTATI – ISHODI</h3>
                            <p className="content_text mb-0 p-10 bb-white"><span className="blue">Direktni izlazni rezultat</span> <br></br>
                            Pomoć je pružena za 25 IT kompanija (ovo je najosnovniji indikator izlaznih rezultata).
                            </p>
                            <p className="content_text p-10 mb-0 bb-white">22 kompanije sklapaju neki vid međunarodne poslovne saradnje koja je fokusirana na plasiranje proizvoda/ usluga na tržište [ovaj posljednji indikator je „na ivici“ izlaznog rezultata i ishoda].</p>
                        </div>
                    </div>
                </div>

                <p className="content_text"><em><b>Napomena: </b>Teoretski bi se moglo formulirati više indikatora ishoda, npr. X broj ugovora o licenciranju; Y broj ugovora o pružanju konsultantskih usluga. Ali, nikako ne možemo predvidjeti ili tačno propisati kako će privatne kompanije ostvarivati ishode. Šema se zasniva na pretpostavci da će kupovina i ugovor o licencama vjerovatno biti važan aspekt ove mjere, ali to možda nije jedini način. Iz perspektive javne organizacije koja nudi grant, najvažniji su ekonomski ishodi, a njih će omogućiti nezavisne privatne kompanije, čiji precizan način poslovanja ne treba strogo propisivati javni organ.</em></p>


                <div className="custom_tables d-flex mb-25">
                    <div className="d-flex bg-darkblue p-10 no-wrap d-flex-aac bb-white d-block">
                        <img src="../images/lightbulb_yellow.svg" className="mr-15 image_width" alt="lightbulb" />
                        <span className="content_heading white">PRIMJER 4: <b> ŠEMA ZA RURALNI TURIZAM (JEDNA KOMPONENTA)</b></span>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex-s-6 bg-red">
                            <h3 className="content_heading blue p-10 ta-c bb-white">OPIS</h3>
                            <p className="content_text p-10 mb-0">
                                <span className="blue">1A: </span> Grantovi koji podrazumijevaju maksimalno 70% ukupnih prihvatljivih troškova odobravaju se općinama i nevladinim organizacijama, individualno ili zasebno, koje se bave razvojem turističkih proizvoda i usluga. Grantovi mogu obuhvatati troškove razvoja proizvoda/usluga, marketinga mjesta (turističke destinacije), manje opreme i male infrastrukture potrebne za pružanje usluge smještaja za grupe (npr. hosteli za mlade).<br></br> <br></br>
                                <span className="blue">1B: </span> Grantovi koji podrazumijevaju maksimalno 50% ukupnih prihvatljivih troškova odobravaju se MSP-ovima ili grupama MSP-ova za ulaganja u poboljšanje ili povećanje nivoa usluge za turiste, naročito za smještaj, restorane i opremu/malu smještajnu infrastrukturu.
                            </p>
                        </div>
                        <div className="d-flex-s-6 bg-yellow d-flex d-flex-d-c">
                            <h3 className="content_heading blue p-10 ta-c bb-white">KVANTIFICIRANI REZULTATI – ISHODI</h3>
                            <p className="content_text mb-0 p-10 bb-white"><span className="blue">Direktni izlazni rezultat</span> <br></br>
                            <span className="blue">1A: </span>Podržano je i provedeno 15 projekata s fokusom na nove proizvode i usluge ruralnog turizma (od toga, osmišljeno je 5 proizvoda ruralnog turizma i izgrađena su 3 smještajna projekta).
                            <span className="blue">1B: </span>Podržana 3 „indoor“ kulturna objekta; 20 podržanih projekata povećava ponudu smještajnih kapaciteta; Podržano 8 restorana (odnosno „zalogajnica“).
                            </p>
                            <p className="content_text p-10 mb-0">22 kompanije sklapaju neki vid međunarodne poslovne saradnje koja je fokusirana na plasiranje proizvoda/ usluga na tržište [ovaj posljednji indikator je „na ivici“ izlaznog rezultata i ishoda].</p>
                        </div>
                    </div>
                </div>

                <p className="content_text"><em><b>Napomena:</b> Kada poredite izlazne rezultate i ishode u svakom od slučajeva, vidite da pretpostavljamo i određeni nivo neuspjeha: neki projekti će dobiti podršku, a na nivou ishoda će ostvariti vrlo malo ili ništa. To vas ne treba obeshrabriti jer u svakoj zemlji je realnost takva da se grantovi dodjeljuju kako bi se „omogućilo“ ili „usmjerilo“ određeno ponašanje (tj. olakšava se ili čini atraktivnim određena vrsta ekonomskog ili socijalnog ponašanja da bi se ostvarile šire koristi za sve). U nekim slučajevima – uslijed niza razloga – podržana organizacija možda neće započeti provedbu projekta, možda će odustati od njega ili će ga tako loše provesti da će dovesti do ostvarenja vrlo malo pravih izlaznih rezultata i ishoda. Kao što ćemo objasniti u nastavku, ovo je ključni razlog zbog kojeg nikada nije preporučljivo isplatiti ukupan iznos granta prije provedbe.</em></p>

                <p className="content_text"><b>6. </b> U praksi ćete nastojati uskladiti ishode i izlazne rezultate tako što ćete ih neprestano međusobno upoređivati, kako biste utvrdili jesu li „usklađeni“. Ovo znači „provjeru“ hoće li definirani izlazni rezultati (i njihova količina) doista dovesti do definiranih ishoda (i njihove količine). Ova „dijalektika“ će se nastaviti sve dok tim za izradu ne bude zadovoljan nivoom usklađenosti.</p>

                <p className="content_text"><b>Dijagram 2.1:</b> Provjera usklađenosti između izlaznih rezultata (outputa) i ishoda (outcome) koje oni proizvode</p>

                <div className="diagram_pic d-flex d-flex-jcc d-flex-aac">
                    <img src="../images/diagram_2_1.png" alt="diagram 2.1" />
                </div>

                <p className="content_text"><b>7. </b>Potom trebate potvrditi je li iznos budžeta koji je predviđen za komponente ili šemu kao cjelinu adekvatan za ostvarivanje izlaznih rezultata (i sve aktivnosti povezane s njima). U slučaju komponente 1 u gore navedenom primjeru, presudno će biti da se razumije troškovna struktura programa obuke o osnovnim vještinama (priprema, lokacija, prijevoz za učesnike, nastavni materijali itd.), kako bi se pretpostavio realan prosjek ili raspon budžeta za svaki projekt koji će se finansirati. Dakako, ako trebate smanjiti obim ili broj vjerovatnih programa obuke zato što premašuju raspoloživi budžet, onda ćete trebati smanjiti i količinu izlaznih rezultata i ishoda.</p>

                <p className="content_text"><b>Dijagram 2.2:</b> Provjera usklađenosti između inputa i izlaznih rezultata (outputa) koje oni proizvode</p>

                <div className="diagram_pic d-flex d-flex-jcc d-flex-aac">
                    <img src="../images/diagram_2_2.png" alt="diagram 2.2" />
                </div>

                <p className="content_text"><b>8. </b> Kada izradite detaljan „nacrt scenarija“ za ishode-izlazne rezultate-aktivnosti-inpute, možda ćete ga trebati razmotriti s malom grupom informiranih aktera kako biste od njih dobili povratne informacije i eventualno napravili neke korekcije. Kao što vidite, u procesnom smislu pripreme šeme, ovo su teške, osjetljive, ali neizbježne aktivnosti, od kojih zavisi ukupni kvalitet buduće šeme.</p>

                <p className="content_text"><b>U tom smislu, ovo je bio veoma značajan korak <Toolpit>U ovoj fusnoti, za opću diskusiju i razmatranje otvaramo pitanje kako se u konkretnom slučaju BiH ishodi grant šeme povezuju s indikatorima „na nivou mjere“ u strategijama razvoja na svim nivoima vlasti u BiH. Ovo je teško pitanje i ne postoji lako i jednostavno rješenje. Na osnovu naših iskustava iz drugih zemalja (od kojih su mnoga bila pretjerano ambiciozna, previše formalna pa su na kraju završila neuspjehom), naša preporuka je:<br></br><br></br>
i. Prihvatite realnost da u strategijama i programima – čak i na nivou mjere – broj indikatora treba biti ograničen. Zbog toga oni trebaju u određenoj mjeri biti općeniti jer, u suprotnom, nikada neće obuhvatiti sve vrste ishoda i izlaznih rezultata koje će vjerovatno proizvesti projekti podržani kroz grant šeme. Na nivou mjere, potrebno je napraviti ravnotežu između nivoa indikatora i nivoa njihove općenitosti.<br></br><br></br>
ii. Stoga preporučujemo da se na nivou mjere uključi mali broj (najviše četiri) indikatora za ishode i da se izrade indikatori izlaznih rezultata, ne da bi obuhvatili sva moguća rješenja, nego samo one projekte i/ili krupne intervencije koje su unaprijed određene (npr. značajna infrastruktura), (npr. 20 km nove ceste).<br></br><br></br>
iii. Osim toga, primjereno je da se predloži šira lista indikatora ishoda, pa čak i indikatora izlaznih rezultata, uz uvjet da grant šeme koje potpadaju pod mjeru moraju odabrati bar neke od svojih indikatora s ove liste (npr. sličan pristup se radi u Moldaviji). Naravno, ovi predloženi indikatori se trebaju formulirati tako da mogu pružiti informacije i podatke koji će se koristiti za četiri spomenuta indikatora ishoda.<br></br><br></br>
iv. Snažno se protivimo nametanju obaveze grant šemama i projektima koji podržavaju da biraju samo indikatore koji su na spomenutoj listi. U situacijama u kojima je to pokušavano, uvijek se pokazalo da to previše ograničava menadžere grant šema, a naročito njima podređene voditelje projekata.<br></br><br></br>
v. Za svaku grant šemu i svaki projekt koji je podržan u okviru grant šeme mora postojati određena sloboda u biranju indikatora prilagođenih njihovoj situaciji: naš jedini savjet je da se neki od odabranih indikatora (recimo najmanje 1 indikator ishoda i 1 indikator izlaznog rezultata za svaku „komponentu“ u okviru šeme) moraju uzeti s predložene liste.<br></br><br></br>
vi. Time će se olakšati zadatak izvještavanja o izlaznim rezultatima i ishodima od najmanjeg projekta u okviru grant šeme do nivoa mjere u okviru strategije. To nikada neće biti idealno: ali, izvodljivo je i, prema našem iskustvu, poželjnije od svih drugih pristupa (posebno ako se prihvati pretpostavka da su resursi za praćenje i izvještavanje relativno ograničeni).</Toolpit>!</b></p>

                <p className="content_text d-flex no-wrap"><img src="../images/document.svg" alt="document" className="mr-15 image_width" /> <span>Na kraju ovog koraka: izradit ćete i kvantificirati detaljne odnose između ishoda - izlaznih rezultata - aktivnosti – inputa za svoju komponentu i šemu.</span></p>
                
            </div>
        </ContentPage>
    )
}
