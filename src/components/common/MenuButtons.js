import React, { Component } from 'react';

export default class MenuButtons extends Component {

    openMenu = () => {
        const menu = document.querySelector('.menu');
        menu.classList.add('active_menu');
    }

    render() {
        return (
            <div id="menu_items" {...this.props}>
                <button>UVOD</button>
                <button onClick={this.openMenu}>SADRŽAJ</button>
            </div>
        )
    }
}