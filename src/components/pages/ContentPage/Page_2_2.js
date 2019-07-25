import React from 'react';
import ContentPage from './';
import Toolpit from '../../common/Toolpit';

export const Page_2_2 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>DRUGA FAZA ( Izrada šeme ) - Definiranje prihvatljivih aplikanata. </b></div>
                <h2 className="blue_overlay_heading">
                    Korak 2.2  DEFINIRANJE PRIHVATLJIVIH APLIKANATA. AKTIVNOSTI I TRŠKOVA
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
                            <p className="content_text mb-0 p-10">3 dana (ne kontinuirano); ovaj korak radi tim za izradu šeme interno</p>
                        </div>
                    </div>
                </div>

                <h3 className="content_heading blue">PRIHVATLJIVI APLIKANTI</h3>
                <p className="content_text">U okviru ovog koraka upotpunit ćete definiciju ključnih elemenata šeme. Već imate prilično jasnu ideju o aplikantima, aktivnostima i vezanim troškovima, ali sada trebate detaljno razmisliti o ovome i potvrditi ih.</p>

                <ul className="mt-25">
                    <li className="content_text"><span className="content_heading blue">1. Aplikanti</span> potrebno je utvrditi da li se neki diskvalifikacijski kriteriji trebaju primijeniti na grupu općenito i, ako je tako, zbog čega. <b>Prije fokusiranja na administrativne i pravne kriterije za diskvalifikaciju, razmislite o eventualnim drugim vidovima uključivanja ili isključivanja aplikanata po opravdanim i zakonskim osnovama koje se odnose na:</b></li>
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>mjesto: </b>na primjer, tražite aplikante iz nekih, ali ne svih općina, zbog određenih opravdanih kriterija (npr. „aplikanti samo iz sljedećih općina... će se uzeti u obzir“, ili „naročito se pozivaju aplikanti iz sljedećih općina i oni će imati prednost“; ili, u konkretnom slučaju: „samo aplikanti iz slabo razvijenih općina i gradova će se uzeti u obzir“).</li>
                    <li className="pos-rel content_text "><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>sektor ili podsektor </b>ovo je naročito važno za aplikante poput malih privrednih društava. Koji su sektori naročito važni? Pri tome jasno naznačite ko u sklopu sektora ili podsektora, a u skladu sa Zakonom o državnoj pomoći, može, a ko ne može aplicirati za grant. Općenito, aplikanti trebaju biti aktivni u sektorima rasta (makar unutar BiH).</li>
                    <li className="pos-rel content_text "><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>administrativna/zakonska pravila </b>jasno je da trebate ograničiti potencijalne aplikante na fizičke ili pravne osobe koje ispunjavaju zakonska i administrativna pravila. Ali pazite da iz godine u godinu nepotrebno ne isključujete važne grupe aplikanata, što bi imalo negativne posljedice za razvoj.</li>
                    <li className="pos-rel content_text"><b>za ciljane grupe <Toolpit text="Pojmovi kao što su ciljane grupe mogu dovesti do zabune jer ih razni donatori različito tumače, naročito u kontekstu različitih vrsta projekata. Uzmite nekoliko primjera: (A) projekt za obuku ljudskih potencijala koji se odnosi na mlade nezaposlene osobe: u ovom slučaju, ciljana grupa je cijela grupa mladih nezaposlenih osoba u određenoj oblasti /regiji itd; aplikanti koji traže finansiranje u okviru projekta vjerovatno će biti organizacije koje nude obuke. Uspješne organizacije se ponekad nazivaju korisnicima (finansijske pomoći), ali u ovom slučaju taj je pojam zbunjujući jer mnogi mogu misliti da se on odnosi na nezaposlene osobe koje pohađaju obuku (tj. korisnike projekta). (B) Šema podrške za MSP-ove: u ovom slučaju, jasno je da je ciljana grupa šira grupa MSP-ova kojoj pripadaju aplikanti. Pojam korisnici (koji izbjegavamo) opet može biti zbunjujući: da, MSP-ovi su korisnici finansijske pomoći, ali šira grupa korisnika (izlaznih rezultata i ishoda) će vjerovatno uključivati sadašnje i buduće zaposlene osobe, pa čak i njihove porodice. (C) Šema za turistički smještaj: u ovom slučaju, ciljana grupa se najbolje može tumačiti kao grupa osoba ili institucija koje potencijalno žele pružati usluge smještaja. Aplikanti pripadaju upravo ovoj grupi. Da li su ciljna grupa i turisti koji će koristiti smještaj? Ne direktno: oni ne primaju nikakav grant i pomoć, ni na koji način nije usmjerena prema njima. Ali, naravno, oni će imati koristi zato što će u ponudi biti veći broj smještajnih jedinica, a glavni fokus ove šeme je da privuče i zadrži veći broj turista. Dakle, turisti su u određenom smislu samo sredstvo za postizanje cilja: stvarni cilj je da se povećaju prihodi od turizma, počevši od (potencijalnih) pružatelja usluga smještaja, koji su temeljna ciljana grupa grant šeme."></Toolpit></b> (opća grupa koja može imati koristi od projekata): jasno naznačite ko bi trebao imati koristi od finansiranih projekata. Posebno kada se radi o programima obuke i sličnim programima, jasno definirajte ciljane grupe za programe obuke koji će se finansirati (prema dobi, rodu, nivou vještina ili životnim okolnostima).</li>
                </ul>

                <p className="content_heading blue">2. Aktivnosti</p>
                <p className="content_text">Već ste odredili opće vrste projekata koje želite finansirati. Ovdje trebate detaljno navesti neke od ključnih aktivnosti u okviru njih i/ili dati neke generičke opise koji se odnose na više kategorija.</p>

                <div className="d-flex p-10 no-wrap d-flex-aac bb-white d-block">
                    <img src="../images/lightbulb_yellow.svg" className="mr-15 image_width" alt="lightbulb" />
                    <span className="content_text mb-0"><b>Primjer 1:</b> Ako želite podržati općinsku transportnu infrastrukturu, trebate jasno utvrditi vrste aktivnosti – održavanje, popravka, sanacija, nadgradnja, izgradnja ili nabavka novih sredstava (ceste, transportna sredstava, oprema, infrastruktura i sl.).</span>
                </div>

                <div className="d-flex p-10 no-wrap d-flex-aac bb-white d-block">
                    <img src="../images/lightbulb_yellow.svg" className="mr-15 image_width" alt="lightbulb" />
                    <span className="content_text mb-0"><b>Primjer 2:</b> Ako želite podržati općinsku društvenu infrastrukturu, trebate jasno naznačiti vrste aktivnosti: održavanje, popravka, sanacija, izgradnja nove infrastrukture, a naročito njezinu buduću upotrebu – kultura i sport; obrazovne svrhe; ostalo itd.</span>
                </div>


                <div className="d-flex p-10 no-wrap d-flex-aac bb-white d-block">
                    <img src="../images/lightbulb_yellow.svg" className="mr-15 image_width" alt="lightbulb" />
                    <span className="content_text mb-0"><b>Primjer 3:</b> Ako želite podržati turizam, trebate konkretno navesti vrste aktivnosti – npr. privlačenje posjetitelja, razvoj osnovnih pogodnosti, povećanje smještajnih kapaciteta, iskorištavanje prirodne atrakcije itd. Također, između ostalog, aktivnosti mogu biti razvoj proizvoda, marketing, brendiranje, standardi kvaliteta i sl.</span>
                </div>

                <p className="content_text"> U „prihvatljive aktivnosti“ se često navode i one koje odražavaju potrebe za vertikalnom saradnjom tokom realizacije projekta (npr. u sklopu proizvodnog ili uslužnog lanca i sl.), međutim, ovdje budite pažljivi: na taj način možete nenamjerno pozvati „izolirane“, male i nestrateške projekte (koji ne doprinose ciljevima šeme).</p>

                <div className="d-flex p-10 no-wrap d-flex-aac bb-white d-block">
                    <img src="../images/lightbulb_yellow.svg" className="mr-15 image_width" alt="lightbulb" />
                    <span className="content_text mb-0">Na primjer, ako se radi o mjeri koja se odnosi na putnu infrastrukturu, sljedeće možete navesti kao prihvatljivo: putna infrastruktura, pješačke staze, signalizacija itd. Ali, kako vi sigurno ne želite primati projektne prijedloge koji se odnose samo na „signalizaciju“, kao prihvatljive ćete navesti više aktivnosti kako biste dobili optimalnu kombinaciju koju želite obuhvatiti šemom.</span>
                </div>

                <p className="content_text">Zbog toga, preporučujemo:</p>

                <ul>
                    <li className="content_text"><span className="blue">i. Navedite sljedeće: </span> <b>„u prihvatljive aktivnosti spadaju...”</b> (upućuje na to da lista nije iscrpna)</li>
                    <li className="content_text"><span className="blue">ii. Navedite:</span> <b>„u prihvatljive aktivnosti spadaju...”</b></li>
                    <li className="content_text"><span className="blue">iii. Navedite:</span> <b>„sljedeće aktivnosti se neće podržati kao “samostalna” ulaganja”</b> ili: “svi prijedlozi projekata trebaju uključivati najmanje dvije ili tri prihvatljive aktivnosti koje su povezane na adekvatan i logičan način“.</li>
                </ul>

                <p className="content_text"><b>Od ključnog je značaja da se aktivnosti definiraju tako da daju jasne smjernice o tome šta vi tražite da biste ispunili vaše ciljeve.</b></p>

                <p className="content_heading blue">3. Troškovi</p>
                <p className="content_text"><b>Teško je predvidjeti sve troškove koji bi se mogli uvrstiti. Često je jednostavnije konkretno navesti troškove koji nisu prihvatljivi</b> (naročito one koji bi se mogli pojaviti, a koji su nepoželjni). Stoga, u zavisnosti od vrste šeme, sljedeće vrste troškova mogu biti neprihvatljive (iz različitih, zakonitih razloga, uključujući raspoloživost budžeta):</p>

                <p className="content_text">U projektu koji se bavi obukama (npr. izgradnja ljudskih potencijala), troškovi prijevoza se mogu navesti kao prihvatljivi ili neprihvatljivi.</p>

                <p className="content_text">U projektu koji se fokusira na poslovni razvoj, svi troškovi osoblja mogu se navesti kao prihvatljivi ili neprihvatljivi.</p>

                <p className="content_text">U projektu za podršku kulturi, svi troškovi koji se odnose na kancelarijske troškove (administrativna oprema) mogu se navesti kao prihvatljivi ili neprihvatljivi – jednostavno zato što je vaš budžet ograničen i radije ćete direktno podržavati same kulturne događaje nego njihovu logističku pozadinu.</p>

                <p className="content_text">Općenito, <b>sljedeće vrste troškova često se navode kao neprihvatljive:</b></p>

                <ul className="mb-25">
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Poreski troškovi (osim poreza na dodatnu vrijednost)</li>
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Troškovi osnovnih plaća uposlenika organizacije-aplikanta</li>
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Troškovi kupovine zemljišta ili zgrada (ovdje se mogu jednostavno „napuhati“ cijene imovine)</li>
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Troškovi zaduživanja ili servisiranja duga</li>
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Rezerviranja za potencijalne buduće gubitke ili dugove</li>
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Dug po osnovu kamate</li>
                </ul>

                <p className="content_text d-flex no-wrap"><img src="../images/document.svg" alt="document" className="mr-15 image_width" /> <span>Do kraj ovog koraka: prihvatljivi aplikanti, aktivnosti i troškovi bit će detaljno definirani. Uz ono što ste ostvarili u okviru koraka 1, sada je suštinski dio izrade šeme završen.</span></p>
            </div>
        </ContentPage>
    )
}
