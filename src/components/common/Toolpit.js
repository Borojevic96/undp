import React from 'react';
import ReactDOM from 'react-dom';

class Toolpit extends React.PureComponent{
    showToolPit = () => {
        const node = ReactDOM.findDOMNode(this.refs.toolpit);

        node.style.display = 'block';
    }

    hideToolPit = () => {
        const node = ReactDOM.findDOMNode(this.refs.toolpit);
        node.style.display = 'none';
    }

    render() {
        return (
            <span className="toolpit_wrap" onMouseEnter={this.showToolPit} onMouseLeave={this.hideToolPit}>
                <img src="../images/fussnote.svg" alt="fussnote" />
                <span ref={'toolpit'} className="toolpit main-text black"><span className="main-text black">{this.props.text ? this.props.text : this.props.children}</span></span>
            </span>
        );
    }
}

export default Toolpit;