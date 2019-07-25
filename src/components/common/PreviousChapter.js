import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentPage } from '../../actions';

class PreviousChapter extends React.Component {
    state = {
        ready: false
    }

    componentDidMount() {
        this.setState({ ready: true })
    }

    renderLink = () => {
        if(this.state.ready) {
            const maxFazeOne = document.querySelectorAll('.faze_one_menu li');
            const maxFazeTwo = document.querySelectorAll('.faze_two_menu li');
            const maxFazeThree = document.querySelectorAll('.faze_three_menu li');
            const maxFazeFour = document.querySelectorAll('.faze_four_menu li');
            const { currentPage, currentSubPage } = this.props;

            console.log(currentPage, currentSubPage);
    
            if(currentPage === 0 && currentSubPage === 1) {
                return (
                    <Link to={`/page=${currentPage}&subpage=${currentSubPage}`} className="chapter_text disabled"> Prethodno<br></br> poglavlje</Link>
                )
            }
    
            if(currentPage === 0 && currentSubPage <= maxFazeOne.length) {
                return (
                    <Link onClick={() => this.props.setCurrentPage(0,currentSubPage - 1)} to={`/page=${currentPage}&subpage=${currentSubPage - 1}`} className="chapter_text"> Prethodno<br></br> poglavlje</Link>
                )
            }
    
            if(currentPage === 1 && currentSubPage === 1) {
                return (
                    <Link onClick={() => this.props.setCurrentPage(currentPage - 1, maxFazeOne.length)} to={`/page=${currentPage - 1}&subpage=${maxFazeOne.length }`} className="chapter_text"> Prethodno<br></br> poglavlje</Link>
                )
            }
    
            if(currentPage === 1 && currentSubPage <= maxFazeTwo.length) {
                return (
                    <Link onClick={() => this.props.setCurrentPage(currentPage, currentSubPage - 1)} to={`/page=${currentPage}&subpage=${currentSubPage - 1}`} className="chapter_text"> Prethodno<br></br> poglavlje</Link>
                )
            }
    
            if(currentPage === 2 && currentSubPage === 1) {
                return (
                    <Link onClick={() => this.props.setCurrentPage(currentPage - 1, maxFazeTwo.length)} to={`/page=${currentPage - 1}&subpage=${maxFazeTwo.length }`} className="chapter_text"> Prethodno<br></br> poglavlje</Link>
                )
            }
    
            if(currentPage === 2 && currentSubPage <= maxFazeThree.length) {
                return (
                    <Link onClick={() => this.props.setCurrentPage(currentPage, currentSubPage - 1)} to={`/page=${currentPage }&subpage=${currentSubPage - 1}`} className="chapter_text"> Prethodno<br></br> poglavlje</Link>
                )
            }
    
            if(currentPage === 3 && currentSubPage === 1) {
                return (
                    <Link onClick={() => this.props.setCurrentPage(currentPage - 1, maxFazeThree .length)} to={`/page=${currentPage - 1}&subpage=${maxFazeThree.length}`} className="chapter_text">Prethodno<br></br> poglavlje</Link>
                )
            }
    
            if(currentPage === 3 && currentSubPage <= maxFazeFour.length) {
                return (
                    <Link onClick={() => this.props.setCurrentPage(currentPage, currentSubPage - 1)} to={`/page=${currentPage }&subpage=${currentSubPage - 1}`} className="chapter_text"> Prethodno<br></br> poglavlje</Link>
                )
            }
        }

    }

    render() {
        return (
            <div className="previous_chapter">
                {this.renderLink()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage.page,
        currentSubPage: state.currentPage.subpage
    }
}

export default connect(mapStateToProps, { setCurrentPage })(PreviousChapter)