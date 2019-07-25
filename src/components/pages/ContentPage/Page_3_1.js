import React from 'react';
import ContentPage from './';

import { Link } from 'react-router-dom';

export const Page_3_1 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="custom_tables custom_table_2">
                    <div className="d-flex">
                        <div className="d-flex-s-9 bg-darkblue d-flex d-flex-jcc d-flex-aac">
                        <h2 className="content_heading mb-0"><b>TREĆA FAZA</b>: Razrada dokumenata u okviru šeme </h2>
                        </div>
                        <div className="d-flex-s-3">
                            <h3 className="content_heading blue ta-c">TRAJANJE FAZE:</h3>
                            <p className="content_text ta-c">2 sedmice</p>

                            <h3 className="content_heading blue ta-c">ZAHTJEVI</h3>
                            <p className="content_text ta-c mb-0">Mali tim, uključujući operativne stručnjake (npr. iz ministarstva i resornih agencija, po mogućnosti, uz pomoć vanjskog konsultanta)</p>
                        </div>
                    </div>

                    <div className="d-flex mb-25">
                        <div className="d-flex-s-9 p-20">
                            <p className="content_text"><b>Izrada i objavljivanje javnog poziva i pratećih dokumenata šeme (smjernice za aplikante i aneksi)</b></p>

                            <p className="content_text"><b>Definicija faze:</b></p>

                            <p className="content_text">Do kraja ove faze, svi dokumenti – interni, a naročito eksterni – biće napisani i finalizirani. Eksterni dokumenti, koji će se objaviti, naročito potencijalnim aplikantima, prilagođeni su korisnicima i olakšavaju podnošenje prijava ozbiljnim aplikantima. Time je šema spremna za objavljivanje.</p>

                            <p className="content_text">Razrada ove faze u osnovi podrazumijeva pisanje dokumenata. U mnogim slučajevima, u ranijoj fazi su već izrađeni dokumenti koji zahtijevaju vrlo malo dorađivanja. Ovu fazu karakterizira mali broj uglavnom “velikih koraka”: razrada javnog poziva; razrada obrasca prijave (uključujući formate plana rada i budžeta); razrada smjernica za aplikante, koje će obuhvatati tačne uvjete i modalitete prihvatljivosti, prijavljivanja i odabira. Također će sadržavati ključne upute o upravljanju projektima, monitoringu i izvještavanju. Čak i ako se dokumenti razrađuju određenim redoslijedom, nijedan se neće finalizirati sve dok se ne izvrši njihova višestruka provjera, kontrola kvaliteta i zajedničko finaliziranje. Na taj se način osigurava dosljednost.</p>

                        </div>

                        <div className="d-flex-s-3 p-10 bg-blue">
                            <h3 className="content_heading ta-c mb-25 white">KORACI U FAZI (SAŽETAK)</h3>
                            <p className="content_text">1. Razrada javnog poziva</p>
                            <p className="content_text mb-10">2. Razrada obrasca za prijavu</p>
                            <p className="content_text mb-10">3. Razrada smjernica za aplikante</p>
                            <p className="content_text mb-10">4. Provjera kvaliteta cjelokupne dokumentacije</p>
                            <p className="content_text mb-10">5. Objavljivanje javnog poziva</p>
                        </div>
                    </div>

                    <div className="custom_tables d-flex mb-25">
                        <div className="d-flex-s-4 d-flex bg-darkblue d-flex-aac d-flex-jcc p-20">
                            <h3 className="content_heading ta-c">TREĆA FAZA: <br></br> Razrada dokumenata u okviru šeme </h3>
                        </div>

                        <div className="d-flex-s-8 d-flex">
                            <div className="d-flex-s-12 bg-red d-flex">
                                <div className="d-flex-s-2 d-flex d-flex-d-c br-white">
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">3.1</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">3.2</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">3.3</p>
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">3.4</p>
                                </div>
                                <div className="d-flex-s-10 d-flex d-flex-d-c">
                                    <Link to={'/page=1&subpage=1'} className="content_text p-10 mb-0 blue bb-white">Razrada javnog poziva</Link>
                                    <Link to={'/page=1&subpage=2'} className="content_text p-10 mb-0 blue bb-white">Razrada obrasca prijave</Link>
                                    <Link to={'/page=1&subpage=3'} className="content_text p-10 mb-0 blue bb-white">Razrada smjernica za aplikante</Link>
                                    <Link to={'/page=1&subpage=4'} className="content_text p-10 mb-0 blue bb-white">Objava javnog poziva za dostavljanje projekata</Link>
                                </div>
                            </div>
                            <div className="d-flex-s-12 bg-yellow d-flex">
                                <div className="d-flex-s-2 d-flex">
                                    <p className="content_text p-10 blue ta-c bb-white mb-0">STUDIJE SLUČAJA</p>
                                </div>
                                <div className="d-flex-s-10 d-flex d-flex-d-c bb-white bl-white d-flex-jcc d-flex-aac">
                                    <Link to={'/page=1&subpage=1'} className="content_text p-10 mb-0 blue ">Kako se to može uraditi: priča iz sjeveroistočne Bugarske</Link>
                                    <Link to={'/page=1&subpage=1'} className="content_text p-10 mb-0 blue ">Kako se to može uraditi: priča iz Bosne i Hercegovine</Link>
                                </div>
                            </div>

                            <div className="d-flex-s-12 bg-blue d-flex">
                                <div className="d-flex-s-2 d-flex br-white d-flex-aac d-flex-jcc">
                                    <p className="content_text p-10 blue ta-c mb-0 ta-c">ALATI I TIPSKI OBRASCI</p>
                                </div>
                                <div className="d-flex-s-10 d-flex d-flex-d-c bb-white bl-white d-flex-jcc d-flex-aac">
                                    <Link to={'/page=1&subpage=3#anchor_alat1'} className="content_text p-10 mb-0 blue bb-white d-block">Provjera prihvatljivosti</Link>
                                    <Link to={'/page=1&subpage=1'} className="content_text p-10 mb-0 blue bb-white d-block">Tabele za ocjenjivanje (relevantnost, kvalitet projekta, održivost)</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="content_text">Sada smo došli do Faze 3, tokom koje ćete <b>razraditi i finalizirati</b> ključne dokumente šeme: (a) <b>javni poziv, (b) obrazac prijave i druge potrebne tipske obrasce</b> i (c) smjernice za aplikante), kako biste mogli objaviti svoju grant šemu. O stavkama (a) + (b) + (c) ćemo govoriti kao o „cjelokupnom paketu.“</p>

                <p className="content_text">Po završetku ove treće, završne faze pripreme šeme, možete preći na implementaciju (realizaciju) šeme. Ovaj priručnik se forkusira na pripremu i osmišljavanje grant šema i završava objavljivanjem šeme i ključnih dokumenata, što je zaokružena i složena cjelina pripreme šeme. Međutim, kako je proces implementacije šeme, također, zaokružena i složena cjelina, zbog svoje kompleksnosti, uređuje se posebnim priručnikom.</p>

                <h3 className="content_heading d-flex no-wrap d-flex-aac mb-20"><img src="../images/lightbulb_yellow.svg" alt="lightbulb"></img> <span className="content_text"><b className="black">Tabela 3.1</b> <br></br>Elementi cjelokupnog paketa i izvori informacija.</span></h3>

                <div className="custom_tables mb-25">
                    <table id="table053" className="No-Table-Style TableOverride-1">
                        <colgroup>
                            <col className="_idGenTableRowColumn-128" />
                            <col className="_idGenTableRowColumn-79" />
                            <col className="_idGenTableRowColumn-133" />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-130">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Elementi</p>
                                </td>
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Faza/Korak u kojem
                                        <br />su izrađeni izlazni rezultati datog dijela</p>
                                </td>
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Komentari/Savjeti</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-147">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Ključne informacije o šemi</p>
                                </td>
                                <td className="No-Table-Style CellOverride-46" />
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Kod ovog elementa se fokusirate na osnovne informacije, kao što su:</p>
                                    <p className="tekst-u-tabelama"><span className="CharOverride-9">- Predmet šeme;</span></p>
                                    <p className="tekst-u-tabelama"><span className="CharOverride-9">- Organizacija koja finansira šemu (ili više njih).</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-153">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Osnovne informacije</p>
                                </td>
                                <td className="No-Table-Style CellOverride-46">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-40">Faza 1, Koraci 1.3; 1.5.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Pri pripremi vodite računa da osnovne informacije:</p>
                                    <p className="tekst-u-tabelama">- pokazuju koje <span className="CharOverride-9">politike su osnov, odnosno podupiru</span> ovu šemu i objašnjavaju zašto; </p>
                                    <p className="tekst-u-tabelama">- sadrže <span className="CharOverride-9">nekoliko značajnih činjenica </span>u kojima su rezimirana ključna pitanja kojima će se šema baviti. </p>
                                    <p className="tekst-u-tabelama"><span className="CharOverride-9">Ovaj dio možete detaljnije razraditi u smjernicama za aplikante,</span> gdje upisujete konkretne osnovne informacije o svakoj komponenti šeme (ako je primjenjivo).</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-70">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Cilj granta, prioritetne oblasti</p>
                                </td>
                                <td className="No-Table-Style CellOverride-46">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-40">Faza 1, Koraci 1.3; 1.8; 1.10.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Pripremate tekst koji je istovjetan onome što piše u podzakonskom aktu, a odnosi se na cilj granta, prioritetne oblasti (Korak 1).</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-154">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Izdvajanje finansijskih sredstava (po komponentama, ako ih ima više)</p>
                                </td>
                                <td className="No-Table-Style CellOverride-46">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-40">Faza 1, Korak 1.5.</span></p>
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-40">Faza 2:  Korak 2.1.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Ako postoji više izvora finansiranja, pripremate naziv i <span className="CharOverride-9">iznos sredstava iz svakog izvora.</span> </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-147">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Kriteriji prihvatljivosti</p>
                                </td>
                                <td className="No-Table-Style CellOverride-46">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-40">Faza 1, Korak 1.9.</span></p>
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-40">Faza 2, Koraci 2.2; 2.3; 2.4.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Ovaj element je veoma važan. Od ključnog je značaja da aplikanti<span className="CharOverride-9"> brzo shvate mogu li se prijaviti, odnosno ispunjavaju li kriterije ili ne prije nego što nastave čitati.</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-35">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Prihvatljive aktivnosti i troškovi i očekivani ishodi šeme</p>
                                </td>
                                <td className="No-Table-Style CellOverride-46">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-40">Faza 1, Korak 1.6.</span></p>
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-40">Faza 2, Korak 1.2.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Kod ovog elementa navodite jasne informacije o: </p>
                                    <p className="tekst-u-tabelama"><span className="CharOverride-9">- Aktivnostima</span> za koje se može dodijeliti grant;</p>
                                    <p className="tekst-u-tabelama"><span className="CharOverride-9">- Vrstama troškova</span> koji se mogu uzeti u obzir kod utvrđivanja iznosa granta;</p>
                                    <p className="tekst-u-tabelama"><span className="CharOverride-9">- Očekivanim ishodima</span> koji proizilaze iz provedbe finansiranih aktivnosti. </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-70">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Osnovni kriteriji odabira</p>
                                </td>
                                <td className="No-Table-Style CellOverride-46">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-40">Faza 2, Korak 2.4.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">O ovome ćete navesti više detalja u smjernicama za aplikante, u koje ćete uključiti i tablicu za ocjenjivanje i bodovanje. </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-35">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Obrazac prijave i popratni dokumenti</p>
                                </td>
                                <td className="No-Table-Style CellOverride-46">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-40">Faza 2, Korak 2.3.</span></p>
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-40">Faza 3, Korak 3.2.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Tokom pripreme ovog elementa, odnosno, obrasca prijave i popratnih dokumenata, trebate na jasan i jednostavan način aplikantima objasniti kako mogu podnijeti prijavu.</p>
                                    <p className="tekst-u-tabelama"><span className="CharOverride-9">Također, trebate reći aplikantima gdje mogu pronaći obrazac prijave (u štampanoj i/ili elektronskoj formi)!</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-99">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Adresa za dostavljanje prijava, modaliteti i rok za podnošenje</p>
                                </td>
                                <td className="No-Table-Style CellOverride-46">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-40">Faza 2, Korak 2.5.<br />FAZA 3, KORAK 3.2.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Važno je da na svim predviđenim mjestima obrasca i popratnih dokumenata navedete precizne informacije o <span className="CharOverride-9">modalitetima</span> (tj. <span className="CharOverride-9">adresu</span> na koju se prijava šalje, potreban broj primjeraka itd.) i <span className="CharOverride-9">roku</span> za podnošenje prijava.</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-131">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Informacije o procesu ocjenjivanja i odabira</p>
                                </td>
                                <td className="No-Table-Style CellOverride-46">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-40">Faza 2, Koraci 2.4, 2.5.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Kod pripreme ovog elementa trebate <span className="CharOverride-9">informirati aplikante o procesu ocjenjivanja i odabira, </span>kao i o tome ko će (tj. posebno imenovana komisija) <span className="CharOverride-9">biti zadužen za odabir projekata i o indikativnom roku</span> za završetak procesa odabira. To možete učiniti i tako što ćete organizirati informativne dane, tokom kojih će zainteresirani aplikanti dobiti sve potrebne informacije za pripremu prijava. </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-107">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Indikativni rokovi do početka provedbe projekta</p>
                                </td>
                                <td className="No-Table-Style CellOverride-46">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-40">Faza 2, Korak 2.5.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Važno je da jasno navedete <span className="CharOverride-9">indikativne rokove do početka procesa provedbe (tj. rok za obavještavanje aplikanata koji su dobili grantove; rok za puštanje sredstava u opticaj), </span>uključujući rok za provedbu projekata (ako je primjenjivo).</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="content_text">Prethodna tabela je koristan alat, koji pruža pregled svih elemenata cjelokupnog paketa šeme, gdje su jasno označene faze i/ili koraci tokom kojih ste već ranije pripremili niz informacija neophodnih za kompletiranje šeme. Uz svaki korak je u pregledu uključen i komentar ili savjet da ukaže na šta se potrebno fokusirati ili šta je potrebno dodatno provjeriti tokom pisanja svakog od elemenata navedenih u tabeli. Dakle, ne morate izrađivati nove dokumente niti smišljati nešto potpuno novo u ovoj fazi. U fazama 1 i 2 ste već izradili sve što vam je potrebno (tj. očekivane ishode šeme, kriterije odabira, kriterije prihvatljivosti itd.) da biste mogli napisati ključne dokumente (elemente) šeme. Možda ćete u ovoj fazi htjeti nešto promijeniti, ali vi praktično već imate sve potrebne elemente za razradu ključnih dokumenata šeme.</p>

                <div className="yellow_overlay_text">Lokacija: <b>TREĆA FAZA ( Razrada dokumenata u okviru šeme ) - Razrada javnog poziva</b></div>
                <h2 className="blue_overlay_heading">
                    Korak 3.1 RAZRADA JAVNOG POZIVA
                </h2>
                <div className="custom_tables blue_yellow_table_2 d-flex">
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KADA?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">13/14 - 15/16 sedmica</p>
                        </div>
                    </div>
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KOLIKO DUGO?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">1 dan</p>
                        </div>
                    </div>
                </div>

                <p className="content_text">Praktično, ovdje se radi o ažuriranju <Link>koraka 1.10 (Razrada podzakonskog akta)</Link>. Sjetite se da se u tom koraku, u zavisnosti od vremena, <b>objavljuje „preliminarna najava poziva“ ili „podzakonski akt“</b>. U bilo kom slučaju, skoro isti tekst se može ažurirati ako je prvobitno objavljena „preliminarna najava poziva“, ili pojednostaviti ako je u pitanju „podzakonski akt“, i objaviti zajedno s dužim „smjernicama za aplikante“ i obrascem prijave. U ovoj fazi i kontekstu, taj dokument ćemo zvati „javnim pozivom“.</p>

                <p className="content_text">Glavni cilj javnog poziva je da se potencijalnim aplikantima pruže osnovne informacije o šemi. Javni poziv treba biti kratak dokument, koji obuhvata nekoliko ključnih pitanja i parametara. Ako nakon čitanja javnog poziva potencijalni aplikanti uvide da imaju pravo učestvovati (i zainteresirani su i spremni za to), mogu konsultirati smjernice za aplikante kako bi potražili više informacija i konkretnih savjeta o načinu pripreme obrasca prijave.</p>

                <p className="content_text d-flex no-wrap d-flex-aafs"><img src="../images/warrning_sign.svg" alt="warrning sign" className="mr-25 image_width" /> <b>Važno je da sačekate s finaliziranjem javnog poziva sve dok ne finalizirate smjernice za aplikante, kako bi se osigurali dosljednost između ta dva dokumenta (kao i obrasca prijave), koji su blisko povezani i isprepleteni.</b></p>

                <p className="content_text">Primjere javnih poziva možete pronaći na poveznici: <Link>javni pozivi (Poziv za dostavu prijava) iz EU u prilogu 2, Studija slučaja 5.</Link></p>

                <p className="content_text d-flex no-wrap"><img src="../images/document.svg" alt="document" className="mr-15 image_width" /> <span><b>Do kraja ovog koraka: </b> <br></br> izradit ćete jasan i koncizan javni poziv, koji sadrži sve potrebne informacije da bi aplikanti imali jasnu ideju o sadržaju šeme.</span></p>
            </div>
        </ContentPage>
    )
}
