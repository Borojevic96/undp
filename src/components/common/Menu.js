import React from 'react';
import { Link } from 'react-router-dom';

const closeMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active_menu');
}

const Menu = props => {
    return (
        <div className="menu">
            <img onClick={closeMenu} className="close_menu" src="../images/close_menu.svg" alt="close menu" />
            <h3>SADRŽAJ</h3>
            <div className="menu_content d-flex d-flex-jcsb">
                <div className="d-flex-m-5_5 ">
                    <h4 className="mt-60">NULTA FAZA:</h4>
                    <h4 className="black">UVOD U GRANT ŠEME</h4>
                    <ul className="menu_list faze_one_menu">
                        <li className="d-flex">0.1 <Link to={'/page=0&subpage=1'}>Šta morate znati prije poduzimanja bilo kakvih koraka</Link></li>
                        <li className="d-flex">0.2 <Link to={'/page=0&subpage=2'}>Trogodišnji budžetski ciklus</Link></li>
                    </ul>

                    <h4 className="mt-60">PRVA FAZA:</h4>
                    <h4 className="black">KONCEPTUALIZACIJA ŠEME</h4>
                    <ul className="menu_list faze_two_menu">
                        <li className="d-flex">1.1 <Link to={'/page=1&subpage=1'}>Prvi koraci</Link></li>
                        <li className="d-flex">1.2 <Link to={'/page=1&subpage=2'}>Formiranje tima za izradu grant šeme</Link></li>
                        <li className="d-flex">1.3 <Link to={'/page=1&subpage=3'}>Provjera relevantnosti politike</Link></li>
                        <li className="d-flex">1.4 <Link to={'/page=1&subpage=4'}>Uključivanje relevantnih aktera</Link></li>
                        <li className="d-flex">1.5 <Link to={'/page=1&subpage=5'}>Analiza problema, potreba, prilika i potražnje</Link></li>
                        <li className="d-flex">1.6 <Link to={'/page=1&subpage=6'}>Jasnoća pravca djelovanja</Link></li>
                        <li className="d-flex">1.7 <Link to={'/page=1&subpage=7'}>Ispitivanje predizvodljivosti</Link></li>
                        <li className="d-flex">1.8 <Link to={'/page=1&subpage=8'}>Strukturiranje kocepta šeme</Link></li>
                        <li className="d-flex">1.9 <Link to={'/page=1&subpage=9'}>Postavljanje parametara za kriterije odabira</Link></li>
                        <li className="d-flex">1.10 <Link to={'/page=1&subpage=10'}>Razrada podzakonskih akata</Link></li>
                    </ul>


                </div>
                <div className="d-flex-m-5_5">
                    <h4 className="mt-60">DRUGA FAZA:</h4>
                    <h4 className="black">IZRADA ŠEME</h4>
                    <ul className="menu_list faze_three_menu">
                        <li className="d-flex">2.1 <Link to={'/page=2&subpage=1'}>Definiranje izlaznih rezultata šeme</Link></li>
                        <li className="d-flex">2.2 <Link to={'/page=2&subpage=2'}>Definiranje prihvatljivih aplikanata, aktivnosti i troškova</Link></li>
                        <li className="d-flex">2.3 <Link to={'/page=2&subpage=3'}>Omogućavanje optimalnog odgovora aplikanata na šemu</Link></li>
                        <li className="d-flex">2.4 <Link to={'/page=2&subpage=4'}>Kriteriji odabira</Link></li>
                        <li className="d-flex">2.5 <Link to={'/page=2&subpage=5'}>Scenarij za implementaciju</Link></li>
                        <li className="d-flex">2.6 <Link to={'/page=2&subpage=6'}>Opća procjena izvodljivosti šeme</Link></li>
                        <li className="d-flex">2.7 <Link to={'/page=2&subpage=7'}>Izrada plana za monitoring i izvještavanje</Link></li>
                    </ul>

                    <h4 className="mt-60">TREĆA FAZA:</h4>
                    <h4 className="black">RAZRADA DOKUMENATA U OKVIRU ŠEME</h4>
                    <ul className="menu_list faze_four_menu">
                        <li className="d-flex">3.1 <Link to={'/page=3&subpage=1'}>Razrada javnog poziva</Link></li>
                        <li className="d-flex">3.2 <Link to={'/page=3&subpage=2'}>Razrada obrasca prijave</Link></li>
                        <li className="d-flex">3.3 <Link to={'/page=3&subpage=3'}>Razrada smjernica za aplikante</Link></li>
                        <li className="d-flex">3.4 <Link to={'/page=3&subpage=4'}>Objava javnog poziva za dostavljanje projekata</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu;