import React from 'react';
import TopNavBar from '../../common/TopNavBar';
import { connect } from 'react-redux';

import Footer from '../../common/Footer';
import NextChapter from '../../common/NextChapter';
import PreviousChapter from '../../common/PreviousChapter';
import { setCurrentPage } from '../../../actions';

class ContentPage extends React.Component {
    UNSAFE_componentWillMount() {
        const link = window.location.href.split('/').pop().split('&');
        let page = undefined;
        let subPage = undefined;

        page = link[0].split('=');
        subPage = link[1].split('=');

        this.props.setCurrentPage(parseInt(page[1]), parseInt(subPage[1]));
    }

    componentDidMount() {
        const link = window.location.href;

        if(link === link.split('#')[0]) {
            window.scrollTo(0,0);
        }
    }

    render() {
        return (
            <div className="content_page">
                <div className="content_page_pic"><img src="../images/content_page_pic.png" alt="Content Pic" /></div>
                <TopNavBar notLanding />
                <NextChapter />
                <PreviousChapter />
                {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}

export default connect(null, { setCurrentPage })(ContentPage);