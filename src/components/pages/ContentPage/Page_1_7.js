import React from 'react';
import ContentPage from './';

export const Page_1_7 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>PRVA FAZA ( Konceptualizacija šeme ) - Ispitivanje predizvodljivosti </b></div>
                <h2 className="blue_overlay_heading">
                    Korak 1.7  ISPITIVANJE PREDIZVODLJIVOSTI
                </h2>

                <div className="custom_tables blue_yellow_table_2 d-flex">
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KADA?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">6-7. sedmica</p>
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

                <p className="content_text">Prije nego što sve elemente pokušate staviti u prvi “koncept” moguće šeme, morate se ponovo zapitati jesu li oni izvodljivi ili ne. Izvodljivost govori o tome je li nešto moguće uraditi i, ako jeste, pod kojim uvjetima. Da bi neka radnja bila izvodljiva, ona mora biti zakonita i neko mora biti u stanju da je uradi, na vrijeme i u skladu sa standardima.</p>

                <p className="content_text">Pojam predizvodljivost jednostavno znači da u toj fazi ispitujete izvodljivost početnog koncepta, koji je još uvijek u nastajanju. Ovdje ne provodite nikakvu studiju i još ne razmatrate svaki aspekt. Jednostavno postavljate pitanje: je li ovaj ishod ili krajnji rezultat moguć u trenutnim okolnostima? Ako postoji konsenzus unutar tima zaduženog za izradu da, po svemu sudeći, to nije moguće, onda ga eliminirajte. Ako niste sigurni ili mislite da je moguće, onda ga zadržite. U ovoj fazi želite <b>eliminirati elemente koje je gotovo sigurno nemoguće postići.</b></p>

                <h3 className="content_heading blue d-flex d-flex-aac mb-25"><img src="../images/lightbulb_yellow.svg" alt="lightbul" className="mr-15" /> <b>Ključna pitanja za ispitivanje predizvodljivosti</b> </h3>

                <p className="content_text"><b>Ova pitanja postavite za svaku vrstu projekta (ili aktivnosti), izlazni rezultat i ishod:</b></p>

                <ul className="">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>Je li <b>zakonito</b>? </b></li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Je li <b>tehnički moguće</b> u vašim okolnostima (u vašem gradu)?</li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>Može li to neko uraditi</b>/postići?</li>

                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Može li se to priuštiti u kontekstu potencijalno raspoloživog budžeta za grant šemu (budite praktični!) i raspoloživog vremenskog okvira (trebate projekte koji su gotovo spremni i koji mogu krenuti s realizacijom u roku od 6 mjeseci). Ako se odlučite proći kroz sve muke koje prate izradu grant šeme, željet ćete finansirati više od 10 projekata. Dakle, pojedinačni projekti ili aktivnosti koji koštaju više od 30% ukupnog budžeta šeme vjerovatno neće biti mogući. Ukoliko za takve projekte ne možete predvidjeti modalitete sufinansiranja (od aplikanta), eliminirajte ih!</li>
                </ul>

                <p className="content_text"><b>Kad je riječ o mogućim aplikantima i korisnicima, postavite sljedeće pitanje:</b></p>

                <ul className="">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Imaju li oni pravne i stručne kapacitete da urade ono što je potrebno prema predloženoj šemi (npr. da osmisle i provedu određene vrste projekata)? Ako nemaju, šta mislite da mogu uraditi? Zapišite svoje ideje za kasnije razmatranje.</li>
                </ul>

                <h2 className="bold-text"><span className="blue">> NAPOMENA:</span> možda ćete se htjeti vratiti na ovaj korak nakon što završite korak 1.8. i postaviti ovo pitanje u nešto drugačijem obliku. o tome će biti govora u koraku 1.8.</h2>

                <p className="content_text d-flex no-wrap"><img src="../images/document.svg" alt="document" className="mr-15 image_width" /> <span>Do kraja ovog koraka: imat ćete jasniju ideju o onim elementima koje možete uvrstiti u grant šemu u smislu rezultata; izlaznih rezultata, mogućih vrsta projekata koji će se finansirati (i/ili aktivnosti unutar njih) i koji se čine izvodljivim unutar predložene šeme. Imat ćete jasniju sliku mogu li potencijalni aplikanti napraviti one vrste projektnih prijedloga koje ste vi imali na umu.</span></p>

            </div>
        </ContentPage>
    )
}
