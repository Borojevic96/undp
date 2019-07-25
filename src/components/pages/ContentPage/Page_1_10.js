import React from 'react';
import ContentPage from './';

export const Page_1_10 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>PRVA FAZA ( Konceptualizacija šeme ) - Razrada podzakongskog akta </b></div>
                <h2 className="blue_overlay_heading">
                    Korak 1.10  RAZRADA PODZAKONSKOG AKTA
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

                <p className="content_text">Sada imate sve elemente potrebne za izradu podzakonskog akta o kriterijima odabira i realizacije predviđenih finansijskih sredstava ministarstava za ovu svrhu, a koji su u skladu s potrebama BiH. Ono što ste razradili temelji se na prilično snažnom procesu izrade, što znači da će se relativno dobro (ali ne savršeno) uklopiti i s vašim ciljevima i onim što je moguće postići. Moći ćete, svakako, odrediti (ali ne i kvantificirati) sljedeće:</p>

                <ul>
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> opći cilj (politike ili strategije)</li>
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> specifični cilj (šeme)</li>
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> vrste ishoda (rezultata), izlaznih rezultata, projekata/aktivnosti</li>
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> indikativni budžet, uključujući i procjenu učešća u sufinansiranju</li>
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> vrste potencijalnih aplikanata</li>
                    <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> vrste kriterija odabira (ili parametara za kriterije odabira)</li>
                </ul>

                <p className="content_text">Preporuka je da se nacrt podzakonskog akta javno objavi <b>(npr. na internetskoj stranici ministarstva kao dio procesa konsultacija u izradi podzakonskog akta), dakle, mnogo prije objave poziva s detaljnom dokumentacijom o grant šemi. Drugim riječima, što je ranije moguće.</b> Naime, što se prije pruži na uvid potencijalnim aplikantima, to bolje, jer će im pomoći da odrede je li predstojeća šema nešto za što su zainteresirani i da već počnu poduzimati neke početne pripremne korake.</p>

                <p className="content_text"><span className="blue">Napomena</span>: U “idealnoj situaciji”, elementi koji čine “podzakonski akt” kako je ovdje definiran, razvijeni su i spremni da se ubace u 3-godišnji/<b>godišnji plan rada i planiraju u budžetskim sredstvima</b> za godinu N. U toj situaciji, <b> nadležno ministarstvo/lokalna samouprava će možda željeti odgoditi formalizaciju sadržaja kroz “podzakonski akt” sve dok se ne usvoji cijeli godišnji budžet.</b>. Međutim, u načelu, ta se obavijest može objaviti s istim sadržajem pod naslovom “Najava buduće grant šeme” ili nešto slično. U takvom obavještenju je bitno naznačiti da je:</p>

                <ul>
                    <li className="pos-rel content_text mb-0"> <b>a. </b> svrha objavljivanja prije konačnog usvajanja budžeta je da se zainteresiranim stranama omogući vrijeme da razmisle hoće li se prijaviti</li>
                    <li className="pos-rel content_text mb-0"> <b>b. </b> obavijest izraz namjere, koja je, međutim, uvjetovana usvajanjem relevantnih budžetskih odredbi. Iako to možda nije sadašnja praksa u BiH, vrijedilo bi je razmotriti jer se to često radi u drugim zemljama.</li>
                </ul>

                <p className="content_text d-flex no-wrap"><img src="../images/document.svg" alt="document" className="mr-15 image_width" /> <span>Do kraja ovog koraka (i kraja prve faze): izradili ste održiv i usaglašen koncept za grant šemu i odluku o kriterijima odabira i realizacije javnih sredstava.</span></p>
            </div>
        </ContentPage>
    )
}
