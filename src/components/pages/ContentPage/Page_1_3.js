import React from 'react';
import ContentPage from './';
import { Link } from 'react-router-dom';

export const Page_1_3 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>PRVA FAZA ( Konceptualizacija šeme ) - Provjera relevantnosti politike </b></div>
                <h2 className="blue_overlay_heading">
                    Korak 1.3  Provjera relevantnosti politike
                </h2>

                <div className="custom_tables blue_yellow_table_2 d-flex">
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KADA?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">U prvoj sedmici kada se tim sastane.</p>
                        </div>
                    </div>
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KOLIKO DUGO?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">Maksimalno 10 dana.</p>
                        </div>
                    </div>
                </div>

                <p className="content_text">Na samom početku ovog procesa bitno je razumjeti praktične implikacije politike i/ili strateškog cilja čijoj realizaciji grant šema doprinosi. Na jednom nivou to je jednostavno: morate pronaći, pročitati i razumjeti relevantne politike ili strategije i zakone koji uređuju predloženu grant šemu. Trebate se fokusirati na namjeru ili ciljeve politike i otkriti posebne naznake koje ukazuju na vrstu instrumenata ili intervencija koje se mogu koristiti. Trebate utvrditi sve vrste ishoda, aktivnosti ili modaliteta koji su eksplicitno isključeni jer ne mogu biti sastavni dio koncepta šeme. Na ovom nivou, to podrazumijeva istraživanje, čitanje, diskusiju s ministarstvom/organima jedinica lokalnih samouprava ili tijelom zaduženim za dodjelu grantova, navodeći implikacije koje pojedinačne politike mogu imati na šemu.</p>

                <p className="content_text">U tabeli ispod dat je okvir za analizu:</p>

                <h3 id="anchor_alat1" className="content_heading mb-25 blue d-flex d-flex-aac"><img src="../images/settings.svg" alt="Settings" />ALAT 1 <b className="ml-15">PROVJERA RELEVANTNOSTI POLITIKE/STRATEGIJE</b></h3>

                <h2 className="bold-text"><span className="blue">> NAPOMENA:</span> U tabeli su dati hipotetički primjeri kao ideja o vrsti informacija koje treba utvrditi i zabilježiti u svrhu analize</h2>

                <div className="custom_tables custom_table_3 d-flex mb-25">
                    <div className="d-flex-s-12 d-flex bg-darkblue">
                        <div className="d-flex-s-2_5 p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_heading ta-c">ELEMENTI POLITIKE KOJI PROPISUJU ILI OPRAVDAVAJU MOGUĆU ŠEMU</p>
                        </div>
                        <div className="d-flex-s-2_5 bl-white br-white p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_heading ta-c">POZIVANJE NA KLJUČNE ZAKONSKE TEKSTOVE ILI POLITIKE/ STRATEGIJE</p>
                        </div>
                        <div className="d-flex-s-4_5 br-white p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_heading ta-c">KOJE VRSTE FINANSIJSKE ILI DRUGE PODRŠKE SE SPOMINJU KAO MOGUĆE ILI ISKLJUČIVO ZABRANJENE? DRUGE NAZNAKE MOGUĆEG OPSEGA FINANSIJSKE POMOĆI?</p>
                        </div>
                        <div className="d-flex-s-2_5 p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_heading ta-c">SVI DRUGI PARAMETRI ILI UVJETI? (NPR. PRAVNI OBLICI PRIHVATLJIVIH PREDUZEĆA)</p>
                        </div>
                    </div>

                    <div className="d-flex-s-12 d-flex bg-yellow bb-white">
                        <div className="d-flex-s-2_5 p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_text mb-0 ta-c">Npr. Član X Zakona o podsticajima za mala i srednja preduzeća</p>
                        </div>
                        <div className="d-flex-s-2_5 bl-white br-white p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_text mb-0 ta-c">Npr. Član X o vidovima finansijske pomoći za mala i srednja preduzeća; Član Y o maksimalnim iznosima javnih grantova za preduzeća (u skladu sa Zakonom o državnoj pomoći)</p>
                        </div>
                        <div className="d-flex-s-4_5 br-white p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_text mb-0 ta-c"></p>
                        </div>
                        <div className="d-flex-s-2_5 p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_text mb-0 ta-c"></p>
                        </div>
                    </div>

                    <div className="d-flex-s-12 d-flex bg-yellow bb-white">
                        <div className="d-flex-s-2_5 p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_text mb-0 ta-c">Npr. Strategija podsticaja za mala i srednja preduzeća</p>
                        </div>
                        <div className="d-flex-s-2_5 bl-white br-white p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_text mb-0 ta-c">Prioritet 3, mjera 1. koja se fokusira na pomoć mikropreduzećima; Mjera 2. za mala i srednja preduzeća</p>
                        </div>
                        <div className="d-flex-s-4_5 br-white p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_text mb-0 ta-c"></p>
                        </div>
                        <div className="d-flex-s-2_5 p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_text mb-0 ta-c"></p>
                        </div>
                    </div>


                    <div className="d-flex-s-12 d-flex bg-yellow">
                        <div className="d-flex-s-2_5 p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_text mb-0 ta-c">Npr. Program (2017- 2018.) podsticaja za mala i srednja preduzeća u proizvodnom sektoru</p>
                        </div>
                        <div className="d-flex-s-2_5 bl-white br-white p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_text mb-0 ta-c"></p>
                        </div>
                        <div className="d-flex-s-4_5 br-white p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_text mb-0 ta-c"></p>
                        </div>
                        <div className="d-flex-s-2_5 p-10 d-flex d-flex-jcc d-flex-aac">
                            <p className="content_text mb-0 ta-c"></p>
                        </div>
                    </div>
                </div>

                <p className="content_text">To će biti osnova kojom će se osigurati relevantnost (i usklađenost) politike u cijelom dizajnu šeme. Dakle, treba pripremiti izjavu o politici, koja će:</p>

                <ul className="">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> ukratko opisati odredbu kojom je iniciran proces izrade šeme</li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> navesti ključnu zakonsku, stratešku i političku osnovu na temelju koje će grant šema biti izrađena i realizirana</li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> navesti i definirati najvažnije smjernice u pogledu: (i) zakona/pravila o budžetima i (ii) sektorskih opredjeljenja ili prioriteta</li>

                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> predstaviti zaključke o mogućim implikacijama u procesu izrade grant šeme (šta se ne može uraditi, na šta se treba strogo fokusirati tokom cijelog procesa)</li>
                </ul>

                <p className="content_text">Sve ovo treba predstaviti i usaglasiti s višim (političkim) rukovodstvom.</p>

                <p className="content_text">Struktura jednostavne izjave o politici data je u <Link className="blue" to={'/page=&subpage=#anchor_alat2'}></Link>. Ovaj dokument moraju odobriti i voditelj tima za izradu šeme i predlagač koji je predložio izradu šeme na nivou ministarstva ili drugog organa uprave (tj. na nivou kreiranja politika, odnosno donositelja odluka). Time se osigurava da i politički i tehnički nivo imaju jednako razumijevanje šeme.</p>

                <p className="content_text d-flex no-wrap"><img src="../images/document.svg" alt="document" className="mr-15 image_width" /> <span>Do kraja ovog koraka: tim zadužen za izradu šeme i njihova hijerarhija, na nivou ministarstva ili drugog organa uprave, upoznat će se i razumjeti obrazloženje politike za bilo koju predloženu šemu u smislu svih mogućnosti i ograničenja (tokom cijelog postupka izrade potrebno je stalno vršiti provjere). Sljedeći korak je zahtjevniji i praktičniji. </span></p>
            </div>
        </ContentPage>
    )
}
