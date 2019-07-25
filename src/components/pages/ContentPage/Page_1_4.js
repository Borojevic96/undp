import React from 'react';
import ContentPage from './';
import Toolpit from '../../common/Toolpit';

export const Page_1_4 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>PRVA FAZA ( Konceptualizacija šeme ) - Uključivanje relevantnih aktera </b></div>
                <h2 className="blue_overlay_heading">
                    Korak 1.4  UKLJUČIVANJE RELEVANTNIH AKTERA
                </h2>

                <div className="custom_tables blue_yellow_table_2 d-flex">
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KADA?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">Između 3. i 5. sedmice (nakon što više rukovodstvo prihvati izjavu spomenutu u prethodnom koraku)</p>
                        </div>
                    </div>
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KOLIKO DUGO?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">Sastanke bi trebalo koncentrirati u jednoj sedmici. Ovaj bi korak mogao trajati 3 sedmice, uključujući pripremu, sastanke i analizu rezultata sastanaka.</p>
                        </div>
                    </div>
                </div>

                <p className="content_text"><b>Korak 1.4</b> zahtijeva kontakt i konsultacije s ključnim akterima. Ovaj korak ne možete napraviti iz kancelarije! Morate izaći i povezati se s ključnim akterima. To mogu biti svi ili neki iz četiri kategorije, koje uz pomoć tabele u nastavku, vi, kao tim zadužen za izradu šeme, možete razmotriti kako bi utvrdili glavne institucije i osobe koje odgovaraju navedenim kategorijama.</p>

                <h3 id="anchor_alat3" className="content_heading mb-25 blue d-flex d-flex-aac"><img src="../images/settings.svg" alt="Settings" /><b className="ml-15"> ALAT ZA ODREĐIVANJE KLJUČNIH AKTERA (ALAT 3) </b></h3>

                <div className="custom_tables custom_table_4 mb-25 d-flex">
                    <div className="d-flex-s-12 d-flex bg-darkblue">
                        <div className="d-flex-s-4 br-white p-10 d-flex d-flex-aac d-flex-jcc">
                            <h3 className="content_heading ta-c white">KATEGORIJE KLJUČNIH AKTERA</h3>
                        </div>
                        <div className="d-flex-s-8 p-10 d-flex d-flex-aac d-flex-jcc">
                            <h3 className="content_heading ta-c">GLAVNE INSTITUCIJE I OSOBE KOJE ODGOVARAJU KATEGORIJAMA (PRIMJERI)</h3>
                        </div>
                    </div>

                    <div className="d-flex-s-12 bg-red p-10">
                        <p className="content_text blue mb-0">Definirajte ko bi to mogao biti u odnosu na politiku i početne ideje na koje ukazuje moguća šema. Za određivanje organizacija, pa čak i osoba koje odgovaraju navedenim kategorijama, možete koristiti tabelu datu u nastavku.</p>
                    </div>

                    <div className="d-flex-s-12 bg-yellow d-flex">
                        <div className="d-flex-s-12 d-flex bb-white">
                            <div className="d-flex-s-1 br-white d-flex d-flex-aac d-flex-jcc">
                                <h3 className="content_heading blue"><b>1</b></h3>
                            </div>
                            <div className="d-flex-s-3 br-white p-10">
                                <p className="content_text mb-0">Oni koji su uključeni u kreiranje i realizaciju javnih politika koje su usko povezane s mogućim temama grant šeme.</p>
                            </div>
                            <div className="d-flex-s-8 p-10">
                                <p className="content_text mb-0">Druga ministarstva ili javni organi (npr. ministarstvo rada može biti vodeće ministarstvo za program osposobljavanja nezaposlenih pa samim tim i odgovorno za izradu šeme), ali i u politikama drugih ministarstava, također, mogu postojati potrebe za obukama (npr. u smislu osposobljavanja nezaposlenih za poslove u turizmu, preduzećima, itd.). Ista logika se primjenjuje i na drugim nivoima vlasti.</p>
                            </div>
                        </div>

                        <div className="d-flex-s-12 d-flex bb-white">
                            <div className="d-flex-s-1 br-white d-flex d-flex-aac d-flex-jcc">
                                <h3 className="content_heading blue"><b>2</b></h3>
                            </div>
                            <div className="d-flex-s-3 br-white p-10">
                                <p className="content_text mb-0">Oni koji su trenutno pogođeni problemima koje predložena šema može riješiti.</p>
                            </div>
                            <div className="d-flex-s-8 p-10">
                                <p className="content_text mb-0">U slučaju da se šemom daje podrška upravljanju otpadom, postoje određene općine ili NVO-i koji možda imaju posebnih problema s lošim upravljanjem otpadom. Nakon uvida u njihove probleme, saznanja mogu pomoći da se poredaju prioriteti za djelovanje.</p>
                            </div>
                        </div>


                        <div className="d-flex-s-12 d-flex bb-white">
                            <div className="d-flex-s-1 br-white d-flex d-flex-aac d-flex-jcc">
                                <h3 className="content_heading blue"><b>3</b></h3>
                            </div>
                            <div className="d-flex-s-3 br-white p-10">
                                <p className="content_text mb-0">Oni koji mogu imati koristi od svake pozitivne promjene koju će šema omogućiti.</p>
                            </div>
                            <div className="d-flex-s-8 p-10">
                                <p className="content_text mb-0">Mogu biti isti kao i prethodna grupa ili različiti. U slučaju šeme kojom se pomaže razvoj turizma, to mogu biti građani ili mali poslovni subjekti (maloprodaja) koji će imati koristi od većeg broja turista. U tom slučaju, oni sami ne predstavljaju pružatelje turističkih usluga.</p>
                            </div>
                        </div>


                        <div className="d-flex-s-12 d-flex bb-white">
                            <div className="d-flex-s-1 br-white d-flex d-flex-aac d-flex-jcc">
                                <h3 className="content_heading blue"><b>4</b></h3>
                            </div>
                            <div className="d-flex-s-3 br-white p-10">
                                <p className="content_text mb-0">Oni koji će se prijaviti i koristiti sredstva iz grant šeme.</p>
                            </div>
                            <div className="d-flex-s-8 p-10">
                                <p className="content_text mb-0 pos-rel">U slučaju upravljanja otpadom, to će vjerovatno biti općine ili grupe općina. U slučaju razvoja turizma, to mogu biti: (a) općine/grupe općina i (b) privatni ili nevladini pružatelji turističkih usluga. <Toolpit text="U ovom će slučaju šema gotovo sigurno zahtjevati dvije 'komponente', jednu za privatne subjekte i jednu za općine, budući da se pravila državne pomoći primjenjuju na prve, ali ne i na posljednje. "></Toolpit></p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="content_heading blue d-flex d-flex-aac mb-25"><img src="../images/lightbulb_yellow.svg" alt="lightbul" className="mr-15" /> <b>SAVJETI</b> </h3>

                <ul className="">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Uloga tima zaduženog za izradu šeme na inicijalnim sastancima s ključnim akterima je da “pažljivo sluša”. Može dati neka pojašnjenja i objasniti svrhu uključivanja relevantnih aktera, ali bi tokom diskusije tim trebao biti neutralan, naglašavajući da je svrha uključivanja relevantnih aktera u ovoj ranoj fazi da se prikupe informacije i stekne uvid u problematiku, odnosno, da se testiraju neke početne ideje tima zaduženog za izradu te da se podijele neke relevantne informacije (npr. potencijalni resursi, budžeti i raspoloživo vrijeme)</li>
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Na početne sastanke s relevantnim akterima ne pozivajte “vanjske stručnjake” (naravno, osim ako i oni ne potpadaju u jednu od navedenih kategorija). Oni imaju tendenciju da dominiraju diskusijom i potisnu druge sudionike. Ako smatrate da vam je u ranoj fazi procesa potreban i njihov uvid, imate dvije mogućnosti: tim zadužen za izradu šeme može se sastati s njima zasebno; oni se mogu pridružiti timu za izradu šeme odmah na početku ili nakon nekoliko sedmica</li>
                </ul>

                <h3 className="content_heading blue d-flex d-flex-aac mb-25"><img src="../images/lightbulb_yellow.svg" alt="lightbul" className="mr-15" /> <b>SAVJETI O VOĐENJU SASTANAKA S RELEVANTNIM AKTERIMA</b> </h3>

                <p className="content_text">Prvo organizirajte zaseban sastanak s predstavnicima prve kategorije (vidi tabelu ranije u tekstu). Potom organizirajte zajednički sastanak s predstavnicima druge i treće kategorije (u mnogim slučajevima ove će kategorije biti veoma slične). Na kraju, organizirajte sastanak s predstavnicima četvrte kategorije, odvojeno od predstavnika druge i treće kategorije.</p>

                <p className="content_text">Sastanke organizirajte u formi radionica s maksimalno 15-20 osoba. Pobrinite se da radionicu moderira dinamična osoba u svojstvu predsjedavajućeg, koji će, nakon što objasni pozadinu inicijative za politiku, dati vremena svima da iznesu svoja mišljenja. Vodite računa da na sastancima bude neko ko će voditi zapisnik i bilježiti razmatranja, koja će se dostaviti svim učesnicima u roku od sedam dana od održavanja sastanka:</p>

                <ul className="blue_list">
                    <li className="pos-rel content_text blue"><img src="../images/blue_arrow.svg" alt="arrow" className="mr-15" /> Glavna razmatrana pitanja</li>

                    <li className="pos-rel content_text blue"><img src="../images/blue_arrow.svg" alt="arrow" className="mr-15" /> Glavne ideje i oblasti oko kojih postoji širi konsenzus</li>

                    <li className="pos-rel content_text blue"><img src="../images/blue_arrow.svg" alt="arrow" className="mr-15" /> Druge ideje i istaknuta pitanja</li>
                </ul>

                <p className="content_text">U narednom koraku ćemo govoriti o pitanjima o kojima ćete raspravljati s relevantnim akterima.</p>

                <p className="content_text d-flex no-wrap"><img src="../images/document.svg" alt="document" className="mr-15 image_width" /> <span>Do kraja ovog koraka: Imaćete jasnu sliku na koji način da odredite relevantne aktere te kada i kako da s njima provedete uspješne konsultacije.</span></p>
            </div>
        </ContentPage>
    )
}
