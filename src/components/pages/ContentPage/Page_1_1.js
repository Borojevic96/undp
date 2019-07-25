import React from 'react';
import ContentPage from './';
import { Link } from 'react-router-dom';

export const Page_1_1 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>PRVA FAZA ( Konceptualizacija šeme ) - Prvi koraci </b></div>

                <div className="custom_tables custom_table_2">
                    <div className="d-flex">
                        <div className="d-flex-s-9 bg-darkblue d-flex d-flex-jcc d-flex-aac">
                        <h2 className="content_heading mb-0"><b>PRVA FAZA</b>: Konceptualizacija šeme </h2>
                        </div>
                        <div className="d-flex-s-3">
                            <h3 className="content_heading blue ta-c">TRAJANJE FAZE:</h3>
                            <p className="content_text ta-c">8 sedmice</p>

                            <h3 className="content_heading blue ta-c">ZAHTJEVI</h3>
                            <p className="content_text ta-c mb-0">Mali tim sastavljen od operativnih i stručnjaka za politike</p>
                        </div>
                    </div>

                    <div className="d-flex mb-25">
                        <div className="d-flex-s-9 p-20">
                            <p className="content_text"><b>Priprema vladinih/ministarskih podzakonskih akata o kriterijima odabira i realizacije javnih sredstava (svi nivoi vlasti)</b></p>

                            <p className="content_text"><b>Definicija faze:</b></p>

                            <p className="content_text">Do kraja ove faze, tim zadužen za izradu šeme će, nakon početnih konsultacija s relevantnim akterima, dogovoriti koncept šeme. Koncept će biti na odgovarajući način „ugrađen“ u vladin/ministarski podzakonski akt o kriterijima odabira i realizacije javnih sredstava (u daljnjem tekstu: podzakonski akt) ili drugi instrument koji se koristi u praksi u BiH.</p>

                            <p className="content_text">Karakteristike koncepta su sljedeće: kratko obrazloženje zasnovano na politici i činjenicama (dokazima) i cilj koji ga povezuje sa strategijom; cilj koji će se postići ukoliko se ostvare rezultati/ishodi šeme; indikativni budžet; vrste očekivanih ishoda, vrste (mogućih) izlaznih rezultata; vrste glavnih mogućih aktivnosti/projekata; potencijalni aplikanti, korisnici, odnosno, oni koji će imati koristi od rezultata/ishoda šeme ili čak izlaznih rezultata; određena teritorija; druge administrativne/pravne specifikacije u skladu sa zakonom i praksom u BiH (koje se moraju definirati u ovoj fazi), uključujući i određene neprihvatljive troškove. Konceptom će se, također, definirati i nivo učešća (udio) u finansiranju koji će se zahtijevati od aplikanata kao i parametri za kriterije odabira projekata. U slučajevima kada koncept obuhvata više komponenti (ili “tematskih cjelina”), ova će se informacija razraditi za sve komponente, odnosno, za više koncepata. Time se otvara put za ulazak u fazu definiranja dizajna i razradu.</p>

                            <p className="content_text">U konceptu se ne navode ključni elementi koji zahtijevaju definiranje i razradu na tehničkom nivou. Konkretno, ne navode se: kvantifikacija svih ishoda, odnosno izlaznih rezultata; svi indikatori kojima će se izraziti ishodi ili izlazni rezultati; prihvatljivi aplikanti; prihvatljive aktivnosti/projekti ili troškovi; sve tematske (razvojne/sektorske) smjernice za potencijalne aplikante. Konačno, realizacijom ove faze stvaraju se pretpostavke za fazu skiciranja dizajna šeme.</p>
                        </div>

                        <div className="d-flex-s-3 p-20 bg-blue">
                            <h3 className="content_heading ta-c mb-25 white">KORACI U FAZI (SAŽETAK)</h3>
                            <p className="content_text">1. Prvi koraci</p>
                            <p className="content_text">2. Formiranje tima za izradu grant šeme</p>
                            <p className="content_text">3. Provjera relevantnosti politike / strategije</p>
                            <p className="content_text">4. Uključivanje relevantnih aktera</p>
                            <p className="content_text">5. Analiza problema, potreba, prilika i potražnje</p>
                            <p className="content_text">6. Operativna jasnoća</p>
                            <p className="content_text">7. Ispitivanje predizvodljivosti</p>
                            <p className="content_text">8. Strukturiranje koncepta šeme</p>
                            <p className="content_text">9. Postavljanje parametara za kriterije odabira</p>
                            <p className="content_text mb-0">10. Razrada podzakonskog akta</p>
                        </div>
                    </div>

                    <div className="custom_tables d-flex mb-25">
                        <div className="d-flex-s-4 d-flex bg-darkblue d-flex-aac d-flex-jcc p-20">
                            <h3 className="content_heading ta-c">PRVA FAZA: <br></br> KONCEPTUALIZACIJA ŠEME </h3>
                        </div>

                        <div className="d-flex-s-8 d-flex">
                            <div className="d-flex-s-12 bg-red d-flex">
                                <div className="d-flex-s-2 d-flex d-flex-d-c br-white">
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">1.2</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">1.1</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">1.3</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">1.4</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">1.5</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">1.6</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">1.7</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">1.8</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">1.9</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">1.10</p>
                                </div>
                                <div className="d-flex-s-10 d-flex d-flex-d-c">
                                    <Link to={'/page=1&subpage=1'} className="content_text p-10 mb-0 blue bb-white">Prvi koraci</Link>
                                    <Link to={'/page=1&subpage=2'} className="content_text p-10 mb-0 blue bb-white">Formiranje tima za izradu grant šeme</Link>
                                    <Link to={'/page=1&subpage=3'} className="content_text p-10 mb-0 blue bb-white">Provjera relevantnosti politike</Link>
                                    <Link to={'/page=1&subpage=4'} className="content_text p-10 mb-0 blue bb-white">Uključivanje relevantnih aktera</Link>
                                    <Link to={'/page=1&subpage=5'} className="content_text p-10 mb-0 blue bb-white">Analiza problema, potreba, prilika i potražnje</Link>
                                    <Link to={'/page=1&subpage=6'} className="content_text p-10 mb-0 blue bb-white">Jasnoća pravca djelovanja</Link>
                                    <Link to={'/page=1&subpage=7'} className="content_text p-10 mb-0 blue bb-white">Ispitivanje predizvodljivosti</Link>
                                    <Link to={'/page=1&subpage=8'} className="content_text p-10 mb-0 blue bb-white">Strukturiranje koncepta šeme</Link>
                                    <Link to={'/page=1&subpage=9'} className="content_text p-10 mb-0 blue bb-white">Postavljanje parametara za kriterije odabira</Link>
                                    <Link to={'/page=1&subpage=10'} className="content_text p-10 mb-0 blue bb-white">Razrada podzakonskog akta</Link>
                                </div>
                            </div>
                            <div className="d-flex-s-12 bg-yellow d-flex">
                                <div className="d-flex-s-2 d-flex">
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">STUDIJE SLUČAJA</p>
                                </div>
                                <div className="d-flex-s-10 d-flex d-flex-d-c bb-white bl-white d-flex-jcc d-flex-aac">
                                    <Link to={'/page=1&subpage=1'} className="content_text p-10 mb-0 blue ">Kako se to može uraditi: priča sa sjeveroistoka Bugarske</Link>
                                </div>
                            </div>

                            <div className="d-flex-s-12 bg-blue d-flex">
                                <div className="d-flex-s-2 d-flex br-white d-flex-aac d-flex-jcc">
                                    <p className="content_text p-10 blue ta-c mb-0 ta-c">ALATI</p>
                                </div>
                                <div className="d-flex-s-10 d-flex d-flex-d-c bb-white bl-white d-flex-jcc d-flex-aac">
                                    <Link to={'/page=1&subpage=3#anchor_alat1'} className="content_text p-10 mb-0 blue bb-white d-block">Provjera relevantnosti politike</Link>
                                    <Link to={'/page=1&subpage=1'} className="content_text p-10 mb-0 blue bb-white d-block">Alat za izradu izjave o politici</Link>
                                    <Link to={'/page=1&subpage=4#anchor_alat3'} className="content_text p-10 mb-0 blue bb-white d-block">Alat za utvrđivanje ključnih aktera</Link>
                                    <Link to={'/page=1&subpage=5#anchor_alat4'} className="content_text p-10 mb-0 blue bb-white d-block">Alat za analizu problema i potražnje</Link>
                                    <Link to={'/page=1&subpage=6#anchor_alat_5'} className="content_text p-10 mb-0 blue bb-white d-block">Kontrolna lista mogućih korisnika i aplikanata, moguće vrste aktivnosti, izlaznih rezultata i ishoda</Link>
                                    <Link to={'/page=1&subpage=1'} className="content_text p-10 mb-0 blue bb-white d-block">Matrica za planiranje grant šeme</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="blue_overlay_heading">
                        Korak 1.1  PRVI KORACI
                    </h2>

                    <p className="content_text">
                        Polazne osnove za izradu grant šeme mogu biti različite:
                    </p>

                    <ul>
                        <li className="content_text"><img src="../images/black_arrow.svg" alt="Arrow"></img> <b>Odluka kreatora politike da izradi šemu u određenoj oblasti,</b> koja je manje ili više opravdana potrebom i zasnovana na odluci više politike ili strateškog cilja</li>
                        <li className="content_text"><img src="../images/black_arrow.svg" alt="Arrow"></img> <b>Odluka kojom se odgovara na neku krizu ili hitnu potrebu,</b> koja je na neki način povezana s politikom, ali je više potaknuta lobiranjem, potražnjom, odnosno posebnim potrebama na terenu</li>
                        <li className="content_text"><img src="../images/black_arrow.svg" alt="Arrow"></img> <b>Odluka da se nastavi raditi ono što se radilo prethodnih godina,</b> bez obzira na ostvarene ishode. Polazne osnove mogu biti različite. Međutim, u svakom slučaju, podzakonskim se aktom daje uputa jednom ili više državnih službenika da pripreme detaljniju verziju šeme (u BiH, uputa o kriterijima odabira i načinima realizacije).</li>
                    </ul>

                    <p className="content_text">
                        Podzakonski akt može krenuti s uputom namijenjenom drugim službenicima: neko mora preuzeti odgovornost za radne procese koji trebaju uslijediti. Dakle, prvi korak podrazumijeva blagovremenu organizaciju kako bi se „posao“ obavio u okviru raspoloživih resursa i u skladu sa standardima.
                    </p>
                </div>
            </div>
        </ContentPage>
    )
}
