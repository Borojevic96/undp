import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentPage } from '../../actions';

class NextChapter extends React.Component {
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
        
            if(currentPage === 0 && currentSubPage < maxFazeOne.length) {
                return (
                    <Link onClick={() => this.props.setCurrentPage(currentPage, currentSubPage + 1)} to={`/page=${currentPage}&subpage=${currentSubPage + 1}`} className="chapter_text"> Sljedeće<br></br> poglavlje</Link>
                )
            }
    
            if(currentPage === 0 && currentSubPage === maxFazeOne.length) {
                return (
                    <Link onClick={() => this.props.setCurrentPage(currentPage + 1, 0)} to={`/page=${currentPage + 1}&subpage=${1}`} className="chapter_text"> Sljedeće<br></br> poglavlje</Link>
                )
            }
    
            if(currentPage === 1 && currentSubPage < maxFazeTwo.length) {
                return (
                    <Link onClick={() => this.props.setCurrentPage(currentPage, currentSubPage + 1)} to={`/page=${currentPage}&subpage=${currentSubPage + 1}`} className="chapter_text"> Sljedeće<br></br> poglavlje</Link>
                )
            }

            if(currentPage === 1 && currentSubPage === maxFazeTwo.length) {
                return (
                    <Link onClick={() => this.props.setCurrentPage(currentPage + 1, 0)} to={`/page=${currentPage + 1}&subpage=${1}`} className="chapter_text"> Sljedeće<br></br> poglavlje</Link>
                )
            }
    
            if(currentPage === 2 && currentSubPage < maxFazeThree.length) {
                return (
                    <Link onClick={() => this.props.setCurrentPage(currentPage, currentSubPage + 1)} to={`/page=${currentPage}&subpage=${currentSubPage + 1}`} className="chapter_text"> Sljedeće<br></br> poglavlje</Link>
                )
            }

            if(currentPage === 2 && currentSubPage === maxFazeThree.length) {
                return (
                    <Link onClick={() => this.props.setCurrentPage(currentPage + 1, 0)} to={`/page=${currentPage + 1}&subpage=${1}`} className="chapter_text"> Sljedeće<br></br> poglavlje</Link>
                )
            }

            if(currentPage === 3 && currentSubPage < maxFazeFour.length) {
                return (
                    <Link onClick={() => this.props.setCurrentPage(currentPage, currentSubPage + 1)} to={`/page=${currentPage}&subpage=${currentSubPage + 1}`} className="chapter_text"> Sljedeće<br></br> poglavlje</Link>
                )
            }

            if(currentPage === 3 && currentSubPage === maxFazeFour.length) {
                return (
                    <Link to={`/page=${currentPage + 1}&subpage=${0}`} className="chapter_text disabled"> Sljedeće<br></br> poglavlje</Link>
                )
            }
        }

    }

    render() {
        return (
            <div className="next_chapter">
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

export default connect(mapStateToProps, { setCurrentPage })(NextChapter)