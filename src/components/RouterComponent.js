import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Page_0_1, Page_0_2, Page_1_1, Page_1_2, Page_1_3, Page_1_4, Page_1_5, Page_1_6, Page_1_7, Page_1_8, Page_1_9, Page_1_10, Page_2_1, Page_2_2, Page_2_3, Page_2_4, Page_2_5, Page_2_6, Page_2_7, Page_3_1, Page_3_2, Page_3_3, Page_3_4 } from './pages/ContentPage/exports';

import Menu from './common/Menu';
import Landing from './pages/Landing/';
import ContentPage from './pages/ContentPage';
// import page404 from './pages/404/'

const routes = [
    {
        path: '/page=0&subpage=1',
        component: Page_0_1
    },
    {
        path: '/page=0&subpage=2',
        component: Page_0_2
    },


    {
        path: '/page=1&subpage=1',
        component: Page_1_1
    },
    {
        path: '/page=1&subpage=2',
        component: Page_1_2
    },
    {
        path: '/page=1&subpage=3',
        component: Page_1_3
    },
    {
        path: '/page=1&subpage=4',
        component: Page_1_4
    },
    {
        path: '/page=1&subpage=5',
        component: Page_1_5
    },
    {
        path: '/page=1&subpage=6',
        component: Page_1_6
    },
    {
        path: '/page=1&subpage=7',
        component: Page_1_7
    },
    {
        path: '/page=1&subpage=8',
        component: Page_1_8
    },
    {
        path: '/page=1&subpage=9',
        component: Page_1_9
    },
    {
        path: '/page=1&subpage=10',
        component: Page_1_10
    },


    {
        path: '/page=2&subpage=1',
        component: Page_2_1
    },
    {
        path: '/page=2&subpage=2',
        component: Page_2_2
    },
    {
        path: '/page=2&subpage=3',
        component: Page_2_3
    },
    {
        path: '/page=2&subpage=4',
        component: Page_2_4
    },
    {
        path: '/page=2&subpage=5',
        component: Page_2_5
    },
    {
        path: '/page=2&subpage=6',
        component: Page_2_6
    },
    {
        path: '/page=2&subpage=7',
        component: Page_2_7
    },


    {
        path: '/page=3&subpage=1',
        component: Page_3_1
    },
    {
        path: '/page=3&subpage=2',
        component: Page_3_2
    },
    {
        path: '/page=3&subpage=3',
        component: Page_3_3
    },
    {
        path: '/page=3&subpage=4',
        component: Page_3_4
    }
]

export default class RouterComponent extends Component {
    render(){
        return(
            <BrowserRouter>
                <Menu />
                <Switch>
                    <Route exact path={`/`} component={Landing} />
                    <Route path={`/faze_content/:page`} component={ContentPage} />


                    {routes.map(route => (
                        <Route 
                            key={route.path}
                            path={route.path}
                            component={route.component}
                        />
                    ))}

                    {/* <Route component={page404} /> */}
                </Switch>
            </BrowserRouter>
        );
    }
}