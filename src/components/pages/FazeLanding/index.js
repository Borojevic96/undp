import React from 'react';

import TopNavBar from '../../common/TopNavBar';

class FazeLanding extends React.Component {
    render() {
        return (
            <div id="faze_landing" className="d-flex d-flex-jcc d-flex-aac">
                <TopNavBar />
                <div className="faze_landing_wrap">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default FazeLanding;