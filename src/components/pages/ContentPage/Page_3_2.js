import React from 'react';
import ContentPage from './';
import { Link } from 'react-router-dom';

import Toolpit from '../../common/Toolpit';

export const Page_3_2 = () => {
    return (
        <ContentPage>
            <div className="content">
                <div className="yellow_overlay_text">Lokacija: <b>TREĆA FAZA ( Razrada dokumenata u okviru šeme ) - Razrada obrasca prijave</b></div>
                <h2 className="blue_overlay_heading">
                    Korak 3.2 RAZRADA OBRASCA PRIJAVE
                </h2>
                <div className="custom_tables blue_yellow_table_2 d-flex">
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KADA?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">13/14 - 15/16 sedmica</p>
                        </div>
                    </div>
                    <div className="d-flex-s-12 d-flex bb-white">
                        <div className="d-flex-s-3 d-flex d-flex-aac bg-darkblue p-10">
                            <h3 className="white">KOLIKO DUGO?</h3>
                        </div>
                        <div className="d-flex-s-9 bg-yellow">
                            <p className="content_text mb-0 p-10">2 dan</p>
                        </div>
                    </div>
                </div>

                <p className="content_text"><b>Obrazac prijave je ključni dio</b> vaše šeme. U stvari, to je <b>dokument u kojem će procjenitelji pronaći sve potrebne informacije za ocjenjivanje i odabir projekata</b> koji će se finansirati u okviru vaše šeme. Obrazac prijave objavljujete zajedno s javnim pozivom, u vrijeme njegovog pokretanja.</p>
                <p className="content_text">Kada izrađujete obrazac prijave za učešće u natjecanju za grantove, imajte na umu da on treba biti jasan i jednostavan za popunjavanje. U stvari, jasna i jednostavna prijava je korisna i za aplikante i za procjenitelje. Kad imate takvu prijavu, aplikanti neće odustati od prijavljivanja, a vi nećete izgubiti dobre projekte samo zato što se aplikanti ne žele prijaviti zbog pretjerane količine informacija i popratne dokumentacije koju trebaju dostaviti. I procjenitelji će imati koristi od jasnog i preciznog obrasca prijave jer neće morati prolaziti kroz desetine stranica tražeći potrebne informacije za ocjenjivanje projekata.</p>

                <p className="content_text">Imajte na umu da <b>obrazac prijave treba sadržavati sve ključne informacije i podatke</b> koji su potrebni za proces odabira. U suprotnom, procjenitelji neće imati nikakve dokaze na kojima bi zasnivali svoje odluke. Ključne informacije koje se u prijavi trebaju tražiti od aplikanata su:</p>

                <ul className="content_text">
                    <li className="pos-rel content_text mb-10"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Koje aktivnosti/projekte aplikant namjerava provesti;</li>
                    <li className="pos-rel content_text mb-10"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Specifični ciljevi i logička podloga koja opisuje opće ciljeve i svrhu predloženog projekta</li>
                    <li className="pos-rel content_text mb-10"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Planirani ishodi i izlazni rezultat (oni možda nisu identični ishodima i izlaznim rezultatima koji su zacrtani u šemi, ali mora postojati bar neki „prihvatljiv“ nivo usklađenosti) predloženog projekta</li>
                    <li className="pos-rel content_text mb-10"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Informacije o budžetu koji je potreban za realizaciju predloženog projekta</li>
                    <li className="pos-rel content_text mb-10"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> Informacije o aplikantima i njihovim kvalifikacijama i kapacitetu za provedbu predloženog projekta</li>
                    <li className="pos-rel content_text mb-10"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/>Rok za provedbu predloženog projekta</li>
                </ul>

                <p className="content_text">U nastavku je dat predloženi format prijave, na osnovu standarda koji primjenjuje <b>EU u pozivima za dostavljanje prijedloga projekata u okviru vanjske pomoći EU i primjer prijave koja je korištena u BiH, a koja je izrađena uz pomoć UNDP-a.</b></p>

                <p className="content_text">Ovdje je data uređena i skraćena verzija standardnog obrasca „poziva za dostavljanje prijedloga“ EU. Cjeloviti obrazac i sve druge informacije vezane za grant šeme EU mogu se pronaći na: <a href="http:// ec.europa.eu/europeaid/prag/document.do?isAnnes=true" rel="noopener noreferrer" target="_blank">http:// ec.europa.eu/europeaid/prag/document.do?isAnnes=true</a>.</p>

                <p className="content_text">Imajte na umu da smo u ovom konkretnom slučaju izbrisali smjernice za popunjavanje prijave. Možete ih pogledati na navedenim linkovima. U <span className="green">zelenoj boji</span> smo dodali napomene o tumačenju, koje su dosljedne pristupu ovog priručnika.</p>

                <p className="content_text pos-rel">Obrazac prijave iz BiH koji je ovdje uključen korišten je u procesu odabira projekata za finansiranje u okviru grant šeme Federalnog ministarstva razvoja, poduzetništva i obrta pod nazivom „Jačanje konkurentnosti malih i srednjih preduzeća“, koja je osmišljena uz pomoć UNDP-a. <Toolpit>Potpuni podaci o grant šemi i dokumenti grant šeme dostupni su na: dokument 14 na <a href="http://bit.ly/izvornidokumenti" rel="noopener noreferrer" target="_blank">http://bit.ly/izvornidokumenti</a></Toolpit></p>

                <div className="yellow_box">
                    <h3 className="content_heading d-flex no-wrap d-flex-aac mb-20"><img src="../images/lightbulb.svg" alt="lightbulb"></img> <b>KLJUČNI PRINCIPI ZA PRIPREMU PITANJA U OBRASCU PRIJAVE</b></h3>
                    <p className="content_text"><b>Pitanja u obrascu prijave:</b></p>
                    <ul className="content_text">
                        <li className="pos-rel content_text mb-10"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>trebaju biti jasna, jednostavna</b> i nedvosmislena u pogledu tumačenja</li>
                        <li className="pos-rel content_text mb-10"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> trebaju <b>odražavati ključne kriterije</b> svakog projekta koji se finansira javnim sredstvima: <b>relevantnost, efikasnost, efektivnost i održivost</b> (<Link>vidi korake 1.9 i 2.4 ovog priručnika</Link>)</li>
                        <li className="pos-rel content_text mb-10"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> trebaju tražiti izvore informacija u slučajevima kada je potrebno provjeriti dostavljene ključne informacije u procesu procjene</li>
                        <li className="pos-rel content_text mb-10"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> trebaju uključivati <b>što više pitanja koja će pružiti dokaze koji će se tražiti kasnije u procesu evaluacije, a naročito u tablici za ocjenjivanje</b></li>
                        <li className="pos-rel content_text mb-0"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> potrebno je dati <b>upute za popunjavanje obrasca prijave</b>, koje su u skladu sa smjernicama za aplikante (<Link>vidi naredni korak Priručnika, korak 3.3</Link>).</li>
                    </ul>
                </div>

                <h3 className="content_heading d-flex black no-wrap d-flex-aac mb-20"><img src="../images/settings.svg" alt="settings"></img> <span className="content_text"><b>PRIMJER OBRASCA PRIJAVE: </b> (ALAT 11) – PRIMJER 1</span></h3>
                <p className="body ParaOverride-2 mb-15 ta-c d-flex d-flex-jcc"><span className="body CharOverride-84">Ugovorni organ: </span></p>
                <p className="body ParaOverride-2 mb-15 ta-c d-flex d-flex-jcc"><span className="body CharOverride-85">NAZIV ŠEME:</span></p>
                <p className="body ParaOverride-2 mb-15 ta-c d-flex d-flex-jcc"><span className="body CharOverride-84">Potpuni obrazac prijave</span></p>
                <p className="body ParaOverride-2 mb-15 ta-c d-flex d-flex-jcc"><span className="body CharOverride-85">(Budžetska linija (ili više njih): ……….)</span></p>
                <p className="body ParaOverride-2 mb-15 ta-c d-flex d-flex-jcc"><span className="body CharOverride-85"> Poziv na: …………</span> </p>

                <h2 className="blue_overlay_heading">
                    OBRAZAC PRIJAVE
                </h2>

                <p className="content_text green">Morate pratiti upute za popunjavanje punog obrasca prijave date na kraju ovog dokumenta.</p>

                <h3 className="content_heading blue mb-25">1. Opći podaci</h3>
                <div className="custom_tables mb-25">
                    <table id="table056" className="No-Table-Style TableOverride-1">
                        <colgroup>
                            <col className="_idGenTableRowColumn-156" />
                            <col className="_idGenTableRowColumn-157" />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-142">
                                <td className="No-Table-Style CellOverride-105">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Broj prijedloga</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-28">
                                <td className="No-Table-Style CellOverride-105">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Naziv glavnog aplikanta </p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-105">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Naziv projekta</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45">
                                <td className="No-Table-Style CellOverride-105">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Lokacija projekta</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-82 ">Navedite državu (ili više njih) / regiju (ili više njih) koja će imati koristi od aktivnosti</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-105">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Trajanje projekta</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="content_heading blue mb-25 pos-rel">2. Projekt <Toolpit text="U pogledu ciljeva i relevantnosti aktivnosti, komisija za ocjenjivanje se može pozivati na informacije dostavljene u projektnom konceptu (ukoliko je on predviđen u sklopu poziva konkretne šeme)."></Toolpit></h3>

                <ul className="content_text ml-20">
                    <li className="content_text blue">2.1 Opis projekta</li>
                    <li className="ml-20 content_text">2.1.1 Opis (maksimalno 6 strana)<br></br>
                        <span className="content_text mt-10 d-block"> {'<ovdje upisati tekst>'}</span>
                    </li>
                    <li className="ml-20 content_text">2.1.2 Metodologija (maksimalno 2 strane)<br></br>
                        <span className="content_text mt-10 d-block"> {'<ovdje upisati tekst>'}</span>
                    </li>
                    <li className="ml-20 content_text">2.1.3 Indikativni akcioni plan za provedbu projekta (maksimalno 2 strane)<br></br>
                        <span className="content_text d-block mt-10">Akcioni plan se izrađuje uz korištenje sljedećeg formata:</span>
                    </li>
                </ul>

                <h2 className="blue_overlay_heading">
                    PLAN RADA
                </h2>

                <div className="custom_tables mb-25">
                    <table id="table057" className="No-Table-Style TableOverride-1">
                        <colgroup>
                            <col className="_idGenTableRowColumn-158" />
                            <col className="_idGenTableRowColumn-159" />
                            <col className="_idGenTableRowColumn-160" />
                            <col className="_idGenTableRowColumn-161" />
                            <col className="_idGenTableRowColumn-162" />
                            <col className="_idGenTableRowColumn-163" />
                            <col className="_idGenTableRowColumn-162" />
                            <col className="_idGenTableRowColumn-164" />
                            <col className="_idGenTableRowColumn-163" />
                            <col className="_idGenTableRowColumn-163" />
                            <col className="_idGenTableRowColumn-165" />
                            <col className="_idGenTableRowColumn-15" />
                            <col className="_idGenTableRowColumn-15" />
                            <col className="_idGenTableRowColumn-166" />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-28">
                                <td className="No-Table-Style CellOverride-105" colspan="14">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Godina I</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-44">
                                <td className="No-Table-Style CellOverride-107" rowspan="2">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">Naziv aktivnosti</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-107" colspan="6">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">1. polovina godine (mjeseci)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-107" colspan="6">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">2. polovina godine (mjeseci)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-107" rowspan="2">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">Tijelo za provedbu</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">1</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">2</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">3</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">4</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">5</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">6</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">7</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">8</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">9</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">10</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">11</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">12</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-22">
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Primjer jedne aktivnosti</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">primjer</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Primjer jedne aktivnosti</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71">
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama">Pripremna aktivnost 1 (naziv)</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama">Koaplikant i/ili povezano lice</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71">
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama">Aktivnost izvršenja 1 (naziv)</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama">Koaplikant i/ili povezano lice</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71">
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama">Pripremna aktivnost 2 (naziv)</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama">Koaplikant i/ili povezano lice</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama">Itd.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="custom_tables mb-25">
                    <table id="table058" className="No-Table-Style TableOverride-1">
                        <colgroup>
                            <col className="_idGenTableRowColumn-158" />
                            <col className="_idGenTableRowColumn-2" />
                            <col className="_idGenTableRowColumn-167" />
                            <col className="_idGenTableRowColumn-168" />
                            <col className="_idGenTableRowColumn-167" />
                            <col className="_idGenTableRowColumn-66" />
                            <col className="_idGenTableRowColumn-66" />
                            <col className="_idGenTableRowColumn-15" />
                            <col className="_idGenTableRowColumn-169" />
                            <col className="_idGenTableRowColumn-145" />
                            <col className="_idGenTableRowColumn-126" />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-105 _idGenCellOverride-5" colspan="11">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Za naredne godine</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-44">
                                <td className="No-Table-Style CellOverride-107" rowspan="2">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">Naziv aktivnosti</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-107" colspan="9">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">Naredne godine (npr. u polovini 2. ili polovini 3. ili N-te godine trajanja šeme)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-107" rowspan="2">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">Tijelo za provedbu</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">II</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">III</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">IV</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12 blue">N+1</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-22">
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Primjer jedne aktivnosti</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">primjer</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama"><span className="CharOverride-31">Primjer jedne aktivnosti</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71">
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama">Aktivnost izvršenja 1 (naziv)</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama">Koaplikant i/ili povezano lice</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71">
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama">Aktivnost izvršenja 2 (naziv)</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama">Koaplikant i/ili povezano lice</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71">
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama">Pripremna aktivnost 3 (naziv)</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama">Koaplikant i/ili povezano lice</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama">Itd.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                            </tr>
                        </tbody>
                    </table>
                </div>

                <ul className="content_text ml-20">
                    <li className="ml-20 content_text">2.1.4 Održivost projekta (maksimalno 2 strane)<br></br>
                        <span className="content_text mt-10 d-block"> {'<ovdje upisati tekst>'}</span>
                    </li>
                    <li className="ml-20 content_text pos-rel">2.1.5 Logički okvir (ili matrica za planiranje projekta) <Toolpit>Vidi prilog 1 na kraju faze, gdje je dat tipski obrazac za <Link>matricu za planiranje projekata.</Link></Toolpit><br></br>
                        <p className="content_text mt-10"><b>Matrica za planiranje projekta (<Link>vidi Alat 12, vidi priloge</Link>) se ubacuje u finalnoj formi. Ona daje pregled projekta i procjenitelji će je koristiti za procjenu unutarnje koherentnosti.</b></p>
                        <span className="content_text mt-10 d-block"> {'<ovdje upisati tekst>'}</span>
                    </li>
                    <li className="ml-20 content_text">2.1.6 Budžet, iznos koji se traži od ugovornog organa i ostali očekivani izvori finansiranja<br></br>
                        <span className="content_text mt-10 d-block"> {'<ovdje upisati tekst>'}</span>
                    </li>
                </ul>

                <ul className="content_text ml-20">
                    <li className="content_text blue">2.2 Iskustvo</li>
                </ul>

                <p className="content_text">Informacije date u nastavku koristit će se za procjenu imate li dovoljno stabilnog iskustva za upravljanje aktivnostima u istom sektoru, te jesu li one uporedive s aktivnošću za koju se traži grant.</p>

                <ul className="content_text">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>Za slične aktivnosti</b> <br></br> <span className="content_text">Navedite detaljan opis aktivnosti u istom sektoru čijom je provedbom upravljala vaša organizacija u protekle tri godine, a koje su uporedive s aktivnošću za koju se traži grant.</span></li>
                </ul>

                <p className="content_text">Najviše 1 strana po aktivnosti.</p>

                <div className="custom_tables mb-25">
                    <table id="table059" className="No-Table-Style TableOverride-1">
                        <colgroup>
                            <col className="_idGenTableRowColumn-170" />
                            <col className="_idGenTableRowColumn-171" />
                            <col className="_idGenTableRowColumn-60" />
                            <col className="_idGenTableRowColumn-172" />
                            <col className="_idGenTableRowColumn-173" />
                            <col className="_idGenTableRowColumn-174" />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-105" colspan="6">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Naziv koaplikanta:</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-175">
                                <td className="No-Table-Style CellOverride-108" colspan="2">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">Naziv projekta:</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-109" colspan="4">
                                    <p className="nalovi-u-tabelama"><span className="CharOverride-12">Sektor:</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-147">
                                <td className="No-Table-Style CellOverride-107">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Mjesto provedbe aktivnosti</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-107">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Troškovi aktivnosti </span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-107">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Uloga u provedbi aktivnosti: koordinator, podkorisnik, povezano lice </span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-107">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Donatori sredstava za provedbu aktivnosti (naziv)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-107">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Iznos sredstava (koja je osigurao donator)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-107">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Period implementacije (od dd/mm/gggg do dd/mm/gggg)</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama ParaOverride-2">…</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama ParaOverride-2">…</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama ParaOverride-2">…</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama ParaOverride-2">…</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama ParaOverride-2">…</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106">
                                    <p className="tekst-u-tabelama ParaOverride-2">…</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                                <td className="No-Table-Style CellOverride-106" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-44">
                                <td className="No-Table-Style CellOverride-107" colspan="2">
                                    <p className="nalovi-u-tabelama"><span className="CharOverride-12">Ciljevi i rezultati aktivnosti</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106" colspan="4" />
                            </tr>
                        </tbody>
                    </table>
                </div>

                <ul className="content_text">
                    <li className="pos-rel content_text"><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/> <b>Ostali projekti</b> <br></br> <span className="content_text">Navedite detaljan opis ostalih projekata kojim je vaša organizacija upravljala u protekle tri godine. Najviše 1 strana po aktivnosti i najviše 10 projekata.</span></li>
                </ul>

                <div className="custom_tables mb-25">
                    <table id="table060" className="No-Table-Style TableOverride-1">
                        <colgroup>
                            <col className="_idGenTableRowColumn-90" />
                            <col className="_idGenTableRowColumn-176" />
                            <col className="_idGenTableRowColumn-177" />
                            <col className="_idGenTableRowColumn-140" />
                            <col className="_idGenTableRowColumn-140" />
                            <col className="_idGenTableRowColumn-178" />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-54">
                                <td className="No-Table-Style CellOverride-105" colspan="6">
                                    <p className="nalovi-u-tabelama ParaOverride-2">Naziv koaplikanta:</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-179">
                                <td className="No-Table-Style CellOverride-110" colspan="2">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">Naziv projekta:</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-111" colspan="4">
                                    <p className="nalovi-u-tabelama"><span className="CharOverride-12">Sektor:</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-147">
                                <td className="No-Table-Style CellOverride-112">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Mjesto provedbe projekta</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-112">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Troškovi projekta </span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-112">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Uloga u provedbi projekta: koordinator, podkorisnik, povezano lice </span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-112">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Donatori sredstava za provedbu projekta (naziv)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-112">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Iznos sredstava (koja je osigurao donator)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-112">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-69">Period implementacije (od dd/mm/gggg do dd/mm/gggg)</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-113">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-12">…</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-113">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-12">…</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-113">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-12">…</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-113">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-12">…</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-113">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-12">…</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-113">
                                    <p className="tekst-u-tabelama ParaOverride-2"><span className="CharOverride-12">…</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8">
                                <td className="No-Table-Style CellOverride-113" />
                                <td className="No-Table-Style CellOverride-113" />
                                <td className="No-Table-Style CellOverride-113" />
                                <td className="No-Table-Style CellOverride-113" />
                                <td className="No-Table-Style CellOverride-113" />
                                <td className="No-Table-Style CellOverride-113" />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-44">
                                <td className="No-Table-Style CellOverride-114" colspan="2">
                                    <p className="nalovi-u-tabelama ParaOverride-2"><span className="CharOverride-12">Ciljevi i rezultati projekta</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-115" colspan="4" />
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="content_heading blue">3. Glavni aplikant, koaplikant(i) i povezana lica</h3>
                
                    <div id="_idContainer102" className="_idGenObjectStyleOverride-10 d-block ">
                        <p className="nalovi-u-tabelama ParaOverride-2 d-flex d-flex-jcc p-10 pb-0">
                            <span className="CharOverride-12 ta-c">Naziv organizacije:</span>
                        </p>
                        <p className="tekst-u-tabelama ParaOverride-25 d-flex d-flex-aac content_text p-10">Glavni aplikant <img className="_idGenObjectAttribute-33 ml-5 mr-15" src=".//image/76.png" alt=" " /> Koaplikant <img className="_idGenObjectAttribute-33 ml-5 mr-15" src=".//image/76.png" alt=" " /> Povezano lice <img className="_idGenObjectAttribute-33 ml-5 mr-15" src=".//image/76.png" alt=" " /> </p>
                    </div>
                    <div id="_idContainer103 " className="_idGenObjectStyleOverride-11 "></div>
                    <div id="_idContainer104 " className="_idGenObjectStyleOverride-11 "></div>
                    <div className="custom_tables mb-25">
                        <table id="table061 " className="No-Table-Style TableOverride-1 ">
                            <colgroup>
                                <col className="_idGenTableRowColumn-180 " />
                                <col className="_idGenTableRowColumn-181 " />
                            </colgroup>
                            <tbody>
                                <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                    <td className="No-Table-Style CellOverride-105 ">
                                        <p className="nalovi-u-tabelama white ParaOverride-2 ">Naziv glavnog aplikanta</p>
                                    </td>
                                    <td className="No-Table-Style CellOverride-106 " />
                                </tr>
                                <tr className="No-Table-Style _idGenTableRowColumn-44 ">
                                    <td className="No-Table-Style CellOverride-105 ">
                                        <p className="nalovi-u-tabelama white ParaOverride-2 pos-rel">Državljanstvo <Toolpit text="Za fizička lica"></Toolpit>/ Država i datum registracije <Toolpit text="Za organizacije"></Toolpit>
                                        </p>
                                    </td>
                                    <td className="No-Table-Style CellOverride-106 " />
                                </tr>
                                <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                    <td className="No-Table-Style CellOverride-105 ">
                                        <p className="nalovi-u-tabelama white ParaOverride-2 pos-rel">Pravni status <Toolpit text="Npr. neprofitna, vladina ili međunarodna organizacija."></Toolpit>
                                        </p>
                                    </td>
                                    <td className="No-Table-Style CellOverride-106 " />
                                </tr>
                                <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                    <td className="No-Table-Style CellOverride-105 ">
                                        <p className="nalovi-u-tabelama white ParaOverride-2 pos-rel">Koaplikant (i) <Toolpit text="Dodajte onoliko redova koliko ima koaplikanata."></Toolpit>
                                        </p>
                                    </td>
                                    <td className="No-Table-Style CellOverride-106 " />
                                    </tr>
                                <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                    <td className="No-Table-Style CellOverride-105 ">
                                        <p className="nalovi-u-tabelama white ParaOverride-2 ">Naziv koaplikanta</p>
                                    </td>
                                    <td className="No-Table-Style CellOverride-106 " />
                                </tr>
                                <tr className="No-Table-Style _idGenTableRowColumn-44 ">
                                    <td className="No-Table-Style CellOverride-105 ">
                                        <p className="nalovi-u-tabelama white ParaOverride-2 ">Državljanstvo/ Država i datum registracije</p>
                                    </td>
                                    <td className="No-Table-Style CellOverride-106 " />
                                </tr>
                                <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                    <td className="No-Table-Style CellOverride-105 ">
                                        <p className="nalovi-u-tabelama white ParaOverride-2 ">Pravni status</p>
                                    </td>
                                    <td className="No-Table-Style CellOverride-106 " />
                                </tr>
                                <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                    <td className="No-Table-Style CellOverride-105 ">
                                        <p className="nalovi-u-tabelama white ParaOverride-2 pos-rel">Povezano lice (ili više njih) <Toolpit text="Dodajte onoliko redova koliko ima povezanih lica."></Toolpit></p>
                                    </td>
                                    <td className="No-Table-Style CellOverride-106 " />
                                </tr>
                                <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                    <td className="No-Table-Style CellOverride-105 ">
                                        <p className="nalovi-u-tabelama white ParaOverride-2 ">Naziv povezanog lica</p>
                                    </td>
                                    <td className="No-Table-Style CellOverride-106 " />
                                </tr>
                                <tr className="No-Table-Style _idGenTableRowColumn-44 ">
                                    <td className="No-Table-Style CellOverride-105 ">
                                        <p className="nalovi-u-tabelama white ParaOverride-2 ">Državljanstvo/ Država i datum registracije</p>
                                    </td>
                                    <td className="No-Table-Style CellOverride-106 " />
                                </tr>
                                <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                    <td className="No-Table-Style CellOverride-105 ">
                                        <p className="nalovi-u-tabelama white ParaOverride-2 ">Pravni status</p>
                                    </td>
                                    <td className="No-Table-Style CellOverride-106 " />
                                </tr>
                                <tr className="No-Table-Style _idGenTableRowColumn-130 ">
                                    <td className="No-Table-Style CellOverride-105 ">
                                        <p className="nalovi-u-tabelama white ParaOverride-2 ">Navedite s kojim licem ste povezani (glavni aplikant i/ili koaplikant)</p>
                                    </td>
                                    <td className="No-Table-Style CellOverride-106 " />
                                </tr>
                                <tr className="No-Table-Style _idGenTableRowColumn-44 ">
                                    <td className="No-Table-Style CellOverride-105 "><p className="nalovi-u-tabelama white ParaOverride-2 ">Navedite na koji način ste povezani sa tim licem</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " />
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="content_heading blue mb-25">4. Saradnici koji učestvuju u projektu</h3>

                <div className="custom_tables mb-25">
                    <table id="table062 " className="No-Table-Style TableOverride-1 ">
                        <colgroup>
                            <col className="_idGenTableRowColumn-91 " />
                            <col className="_idGenTableRowColumn-182 " />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-116 " />
                                <td className="No-Table-Style CellOverride-117 ">
                                    <p className="tekst-u-tabelama ">Saradnik &lt;…..&gt;</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-116 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Puni pravni naziv</p>
                                </td>
                                <td className="No-Table-Style CellOverride-117 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-116 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Država registracije</p>
                                </td>
                                <td className="No-Table-Style CellOverride-117 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-116 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Službena adresa</p>
                                </td>
                                <td className="No-Table-Style CellOverride-117 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-116 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Kontakt osoba</p>
                                </td>
                                <td className="No-Table-Style CellOverride-117 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-116 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Broj telefona: kod države + kod grada + broj</p>
                                </td>
                                <td className="No-Table-Style CellOverride-117 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-116 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Broj faksa: kod države + kod grada + broj</p>
                                </td>
                                <td className="No-Table-Style CellOverride-117 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-116 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Adresa elektronske pošte (e-mail)</p>
                                </td>
                                <td className="No-Table-Style CellOverride-117 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-116 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Broj uposlenih</p>
                                </td>
                                <td className="No-Table-Style CellOverride-117 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-44 ">
                                <td className="No-Table-Style CellOverride-116 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Iskustvo u sličnim aktivnostima, vezano za ulogu u provedbi predloženog projekta</p>
                                </td>
                                <td className="No-Table-Style CellOverride-117 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-116 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Historija saradnje sa aplikantima</p>
                                </td>
                                <td className="No-Table-Style CellOverride-117 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-44 ">
                                <td className="No-Table-Style CellOverride-116 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Uloga i učešće u pripremi <br />predloženog projekta</p>
                                </td>
                                <td className="No-Table-Style CellOverride-117 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-44 ">
                                <td className="No-Table-Style CellOverride-116 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Uloga i učešće u provedbi <br />predloženog projekta</p>
                                </td>
                                <td className="No-Table-Style CellOverride-117 " />
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="content_heading d-flex black no-wrap d-flex-aac mb-20"><img src="../images/settings.svg" alt="settings"></img> <span className="content_text"><b>PRIMJER OBRASCA PRIJAVE: </b> (ALAT 11) – PRIMJER 2</span></h3>

                <p className="content_text">Obrazac prijave iz BiH koji je dat u nastavku korišten je u procesu odabira projekata za finansiranje u okviru grant šeme Federalnog ministarstva razvoja, poduzetništva i obrta pod nazivom „Jačanje konkurentnosti malih i srednjih preduzeća“, koja je osmišljena uz pomoć UNDP-a i može se smatrati primjerom dobre prakse u kontekstu BiH.</p>

                <p className="body ParaOverride-2 d-flex d-flex-jcc ta-c"><b>Grant šema</b></p>
                <p className="body ParaOverride-2 d-flex d-flex-jcc ta-c">„Jačanje konkurentnosti malih i srednjih</p>
                <p className="body ParaOverride-2 d-flex d-flex-jcc ta-c">reduzeća“ za 2017. godinu</p>
                <p className="body ParaOverride-2 d-flex d-flex-jcc ta-c">&#160;</p>
                <p className="body ParaOverride-2 d-flex d-flex-jcc ta-c">&#160;</p>
                <p className="body ParaOverride-2 d-flex d-flex-jcc ta-c">&#160;</p>
                <p className="body ParaOverride-2 d-flex d-flex-jcc ta-c"><b>Bosna i Hercegovina</b></p>
                <p className="body ParaOverride-2 d-flex d-flex-jcc ta-c">&#160;</p>
                <p className="body ParaOverride-2 d-flex d-flex-jcc ta-c">OBRAZAC PROJEKTNOG PRIJEDLOGA</p>

                <h3 className="content_heading blue mt-50 mb-25">I. OPĆI PODACI O PODNOSITELJU PRIJEDLOGA</h3>

                <div className="custom_tables">
                    <table id="table063 " className="No-Table-Style TableOverride-1 ">
                        <colgroup>
                            <col className="_idGenTableRowColumn-183 " />
                            <col className="_idGenTableRowColumn-90 " />
                            <col className="_idGenTableRowColumn-184 " />
                            <col className="_idGenTableRowColumn-144 " />
                            <col className="_idGenTableRowColumn-170 " />
                            <col className="_idGenTableRowColumn-185 " />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Naziv pravnog lica:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Vrsta pravnog lica (d.o.o, d.d.):</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Upravljačka struktura:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Identifikacijski broj:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-83 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">PDV broj:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-44 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Datum prve i posljednje registracije:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-105 " rowspan="3 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Adresa pravnog lica:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">Ulica:      </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">Kanton:      </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">Grad / općina:      </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-105 " rowspan="7 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Informacije o vlasniku/ci:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">Ime i prezime (ukoliko je vlasnik/ca fizičko lice):</p>
                                    <p className="tekst-u-tabelama ">      </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">JMBG (ukoliko je vlasnik/ca fizičko lice):      </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">Naziv i sjedište firme (ukoliko je vlasnik pravno lice): </p>
                                    <p className="tekst-u-tabelama ">      </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">Identifikacijski i PDV broj (ukoliko je vlasnik pravno lice): </p>
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">Navesti procenat vlasništva državljana/pravnih lica Bosne i Hercegovine u pravnom licu:      </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">Ime kontakt osobe:      </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71 ">
                                <td className="No-Table-Style CellOverride-109 " colspan="2 ">
                                    <p className="tekst-u-tabelama ">Broj telefona kontakt osobe:      </p>
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                                <td className="No-Table-Style CellOverride-109 " colspan="3 ">
                                    <p className="tekst-u-tabelama ">E-mail kontakt osobe:</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-186 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Vrsta djelatnosti:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-109 " colspan="2 ">
                                    <p className="tekst-u-tabelama "><span className="CharOverride-69 ">Šifra djelatnosti: </span></p>
                                    <p className="tekst-u-tabelama "><span className="CharOverride-69 ">     </span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-109 " colspan="3 ">
                                    <p className="tekst-u-tabelama "><span className="CharOverride-69 ">Naziv djelatnosti: </span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-130 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Opis poslovnih aktivnosti</p>
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">(opišite svoju primarnu djelatnost):</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-130 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Opis poslovnih aktivnosti</p>
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">(opišite svoje primarne proizvode):</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-83 ">
                                <td className="No-Table-Style CellOverride-105 " rowspan="2 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Da li je pravno lice izvozno orijentirano:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="3 ">
                                    <p className="tekst-u-tabelama ">DA <img className="_idGenObjectAttribute-33 " src="./image/76.png " alt=" " /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="2 ">
                                    <p className="tekst-u-tabelama ">NE <img className="_idGenObjectAttribute-33 " src="./image/76.png " alt=" " /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="3 ">
                                    <p className="tekst-u-tabelama ">Ukoliko je odgovor „DA“, navedite % izvoza na godišnjem nivou: </p>
                                    <p className="tekst-u-tabelama ">      </p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="2 ">
                                    <p className="tekst-u-tabelama ">Ukoliko je odgovor „DA“, navedite ključna tržišta: </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-105 " rowspan="2 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Broj uposlenika:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="4 ">
                                    <p className="tekst-u-tabelama ">Uposlenici na puno radno vrijeme:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="4 ">
                                    <p className="tekst-u-tabelama ">Radnici po osnovu ugovora o djelu:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-105 " rowspan="5 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Struktura uposlenika:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="4 ">
                                    <p className="tekst-u-tabelama ">Broj uposlenih mladih ljudi (do 35 godina ):</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="4 ">
                                    <p className="tekst-u-tabelama ">Broj uposlenih žena:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="4 ">
                                    <p className="tekst-u-tabelama ">Broj uposlenih povratnika i raseljenih osoba:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="4 ">
                                    <p className="tekst-u-tabelama ">Broj uposlenih čija starosna dob prelazi 50 godina:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">     </span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="4 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Broj uposlenih osoba s invaliditetom:</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-105 " rowspan="4 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Opis nepokretne imovine pravnog lica:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama ">Vrsta:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="4 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama ">m2:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="4 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama ">Opis:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="4 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama ">Vlasništvo:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="4 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-44 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama  white ParaOverride-2 ">Standardi upravljanja kvalitetom, ukoliko postoje: </p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="5 ">
                                    <p className="tekst-u-tabelama ">     </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-130 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Da li je podnositelj prijave do sada bio korisnik poticajnih grant sredstava FMRPO-a?</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="3 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">DA <img className="_idGenObjectAttribute-33 " src="./image/76.png " alt=" " /></span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="2 ">
                                    <p className="tekst-u-tabelama ">NE <img className="_idGenObjectAttribute-33 " src="./image/76.png " alt=" " /></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="content_heading blue mt-50 mb-25">II. PROJEKTNI PRIJEDLOG</h3>
                <h3 className="content_heading blue mt-50 mb-25">1. Sažetak projekta</h3>

                <div className="custom_tables mb-25">
                    <table id="table064 " className="No-Table-Style TableOverride-1 ">
                        <colgroup>
                            <col className="_idGenTableRowColumn-29 " />
                            <col className="_idGenTableRowColumn-187 " />
                            <col className="_idGenTableRowColumn-187 " />
                            <col className="_idGenTableRowColumn-169 " />
                            <col className="_idGenTableRowColumn-176 " />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-142 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">Naziv projekta:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="4 ">
                                    <p className="tekst-u-tabelama "> </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-188 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">Prioritetna oblast: </p>
                                    <p className="tekst-u-tabelama ParaOverride-2 "><span className="CharOverride-60 ">(molimo označite polje relevantno za vaš projektni prijedlog; ukoliko projektni prijedlog uključuje dvije ili više prioritetnih oblasti, molimo označite sve navedene oblasti):</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-109 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 "><span className="CharOverride-9 ">Prioritetna oblast 1 </span>„Tehnološko unapređenje MSP-a, unapređenje kvaliteta proizvoda i standardizacija poslovanja i proizvodnih procesa“</p>
                                    <p className="tekst-u-tabelama ParaOverride-2 "><span className="CharOverride-9 "><img className="_idGenObjectAttribute-33 " src="./image/76.png " alt=" " /></span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-109 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 "><span className="CharOverride-9 ">Prioritetna oblast 2</span></p>
                                    <p className="tekst-u-tabelama ParaOverride-2 ">„Prekvalifikacija i dokvalifikacija radnika radi postizanja višeg stepena produktivnosti i kreiranje radnih mjesta“</p>
                                    <p className="tekst-u-tabelama ParaOverride-2 "><img className="_idGenObjectAttribute-33 " src="./image/83.png " alt=" " /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-109 " colspan="2 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 "><span className="CharOverride-9 ">Prioritetna oblast 3</span></p>
                                    <p className="tekst-u-tabelama ParaOverride-2 ">„Pristup tržištu i promocija proizvoda MSP-a“</p>
                                    <p className="tekst-u-tabelama ParaOverride-2 "><span className="CharOverride-9 "><img className="_idGenObjectAttribute-33 " src="./image/83.png " alt=" " /></span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">Kratki opis projekta:</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="4 ">
                                    <p className="tekst-u-tabelama "> </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-89 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">Trajanje projekta:</p>
                                    <p className="tekst-u-tabelama ParaOverride-2 "><span className="CharOverride-60 ">(maksimalno trajanje projekta je do 8 mjeseci)</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="4 ">
                                    <p className="tekst-u-tabelama "> </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-105 _idGenCellOverride-1 " rowspan="3 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">BUDŽET
                                        <br />PROJEKTA (KM):</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " colspan="3 ">
                                    <p className="tekst-u-tabelama ">a) Finansiranje iz sredstava grant šeme (KM)</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama "> </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-14 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="3 ">
                                    <p className="tekst-u-tabelama ">b) Vlastito sufinansiranje (KM)</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama "> </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-106 " colspan="3 ">
                                    <p className="tekst-u-tabelama ">UKUPAN BUDŽET PROJEKTA (a+b) (KM)</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama "> </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="content_heading blue mt-50 mb-25">2. Detaljne informacije o projektnom prijedlogu</h3>

                <ul className="content_text">
                    <li className="pos-rel content_text"> <span> <b>2.1 Analiza problema</b> <br></br><br></br>Molimo, opišite problematiku koju predloženim projektnim prijedlogom želite riješiti, definirajte širi okvir analiziranog problema, uključujući potrebne statističke i druge dostupne podatke. Ukažite na postojeće negativno stanje te na koji način se ono želi riješiti predloženim projektnim prijedlogom.</span></li><br></br>

                    <li className="pos-rel content_text"> <span> <b>2.2 Relevantnost projekta </b> (najviše jedna stranica)<br></br><br></br> Molimo, navedite sljedeće informacije: <br></br> 
                        <ul className='ml-20'>
                            <li className="body ParaOverride-46 ">Opis relevantnosti projekta, sa fokusom na ciljevima grant sheme;</li>
                            <li className="body ParaOverride-46 ">Sažeto obrazloženje ispunjenja kriterija za relevantnost iz perspektive prioritetne oblasti grant sheme.</li><br></br>
                        </ul>
                    </span>
                    </li>  

                    <li className="pos-rel content_text"> <span> <b>2.3 Ciljevi</b> (najviše jedna stranica) <br></br><br></br>Molimo, opišite ciljeve projekta.</span></li>  <br></br>
                    <li className="pos-rel content_text"> <span> <b>2.4 Opis projektnih aktivnosti</b> <br></br><br></br>Predviđeno trajanje aktivnosti je____mjeseca/mjeseci (potrebno je imati u vidu da je maksimalno trajanje implementacije projekata 8 mjeseci). Prilikom planiranja projektnih aktivnosti, podnositelji trebaju uzeti u obzir sekciju 2.2.1 „Prihvatljive aktivnosti“ iz Smjernica za podnositelje prijava. Aktivnosti se unose i u Excel tabelu „Plan aktivnosti“. Aktivnosti i njihove specifične aspekte ukratko opišete ovdje:</span></li> <br></br>

                    <li className="pos-rel content_text"> <span> <b>2.5 Specifičnosti projekta</b>
                        <ul>
                            <li className="pos-rel content_text mb-10"><br></br><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/><span> <b>Inovacije</b> <br></br> Objasnite da li projekt predviđa unapređenje tehnološke opremljenosti i na koji način doprinosi integraciji inovacija u poslovanje MSP-a (ukoliko je relevantno). </span></li>
                            <li className="pos-rel content_text mb-10"><br></br><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/><span> <b>Zapošljavanje</b> <br></br> Objasnite da li će implementacija projekta rezultirati novim zapošljavanjem. Ukoliko će doći do povećanja broja zaposlenika, potrebno je ukratko opisati očekivani broj, profil uposlenika, način odabira i vrstu zaposlenja. Navedite postoji li interni plan obuke za prekvalifikaciju ili dokvalifikaciju radne snage (u skladu sa sekcijom 3.1.2 iz Smjernica za podnositelje prijava), koji će se provesti za vrijeme i nakon provedbe projekta, kako bi se zadržala kvalificirana radna snaga. </span></li>
                            <li className="pos-rel content_text mb-10"><br></br><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/><span> <b>Stepen finalizacije proizvoda</b> <br></br> Objasnite specifičnosti proizvodnog procesa sa aspekta stepena finalizacije proizvoda MSP-a. </span></li>
                            <li className="pos-rel content_text mb-10"><br></br><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/><span> <b>Narativni opis budžeta</b> <br></br> Molimo, opišite sve troškove, a prema pojedinačnim linijama iz budžeta projekta (npr. opišite količinu i individualnu cijenu, te svrhu nabavke određenih stvari, kao što su putni troškovi ili nabavka opreme). Jasno opišite i obim, utrošak i vlastito sufinansiranje. </span></li>
                            <li className="pos-rel content_text mb-10"><br></br><img src="../images/black_arrow.svg" className="mr-15" alt="arrow"/><span> <b>Opis očekivanih rezultata</b> <br></br> Molimo da u ispod navedenoj tabeli označite očekivane projektne rezultate, imajući u vidu očekivane rezultate grant sheme, a u skladu sa prioritetnim oblastima u okviru kojih će biti projekt implementiran. Također, u tabeli je potrebno definirati indikatore koji će biti korišteni za mjerenje rezultata (molimo, koristite relevantne indikatore koji su već definirani u sekciji 2.8 obrasca), kao i aktivnosti kroz koje će navedeni rezultati biti ostvareni. U dijelu tabele koji se odnosi na ostale rezultate, navedite specifične rezultate koji nisu prikazani u tabeli, ali će biti ostvareni kroz projekt. </span></li>
                        </ul>
                    </span></li>  
                </ul>

                <div className="custom_tables mb-25">
                    <table id="table065 " className="No-Table-Style TableOverride-1 ">
                        <colgroup>
                            <col className="_idGenTableRowColumn-189 " />
                            <col className="_idGenTableRowColumn-190 " />
                            <col className="_idGenTableRowColumn-17 " />
                            <col className="_idGenTableRowColumn-57 " />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-44 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">Rezultati</p>
                                </td>
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">DA/NE</p>
                                </td>
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">Indikator</p>
                                </td>
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">Poveznica s aktivnostima </p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71 ">
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama ">Predviđeno unapređenje tehnološke opremljenosti omogućava kvantitativno poboljšanje proizvodnog procesa i pristup novim tržištima.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="CheckBox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Planirana investicija u nove tehnologije omogućava povećanje prihoda u iznosu od minimalno 3% godišnje u 12 mjeseci od nabavke.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="CheckBox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Planirana investicija u unapređenje tehnološke opremljenosti neće rezultirati smanjenjem broja zaposlenih.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="CheckBox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Predviđene obuke za potrebnu radnu snagu će osigurati zapošljavanje minimalno 5 osoba.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="CheckBox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">MSP će kroz projekt otvoriti nova tržišta ili proširiti prisustvo na postojećim tržištima.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="CheckBox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">MSP će povećati trenutni nivo izvoza za minimalno 5% u poređenju sa prethodnom finansijskom godinom.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="CheckBox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-71 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">MSP će stvoriti nove ili unaprijediti postojeće kanale komunikacije i alate za pristup tržištu i promociju na inostranim tržištima.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="CheckBox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span className="CharOverride-9 ">Drugi specifični rezultati </span><span className="CharOverride-31 ">(opišite dalje).</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 " />
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-83 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">.....</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-33 " src="./image/76.png " alt=" " /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-83 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">.....</p>
                                </td>
                                <td className="No-Table-Style CellOverride-106 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 "><img className="_idGenObjectAttribute-33 " src="./image/76.png " alt=" " /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">.....</p>
                                </td>
                                <td className="No-Table-Style CellOverride-119 " />
                                <td className="No-Table-Style CellOverride-119 " />
                                <td className="No-Table-Style CellOverride-119 " />
                            </tr>
                        </tbody>
                    </table>
                </div>

                <ul className="content_text">
                    <li className="pos-rel content_text"> <span> <b>2.8 Potencijalni rizici za provedbu projekta (najviše pola stranice)</b> <br></br><br></br>Molimo, ukratko opišite bilo kakve potencijalne rizike vezane za pravovremenu i učinkovitu provedbu projektnih aktivnosti.</span></li><br></br>

                    <li className="pos-rel content_text"> <span> <b>2.9 Indikatori za praćenje projekta</b> <br></br><br></br>Molimo, označite koji su od dolje navedenih ključnih indikatora relevantni za praćenje (monitoring) projekta. Imajte u vidu da će ove indikatore koristiti FMRPO u svrhu praćenja rezultata projekta. Ukoliko je potrebno, navedite dodatne indikatore, koji dokazuju da su konkretni rezultati ostvareni za vrijeme trajanja projekta.</span></li>
                </ul>

                <div className="content_text">
                    <table id="table066 " className="No-Table-Style TableOverride-2 ">
                        <colgroup>
                            <col className="_idGenTableRowColumn-25 " />
                            <col className="_idGenTableRowColumn-176 " />
                            <col className="_idGenTableRowColumn-191 " />
                            <col className="_idGenTableRowColumn-174 " />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-105 " rowspan="2 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">Indikator</p>
                                </td>
                                <td className="No-Table-Style CellOverride-120 " rowspan="2 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">DA / NE</p>
                                </td>
                                <td className="No-Table-Style CellOverride-105 " colspan="2 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">Vrijednost pokazatelja</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-186 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">Polazna vrijednost</p>
                                </td>
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">Ciljana vrijednost</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">% povećanja prihoda u odnosu na ostvareni prihod iz 2016. godine.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">% povećanja prihoda od izvoza u odnosu na ostvareni prihod iz 2016. godine.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Broj novih radnih mjesta kao rezultat unaprijeđene tehnološke opremljenosti.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Broj novih radnih mjesta kao rezultat obučene radne snage i promocije podržanih MSP-ova.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Broj novih radnih mjesta kao rezultat promocije podržanih MSP-ova.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Broj novozaposlenih žena.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Broj novozaposlenih mladih osoba (do 35 godina).</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Broj novozaposlenih povratnika i raseljenih osoba.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-11 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Broj novozaposlenih osoba sa posebnim potrebama.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Broj dugoročno nezaposlenih osoba koje su zaposlene kao rezultat projekta.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-22 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Broj osoba koje su unaprijedile znanja i kvalifikacije za bolji pristup tržištu rada.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">m<span className="CharOverride-11 ">2</span> adaptiranih privrednih/proizvodnih prostora unaprijeđenih kroz projekt u svrhu instaliranja opreme.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Broj sajmova na kojima se promovirao izvozni potencijal MSP-a.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Broj uvedenih standarda kvaliteta MSP-a.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Drugi.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama d-flex ParaOverride-2 "><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png " alt="Checkbox" /></p>
                                </td>
                                <td className="No-Table-Style CellOverride-118 " />
                                <td className="No-Table-Style CellOverride-118 " />
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="content_text"><b>Napomena:</b> U tabelu se dodaju novi redovi u skladu sa brojem DODATNIH indikatora koje treba prikazati.</p>

                <ul className="content_text">
                    <li className="pos-rel content_text"> <span> <b>2.10 Održivost (najviše pola stranice)</b> <br></br><br></br>Objasnite na koji način će se osigurati održivost nakon završetka projekta, uključujući aktivnosti i mjere koje će se poduzeti kako bi se postigla dugoročna održivost ostvarenih rezultata projekta.</span></li><br></br>

                    <li className="pos-rel content_text"> <span> <b>2.11 Opis nositelja implementacije projekta (najviše pola stranice)</b> <br></br><br></br>Molimo, navedite kratki opis prethodnog iskustva podnositelja projekta u pogledu vođenja i realizacije projekata (ukoliko je relevantno). Također, navedite projektni tim koji će biti zadužen za provedbu projekta, uključujući njihovo područje stručnosti, iskustvo u upravljanju projektima i predložene odgovornosti.</span></li><br></br>

                    <li className="pos-rel content_text"> <span> <b>2.12 Promocija i vidljivost projekta</b> <br></br><br></br>Molimo, navedite na koji način ćete promovirati projektne aktivnosti i rezultate (plakati, posteri, informativni materijali, press konferencije, ceremonija otvaranja i sl.). Imajte na umu da svi projekti odobreni u okviru ovog javnog poziva moraju poštivati relevantne smjernice za promociju i vidljivost projekata finansiranih od FMRPO-a, UNDP-a i Evropske unije, što treba biti uključeno i u budžet.</span></li><br></br>

                    <li className="pos-rel content_text"> <span> <b>2.13 Lista za provjeru potrebnih dokumenata i priloga</b> <br></br><br></br> Molimo, navedite na koji način ćete promovirati projektne aktivnosti i rezultate (plakati, posteri, informativni materijali, press konferencije, ceremonija otvaranja i sl.). Imajte na umu da svi projekti odobreni u okviru ovog javnog poziva moraju poštivati relevantne smjernice za promociju i vidljivost projekata finansiranih od FMRPO-a, UNDP-a i Evropske unije, što treba biti uključeno i u budžet.</span></li>
                </ul>

                <div className="custom_tables mb-25">
                    <table id="table067 " className="No-Table-Style TableOverride-1 ">
                        <colgroup>
                            <col className="_idGenTableRowColumn-138 " />
                            <col className="_idGenTableRowColumn-192 " />
                        </colgroup>
                        <tbody>
                            <tr className="No-Table-Style _idGenTableRowColumn-44 ">
                                <td className="No-Table-Style CellOverride-105 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Dokument / Prilog</p>
                                </td>
                                <td className="No-Table-Style CellOverride-122 ">
                                    <p className="nalovi-u-tabelama ParaOverride-2 ">Dostavljen (DA / NE)</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Popunjen Obrazac projektnog prijedloga.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Popunjen budžet projektnog prijedloga, koji uključuje minimalni iznos za sufinansiranje.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Popunjen Plan aktivnosti.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Popunjeno Pismo namjere o minimalnom iznosu sufinansiranja.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Sudsko rješenje o registraciji (prva registracija i aktuelni izvod) - Prilog I.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Uvjerenje od Porezne uprave Federacije BiH o izmirenju poreza i doprinosa za sve uposlene, sa brojem ili popisom osiguranih osoba – Prilog II.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Uvjerenje o poreznoj registraciji – Prilog III.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Obavijest o razvrstavanju subjekta prema djelatnosti – Prilog IV.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Uvjerenje o izmirenim obavezama po osnovu PDV-a (ukoliko je obveznik) po Zakonu o porezu na dodanu vrijednost – Prilog V.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Bilans stanja i bilans uspjeha za 2016. godinu ovjereni od nadležnog organa – Prilog VI.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Uvjerenje o nekažnjavanju i Uvjerenje o nevođenju krivičnog postupka fizičke, odnosno, odgovorne osobe u pravnoj osobi – Prilog VII.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Izjava o nesudjelovanju u koruptivnim radnjama – Prilog VIII.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Izjava o korištenim potporama male vrijednosti – Prilog IX.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-123 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Potvrda o prebivalištu za odgovornu osobu – Prilog X.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-123 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Uvjerenje o državljanstvu Bosne i Hercegovine za većinskog vlasnika/vlasnike – Prilog XI.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama ">Potvrda o izvršenom izvozu proizvoda ili usluge u 2016. godini od nadležne institucije (ukoliko je podnositelj prijave izvoznik) – Prilog XII.</p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-122 _idGenCellOverride-5 " colspan="2 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Dokumenti za prijave u okviru Prioritetne oblasti 1:</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-124 " colspan="2 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 "><span className="CharOverride-69 " lang="en-US ">U slučaju nabavke opreme, mašina i profesionalnih vozila</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Tehnička specifikacija.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Odgovarajuća ponuda ili predračun od dobavljača.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-124 " colspan="2 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 "><span className="CharOverride-69 " lang="en-US ">U slučaju nabavke hardvera i softvera</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Tehnička specifikacija.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Odgovarajuća ponuda ili predračun od dobavljača.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-124 " colspan="2 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 "><span className="CharOverride-69 " lang="en-US ">U slučaju nabavke patenata</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Odgovarajuća ponuda ili predračun od vlasnika patenta.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-124 " colspan="2 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 "><span className="CharOverride-69 " lang="en-US ">U slučaju adaptacije poslovnih/proizvodnih prostorija</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Predmjer i predračun radova.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-124 " colspan="2 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 "><span className="CharOverride-69 " lang="en-US ">U slučaju uvođenja sistema upravljanja kvalitetom i međunarodnih standarda</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Ponuda i predračun od certifikacijske i/ili konsultantske kuće.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-54 ">
                                <td className="No-Table-Style CellOverride-122 " colspan="2 ">
                                    <p className="nalovi-u-tabelama white ParaOverride-2 ">Dokumenti za prijave u okviru Prioritetne oblasti 2:</p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Interni pravilnik o obuci, program obuke i troškovnik za prekvalifikaciju ili dokvalifikaciju radne snage.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-45 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Za vanjsku obuku: odgovarajuća ponuda i predračun za obuku sa programom obuke od relevantnog eksperta/organizacije.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-124 " colspan="2 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 "><span className="CharOverride-69 " lang="en-US ">U slučaju iznajmljivanja opreme</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Tehnička specifikacija i opis.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Odgovarajuća ponuda i predračun.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-124 " colspan="2 ">
                                    <p className="tekst-u-tabelama white ParaOverride-2 "><span className="CharOverride-69 " lang="en-US ">Dokumenti za prijave u okviru Prioritetne oblasti 3.</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Predračun troškova zakupa sajamskog prostora.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-8 ">
                                <td className="No-Table-Style CellOverride-124 " colspan="2 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 "><span className="CharOverride-69 " lang="en-US ">U slučaju izrade i štampanja promotivnih materijala, web stranice itd.</span></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Tehnička specifikacija.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                            <tr className="No-Table-Style _idGenTableRowColumn-27 ">
                                <td className="No-Table-Style CellOverride-118 ">
                                    <p className="tekst-u-tabelama "><span lang="en-US ">Odgovarajuća ponuda ili predračun od dobavljača.</span></p>
                                </td>
                                <td className="No-Table-Style CellOverride-121 ">
                                    <p className="tekst-u-tabelama ParaOverride-2 d-flex"><img className="_idGenObjectAttribute-34 checkbox_pic" src="./image/86.png" alt="Checkbox" /></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="content_text">Podnositelj prijave, pod materijalnom i krivičnom odgovornošću, garantira svojim potpisom i pečatom za istinitost i tačnost podataka, dokumenata i informacija koje su sastavni dio ove prijave, shodno zakonskim propisima u Federaciji BiH.</p>

                <p className="content_text">Podnositelj prijave mora poštivati odredbe Zakona o sukobu interesa u organima vlasti u Federaciji BiH („Službene novine Federacije BiH“, broj 70/08), a naročito odredbe Člana 6. kojim se uređuju ulaganja Vlade Federacije BiH u pravna lica u privatnom vlasništvu.</p>

                <p className="d-flex d-flex-jcsb content_text"><span>(Mjesto, datum)</span> <span>M.P.</span> <span>Potpis odgovorne osobe</span></p>

                <p className="content_text d-flex no-wrap"><img src="../images/document.svg" alt="document" className="mr-15 image_width" /> <span><b>Do kraja ovog koraka:</b> <br></br> osmislit ćete i izraditi obrazac prijave koji je jasan i jednostavan za popunjavanje, ali koji ipak sadrži sve potrebne informacije za ocjenjivanje i odabir projekata.</span></p>
            </div>
        </ContentPage>
    )
}
