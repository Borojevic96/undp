import React from 'react';
import ContentPage from './';

import { Link } from 'react-router-dom';

export const Page_3_3 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>TREĆA FAZA ( Izrada šeme ) - Razrada smjernica za aplikante</b></div>
                <h2 className="blue_overlay_heading">
                    Korak 3.3 RAZRADA SMJERNICA ZA APLIKANTE
                </h2>
                <div className="custom_tables blue_yellow_table_2 d-flex">
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KADA?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">13/14-15/16. sedmica</p>
                        </div>
                    </div>
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KOLIKO DUGO?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">3 dana</p>
                        </div>
                    </div>
                </div>

                <p className="content_text">Smjernice za aplikante (ili engleski „Guidelines for Applicants“, koje se često označavaju engleskom skraćenicom GfA) su dokument u kojem predstavljate čitavu šemu potencijalnim aplikantima. U programima vanjske pomoći EU ovaj dokument je opširan (pogledati uređen primjer na kraju Faze 3, u dijelu <Link>„Studija slučaja“</Link>). U načelu, razlog tome je što Komisija EU insistira na tome da šeme podržane kroz pomoć EU trebaju biti što transparentnije.</p>

                <p className="content_text"><b>Osim toga, zabrinjavajuća je činjenica da je u mnogim zemljama proces osmišljavanja sveden samo na izradu smjernica za aplikante i njihovih priloga, bez prethodnog procesa planiranja i osmišljavanja koji se preporučuje u ovom priručniku.</b></p>

                <p className="content_text">Budući da vi slijedite čvrst proces osmišljavanja šeme, većina dijelova smjernica za aplikante se izrađuje na osnovu provedenih aktivnosti i izlaznih rezultata prethodnih faza i koraka. To ćete jasno vidjeti dok budete čitali o ovom koraku.</p>

                <p className="content_text">Važno je i napomenuti da se ipak može desiti da mali broj elemenata u smjernicama za aplikante ne bude izrađen u ranijim fazama: to su često standardni tipski obrasci i opći format koji predlaže Evropska unija za svoje grant šeme, što ćete vidjeti u priloženoj studiji slučaja, gdje je dat tipski obrazac koji se može standardizirati po potrebi. I u tome će vam pomoći ovaj dio priručnika.</p>

                <p className="content_text">U ovom <b>dijelu pokazujemo kako se izrađuju smjernice za aplikante na osnovu izlaznih rezultata prethodnih faza i koraka</b>. Preporučujemo da pogledate studiju slučaja <Link>„Kako se to može uraditi</Link>?</p>
                <p className="content_text"><Link>Priča iz sjeveroistočne Bugarske”</Link> na kraju ove faze, gdje je dat primjer relevantnog elementa, koji je izrađen za jednu stvarnu i uspješnu grant šemu. Također, pogledajte i ranije pomenutu <Link>studiju slučaja iz BiH</Link>, kao i smjernice za aplikante koje su izrađene za grant šemu Federalnog ministarstva razvoja, poduzetništva i obrta pod nazivom „Jačanje konkurentnosti malih i srednjih preduzeća“, koja je osmišljena uz pomoć UNDP-a. Poveznice na relevantni dio ovih smjernica date su u nastavku pored ikonice u obliku zastave BiH.</p>

                <h2 className="blue_overlay_heading">
                    SMJERNICE ZA APLIKANTE: KLJUČNI ELEMENTI
                </h2>

                <h3 className="content_heading blue">SmjerNice Na NivoU šeme</h3>

                <p className="content_text blue">1. Osnovne informacije</p>
                <p className="content_text">Ovdje se navode osnovne informacije o šemi, obično na najviše pola strane.</p>

                <ul className="content_text">
                    <li className="pos-rel content_text mb-10"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Opisuje se kontekst politike i odgovara na pitanje: koje politike su osnov, odnosno podupiru ovu šemu i zašto?</li>
                    <li className="pos-rel content_text mb-10"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Navedite nekoliko najvažnijih činjenica kojima se rezimiraju ili ističu ključna pitanja kojima će se šema baviti.</li>
                </ul>

                <p className="content_text"><span className="blue">Napomena 1:</span> U šemi koja sadrži nekoliko komponenata, ovaj tekst će se kasnije malo produbiti, u opisu komponenti. Međutim, „osnovne informacije“ za svaku komponentu ne bi trebale biti duže od pola strane.</p>

                <p className="content_text"><span className="blue">Napomena 2:</span> Nije potrebno da navodite opširnu logičku podlogu analize uvjeta šeme. Smjernice za aplikante nisu dokument politike: to je jednostavan vodič koji ljudima pomaže da apliciraju za vašu šemu.</p>
            </div>
        </ContentPage>
    )
}
