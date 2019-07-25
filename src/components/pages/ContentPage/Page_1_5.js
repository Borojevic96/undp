import React from 'react';
import ContentPage from './';

import { Link } from 'react-router-dom'; 

export const Page_1_5 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>PRVA FAZA ( Konceptualizacija šeme ) - Analiza problema, potreba, prilika i potražnje </b></div>
                <h2 className="blue_overlay_heading">
                    Korak 1.5  ANALIZA PROBLEMA, POTREBA, PRILIKA I POTRAŽNJE
                </h2>

                <h2 className="bold-text"><span className="blue">> NAPOMENA:</span> ovaj je korak formalno odvojen od uključivanja relevantnih aktera. međutim, jedno od ključnih pitanja o kojem se relevantni akteri moraju konsultirati je pitanje potrebe i potražnje za šemom. Prema tome, ovo se vremenom uveliko preklapa s korakom 1.4.</h2>

                <div className="blue_yellow_table_2 custom_tables d-flex">
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KADA?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">Između 3. i 5. sedmica</p>
                        </div>
                    </div>
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KOLIKO DUGO?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">2 sedmice</p>
                        </div>
                    </div>
                </div>

                <p className="content_text">Politika ili politička opredjeljenja na kojima počiva šema najčešće se formuliraju na izuzetno konceptualnom nivou, koristeći opće pojmove kao što su “konkurentnost”, “obrazovno postignuće”, “poboljšano zdravlje”, “povećana zaposlenost”, “rast malih i srednjih preduzeća”, “inovacije”.</p>

                <p className="content_text">Šema se ne može bazirati samo na takvim općim pojmovima ili na prethodnim iskustvima (npr, prošlogodišnjoj šemi) pa čak ni na percipiranim potrebama. <b>Ključni faktor uspjeha</b> mnogih šema je da se osigura da šema <b>prepozna i zadovolji snažnu potražnju potencijalnih aplikanata za sredstvima iz šeme kojima će se finansirati dobri i zreli projekti.</b> Budući da se, u slučaju grant šema u BiH, novac mora brzo potrošiti, tijelo odgovorno za realizaciju mora odabrati projekte koji su gotovo “spremni za realizaciju”, drugim riječima, koji su u naprednoj fazi pripreme, a korespondiraju s temama oko koje se šema razvija. U suprotnom, može se desiti da bude mnogo projektnih prijedloga lošeg kvaliteta, koji nisu “zreli za realizaciju”. Pored toga, očekuje se da će se regulatorni okvir u BiH promijeniti na način da odražava prakse u EU kako bi se postepeno pripremio teren za višegodišnje grant šeme. Takve promjene neće samo povećati finansijske kapacitete grant šema i korisnicima dati više vremena za kvalitetnu pripremu i realizaciju, nego će, također, smanjiti pritisak kojem je tim za izradu šeme trenutno izložen u smislu završavanja zadataka u ograničenom vremenskom okviru.</p>

                <p className="content_text">Zbog toga je bitno, već na početku, odrediti ne samo šta se šemom nastoji postići već <b>i ono šta je zaista moguće uraditi u datom vremenskom okviru.</b> <b>Dakle, dizajn šeme mora odražavati stvarnost onoga što je moguće.</b> Upravo zbog toga, morate razumjeti probleme i potrebe koji se šemom nastoje ublažiti, kao i prilike koje aplikanti trebaju iskoristiti. Osim za izradu šeme, ova saznanja ćete kasnije koristiti da lakše objasnite budućim aplikantima šta šema konkretno može ponuditi u odnosu na njihove potrebe. Ukratko, morate razumjeti “potražnju”.</p>

                <p className="content_text">Oni koji dizajniraju šemu često misle da znaju odgovore na ova pitanja, intuitivno ili na osnovu onoga šta su vidjeli ili čuli nekada ranije. Ali, ovakav pristup nije ispravan jer upitno je znaju li oni to toliko detaljno da na osnovu toga naprave šemu za odgovarajuću vrstu ljudi, organizacija i projekata u narednih 12 mjeseci.</p>

                <p className="content_text">Vremena je malo. Zato ćete krenuti brzo i praktično od onoga šta znate ili mislite da znate, nastojeći to brzo potvrditi, ispraviti i doraditi. <b>Ključne aktere ćete konsultirati već u ranoj fazi jer su oni ti koji će vam dati ideje.</b></p>

                <p className="content_text">Na sastancima s relevantnim akterima (vidi prethodni korak), prilagodite pitanja iz alata za analizu problema i utvrđivanje potražnje diskusijama s akterima. Izdvojite glavna pitanja i njima posvetite 20 do 30 minuta. Potencijalnim učesnicima dostavite ta pitanja unaprijed, zajedno s kratkim pozivnim pismom.</p>

                <p className="content_text">Na kraju, za ovaj korak možete koristiti Alat za analizu problema i utvrđivanje potražnje, koji se nalazi u <Link to={'/page=&subpage='}>PRILOGU 1 (Alat 4)</Link>, kako za strukturiranje diskusije s relevantnim akterima tako i za evidentiranje ili naručivanje nekog drugog istraživanja u vezi s potrebom i potražnjom.</p>

                <h3 id="anchor_alat4" className="content_heading mb-25 blue d-flex d-flex-aac"><img src="../images/settings.svg" alt="Settings" /><b className="ml-15"> ALAT ZA ANALIZU PROBLEMA I POTRAŽNJE </b> (ALAT 4) </h3>
                
                <p className="content_text">U većini slučajeva, preporučujemo da se prvo fokusirate na: (i) problem ili potrebu, a zatim na (ii) potražnju, ovim redoslijedom – kako unutar tima za izradu tako i sa relevantnim akterima.</p>

                <p className="content_text">Analiza problema i potražnje je jednostavan i osnovni alat: ne daje odgovore sa 100% tačnosti. Ali, to nije ni potrebno u ovoj fazi. Sada se fokusirate da razumijete najvažnije o problemima i potražnji, a to ćete postići obrađujući informacije prikupljene alatom kako biste dobili odgovore na sljedeća pitanja:</p>

                <ul className="">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>Priroda, opseg i posljedice problema s kojim se suočavaju </b>ciljne grupe ili krajnji korisnici</li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>Priroda i prilike koje aplikanti mogu iskoristiti </b>uz pomoć granta (zašto to ne mogu postići bez granta)</li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>Nivo podrške kroz potencijalnu grant šemu </b>i neki pokazatelji uvjeta koji će je učiniti privlačnom onima kojima je potrebna i koji je žele</li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>Vrste rješenja koja će aplikanti, odnosno, korisnici šeme, moći ponuditi</b> uz određenu finansijsku podršku.</li>
                </ul>

                <p className="content_text">Pitanje potrebe će zahtijevati pažnju, naročito kada budete razmatrali potpuno novu šemu, gdje je njezino obrazloženje daleko od jasnog, a potrebe potencijalnih klijenata, posebno detaljne, uveliko nepoznate. U tom slučaju, morate početi od nule i prvo razmisliti zajedno s timom, a potom i s relevantnim akterima, koji su to konkretni problemi koji ukazuju na potražnju za grant šemom. To će vam, također, dati neke ideje o tome <b>koga ili šta bi ona mogla podržati i je li uopće vjerovatno da bi takva podrška bila dobrodošla.</b></p>

                <h2 className="content_heading_big blue mb-25">POTREBA VS POTRAŽNJA</h2>

                <p className="content_text">Bitno je razumjeti <b>potražnju</b> jer morate biti sigurni da će <b>se grant šema povezati s dovoljno odgovarajućih aplikanata</b> čije će podržane aktivnosti doprinijeti rješavanju problema ili potrebe ili prilike koju vidite. Možda se pitate zašto se ovo mora potvrditi sada: odgovor je jednostavan. Čak i kada postoji neki problem, potreba ili prilika, <b>grant šema nikada neće biti dio rješenja ukoliko u njoj ne žele učestvovati relevantni ljudi koji će donijeti</b> ona rješenja koja su vam potrebna.</p>

                <p className="content_text">U prvom primjeru postoji potreba. Ali, koliko je vjerovatno da postoji potražnja? Vrlo vjerovatno, možda u naredne tri godine. Ali, u budžetskom kontekstu, grant šema se oslanja na budžetske resurse kojima se uglavnom upravlja na <b>“godišnjoj osnovi”</b>. Novac se često mora potrošiti u toj godini. Morate znati <b>imaju li potencijalni aplikanti kapacitet da naprave dobre projekte u traženom vremenskom roku</b>. Ako nemaju, novac će se potrošiti, a da se pri tom neće ostvariti nikakvi izlazni rezultati, nikakvi ishodi i šema u takvim uvjetima neće biti uspješna.</p>


                <div className="yellow_box">
                    <p className="main-text d-flex d-flex-aac mb-20"><img src="../images/lightbulb.svg" alt="lightbulb"></img> <b>Primjer 1:</b> Mnoga mala preduzeća imaju problem lošeg upravljanja, nekvalificirane radne snage i sl. Njima je “potrebna” obuka. Ali, hoće li oni prihvatiti obuku? Žele li oni obuku? Hoće li pristupiti obuci ako im se ponudi subvencija koja će djelomično pokriti troškove? Imaju li vremena za obučavanje? Hoće li biti u stanju napraviti prijedlog projekta obuke koji će prijaviti za finansiranje u narednih 12 mjeseci? Ako je odgovor na ova pitanja negativan, onda nema mnogo smisla subvencionirati obuku.</p>
                </div>

                <p className="content_text">U drugim slučajevima (Primjer 2 – tematska oblast “inovacija”), tema može biti neuobičajeno složena i teška da bi se shvatio konkretan problem i moguća potražnja. Jedna takva oblast je upravo inovacija. Može postojati niz problema koji, u klasičnom smislu, sprečavaju nastanak dobrih projekata u industrijskoj inovaciji, ne samo u BiH već i drugdje. U ovim oblastima, da bi odgovorili na “problem” ili “potrebu”, morate suštinski poznavati problematiku na terenu i znati kakva je potencijalna “potražnja”.</p>


                <div className="yellow_box">
                    <p className="main-text d-flex d-flex-aac mb-20"><img src="../images/lightbulb.svg" alt="lightbulb"></img> <b>Primjer 2:</b> Vlada ima politiku poticanja inovacija između kompanija i univerziteta. Kompanije koriste zastarjelu tehnologiju. Čak i tzv. visokotehnološki sektori daleko zaostaju iza lidera na tržištu. Vlada smatra da su potrebni finansijski poticaji i da je grant šema dobar mehanizam za raspodjelu grantova preduzećima koja će s univerzitetima raditi na zajedničkim inovacijama. Ali, postoji li ikakav dokaz o tome da kompanije zaista žele sarađivati s univerzitetima i obratno? Nisu li kompanije opterećene nekim drugim, hitnijim problemima? I na čemu bi one mogle sarađivati s univerzitetima? Prije svega, potrebno je napraviti osnovnu provjeru moguće potražnje za takvom šemom.</p>
                </div>

                <p className="content_text">Provjera potražnje je alat koji se koristi da se provjeri može li šema odgovoriti na potražnju ciljne grupe (i potencijalnih aplikanata, ukoliko se razlikuju), doprinoseći tako širem strateškom cilju. Grant šema zahtijeva da se definiraju elementi na koje se može odgovoriti <b>samo na osnovu provjere potražnje.</b> Ti elementi su:</p>

                <ul className="">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>definicija ciljne grupe </b></li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>opravdanje grant šeme</b></li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>finansijski uvjeti grant šeme</b></li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>budžet i finansijski resursi šeme</b></li>
                </ul>

                <p className="content_text"><b>Tokom provjere nećete dobiti detaljne odgovore, ali ćete steći relativno dobru sliku,</b> koja će vam vrlo brzo kazati trebate li nastaviti s daljnjim planiranjem ili ne.</p>

                <p className="content_text d-flex no-wrap"><img src="../images/document.svg" alt="document" className="mr-15 image_width" /> <span>Do kraja ovog koraka: imaćete dovoljno generalnih dokaza o tome postoje li potreba i potražnja za ovom šemom i, otprilike, na kojem nivou. Imat ćete, također, ideju o vrsti projekata koji se mogu dobiti.</span></p>

                <p className="content_text">Tim za izradu šeme sâm poduzima preostale korake u ovoj fazi. Ti su koraci blisko povezani, ali treba pratiti njihov slijed. Ne zaboravite, još uvijek ne pravite konačnu, detaljno razrađenu šemu: sada pravite samo koncept, dovoljno detaljan da otvori put ka sljedećoj fazi i dovoljno jasan da se može pretočiti u podzakonski akt. Preostali koraci će se vrlo brzo smjenjivati, kroz intenzivan i kreativan rad.</p>
            </div>
        </ContentPage>
    )
}
