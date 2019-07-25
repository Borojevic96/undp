import React from 'react';
import ContentPage from './';

import { Link } from 'react-router-dom';

import Toolpit from '../../common/Toolpit';

export const Page_2_4 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>DRUGA FAZA ( Izrada šeme ) - Kriteriji odabira</b></div>
                <h2 className="blue_overlay_heading">
                    Korak 2.4 KRITERIJI ODABIRA
                </h2>
                <div className="custom_tables blue_yellow_table_2 d-flex">
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KADA?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">10 - 12. (13) sedmica</p>
                        </div>
                    </div>
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KOLIKO DUGO?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">6 dana (ne kontinuirano); ovaj korak radi tim za izradu šeme interno</p>
                        </div>
                    </div>
                </div>

                <p className="content_text">Sada znate šta želite, pa čak imate i neke ideje kako da osigurate dobre prijedloge projekata. Sada je vrijeme da razmotrite kako ćete osmisliti kriterije za odabir na način da vam osiguraju da možete odabrati dobre i adekvatne prijedloge za finansiranje. Pri tome treba razmišljati da kroz dobro osmišljene kriterije aplikantima pružite određene naznake kakve projekte očekujete prije nego što se odluče da apliciraju.</p>

                <p className="content_text">Opći kriteriji predloženi u koraku 9 Faze 1. predstavljali su upravo to. Ovdje trebate dotjerati (finalizirati) kriterije i pretočiti ih u pitanja, a odgovore na ta pitanja će profesionalno ocjenjivati grupa procjenitelja. To nije nimalo jednostavan zadatak.</p>

                <div className="yellow_box">
                    <h3 className="content_heading d-flex no-wrap d-flex-aac mb-20"><img src="../images/lightbulb.svg" alt="lightbulb"></img> <b>OSMIŠLJAVANJE KRITERIJA ZA ODABIR</b></h3>
                    <p className="content_text">Zamislite da radite na projektovanju stativa za gol za neki sport. Ako stative budu postavljene preusko ili prenisko, golova neće ni biti; ako budu postavljene preširoko ili previsoko, biće previše golova; ako stative budu pogrešnog oblika, čak ni dobri igrači neće moći postići gol: igra će zavisiti od sreće, a ne od vještine i kvaliteta!</p>
                </div>

                <p className="content_text">U obzir treba uzeti dvije glavne vrste kriterija:</p>
                <ul>
                    <li className="pos-rel content_text mb-0"><b>Kriteriji kojima se utvrđuje je li predloženi projekt u skladu s ključnim uvjetima šeme ili ne.</b> Ako nije, općenito će se morati eliminirati. Ova vrsta kriterija često se naziva <b>kriterijima prihvatljivosti ili eliminatornim kriterijima. Administrativni kriteriji su njihov važan element: npr. kompanije koje apliciraju moraju biti registrirane, s urednim poslovanjem itd.</b></li>
                    <li className="pos-rel content_text"><b>Kriteriji kvaliteta – njima se određuje u kojoj će mjeri predloženi projekt vjerovatno ostvariti upravo one izlazne rezultate i ishode - prema (općeprihvaćenom ili propisanom) standardu, na vrijeme i uz razumne troškove,</b> a koji će vašoj šemi pomoći da ostvari ciljeve u pogledu izlaznih rezultata i ishoda.</li>
                </ul>

                <p className="content_heading blue">Kriteriji prihvatljivosti</p>
                <p className="content_text">Oni trebaju:</p>
                <ul>
                    <li className="pos-rel content_text mb-0">potpadati pod ključne kriterije odabira koji su utvrđeni u Fazi 1. 9;</li>
                    <li className="pos-rel content_text">biti pažljivo usklađeni s pitanjima iz obrasca prijave (pošto ih morate procijeniti pozivajući se na prijavu i/ili vezanu dokumentaciju)</li>
                    <li className="pos-rel content_text">biti jasni i konkretni, lako razumljivi, tako da ih na sličan način tumače svi oni koji će procjenjivati prijave i primjenjivati tablicu (procjenitelji).</li>
                </ul>
                <p className="content_text">Da bi se osmislili adekvatni kriteriji prihvatljivosti, trebate imati u vidu kada se oni primjenjuju i na koji način. Da se podsjetimo: to je moment pregleda dostavljene dokumentacije, kada prvo morate provjeriti jesu li aplikanti dostavili svu potrebnu dokumentaciju (a to je i administrativni kriterij) i jesu li je ispravno popunili. Ispravna i potpuna prijava čini osnovu za vašu prosudbu i procjenu prijava za finansiranje.</p>

                <p className="content_text"><b>Tabela 2.1:</b> Pitanja o usklađenosti (ili prihvatljivosti) (Alat 7)</p>

                <div className="custom_tables mb-25">
                    <table id="table040" className="No-Table-Style TableOverride-1">
                        <colgroup>
                            <col className="_idGenTableRowColumn-119" />
                            <col className="_idGenTableRowColumn-120" />
                            <col className="_idGenTableRowColumn-121" />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Pitanje</p>
                                </td>
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Da/Ne</p>
                                </td>
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Napomene</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-122">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Je li obrazac prijave uredno popunjen? </p>
                                </td>
                                <td className="No-Table-Style CellOverride-47" />
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Ako nije, utvrdite nedostaju li neki dijelovi zbog administrativne greške koja se može ispraviti za 3 dana. Ako je tako, razmislite o mogućnosti da zatražite pismeni odgovor u strogo određenom roku.</p>
                                    <p className="tekst-u-tabelama">Ako je naknadno dostavljeni odgovor prihvatljiv, prihvatite prijavu.</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Je li plan rada razrađen na tipskom obrascu za plan rada i sadržan u prijavi?</p>
                                </td>
                                <td className="No-Table-Style CellOverride-47" />
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Ako nije: eliminirajte prijavu. Ovaj element je obavezan.</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Je li budžet projekta razrađen na tipskom obrascu za budžet i sadržan u prijavi?</p>
                                </td>
                                <td className="No-Table-Style CellOverride-47" />
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Ako nije, eliminirajte prijavu. Ovaj element je obavezan.</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Je li ključni aplikant prihvatljiv prema opisu šeme?</p>
                                </td>
                                <td className="No-Table-Style CellOverride-47" />
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Ako nije, eliminirajte prijavu.</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Je li svaki koaplikant (ako ih ima) prihvatljiv prema opisu šeme?</p>
                                </td>
                                <td className="No-Table-Style CellOverride-47" />
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Ako nije, možete odlučiti da zadržite prijavu ako je odgovor na sljedeće pitanje potvrdan.</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-70">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Čak i ako jedan ili više koaplikanata nisu prihvatljivi, da li bi se projekt mogao provesti bez njih?</p>
                                </td>
                                <td className="No-Table-Style CellOverride-47" />
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Ako da, zadržite prijavu.</p>
                                    <p className="tekst-u-tabelama">Ako ne, eliminirajte prijavu.</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-94">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">Ostalo….</p>
                                </td>
                                <td className="No-Table-Style CellOverride-47" />
                                <td className="No-Table-Style CellOverride-47" />
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="content_heading blue mb-25">Kriteriji kvaliteta (odabira)</h3>
                <p className="content_text">Sada možete preći na izradu pitanja i tablice za ocjenjivanje urednosti i ispravnosti primljenih prijava. Vratimo se na okvir za opće kriterije odabira u koraku 9 Faze 1:</p>

                <div className="custom_tables mb-25">
                    <table id="table041" className="No-Table-Style TableOverride-1">
                        <colgroup>
                            <col className="_idGenTableRowColumn-84" />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-40">
                                <td className="No-Table-Style CellOverride-81">
                                    <p className="tekst-u-tabelama ParaOverride-4">1. <span className="CharOverride-74"> </span><span className="CharOverride-9">Relevantnost:</span> Predložena rješenja u projektu moraju dokazano podržavati ostvarivanje date politike (te biti dosljedna općim i specifičnim ciljevima šeme).</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-111">
                                <td className="No-Table-Style CellOverride-82">
                                    <p className="tekst-u-tabelama ParaOverride-4">2.<span className="CharOverride-9"> Kvalitet projekta: </span>Finansirat će se samo oni projekti koji predlažu dokazano efikasna rješenja: moraju predstavljati dobru vrijednost za novac i biti spremni da započnu provedbu u kalendarskoj godini u kojoj je predviđena provedba šeme te se trebaju završiti u određenom (definiranom) roku. Pod kvalitetom projekta obično podrazumijevamo „metodologiju ili logiku projektne intervencije“, budžet, ekonomičnost. </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-123">
                                <td className="No-Table-Style CellOverride-83">
                                    <p className="tekst-u-tabelama ParaOverride-4">3.<span className="CharOverride-9"> Održivost: </span>Projekti moraju demonstrirati dobre izglede da će opstati i po završetku finansiranja u okviru šeme, tako da treba predložiti izlazne rezultate koji dokazano mogu dovesti do održivih rezultata (ishoda), a koji su dosljedni općim ciljevima šeme. </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p class="body">Sada trebate smisliti neka konkretna pitanja, čiji će vam odgovori dati dokaze za procjenu na osnovu bodovanja. Pratimo sljedeće korake:</p>
                <ol className="mb-25">
                    <li class="body ParaOverride-43"><span class="CharOverride-9">Utvrditi opći broj bodova</span> (i/ili ponder) za svaki ključni kriterij;</li>
                    <li class="body ParaOverride-43"><span class="CharOverride-9">Utvrditi ključna pitanja</span> koja bi trebala biti standardizirana (ili bar dodatno tumačena) u zavisnosti od vrste šeme;</li>
                    <li class="body ParaOverride-43">Potom, <span class="CharOverride-9">odredite relativni značaj svakog pitanja</span> (tj. svakom pripišite određeni broj bodova);</li>
                    <li class="body ParaOverride-43">Potom <span class="CharOverride-9">odredite oblike dokaza koje ćete tražiti. </span></li>
                </ol>

                <h3 className="content_heading d-flex black no-wrap d-flex-aac mb-20"><img src="../images/lightbulb_yellow.svg" alt="lightbulb"></img> <b>U nastavku ćemo navesti jedan primjer kako bismo objasnili kako ovaj sistem obično funkcionira.</b></h3>

                <div id="_idContainer076" className="Basic-Text-Frame _idGenObjectStyleOverride-9 d-block mb-25">
                    <p className="body mb-0">Primjeri stvarnih tablica za kriterije odabira dostupni su u<span className="CharOverride-12"> </span><a href=""><span className="CharOverride-75">prilogu 2, Studija slučaja 3 </span></a>na kraju Priručnika. Analiza nekih kriterija prihvatljivosti i odabira i tablica korištenih u kontekstu strukturnih i investicijskih fondova EU data je u <a href=""><span className="CharOverride-75">prilogu 2, Studija slučaja 4</span></a><span className="CharOverride-75">.</span></p>
                </div>

                <h3 className="content_heading d-flex black no-wrap d-flex-aac mb-20"><img src="../images/lightbulb_yellow.svg" alt="lightbulb"></img> <span className="blue">Objašnjeni primjer: <span className="black">Tablica bodovanja s listom pitanja, ukupnog i pojedinačnog broja bodova (i/ili pondera) za svaki kriterij.</span></span> </h3>

                <h3 className='content_heading blue mb-25'>1. Relevantnost</h3>
                <p className="content_text">Ovo je ključni kriterij, koji uključuje relevantnost politike/programa, potrebe i potražnju. Fokusira se na vrstu ishoda i izlaznih rezultata koji su predloženi u projektu. Procjenitelj će morati detaljno čitati projektne prijedloge, razmatrati sve, pa čak i loše formulirane prijedloge ishoda i izlaznih rezultata, kako bi vidjeli je li projekt doista relevantan za šemu. Ovo razmatranje je mnogo šire i ne odnosi se samo na ispunjavanje administrativnih uvjeta.</p>
                <p className="content_text">U okviru ovog kriterija, neka pitanja će zahtijevati odgovore da ili ne, a u nekim slučajevima <b>odgovor „ne“ će upućivati na nepoštivanje osnovnih pravila šeme, što automatski vodi ka eliminaciji</b>.</p>

                <p className="content_text blue">Ključna pitanja, mogući odgovarajući dokazi i bodovi</p>

                <h3 className="content_heading d-flex black no-wrap d-flex-aac mb-20"><img src="../images/settings.svg" alt="settings"></img> <span className="content_text"><b>Tabela 2.2:</b> Tablica bodovanja - Relevantnost. (Alat 8) Bodovanje: 5 = vrlo snažno ili potpuno; 4 = snažno; 3 = značajno; 2 = prilično slabo; 1 = skoro nikako.</span></h3>

                <div className="custom_tables mb-25">
                    <table id="table042" className="No-Table-Style TableOverride-1">
                    <colgroup>
                        <col className="_idGenTableRowColumn-124" />
                        <col className="_idGenTableRowColumn-47" />
                        <col className="_idGenTableRowColumn-125" />
                    </colgroup>
                    <tbody>
                        <tr className="No-Table-Style _idGenTableRowColumn-54">
                            <td className="No-Table-Style CellOverride-33 _idGenCellOverride-4" rowspan="2">
                                <p className="nalovi-u-tabelama ParaOverride-2">Predložena pitanja</p>
                            </td>
                            <td className="No-Table-Style CellOverride-33">
                                <p className="nalovi-u-tabelama ParaOverride-2">Ponderiranje</p>
                            </td>
                            <td className="No-Table-Style CellOverride-33 _idGenCellOverride-4" rowspan="2">
                                <p className="nalovi-u-tabelama ParaOverride-2">Napomene</p>
                            </td>
                        </tr>
                        <tr className="No-Table-Style _idGenTableRowColumn-54">
                            <td className="No-Table-Style CellOverride-33">
                                <p className="nalovi-u-tabelama ParaOverride-2">Bodovi 1- 5</p>
                            </td>
                        </tr>
                        <tr className="No-Table-Style _idGenTableRowColumn-70">
                            <td className="No-Table-Style CellOverride-47">
                                <p className="tekst-u-tabelama">U kojoj se mjeri analiza i cilj projekta bave važnom potrebom, problemom ili prilikom koja je, bez sumnje, dosljedna cilju i logičkoj podlozi šeme?</p>
                            </td>
                            <td className="No-Table-Style CellOverride-47">
                                <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">1 (5)</span></p>
                            </td>
                            <td className="No-Table-Style CellOverride-47">
                                <p className="tekst-u-tabelama">Ovdje su dva pitanja ključna: „važno“ i „mjera“. Ponderiranje = 1, jer je ovaj kriterij skoro osnovni zahtjev.</p>
                            </td>
                        </tr>
                        <tr className="No-Table-Style _idGenTableRowColumn-70">
                            <td className="No-Table-Style CellOverride-47">
                                <p className="tekst-u-tabelama">U kojoj će mjeri planirani izlazni rezultati i ishodi doprinijeti rješavanju važne potrebe, problema ili prilike? </p>
                            </td>
                            <td className="No-Table-Style CellOverride-47">
                                <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">1 (5)</span></p>
                            </td>
                            <td className="No-Table-Style CellOverride-47">
                                <p className="tekst-u-tabelama">Ovdje je ključan odnos između ishoda i prvobitnog problema/potrebe.</p>
                            </td>
                        </tr>
                        <tr className="No-Table-Style _idGenTableRowColumn-71">
                            <td className="No-Table-Style CellOverride-47">
                                <p className="tekst-u-tabelama">U kojoj se mjeri može dokazati da postoji potražnja (za razliku od potrebe) za ishodima i izlaznim rezultatima projekta?</p>
                            </td>
                            <td className="No-Table-Style CellOverride-47">
                                <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">2 (10)</span></p>
                            </td>
                            <td className="No-Table-Style CellOverride-47">
                                <p className="tekst-u-tabelama">Ponderiranje = 2, jer ovaj kriterij snažno određuje praktičnu relevantnost projekta za šemu.</p>
                            </td>
                        </tr>
                        <tr className="No-Table-Style _idGenTableRowColumn-71">
                            <td className="No-Table-Style CellOverride-47">
                                <p className="tekst-u-tabelama">U kojoj se mjeri može dokazati da postoji potražnja (za razliku od potrebe) koja će podržati projektne aktivnosti? </p>
                            </td>
                            <td className="No-Table-Style CellOverride-47">
                                <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">1 (5)</span></p>
                            </td>
                            <td className="No-Table-Style CellOverride-47">
                                <p className="tekst-u-tabelama">Ponderiranje = 1, jer je ovaj kriterij skoro osnovni zahtjev.</p>
                            </td>
                        </tr>
                        <tr className="No-Table-Style _idGenTableRowColumn-54">
                            <td className="No-Table-Style CellOverride-47">
                                <p className="tekst-u-tabelama"><span className="CharOverride-9">Maksimalan broj bodova</span></p>
                            </td>
                            <td className="No-Table-Style CellOverride-47">
                                <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-69">25</span></p>
                            </td>
                            <td className="No-Table-Style CellOverride-47" />
                        </tr>
                    </tbody>
                </table>
                </div>

                <p className="content_text"><span className="blue">Napomena:</span> Kroz ponderiranje će se već praviti razlika između projekata koji doista obećavaju i koji su veoma relevantni za šemu od ostalih projekata. Zapamtite, kada stavimo javna sredstva na raspolaganje u okviru grant šeme, time želimo „kupiti“ rezultate (ishode) koje politika zahtijeva. Dakle, želimo favorizirati projekte koji obećavaju da će nam ostvariti ishode.</p>

                <p className="content_text blue">Standardiziranje kriterija za temu šeme</p>

                <p className="content_text"><b>Prije nego što pređemo na kriterije kvaliteta projekta, zapamtimo sljedeće: precizno tumačenje generičkih kriterija zavisit će od njihove interpretacije naspram različitih potreba za različite tematske šeme. Stoga je od presudnog značaja da se prije primjene generičkih kriterija dogovorite kako ćete ih tumačiti u određenim slučajevima te kakve ćete dokaze tražiti da biste utvrdili jesu li kriteriji ispunjeni.</b></p>

                <p className="content_text">U kasnijoj fazi, obično izrađujemo detaljniju „tablicu ocjenjivanja“ koju će procjenitelji koristiti ili se dogovaramo kako ćemo tumačiti ove generičke kriterije kod određenih vrsta projekata <Toolpit><p>Na primjer, u okviru grant šema koje se finansiraju kroz vanjsku pomoć EU već mnogo godina postoji “generički” tipski obrazac, koji je zajednički za sve vrste grant šema, a time i za sve vrste projekata koji imaju izglede za takvo finansiranje. Nasuprot tome, unutar država članica: (a) razne države članice imaju tipske obrasce koji se neznatno razlikuju za šeme koje se finansiraju isključivo iz domaćih izvora, a koji su manje-više standardizirani za temu određene šeme i (b) čak i u okviru strukturnih i investicijskih fondova EU, tipski obrazac općenito nije identičan za sve šeme ili države članice, iako je Evropska komisija nedavno nastojala potaknuti zajednički pristup pomoći iz Evropskog socijalnog fonda. U programima vanjske pomoći je postalo uobičajeno da se organizira radionica za obuku procjenitelja, bilo da se radi o “internom” osoblju finansijera ili “vanjskim” konsultantima, koji su angažirani zbog svog „sektorskog/ tematskog“ stručnog znanja. Više informacija o ovoj temi možete pronaći u prilogu 2, <Link>Studije slučaja 3</Link> i <Link>Studije slučaja 4</Link>.</p></Toolpit> (procjenitelji su osobe koje su imenovane da razmatraju prijave, utvrđuju njihovu prihvatljivost i relativni kvalitet svake prijave.) Ova tablica je pažljivo osmišljena (na osnovu generičkih kriterija), a njezina primjena će se prilagoditi za svaku šemu kroz uključivanje specifičnih podkriterija i pitanja. Da bude jasnije, tako će se npr. u svim šemama procjenjivati pitanje „potražnje“, ali u različitoj formi za različite vrste projekata. Pogledajte sljedeća tri primjera (pri tome fokusirajte se na kriterije relevatnosti /vidi Tabelu 2.2./):</p>

                <h3 className="content_heading d-flex black no-wrap d-flex-aac mb-20"><img src="../images/lightbulb_yellow.svg" alt="lightbulb"></img> <span className="blue">Primjeri:: <span className="black">Tprocjena potražnje</span></span> </h3>

                <div className="custom_tables mb-25">
                    <table id="table043" className="No-Table-Style TableOverride-1">
                        <colgroup>
                            <col className="_idGenTableRowColumn-126" />
                            <col className="_idGenTableRowColumn-127" />
                            <col className="_idGenTableRowColumn-128" />
                            <col className="_idGenTableRowColumn-129" />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-130">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2 p-10"><span className="CharOverride-29">Generički kriteriji</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2 p-10"><span className="CharOverride-29">U šemi subvencija za ulaganja MSP-ova.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2 p-10"><span className="CharOverride-29">U šemi obuka za žene koje se žele vratiti na posao</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2 p-10"><span className="CharOverride-29">U maloj šemi općinske infrastrukture</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-131">
                                <td className="No-Table-Style CellOverride-49">
                                    <p className="tekst-u-tabelama">Je li potražnja za ishodima projekata adekvatna?</p>
                                </td>
                                <td className="No-Table-Style CellOverride-49">
                                    <p className="tekst-u-tabelama">Želi li kompanija doista biti produktivnija, rasti i natjecati se na novim tržištima? </p>
                                </td>
                                <td className="No-Table-Style CellOverride-49">
                                    <p className="tekst-u-tabelama">Postoje li izgledi da će se na tržištu rada u bliskoj budućnosti pojaviti prilike za zaposlenje bolje kvalificirane radne snage koju će program vjerovatno proizvesti? Posjeduju li trenutni ili potencijalni budući poslodavci dovoljne dokaze da su im zaista potrebni radnici koji posjeduju takve vještine? </p>
                                </td>
                                <td className="No-Table-Style CellOverride-49">
                                    <p className="tekst-u-tabelama">Razumiju li korisnici infrastrukture koje su ciljane koristi od unaprijeđene infrastrukture i razumiju li da će postojati tekući i investicioni troškovi održavanja infrastrukture? </p>
                                    <p className="tekst-u-tabelama">Jesu li odlučni da iskoriste mogućnosti unaprijeđene infrastrukture, ali i spremni da učestvuju u plaćanju tekućih i investicionih troškova održavanja infrastrukture? </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-107">
                                <td className="No-Table-Style CellOverride-49">
                                    <p className="tekst-u-tabelama">Je li potražnja za izlaznim rezultatima projekta adekvatna?</p>
                                </td>
                                <td className="No-Table-Style CellOverride-49">
                                    <p className="tekst-u-tabelama">Koje nove proizvode ili unaprijeđene procese kompanija traži u svom poslovnom planu kroz predloženo ulaganje? </p>
                                </td>
                                <td className="No-Table-Style CellOverride-49">
                                    <p className="tekst-u-tabelama">Postoje li dokazi da dovoljan broj žena želi steći vještine koje će se vjerovatno nuditi kroz program obuke? Da li su te vještine potrebne na lokalnom tržištu rada? </p>
                                </td>
                                <td className="No-Table-Style CellOverride-49">
                                    <p className="tekst-u-tabelama">Da li lokalno stanovništvo traži ili želi predloženu infrastrukturu? Ako se ona izgradi, hoće li se koristiti? Ima li aplikant jasnu ideju kako će održavati infrastrukturu i pokrivati troškove održavanja?</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-132">
                                <td className="No-Table-Style CellOverride-49">
                                    <p className="tekst-u-tabelama">Je li potražnja za projektnim aktivnostima adekvatna?</p>
                                </td>
                                <td className="No-Table-Style CellOverride-49">
                                    <p className="tekst-u-tabelama">Je li kompanija u svom poslovnom planu opredijeljena da izvrši potrebno ulaganje i da sama pokrije najmanje 60% troškova? </p>
                                </td>
                                <td className="No-Table-Style CellOverride-49">
                                    <p className="tekst-u-tabelama">Je li dovoljan broj žena spreman da učestvuje u predloženoj obuci, pod predloženim uvjetima? </p>
                                </td>
                                <td className="No-Table-Style CellOverride-49">
                                    <p className="tekst-u-tabelama">Postoje li dokazi da je aplikant ozbiljno zainteresiran da izvrši predloženo ulaganje? Je li predloženo ulaganje dio nekog strateškog ili drugog plana? Jesu li uloženi ikakvi napori na pripremama za predloženi projekt?</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-103">
                                <td className="No-Table-Style CellOverride-49" colspan="4">
                                    <p className="tekst-u-tabelama ParaOverride-4"><span className="CharOverride-9">Zaključak: </span>Ovaj primjer pokazuje da će biti potrebno izraditi tablicu za odabir, uz generičke kriterije odabira. Tablica će uključivati pitanja ili podkriterije koji su prilagođeni temi grant šeme (ili komponenti grant šeme).</p>
                                    <p className="tekst-u-tabelama ParaOverride-4">Jasno vidite da je izrada potpune tablice za ocjenjivanje dugotrajan proces, koji provodi tim za implementaciju i osobe uključene u procjenu. Ova tablica se često ne objavljuje jer se često finalizira tek po zaprimanju prijava.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="content_text"><b>Vidi <Link>prilog 2, Studija slučaja 3,</Link> gdje su dati primjeri standardiziranih tablica za kvalitetne kriterije odabira.</b></p>

                <h3 className="content_heading blue mb-25">2. Kvalitet projekta:</h3>

                <p className="content_text">Kad je riječ o kvalitetu projekta, pažljivije razmatramo ključne faktore efikasnosti i učinkovitosti projekta. Postoji mnogo pitanja i stvari za razmatranje koje je potrebno procijeniti prema ovim kriterijima, a oni su apsolutno odlučujući u utvrđivanju treba li neki projekt finansijski podržati ili ne. Dakle, predlažemo da ovim kriterijima dodijelite 60% bodova, što će procjeniteljima omogućiti da ocjene svaki ključni aspekt kvaliteta.</p>

                <p className="content_text">Finansirat će se samo oni projekti koji predlažu dokazano efikasna rješenja: oni moraju predstavljati dobru vrijednost za novac i biti spremni za provedbu u tekućoj kalendarskoj ili u godini kada je predviđena provedba šeme i izvodljivi u utvrđenom roku. Projekti moraju predložiti izlazne rezultate koji dokazano mogu dovesti do ishoda koji su dosljedni općim ciljevima šeme.</p>

                <h3 className="content_heading d-flex black no-wrap d-flex-aac mb-20"><img src="../images/settings.svg" alt="settings"></img> <span className="content_text"><b>Tabela 2.3:</b> Tablica bodovanja - kvalitet projekta. (Alat 8) Bodovanje: 5 = vrlo snažno ili potpuno; 4 = snažno; 3 = značajno; 2 = prilično slabo; 1 = skoro nikako.</span></h3>

                <div className="custom_tables mb-25">
                    <table id="table044" className="No-Table-Style TableOverride-1">
                        <colgroup>
                            <col className="_idGenTableRowColumn-133" />
                            <col className="_idGenTableRowColumn-33" />
                            <col className="_idGenTableRowColumn-76" />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-33" rowspan="2">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Predložena pitanja</p>
                                </td>
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Ponderiranje</p>
                                </td>
                                <td className="No-Table-Style CellOverride-33" rowspan="2">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Napomene</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Bodovi 1 - 5</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-46" colspan="3">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">Pitanja efikasnosti</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-22">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">U kojoj mjeri se aktivnosti mogu završiti u raspoloživom vremenskom roku? </p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">1 (5)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Ponderiranje = 1, jer je ovaj kriterij skoro osnovni zahtjev.</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-22">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">U kojoj mjeri se aktivnosti mogu završiti u okviru kapaciteta aplikanta? </p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">1 (5)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Ponderiranje = 1, jer je ovaj kriterij skoro osnovni zahtjev.</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-98">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">U kojoj su mjeri planirani izlazni rezultati u pogledu kvantiteta i kvaliteta dosljedni (i načelno mogu rezultirati) izlaznim rezultatima šeme?</p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">1 (5)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Razmatramo i kvalitet i kvantitet. Jasno je da će projekt koji u oba ova aspekta značajno pomaže ispunjavanju izlaznih rezultata šeme dobiti veliki broj bodova.</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">U kojoj će mjeri predložene aktivnosti u okviru projekta dovesti do predloženih izlaznih rezultata do kraja projekta? </p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">1 (5)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Ključno pitanje efikasnosti. Ako ovdje postoji veliki problem, projekt ne može uspjeti.</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-70">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">U kojoj će se mjeri finansijskim sredstvima (i navedenim troškovnim stavkama) osigurati postizanje izlaznih rezultata? </p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">1 (5)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Ključno pitanje budžeta: Ovdje se fokusirate na to da li je budžet adekvatan, općenito, ali i za određene (suštinske) aktivnosti.</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-39">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">U kojoj mjeri budžet sadrži dobre izglede za ekonomičnost (troškovnu efikasnost)?</p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">1 (5)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Sekundarno budžetsko pitanje: Ovdje se fokusirate na to da budžetski troškovi po stavkama ne budu previsoki, ali isto tako i da ne budu toliko podcijenjeni da će zbog toga vjerovatno ispaštati kvalitet i opća učinkovitost. </span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-84" colspan="3">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Maksimalan broj bodova: 30</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-85 _idGenCellOverride-2" colspan="3">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">Pitanja efikasnosti i učinkovitosti</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-134">
                                <td className="No-Table-Style CellOverride-37">
                                    <p className="tekst-u-tabelama">U kojoj mjeri su kvalitet i kvantitet planiranih ishoda dosljedni izlaznim rezultatima šeme (ili drugačije rečeno, u kojoj mjeri će ishodi biti rezultat predviđenih izlaznih rezultata šeme)? </p>
                                </td>
                                <td className="No-Table-Style CellOverride-37">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">2 (5)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-37">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Razmatramo i kvalitet i kvantitet. A jasno je da će projekt koji u oba ova aspekta značajno pomaže ostvarivanju ishoda šeme dobiti veliki broj bodova.</span></p>
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Ponderiranje = 2, jer je ovaj kriterij praktično pokretač kvaliteta.</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71">
                                <td className="No-Table-Style CellOverride-57">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-9">U kojoj mjeri planirani izlazni rezultati doista mogu doprinijeti ostvarivanju planiranih ishoda?</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-57">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">3 (5)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-57">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-30">Ponderiranje = 3, jer je ovo najvažnije pitanje kvaliteta od svih!</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-86" colspan="3">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Maksimalan broj bodova: 25</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="content_text"><span className='blue'>Napomena:</span> Može se tvrditi da bi kriteriji učinkovitosti trebali nositi više bodova. Međutim, veoma ih je teško unaprijed procijeniti, ali ako se osiguraju relevantnost i efikasnost, njih često prati i iskustvo. Ako dodijelimo veći broj bodova, postoji opasnost da ćemo to učiniti na osnovu pretjeranog nagađanja, a ne na osnovu dokaza.</p>

                <h3 className="content_heading blue mb-25">3. Održivost</h3>

                <p className="content_text">U mjeri u kojoj je to moguće, ishodi projekta moraju demonstrirati dobre izglede da će opstati i po završetku finansiranja u okviru šeme.</p>
                <p className="content_text"><b>Poput učinkovitosti, i održivost je izuzetno teško unaprijed procijeniti, naročito na osnovu obrasca prijave.</b> U određenoj mjeri, pitanje „potražnje“ (vidi relevantnost) biće važan faktor održivosti, a ono je već uključeno u tablicu. Stoga se ovdje tom kriteriju dodjeljuje samo 10 bodova. Ovdje ćemo uključiti i određene horizontalne kriterije, koji se možda smatraju važnim (npr. favoriziraju se projekti za određene „ciljane grupe“ kao što su žene).</p>

                <h3 className="content_heading d-flex black no-wrap d-flex-aac mb-20"><img src="../images/settings.svg" alt="settings"></img> <span className="content_text"><b>Tabela 2.4:</b> Tablica bodovanja – održivost. (Alat 8) Bodovanje: 5 = vrlo snažno ili potpuno; 4 = snažno; 3 = značajno; 2 = prilično slabo; 1 = skoro nikako.</span></h3>

                <div className="custom_tables mb-25">
                    <table id="table045" className="No-Table-Style TableOverride-1">
                        <colgroup>
                            <col className="_idGenTableRowColumn-135" />
                            <col className="_idGenTableRowColumn-60" />
                            <col className="_idGenTableRowColumn-136" />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-33" colspan="3">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Održivost</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-28">
                                <td className="No-Table-Style CellOverride-33" rowspan="2">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Predložena pitanja</p>
                                </td>
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Ponderiranje</p>
                                </td>
                                <td className="No-Table-Style CellOverride-33" rowspan="2">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Napomene</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Bodovi 1 - 5</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-70">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">U kojoj mjeri je predviđeno da se resursima (uključujući finansijske) osigura buduća održivost projektnih ishoda? </p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">2 (10)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Na primjer: za mini-infrastrukturu, postoji  li plan za osiguravanje stalnog održavanja i optimalnog korištenja po završetku projekta?</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-99">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama">U kojoj mjeri su u projekt ugrađene aktivnosti za optimiziranje izgleda za održivost?</p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">1 (5)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Na primjer: (i) nabavka opreme. Da li je predviđena obuka kako bi je ljudi znali koristiti i održavati? (ii) Da li su meke (eng. „soft“) aktivnosti kombinirane sa tvrdim (eng.„hard“) mjerama za optimiziranje navedenog – npr. ulaganje u sredstva u turizmu kombinirano s marketingom?</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-39">
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-9">U kojoj mjeri će se projekt „naročito potruditi“ kako bi osigurao da utvrđene „posebne grupe“ imaju priliku da učestvuju i ostvare korist? </span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">2 (10)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Na primjer: (i) uložiti posebne napore na uključivanju „specijalnih grupa“ u projektne aktivnosti (tokom trajanja projekta) i (ii) praktično olakšati pristup osobama iz navedenih grupa koristima koje donosi projekt.</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-47" />
                                <td className="No-Table-Style CellOverride-47">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">25</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-47" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-87" colspan="3">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Maksimalan broj bodova: 25</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="content_text"><b>Uvijek će postojati različita mišljenja o ponderiranju i bodovanju. Prikazani pristup je široko usklađen s ključnim razmatranjima koja su spomenuta u ovom priručniku: relevantnost, efikasnost, učinkovitost i transparentnost.</b></p>

                <p className="content_text"><b>Trebamo zapamtiti: Možemo bodovati samo ono što možemo procijeniti, a procijeniti možemo samo ono što vidimo na papiru, na temelju obrasca prijave i prateće dokumentacije.</b> Uvijek postoje elementi o kojima želimo znati više, ali to nije moguće bez pretjeranog opterećivanja procesa prijavljivanja.</p>

                <p className="content_heading black d-flex no-wrap d-flex-aac mb-20"><img src="../images/lightbulb_yellow.svg" alt="lightbulb"></img><span className="content_heading blue"><b>Savjeti! <br></br></b> <span className="black">Na kraju, evo i nekoliko savjeta o kriterijima prihvatljivosti i odabira.</span></span></p>

                <ul className="content_text">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Donatori teže da svoje „horizontalne“ prioritete intenzivno ugrade u kriterije prihvatljivosti, pa čak i kriterije odabira. Ovo je dobra praksa. Nažalost, često je podložna zloupotrebi. To često dovodi do pretjerano snažnog ponderiranja ovih kriterija. Budite pažljivi, to ide mnogo dalje od onoga što bi bilo opravdano. Snažno ponderiranje okoliša uopće nije opravdano u projektima koji su nebitni ili neutralni za okoliš (npr. razvoj MSP-a, programi za tržište rada) ili pak rodne ravnopravnosti u mnogim infrastrukturnim projektima. Ako se u ovim slučajevima potiče snažno ponderiranje, postoji stvarna opasnost da će se to koristiti kao neprimjeren i netransparentan način bodovanja „favoriziranih“ projekata u odnosu na ostale. Ova tendencija je evidentna u šemama koje su proteklih godina izradile neke države članice EU. Takvu praksu ne treba poticati. Direktniji i transparentniji način rješavanja pitanja koja podupiru „horizontalne“ kriterije (rod, okoliš, specifične ciljane grupe ili oblasti itd.) bio bi ili da se: (a) osmisli mjera posvećena isključivo nekom pitanju ili grupi ili (b) da se izdvoji dio budžeta šeme isključivo za projekte koji se intenzivno bave takvim pitanjima ili grupama. Ako se takva pitanja rješavaju putem horizontalnih kriterija, „ponderi“ se određuju prema obimu u kojem osnovna tema šeme može utjecati na horizontalno pitanje: ako je taj obim ograničen, ponderiranje treba biti na niskom nivou. S druge strane, ako je obim značajan, i ponderi mogu biti veći.</li>
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Ne treba poticati jake ekonomske i socijalne kriterije kvaliteta zasnovane na dinamici promjena koje pokreću javne finansije u svakom sektoru. Kod kriterija za šeme podrške privatnom sektoru, treba izbjegavati kriterije koji generiraju poremećaje tržišta i dovode do „alokativne neefikasnosti“. (Alokativna neefikasnost je vid ekonomske neefikasnosti, koji se u ovom konkretnom slučaju manifestira kada se javna finansijska pomoć odobri za ostvarivanje ishoda koji bi se ostvario čak i da takva pomoć nije pružena).</li>
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Pobrinuti se da se glavni kriteriji kvaliteta procjenjuju pozivanjem na konkretne dokaze koji se odnose na predmetni sektor. To se može uraditi na dva načina. Na primjer, u slučaju grantova malim i srednjim preduzećima, često se traže detaljne informacije o: a) poslovnoj situaciji MSP-a i prognozama rasta i b) određenim unapređenjima koja će se omogućiti grantom. Često se može zahtijevati da one budu navedene u poslovnom planu ili tipičnim koeficijentima koji se navode u poslovnom planu (promet, bruto i neto dobit, izvoz i % ukupnog prometa i sl., uporedbe po godinama). Općenito, podkriteriji se koriste za procjenu šireg kriterija, a ovi podkriteriji se iskazuju u vidu konkretnih realnosti specifičnih za određeni sektor koje finansijer želi vidjeti (tj. vrste dokaza), a koje će se prihvatiti kao dokaz o ispunjavanju kriterija. Oba su pristupa prihvatljiva. U prilogu 2, <Link>studija slučaja 3 i 4</Link>, navodimo detaljne kriterije koji su korišteni u stvarnoj grant šemi kako bi se bolje procijenio kvalitet projekata.</li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> U svim slučajevima, pitanja u okviru kriterija kvaliteta moraju biti povezana s određenim pitanjima u obrascu prijave i popratnoj dokumentaciji (npr. studije), a svi procjenitelji (ili evaluatori) moraju usvojiti isti pristup procjeni/evaluaciji. Drugim riječima, svi oni moraju vršiti procjenu/ evaluaciju u odnosu na iste vrste dokaza.</li>
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Kriteriji mogu biti manje ili više otvoreni: ako ste sigurni, zahvaljujući prethodnom iskustvu i/ ili temeljitom procesu izrade, da možete dobiti više nego dovoljan broj onakvih projekata koji su vam potrebni, onda možete imati „zatvorenije“ (tj. ciljane) kriterije. Ali, ako niste sigurni, neizbježno morate koristiti šire (otvorenije) kriterije.</li>
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Konačno, izuzetno je poželjno da se finansiranje ponudi za najmanje 40% potpunih prijedloga projekata. Stoga to trebate imati na umu prilikom izrade šeme, a naročito kriterija prihvatljivosti i odabira. Posljednja stvar koju želite je da se veliki broj prijava odbaci po osnovu kriterija prihvatljivosti ili zbog lošeg kvaliteta, koji ih čini nepodobnim za finansiranje.</li>
                </ul>

                <p className="content_text d-flex no-wrap"><img src="../images/document.svg" alt="document" className="mr-15 image_width" /> Do kraja ovog koraka:<br></br>
                dovršit ćete izradu ključnih pitanja i definirati bodovanje i broj bodova za pitanja koja su
                specifična za određene sektore, kako biste mogli procijeniti svaku prijavu u odnosu na ključne kriterije odabira, s kojima ste se već susreli u koraku 1.9. Također će biti izrađena pitanja za procjenu opće usklađenosti i prihvatljivosti prijava. </p>
            </div>
        </ContentPage>
    )
}
