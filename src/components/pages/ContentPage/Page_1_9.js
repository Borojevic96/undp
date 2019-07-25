import React from 'react';
import ContentPage from './';

import { Link } from 'react-router-dom';

export const Page_1_9 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>PRVA FAZA ( Konceptualizacija šeme ) - Postavljanje parametara za kriterije odabira </b></div>
                <h2 className="blue_overlay_heading">
                    Korak 1.9  POSTAVLJANJE PARAMETARA ZA KRITERIJE ODABIRA
                </h2>

                <div className="custom_tables blue_yellow_table_2 d-flex">
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KADA?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">8. sedmica</p>
                        </div>
                    </div>
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KOLIKO DUGO?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">2 dana; ovaj korak radi tim za izradu šeme interno</p>
                        </div>
                    </div>
                </div>

                <p className="content_text">Nakon što ste završili korak 1.8, imate <b>koncept</b> koji sadrži <b>cilj šeme</b> koji je usklađen s ciljem politike i jasnu logiku intervencije. Također, odredili ste potencijalne aplikante i približno <b>potrebe i nivo potražnje za šemom</b>. Uskoro ćete moći pripremiti podzakonski akt kojim će se postaviti okvir za tehničko oblikovanje šeme.</p>

                <p className="content_text">U praksi BiH, u ovom početnom stadiju definirate ono što se zove “kriteriji odabira” kao sastavni dio podzakonskog akta. Većina tih kriterija je uopćena i mogli bi se preciznije opisati kao parametri za kriterije odabira.</p>

                <p className="content_text">Nešto slično se radi u grant šemama u sklopu strukturnih i investicijskih fondova EU (npr. unutar EU) i sličnim šemama vezanim za vanjske aktivnosti EU.</p>

                <p className="content_text pos-rel">Primjer u nastavku uzet je iz jedne od mjera strukturnih fondova EU u okviru operativnog programa u Sjevernoj Irskoj. Ova je mjera bila uvrštena u višegodišnji program, a naknadno je donesena odluka da se pripremi šema, odnosno, razrade detalji poziva. Karakteristično za ovu šemu je da su ciljevi, aktivnosti i kriteriji odabira sadržani u mjeri, odnosno, šemi, uopćeni. </p>

                <h3 className="content_heading blue d-flex d-flex-aac mb-25 no-wrap"><img src="../images/lightbulb_yellow.svg" alt="lightbul" className="mr-15" /> Primjer: Program: Ekonomski rast i konkurentnost u Sjevernoj Irskoj Mjera 2 (uključivala je nekoliko “grant šema”, od kojih su neke bile realizirane prethodnih godina): Istraživanje i tehnološki razvoj i prenos tehnologija </h3>

                <div className="d-flex custom_tables mb-25">
                    <div className="p-10 bg-darkblue">
                        <h3 className="content_heading white mb-25"><b>CILJEVI</b></h3>
                        <p className="content_text white">Cijevi navedeni u nastavku teksta ostvarit će se kroz nekoliko vladinih šema</p>
                        <ul>
                            <li className="content_text white mb-10"> I. Podržati i ojačati industrijsku osnovu Sjeverne Irske kroz istraživanja usmjerena na razvoj i poticanje industrijske osnove</li>
                            <li className="content_text white mb-10"> II. Poticati i unaprijediti dizajn i razvoj ekološki prihvatljivih, inovativnih proizvoda i procesa (svijest, program, ocjena stanja inovacija i šeme za podršku ocjene stanja okoliša</li>
                            <li className="content_text white mb-0"> III. Dati priliku diplomantima da razviju svoje sposobnosti, u tehničkom i rukovodnom smislu, upošljavajući ih na ključnim projektima</li>
                        </ul>
                    </div>
                    <div className="p-10 bg-yellow">
                        <h3 className="content_heading blue mb-25"><b>[OPĆI] KRITERIJI ZA ODABIR PROJEKATA</b></h3>
                        <p className="content_text">Podrška (u sklopu šeme) zavisit će od ispunjavanja kriterija prihvatljivosti zadatih šemama podrške, koje je definirala IRTU [Jedinica za industrijska istraživanja i tehnologije, agencija Ministarstva za privredu, trgovinu i ulaganja, koja ima mrežu ureda širom regije, od kojih svaki redovno informira i savjetuje preduzeća o različitim vidovima javne podrške, zakonodavnim pitanjima i sl.]</p>
                        <p className="content_text">Dostavljeni projektni prijedlozi prolaze kroz konkurentski postupak, u okviru kojeg se radi njihova tehnička i ekonomska ocjena. Kriteriji programa su sljedeći:</p>
                        <ul>
                            <li className="content_text mb-10"> I. Procjena utjecaja buduće konkurentnosti projekta</li>
                            <li className="content_text mb-10"> II. Nivo inovacije i/ili prenosa tehnologije u okviru projekta</li>
                            <li className="content_text mb-0"> III. Nivo rizika i koristi za privredu</li>
                            <li className="content_text mb-10"> IV. Značaj projekta u odnosu na strategiju i ciljeve programa</li>
                            <li className="content_text mb-10"> V. Nivo učešća i međusobne povezanosti u EU i drugim međunarodnim istraživačkim programima i mrežama</li>
                            <li className="content_text mb-0"> VI. Analiza cjelokupne poslovne strategije i aktivnosti organizacije</li>
                            <li className="content_text mb-0"> VII. Potencijal za iskorištavanje ishoda projekta</li>
                        </ul>
                    </div>
                </div>

                <p className="content_text">U navedenom primjeru, kao i u praksi BiH, tzv. “kriteriji odabira” su zapravo opći parametri u odnosu na koje će se projekti ocjenjivati. U ovoj ranoj fazi oni su i dalje prilično neujednačeni: neki su precizniji i usko definirani, dok su drugi vrlo široko postavljeni. Oni se ne mogu i ne trebaju koristiti direktno za odabir projekata - treba ih tehnički doraditi da bi se mogli prevesti u korisne i odgovarajuće kriterije odabira. Ali, u ovoj ranoj fazi, oni služe svrsi: oni postavljaju određena ograničenja u pogledu vrste projekata koji će u konačnici biti odabrani.</p>

                <p className="content_text">U ovoj fazi se može slijediti sistematičniji pristup izradi općih “kriterija odabira” ili parametara koji će se nastaviti i u drugoj fazi. On se temelji na ključnim kriterijima koji se gotovo univerzalno koriste za dobro korištenje javnih finansijskih sredstava.</p>

                <h3 className="content_heading blue">Opći kriteriji kvaliteta:</h3>

                <p className="content_text">Kriteriji za odabir projekata koji će se finansirati iz javnih sredstava trebaju zadovoljiti ključne principe koji su zajednički svim projektima: <b>relevantnost, efikasnost, efektivnost i održivost</b>. Ponekad se uvodi i izričiti kriterij utjecaja, mada se on često pretpostavlja pod kriterijem efektivnosti.</p>

                <div className="yellow_box">
                    <ul className="p-10">
                        <li className="pos-rel content_text mb-10"><img src="../images/blue_arrow.svg" className="mr-15" alt="arrow"/> <span className="blue"><b>Relevantnost: </b></span> Jesu li predloženi izdaci/ulaganja (u projekte koji će se finansirati iz šeme) <b>relevantni za naše ciljeve, naše politike, naš program, naše željene ishode?</b><br></br><br></br>
                                <p className="content_text">U pozadini ovog pitanja je jedno ključno razmatranje: mi ne podržavamo aktivnosti koji nisu u skladu s onim što želimo postići. <b>U različitim programima pitanje relevantnosti se može razmatrati na različite načine, a neka od tih razmatranja mogu biti postavljena tako da se, pored relevantnosti, istovremeno odnose i na efektivnost.</b></p>
                        </li>
                        <li className="pos-rel content_text mb-10"><img src="../images/blue_arrow.svg" className="mr-15" alt="arrow"/> <span className="blue"><b>Efikasnost:</b></span> <b>Je li predloženo ulaganje efikasno</b><br></br><br></br>
                                <p className="content_text">Jednostavno rečeno, hoće li proizvesti ono što je potrebno po odgovarajućoj cijeni (trošku), na vrijeme i prema zadatoj specifikaciji kvaliteta? Efikasnost obuhvata razmatranje troškova (vrijednost za novac) i institucionalnih i tehničkih kapaciteta, uključujući i onih koji će provoditi projekt.</p>
                        </li>
                        <li className="pos-rel content_text mb-10"><img src="../images/blue_arrow.svg" className="mr-15" alt="arrow"/> <span className="blue"><b>Efektivnost:</b></span> Nas interesira efikasno ulaganje, koje će pomoći ostvarivanje ishoda na višem nivou koji su uvršteni u program, a koji se odnose na ekonomske, okolišne, socijalne i druge politike. Drugim riječima, efikasnost nije dovoljna, želimo učinkovitost u pogledu ishoda.<br></br><br></br>
                                <p className="content_text"><b>Hoće li izlazni rezultati polučiti ishode koji su nam potrebni da ostvarimo ciljeve na višem nivou?</b></p>
                        </li>

                        <li className="pos-rel content_text mb-00"><img src="../images/blue_arrow.svg" className="mr-15" alt="arrow"/> <span className="blue"><b>Održivost:</b></span> <b>Odnosi se na održivost rezultata/ishoda uloženog finansijskog izdataka. Jednostavnim rječnikom rečeno, ishodi su ti (a ne projekti) koji se moraju održati i vremenom nadgrađivati.</b><br></br><br></br>
                                <p className="content_text mb-0">Primjer održivog ishoda je: što više osoba prođe obuku zahvaljujući finansiranom projektu to znači da će više osoba dobiti i zadržati posao u predstojećim godinama. U jednostavnom ekonomskom primjeru, to znači da neka turistička atrakcija koja je finansirana kroz program postoji i godinama nakon što je predviđena javna podrška završena.</p>
                        </li>
                    </ul>
                </div>


                <p className="content_text">Ovi opći kriteriji mogu se detaljnije raščlaniti u više konkretnih podkriterija, koji su direktno usklađeni na obrascu prijave u fazi oblikovanja (<Link>Faza 2, korak 4</Link>). Nema potrebe za definiranjem konkretnijih kriterija odabira u podzakonskom aktu ili konceptu šeme.</p>
                <p className="content_text d-flex no-wrap"><img src="../images/document.svg" alt="document" className="mr-15 image_width" /> <span>Do kraja ovog koraka: definirat ćete opća razmatranja koja će preciznije odrediti kriterije odabira.</span></p>
            </div>
        </ContentPage>
    )
}
