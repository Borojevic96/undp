import React from 'react';
import ContentPage from './';

import { Link } from 'react-router-dom';

export const Page_2_7 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>DRUGA FAZA ( Izrada šeme ) - Izrada plana za monitoring i izvještavanja</b></div>
                <h2 className="blue_overlay_heading">
                    Korak 2.7 IZRADA PLANA ZA MONITORING I IZVJEŠTAVANJE
                </h2>
                <div className="custom_tables blue_yellow_table_2 d-flex">
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KADA?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">11-12. (13.) sedmica</p>
                        </div>
                    </div>
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KOLIKO DUGO?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">2 dana</p>
                        </div>
                    </div>
                </div>

                <p className="content_text">Prije razrade osnovnih dokumenata koji će se objaviti, ključno je da se započne planiranje sistema za praćenje šeme. Međutim, ovaj korak se vremenski može proširiti i na Fazu 3, pa čak i na početak faze provedbe. Sistem monitoringa treba biti uveden neko vrijeme prije zaprimanja prijava.</p>

                <p className="content_text">U okviru ovog koraka, potrebno je da:</p>

                <ul className="content_text">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>odredite osobu odgovornu za monitoring i izvještavanje</b>, koja će biti imenovana u okviru tima za provedbu; dakle, važno je da blagovremeno odredite tu osobu i pobrinete se da ta osoba razumije utvrđene indikatore (i da je učestvovala u njihovom utvrđivanju)</li>
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> izradite <b>nacrt plana izvještavanja projekata</b> prema timu za provedbu, koji je raspoređen tako da se tromjesečni izvještaji mogu pripremati za komisiju za praćenje šeme</li>
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> osigurate da <b>ključne obaveze i zadaci korisnika projekta budu definirani i uvršteni u smjernice za aplikante, a naročito u ugovore u kasnijoj fazi</b></li>
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> odlučite o izgledu ključnih tipskih obrazaca i potrebnoj IT podršci i pokrenite njihovu izradu kako bi se „čitav“ sistem kompletirao prije zaprimanja prijedloga projekata. [IT sistem se treba razraditi tek nakon razrade općeg sistema izvještavanja – tj. ko dostavlja koje informacije, u kom formatu/tipskom obrascu, kome i do kada. Naravno, taj sistem ima više slojeva, a svaki sloj zavisi od onog koji se nalazi ispod njega. Zadatak tima za provedbu je da osmisli ovaj sistem i informira o njemu, te da po potrebi obuči relevantne osobe kako da ga koriste. Sve ovo ima implikacije na resurse. Tim će morati uključiti nekoga ko je stručan da osmisli i nadzire takav sistem. Za njegovu IT komponentu se može zaključiti podugovor: „mozak“ sistema mora biti u okviru osnovnog tima za provedbu.]</li>
                </ul>

                <p className="content_text">Konkretno, imat ćete oko dva mjeseca da potpuno provedete ovaj korak – što je više nego dovoljno.</p>
                <p className="content_text"><b>Monitoring i izvještavanje o šemi nije i ne treba biti ogroman zadatak.</b></p>
                <p className="content_text">U ostatku ovog dijela dajemo suštinska objašnjenja koja će vam pomoći da dovršite ovaj korak.</p>

                <h3 className="content_heading d-flex no-wrap d-flex-aac mb-20"><img src="../images/lightbulb_yellow.svg" alt="lightbulb"></img> <b className="blue">SUŠTINSKI ELEMENTI MONITORINGA I IZVJEŠTAVANJA</b></h3>

                <p className="content_text">U kontekstu grant šeme, pratit će se sljedeće:</p>

                <ul className="mb-25">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/><span class="CharOverride-14">Inputi – Resursi:</span>
                        <ul className="ml-20">
                            <li class="body ParaOverride-53"><span class="CharOverride-9">Dinamika njihove potrošnje</span> (ugovaranje, nastali troškovi, potraživanja/izvršena plaćanja);</li>
                            <li class="body ParaOverride-53"><span class="CharOverride-9">Dinamika provedbe aktivnosti/projekata</span> u odnosu na prvobitni plan;</li>
                            <li class="body ParaOverride-53">Sva ostala bitna pitanja efikasnosti vezana za provedbu šeme u cjelini ili projekata koje podržava.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="mb-25">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/><span class="CharOverride-14">Izlazni rezultati:</span> <br></br>Za sve šeme, izlazni rezultati koji su ostvareni tokom (posebno su važni za projekte s dugim periodom provedbe) i do okončanja projekata, u odnosu na projektni plan i ukupne ciljane izlazne rezultate šeme (i/ili referentne tačke). </li>
                </ul>

                <ul className="mb-25">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/><span class="CharOverride-14">Izlazni rezultati:</span> <br></br>Njih je teže obuhvatiti kroz monitoring jer se mnogi ishodi u potpunosti ostvare tek neko vrijeme po završetku provedbe. Ipak, monitoring može pokazati, na osnovu raspoloživih dokaza, koliko je ishoda ostvareno do završetka projekta, a kolika je vjerovatnoća da će se ostali ishodi ostvariti nakon završetka projekta. Osim toga, monitoring se može produžiti i obuhvatiti i period po završetku provedbe projekta (ali da i dalje ostaje unutar životnog ciklusa šeme): na primjer, u programu obuke na ovaj način se može utvrditi koliko je bivših učesnika obuke nastavilo studij ili pronašlo posao nekoliko mjeseci po završetku obuke. </li>
                </ul>

                <p className="content_text"><b>Monitoring je ključna odlika upravljanja šemom</b>: to nisu „tuđa posla“. To je u osnovi posao tima za provedbu.</p>

                <p className="content_text">Tim za izradu se treba pobrinuti da plan monitoringa bude izrađen i uveden najkasnije prije zaprimanja prijava, pa čak i ako će se s vremenom mijenjati.</p>


                <ul className="mb-25">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/>Na taj način, monitoring će pružiti važan uvid u relevantnost, efikasnost i učinkovitost šeme. Također vam može pomoći da shvatite izglede za održivost rezultata (ishoda). Omogućit će vam da poduzmete korektivne mjere tokom provedbe šeme, kada je to potrebno. Monitoring grant šeme ne bi trebao biti pretjerano težak. Međutim, ipak zahtijeva minimalan nivo planiranja i organizacije. A u <Link>fazi 2, korak 2</Link> vi ste zapravo već uveli neke važne elemente koji su presudni za monitoring!</li>
                </ul>

                <div className="yellow_box">
                    <h3 className="content_heading d-flex no-wrap d-flex-aac mb-20"><img src="../images/lightbulb.svg" alt="lightbulb"></img> <b>KLJUČNI UVJETI ZA USPJEŠAN MONITORING I IZVJEŠTAVANJE</b></h3>
                    <ul className="content_text">
                        <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Jasno razumijevanje teorije promjene koja leži u osnovi grant šeme – tj. „priča“ o tome kako će inputi + aktivnosti (projekti) proizvesti izlazne rezultate i dovesti do ishoda</li>
                        <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Oni koji će biti uključeni u monitoring šeme također trebaju učestvovati u izradi indikatora izlaznih rezultata i ishoda</li>
                        <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Potrebno je u ranoj fazi donijeti odluku o: (i) ključnim podacima / informacijama koje će svaki podržani projekat morati dostaviti (izvještavanje) timu za provedbu šeme, kada (učestalost) i u kom formatu te o (ii) načinima izvještavanja (npr. štampani izvještaji, unos informacija u zajedničku bazu podataka i sl.).</li>
                    </ul>
                    <p className="content_text"><b>Glavni zadaci</b> monitoringa koji se moraju izvršavati tokom provedbe šeme su:</p>

                    <ul className="content_text">
                        <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Osigurati poštivanje sistema praćenja i izvještavanja. Drugim riječima, da različiti akteri (korisnici projekta; tim za provedbu) izvršavaju svoje zadatke u okviru sistema za praćenje i izvještavanje</li>
                        <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Dakle, konkretno, <b>osigurati blagovremen i uredan unos (s nivoa projekta) u sistem za praćenje, analizu i propisno grupiranje podataka (na nivou šeme)</b> i njihovu obradu (na nivou šeme) te razmatranje i rješavanje nastalih (uočenih) problema (tim za provedbu). Ovi podaci se prvenstveno odnose na ugovaranje, finansije (plaćanja i troškovi), fizički napredak u odnosu na plan te izlazne rezultate. Ako se šema provodi tokom dužeg vremenskog perioda ili je šemom predviđeno da se neki (direktni) ishodi ostvare tokom i neposredno nakon provedbe projekta, možda će biti moguće uključiti i informacije o ostvarivanju (direktnih) ishoda.</li>
                    </ul>
                </div>

                <p className="content_text">Ovo je mnogo lakše reći nego uraditi! Ključ za ostvarivanje navedenog je u izradi jednostavnog, ali lako razumljivog sistema, koji karakterizira sljedeće:</p>

                <ul className="mb-25">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/>Na nivou šeme, u okviru tima za provedbu, postoji najmanje <b>jedna osoba odgovorna za monitoring i izvještavanje</b> prema voditelju tima za provedbu (ako šema ima nekoliko komponenti, možda će biti potrebno imenovati po jednu osobu odgovornu za monitoring i izvještavanje za svaku komponentu). </li>
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/>Iznad tima za provedbu, <b>grupa/komisija za nadzor ili monitoring</b> koja prima redovne (svaka 3 mjeseca) monitoring izvještaje koji sadrže mjerljive podatke o <b>napredovanju inputa, projekata, izlaznih rezultata i ishoda u odnosu na plan i ukazuju na eventualne probleme u provedbi koji zahtijevaju korektivne mjere tokom provedbe</b> </li>
                </ul>

                <ul className="mb-25">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/>Sistemi i alati kojima se olakšava monitoring i izvještavanje:
                        <ul className="ml-20">
                            <li class="body ParaOverride-53"><span class="CharOverride-9">Standardni izvještajni formati</span> (npr. standardizirani Excel obrasci koje mora koristiti svaki podržani projekt)</li>
                            <li class="body ParaOverride-53"><span class="CharOverride-9">Protokol o izvještavanju</span> u kojem je utvrđeno kada i kako projekt podnosi izvještaje prema osobi u timu za provedbu koja je zadužena za monitoring i izvještavanje</li>
                            <li class="body ParaOverride-53">Standardni tipski obrasci i formati u kojima se podaci primljeni od projekata (nakon obrade i analize) grupiraju i prezentiraju (grupi za upravljanje i praćenje šeme).</li>
                        </ul>
                    </li>
                </ul>

                <p className="content_text">U tom smislu, potrebni su sljedeći <b>kapaciteti</b>:</p>

                <ul className="mb-25">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/>Najmanje jedna osoba zadužena za monitoring i izvještavanje: stručna u obradi podataka, grupiranju, prezentiranju; upravljanju projektima ili programima; koja posjeduje dobre vještine pisanja izvještaja.</li>
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/>Korisnici projekta: ključni voditelj projekta će se morati pobrinuti da se podaci i izvještaji prosljeđuju timu za provedbu, blagovremeno i u skladu sa standardom. </li>
                </ul>

                <p className="content_text">Grant šema nije neki ogroman program. Zbog toga, format izvještaja treba se uglavnom sastojati od pet tabela u kojima su prikazani podaci o ključnim pitanjima (inputi/troškovi, napredovanje aktivnosti/projekati, izlazni rezultati i ishodi – napredak u odnosu na ciljeve). Možete tražiti da vas izvještavaju i o nekim drugim pitanjima, ali neka to bude strogo ograničeno.</p>

                <p className="content_text d-flex no-wrap"><img src="../images/document.svg" alt="document" className="mr-15 image_width" /> <span><b>Do kraja ovog koraka (završetak Faze 2) (produžava se na početak faze provedbe šeme):</b> <br></br> osmišljen je i uveden jednostavan, ali adekvatan sistem monitoringa i izvještavanja za šemu.</span></p>
            </div>
        </ContentPage>
    )
}
