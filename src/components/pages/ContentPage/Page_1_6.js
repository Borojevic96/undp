import React from 'react';
import ContentPage from './';

export const Page_1_6 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>PRVA FAZA ( Konceptualizacija šeme ) - Jasnoća pravca djelovanja </b></div>
                <h2 className="blue_overlay_heading">
                    Korak 1.6  JASNOĆA PRAVCA DJELOVANJA
                </h2>

                <div className="custom_tables blue_yellow_table_2 d-flex">
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KADA?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">6. sedmica</p>
                        </div>
                    </div>
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KOLIKO DUGO?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">1-2 dana; ovaj korak radi tim za izradu šeme interno</p>
                        </div>
                    </div>
                </div>

                <p className="content_text">U ovoj, početnoj fazi, već se naziru neki elementi moguće grant šeme. Ti “elementi” su “ideje” i one će vrlo vjerovatno biti razbacane. U ovom se trenutku nijedna od njih ne usvaja već se sve jednostavno <b>stavljaju u razmatranje.</b></p>

                <p className="content_text">Ipak, vrijeme je da se do sada prikupljeni elementi („ideje“) malo razjasne kako bi se mogli organizirati unutar okvira koji će predstavljati prvi koncept, čija će se izvodljivost dalje razmatrati. To radi tim za izradu šeme samostalno. U ovom koraku uvodite red u neke od ključnih elemenata, naročito:</p>

                <ul className="">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> vrste ishoda</li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> vrste izlaznih rezultata </li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> vrste aktivnosti ili projekata </li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> potencijalni aplikanti i korisnici (ako su različiti) </li>
                </ul>

                <p className="content_text">U ovom trenutku ne postoji neki poseban redoslijed koraka koji vodi ka identifikaciji spomenutih elemenata: diskusije unutar tima i s relevantnim akterima kao i osnovni dokumenti generirat će ideje na pomalo haotičan način. Ovdje ćete ih pokušati posložiti, možda neke i eliminirati ukoliko neosporno izlaze van okvira ciljane politike ili strategije: na primjer, neke su isuviše skupe za šemu ili su na neki drugi način očigledno neizvodljive. Međutim, postoji dobra strana <b>zadržavanja svih ideja</b> u ovoj fazi.</p>

                <p className="content_text"><b>U ovom se trenutku ne zamarajte formulacijom:</b> međutim, pogledajte Tabelu 1.1. u kojoj su date ključne definicije koje će vam pomoći da kategorizirate elemente koje ste dobili iz istraživanja i konsultacija s relevantnim akterima i koje su navedene u drugim elementima (provjera potražnje, zapisnici sa sastanaka s relevantnim akterima itd.).</p>

                <p className="content_text"><b>Tabela 1.1:</b> Logika strateškog planiranja i terminologija</p>

                <div className="custom_table_5 custom_tables d-flex mb-25">
                    <div className="d-flex-s-12 bg-darkblue d-flex d-flex-jcc p-10"><p className="content_heading white">logika strateškog planiranja i terminologija</p></div>
                    <div className="d-flex-s-12 d-flex bg-blue bb-white">
                        <div className="d-flex-s-2_5 d-flex d-flex-aac br-white d-flex-jcc">
                            <p className="content_heading blue ta-c p-10">vrsta/Stepen “učinka” ili promjene</p>
                        </div>
                        <div className="d-flex-s-2_5 d-flex d-flex-aac br-white d-flex-jcc">
                            <p className="content_heading blue ta-c p-10">objašnjenje</p>
                        </div>
                        <div className="d-flex-s-2_5 d-flex d-flex-aac br-white d-flex-jcc">
                            <p className="content_heading blue ta-c p-10">odgovarajUći Nivo cilja</p>
                        </div>
                        <div className="d-flex-s-4_5 d-flex d-flex-aac br-white d-flex-jcc">
                            <p className="content_heading blue ta-c p-10">Poimanje u kontekstu grant šeme</p>
                        </div>
                    </div>

                    <div className="d-flex-s-12 d-flex bg-red bb-white">
                        <div className="d-flex-s-2_5 d-flex d-flex-aac br-white d-flex-jcc">
                            <p className="content_heading blue ta-c p-10">izlazni rezultat</p>
                        </div>
                        <div className="d-flex-s-2_5 d-flex d-flex-aac br-white d-flex-jcc">
                            <p className="content_text blue ta-c p-10">Direktni “proizvod” uloženih inputa/ resursa (obično finansijskih ili drugih resursa) i aktivnosti.</p>
                        </div>
                        <div className="d-flex-s-2_5 d-flex d-flex-aac br-white d-flex-jcc">
                            <p className="content_text blue ta-c p-10">Operativni cilj</p>
                        </div>
                        <div className="d-flex-s-4_5 d-flex d-flex-aac br-white d-flex-jcc">
                            <p className="content_text blue ta-c p-10 mb-0">Grant šemom će se specificirati vrste glavnih “izlaznih rezultata”. Šemom se ne mogu predvidjeti svi mogući izlazni rezultati iz svakog mogućeg projekta koji se finansira. Dakle, u šemi će se navesti do četiri “generička” izlazna rezultata. Oni trebaju biti: (i) usklađeni s izlaznim rezultatima (ako su određeni) relevantnog dijela strategije ili programa s kojim je šema usklađena i (ii) dovoljno uopćeni da obuhvate i da se mogu povezati s vrstama izlaznih rezultata koji mogu nastati u okviru onih vrsta projekata koji bi se šemom mogli finansirati. “Izlazni rezultati” šeme mogu se kontinuirano unapređivati kako se struktura šeme bude razvijala i postajala jasnija. Ostvarivanje tih izlaznih rezultata trebalo bi dovesti do realizacije operativnog cilja šeme.</p>
                        </div>
                    </div>

                    <div className="d-flex-s-12 d-flex bg-yellow bb-white">
                        <div className="d-flex-s-2_5 d-flex d-flex-aac br-white d-flex-jcc">
                            <p className="content_heading blue ta-c p-10">ishod</p>
                        </div>
                        <div className="d-flex-s-2_5 d-flex d-flex-aac br-white d-flex-jcc">
                            <p className="content_text blue ta-c p-10">Pozitivna “promjena” koju proizvodi jedan ili više izlaznih rezultata. Ta bi “promjena” trebala biti relativno konkretna, mjerljiva i trebala bi se moći pripisati nekoj grupi, oblasti i sl. (nije apstraktna). To je “korist”.</p>
                        </div>
                        <div className="d-flex-s-2_5 d-flex d-flex-aac br-white d-flex-jcc">
                            <p className="content_text blue ta-c p-10">“Krajnji” ili specifični cilj</p>
                        </div>
                        <div className="d-flex-s-4_5 d-flex d-flex-aac br-white d-flex-jcc">
                            <p className="content_text blue ta-c p-10 mb-0">Grant šemom će se specificirati vrste “glavnih ishoda”. Šemom se ne mogu predvidjeti svi mogući ishodi iz svakog mogućeg projekta koji se finansira. Dakle, u šemi će se navesti do četiri “generička” ishoda. Oni trebaju biti: (i) usklađeni s ishodima (ako su određeni) relevantnog dijela strategije ili programa s kojim je šema usklađena i (ii) dovoljno uopćeni da obuhvate i da se mogu povezati s vrstama ishoda koji mogu nastati u okviru onih vrsta projekata koji bi se šemom mogli finansirati. “Ishodi” šeme se mogu stalno unapređivati kako dizajn šeme bude postajao jasniji. Specifični cilj šeme bi se trebao realizirati kada se ostvare ovi ishodi. Formulacija specifičnog cilja mora biti usko povezana s ciljem strategije ili politike s kojom je šema usklađena.</p>
                        </div>
                    </div>
                </div>

                <p className="content_text">Logika bilo koje politike ili intervencije u smislu javnih sredstava je da se nešto želi promijeniti na bolje (vidi nultu fazu u sklopu Priručnika). To se može objasniti na sljedeći način: želite ostvariti ishode koji odražavaju željenu pozitivnu promjenu; inputi (resursi) + projekti (koji će se finansirati) i njihove aktivnosti će proizvesti izlazne rezultate, a upravo ti izlazni rezultati će dovesti do ishoda. Kada se postignu ishodi, onda ste ostvarili cilj svoje šeme. A cilj šeme usklađen je s ciljem šire politike ili strategije.</p>

                <h3 className="content_heading blue d-flex d-flex-aac mb-25"><img src="../images/lightbulb_yellow.svg" alt="lightbul" className="mr-15" /> <b>Dijagram 1.1.</b> – Opća logika šeme intervencija </h3>

                <div className="diagram_pic"><img src="../images/dijagram_1_1.png" alt="diagram" className="d-block" /></div>

                <p className="content_text">U tabeli u nastavku teksta (Alat 5) navedite sve ključne informacije u vezi s ishodima šeme, izlaznim rezultatima, vrstama projekata i glavnim aktivnostima. Inputi su budžet i drugi finansijski resursi koje šema može privući (npr. kroz sufinansiranje projekata).</p>

                <h3 id="anchor_alat5" className="content_heading mb-25 blue d-flex no-wrap d-flex-aac"><img src="../images/settings.svg" alt="Settings" /> ALAT 5:  KONTROLNA LISTA MOGUĆIH KORISNIKA I APLIKANATA, MOGUĆIH VRSTA AKTIVNOSTI, IZLAZNIH REZULTATA I ISHODA</h3>

                <div className="custom_tables mb-25">
                    <div className="d-flex-s-12 d-flex bg-darkblue bb-white">
                        <div className="d-flex-s-4 br-white p-10">
                            <p className="white content_heading ta-c">KLJUČNI ELEMENTI: VRSTE...</p>
                        </div>
                        <div className="d-flex-s-4 br-white p-10">
                            <p className="white content_heading ta-c">OPIS</p>
                        </div>
                        <div className="d-flex-s-4 p-10">
                            <p className="white content_heading ta-c">NAPOMENE</p>
                        </div>
                    </div>

                    <div className="d-flex-s-12 bg-darkblue p-10">
                        <p className="content_text mb-0 white"><em>Uputstvo: Zabilježite sve elemente koji proiziđu iz analize, konsultacija i koristite alate date u Prvoj fazi. Pokušajte ih kategorizirati prema ključnim naslovima, kako je objašnjeno. Također, pokušajte ih poredati po važnosti. U ovoj fazi ne brinite o kvantifikaciji.</em></p>
                    </div>

                    <div className="d-flex-s-12 d-flex bg-red bb-white">
                        <div className="d-flex-s-4 br-white p-30">
                            <p className="blue content_heading ta-c">ISHOD</p>
                        </div>
                        <div className="d-flex-s-4 br-white d-flex">
                            <div className="d-flex-s-12 bb-white"></div>
                            <div className="d-flex-s-12"></div>
                        </div>
                        <div className="d-flex-s-4 d-flex">
                            <div className="d-flex-s-12 bb-white"></div>
                            <div className="d-flex-s-12"></div>
                        </div>
                    </div>

                    <div className="d-flex-s-12 d-flex bg-yellow bb-white">
                        <div className="d-flex-s-4 br-white p-30">
                            <p className="blue content_heading ta-c">izlazNi rezUltati</p>
                        </div>
                        <div className="d-flex-s-4 br-white d-flex">
                            <div className="d-flex-s-12 bb-white"></div>
                            <div className="d-flex-s-12"></div>
                        </div>
                        <div className="d-flex-s-4 d-flex">
                            <div className="d-flex-s-12 bb-white"></div>
                            <div className="d-flex-s-12"></div>
                        </div>
                    </div>

                    <div className="d-flex-s-12 d-flex bg-lightyellow bb-white">
                        <div className="d-flex-s-4 br-white p-30">
                            <p className="blue content_heading ta-c">glavNe vrSte ProjeKata, aKtivNoSti (UNUtar Njih)</p>
                        </div>
                        <div className="d-flex-s-4 br-white d-flex">
                            <div className="d-flex-s-12 bb-white"></div>
                            <div className="d-flex-s-12"></div>
                        </div>
                        <div className="d-flex-s-4 d-flex">
                            <div className="d-flex-s-12 bb-white"></div>
                            <div className="d-flex-s-12"></div>
                        </div>
                    </div>

                    <div className="d-flex-s-12 d-flex bg-blue bb-white">
                        <div className="d-flex-s-4 br-white p-30">
                            <p className="blue content_heading ta-c">mogUći aPliKaNti i KoriSNici (aKo Se razliKUjU)</p>
                        </div>
                        <div className="d-flex-s-4 br-white d-flex">
                            <div className="d-flex-s-12 bb-white"></div>
                            <div className="d-flex-s-12"></div>
                        </div>
                        <div className="d-flex-s-4 d-flex">
                            <div className="d-flex-s-12 bb-white"></div>
                            <div className="d-flex-s-12"></div>
                        </div>
                    </div>

                </div>

                <p className="content_text"><b>Sad već imate jasnu ideju o vrsti projekata koje će šema finansirati</b>: oni koji rade na izradi šeme razumiju prirodu, koristi i ključne aktivnosti ovih projekata. Jasno je na koga je šema usmjerena i koje se vrste projekata/projektnih prijedloga preferiraju u odnosu na one koji su samo prihvatljivi.</p>

                <p className="content_text d-flex no-wrap"><img src="../images/document.svg" alt="document" className="mr-15 image_width" /> <span>Do kraja ovog koraka: imat ćete neku sliku o mogućim elementima koji se mogu ugraditi u grant šemu u smislu ishoda (šta se grant šemom može postići); izlaznih rezultata (šta sredstva iz šeme, kroz projekte ili direktno, mogu proizvesti), mogućih vrsta projekata koji se mogu finansirati (i/ili aktivnosti unutar njih); vrsta organizacija koje bi mogle podnijeti takve projektne prijedloge i korisnika (ako to nisu aplikanti) i onih koji bi mogli imati koristi od potencijalnih rezultata/ishoda šeme.</span></p>

                

            </div>
        </ContentPage>
    )
}
