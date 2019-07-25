import React from 'react';
import ContentPage from './';
import Toolpit from '../../common/Toolpit';

export const Page_2_6 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>DRUGA FAZA ( Izrada šeme ) - Opća procjena izvodljivosti šeme</b></div>
                <h2 className="blue_overlay_heading">
                    Korak 2.6 OPĆA PROCJENA IZVODLJIVOSTI ŠEME
                </h2>
                <div className="custom_tables blue_yellow_table_2 d-flex">
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KADA?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">13. sedmica</p>
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

                <p className="content_text">Proces izrade šeme privodi se kraju. Uskoro, u Fazi 3, bit ćete spremni da složite sve elemente i razradite dokumentaciju koja će se dostaviti aplikantima. Prije toga se moraju napraviti tri koraka: (korak 2.6) - ponovo provjeriti izvodljivost čitave šeme, (korak 2.7) - izraditi plan monitoringa i izvještavanja, te (ponovo kroz korak 1.4) - još jednom aktere konsultirati o određenim elementima šeme i napraviti eventualne finalne korekcije.</p>

                <p className="content_text"><b>Provjera izvodljivosti je sada prilično jednostavna</b> jer većina ključnih elemenata već postoji.</p>
                <p className="content_text">Tim za izradu treba sazvati sastanak radi provjere i proći kroz sljedeću kontrolnu listu:</p>

                <h3 className="content_heading d-flex black no-wrap d-flex-aac mb-20"><img src="../images/settings.svg" alt="settings"></img> <span className="content_text"><b>Tabela 2.6:</b> Kontrolna lista za provjeru izvodljivosti (Alat 10)</span></h3>

                <div className="custom_tables mb-25">
                    <table id="table049" className="No-Table-Style TableOverride-1 rotated_text">
                        <colgroup>
                            <col className="_idGenTableRowColumn-143" />
                            <col className="_idGenTableRowColumn-144" />
                            <col className="_idGenTableRowColumn-145" />
                            <col className="_idGenTableRowColumn-144" />
                            <col className="_idGenTableRowColumn-144" />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-146">
                                <td className="No-Table-Style CellOverride-33 ta-c">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ta-c">Element</p>
                                </td>
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Postoji </p>
                                    <p className="nalovi-u-tabelama ParaOverride-2">(Da/Ne)</p>
                                </td>
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Kvalitet je zadovoljavajući? (Da/Ne)</p>
                                </td>
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Potrebne su daljnje aktivnosti? (Da/Ne)- Koje?</p>
                                </td>
                                <td className="No-Table-Style CellOverride-33">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Osoba/rok za kompletiranje</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-53" colspan="5">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Podzakonski akt: svi elementi definirani</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-70">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-78">Koherentnost podzakonskog akta:</span> Ciljevi šeme su usklađeni s ciljevima politike/strategije; Ciljevi šeme su usklađeni s vrstama ishoda, vrste ishoda s vrstama izlaznih rezultata, vrste izlaznih rezultata s prihvatljivim aktivnostima.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">Aplikanti i korisnici su jasno definirani.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">Budžet je definiran indikativno.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">(Realni) nivoi sufinansiranja za aplikante koji su definirani, odnosno, uzeti u obzir.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">Indikativno utvrđene poželjne vrste projekata. </p>
                                </td>
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">Procijenjene i poznate potrebe i nivo potražnje za šemom.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-89">
                                    <p className="tekst-u-tabelama">Utvrđeni opći kriteriji odabira.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-89" />
                                <td className="No-Table-Style CellOverride-89" />
                                <td className="No-Table-Style CellOverride-89" />
                                <td className="No-Table-Style CellOverride-89" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-90" colspan="5">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Sadržaj javnog poziva za dostavljanje prijedloga projekata</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-147">
                                <td className="No-Table-Style CellOverride-91">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-78">Osigurana koherentnost između poziva i podzakonskog akta:</span></p>
                                    <p className="tekst-u-tabelama">Izlazni rezultati u pozivu su dosljedni (ne nužno i identični) izlaznim rezultatima i ishodima u podzakonskom aktu; ishodi u pozivu su dosljedni ishodima i ciljevima u podzakonskom aktu; aktivnosti u pozivu su dosljedne izlaznim rezultatima i ishodima u podzakonskom aktu.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-91" />
                                <td className="No-Table-Style CellOverride-91" />
                                <td className="No-Table-Style CellOverride-91" />
                                <td className="No-Table-Style CellOverride-91" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-147">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-78">Interna koherentnost u pozivu:</span></p>
                                    <p className="tekst-u-tabelama">Ishodi šeme su dosljedni cilju šeme i obratno; ishode šeme će vjerovatno omogućiti izlazni rezultati šeme u pogledu kvantiteta i kvaliteta; izlazne rezultate šeme će vjerovatno omogućiti aktivnosti koje su označene kao prihvatljive u okviru šeme.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">Inputi šeme (budžet) su adekvatni za proizvodnju predviđenog broja izlaznih rezultata i ishoda.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-147">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">Kriteriji prihvatljivosti/usklađenosti su adekvatni da osiguraju odgovarajući odgovor aplikanata.</p>
                                    <p className="tekst-u-tabelama">Pravila koja se odnose na popratnu administrativnu i pravnu dokumentaciju adekvatna su da omoguće odgovarajući odgovor aplikanata.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">Tablica za odabir testirana je na primjeru projekta (iz prakse ili fiktivnom) koji odgovara vrsti projekata koje želite potaknuti.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">Procjenitelji mogu odgovoriti na svako pitanje u tablici za odabir na osnovu informacija koje će zatražiti.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                                <td className="No-Table-Style CellOverride-54" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">Potencijalni aplikanti i akteri informirani su o šemi i konkretnim detaljima. Dobili su šansu da daju sugestije za unapređenje.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">Općenito, šema je osmišljena tako da pruža adekvatnu pomoć aplikantima koji se traže.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">Tim za izradu je sasvim zadovoljan i, nakon razgovora s pravnicima – po potrebi, zna da nema zakonskih prepreka za potencijalne aplikante da se prijave za šemu.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama pos-rel"> Tim za izradu je uvjeren da iznosi grantova nisu nepotrebno visoki, a u slučaju preduzeća, predloženi iznosi su u potpunosti u skladu s pravilima o državnoj pomoći i natjecanju u BiH <Toolpit text="Unutar EU, pravila o državnoj pomoći i natjecanju utvrđuju se na evropskom, a ne nacionalnom nivou. Diskreciona margina država članica je veoma ograničena. S vremenom će se isti ovaj sistem primjenjivati i u BiH kako se njeni zakoni budu približavali zakonodavstvu EU. Svi koji su uključeni u upravljanje grant šemama trebaju razumjeti ključne principe u ovoj oblasti i biti u stanju da prepoznaju situacije u kojima je možda potreban detaljan pravni savjet. U nastavku navodimo neke od tipičnih i čestih situacija:"></Toolpit> </p>
                                </td>
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">Tim za izradu je potpuno uvjeren da su nivoi sufinansiranja koji će se tražiti od aplikanata dostupni, odnosno raspoloživi.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">Plan za provedbu šeme je izrađen, naročito za period od pokretanja šeme do potpisivanja ugovora sa uspješnim korisnicima.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-54">
                                    <p className="tekst-u-tabelama">Izrađen je plan monitoringa i izvještavanja za šemu.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                                <td className="No-Table-Style CellOverride-92" />
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="content_text"><b>Državna pomoć:</b></p>

                <p className="content_text">Svaki oblik javne (ne državne!) finansijske pomoći ili njegov ekvivalent smatra se državnom pomoći. Grantovi svih nivoa vlasti stoga mogu biti vid državne pomoći. Zapamtite da se državna pomoć ne odnosi samo na finansijska sredstva iz fondova EU, nego na sve vidove javne pomoći. Državna pomoć odnosi se na pružanje takve pomoći akterima na tržištu u tržišnim uvjetima: ne odnosi se samo na „privatni sektor“. Odnosi se i na sve javne kompanije koje posluju na tržištu koje je, ili bi trebalo biti, otvoreno za tržišno natjecanje. Dakle, općinsko poduzeće koje vodi neku turističku atrakciju i primi javni grant za ulaganje moglo bi time prekršiti pravila o državnoj pomoći, ako je ta djelatnost otvorena za tržišno natjecanje.</p>

                <p className="content_text">U principu, u EU i tržišnim ekonomijama koje se približavaju standardima EU, svi vidovi državne pomoći su nezakoniti, uz tri glavna izuzetka: (i) prirodne katastrofe i vanredne situacije (ii) specifične situacije u sektoru (opadanje privredne djelatnosti) koje mora uvažiti Evropska komisija (iii) regionalni razvoj (opet mora uvažiti Evropska komisija). U tim iznimnim slučajevima, nivo i oblik državne pomoći je ograničen, čak i kada je dozvoljen.</p>

                <p className="content_text">Od ključnog je značaja da bude jasno da li predložena grant šema predstavlja neki od objašnjenih vidova državne pomoći ili ne. Ako je to slučaj, imperativ je da se osigura da predložena državna pomoć bude zakonita, u skladu sa relevantnim zakonima BiH (koji su već ili će se s vremenom uskladiti sa pravilima EU o državnoj pomoći).</p>

                <p className="content_text">U kontekstu grant šema, može se očekivati da većina predložene državne pomoći potpada pod tzv. „de minimis“ pravila. De minimis državna pomoć se odnosi na državnu pomoć koju država članica EU (ili zemlja kandidatkinja za članstvo koja je već uskladila svoje zakone sa relevantnim zakonodavstvom EU) ne treba unaprijed prijaviti Evropskoj komisiji. Razlog je u tome što je nivo takve pomoći relativno mali. U BiH, zakon koji regulira de minimis državnu pomoć propisuje da je to pomoć koja se dodjeljuje nekom privrednom subjektu za bilo koju svrhu jednom ili više puta i ne prelazi iznos koji se primjenjuje u skladu sa pravilima EU, u tri uzastopne fiskalne godine, uzimajući u obzir izuzetke, u skladu sa članom 2., stav (1) tačka c) Zakona o sistemu državne pomoći u Bosni i Hercegovini („Službeni glasnik BiH“, broj 10/12”). Ministarstvo ili drugo javno tijelo koje izrađuje grant šemu treba se povezati sa nadležnim tijelom BiH za državnu pomoć kako bi osiguralo da čak i najmanji iznosi pomoći ispunjavaju uvjete koji se odnose na de minimis pomoć.</p>

                <p className="content_text">Kao korisna ali vrlo uopštena i donekle gruba smjernica, može se tokom razmatranja šema uzeti obzir pretpostavka da će svaki vid javne pomoći u tržišnom sektoru koja se odobrava nekoj kompaniji biti protuzakonit i prekršiti dozvoljene pragove državne pomoći EU ako je iznos veći od 40% ukupnih prihvatljivih troškova. U svim slučajevima, oni koji rade na izradi šema sa mogućim implikacijama državne pomoći moraju konsultirati nadležno državno tijelo BiH. U konačnici, ovo objašnjenje je neformalno: u konkretnoj situaciji, u fazi izrade grant šeme moraju se konsultirati pravni stručnjaci za bh. zakonodavstvo o državnoj pomoći.</p>

                <p className="content_text">Kada se radi o grant šemi koja uključuje finansiranje od strane EU, sama EU će provjeriti da li se poštuju pravila EU /pravila o državnoj pomoći u okviru općeg procesa odobravanja grant šeme.</p>

                <p className="content_text"><b>Natjecanje:</b></p>

                <p className="content_text">U principu, u tržišnoj ekonomiji (a samim tim i na internom tržištu EU kao i u ostalim državama koje konvergiraju ovim tržištima), tržišta trebaju biti otvorena i transparentna. Posljedica ovog principa je da nijedan tržišni operator ili javno tijelo ne može administrativnim ili drugim sredstvima (osim uobičajene poslovne prakse) pokušavati da naškodi ili ograniči ili favorizira kapacitete drugog tržišnog operatora za natjecanje (praktično, da proizvodi i prodaje na tržištu), osim u situacijama koje su zakonom izričito dozvoljene. Na primjer, samo konkurencijsko tijelo povremeno može zahtijevati da neka kompanija proda dio svog poslovanja ako je u previše dominantnom položaju koji šteti drugim učesnicima na tržištu.</p>

                <p className="content_text">U kontekstu grant šema koje podržavaju učesnike na tržištu, najvažnije je osigurati da se ne uradi ništa čime bi se jedan učesnik nepravedno doveo u povoljniji položaj od ostalih. Iz ovog razloga, postoje određeni sektori u kojima se nikad ne intervenira putem javnih grantova (ili se bar ne bi trebalo intervenirati). Maloprodajni sektor je dobar primjer; drugi primjer je domaći proizvodni sektor koji ne raste; za koji analiza tržišta pokazuje da je dosegao „limit u pogledu veličine“ na domaćem tržištu. U ovim slučajevima, ako bi neko javno tijelo odobrilo Kompaniji A grant koji nije dostupan svim drugim kompanijama u tom sektoru (Kompanija B, C....), to će vjerovatno dovesti do širenja Kompanije A na štetu Kompanije B ili C, itd. To se dešava zato što je veličina tržišta ograničena: na primjer u zemlji je potreban ograničen broj pari obuće, tako da bi pomoć za 10 prodavnica obuće znatno poremetila konkurenciju jer bi ove prodavnice dovela u povoljniji položaj na štetu ostalih prodavnica obuće. Isto se može primijeniti i na neke proizvodne sektore: na primjer, pomoć proizvođačima mlijeka u u zemlji koji nastavljaju trgovati samo na domaćem tržištu vjerovatno neće dovesti do povećane konzumacije mlijeka, nego će vjerovatno izbaciti druge proizvođače sa tržišta. S druge strane, ako se pomoć pruži proizvođačima mlijeka da bi trgovali na drugim (stranim) tržištima, time bi se mogao povećati nacionalni prihod, a ne bi nanijelo nikakvu štetu drugim bh. proizvođačima. U ovom slučaju, pomoć u vidu granta je možda dozvoljena, ali bi pravnici stručni za pitanja konkurencije morali izvršiti strogu kontrolu tačnog nivoa, prirode i svrhe takve pomoći prije njenog odobravanja.</p>

                <p className="content_text d-flex no-wrap"><img src="../images/document.svg" alt="document" className="mr-15 image_width" /> Do kraja ovog koraka:<br></br>
                završili ste provjeru izvodljivosti šeme koristeći kontrolnu listu i odlučili jesu li potrebne dodatne mjere i izmjene prije prelaska na fazu finalizacije i razradu ključnih dokumenata.</p>
            </div>
        </ContentPage>
    )
}
