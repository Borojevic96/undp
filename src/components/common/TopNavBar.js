import React from 'react';
import { Link } from 'react-router-dom';

import MenuButtons from '../common/MenuButtons';

const shiftToLanding = () => {
    const landing = document.getElementById('landing');
    landing.style.transform = 'translate3d(0,0,0)';
}

const TopNavBar = props => {
    return (
        <div className="top_nav_bar d-flex d-flex-jcsb d-flex-aac">
            {props.notLanding ? 
                <Link to={'/'} className="d-flex d-flex-aac d-flex-s-5"><img src="../images/yellow_arrow.svg" alt="arrow"/>NAZAD NA POČETNU</Link> 
                :  
                <p onClick={shiftToLanding} className="d-flex d-flex-aac d-flex-s-5"><img src="../images/yellow_arrow.svg" alt="arrow"/>NAZAD NA POČETNU</p>}

            <MenuButtons className="white d-flex d-flex-aac" />
        </div>
    );
}

export default TopNavBar;