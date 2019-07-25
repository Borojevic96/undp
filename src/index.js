import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './css/app.scss';

import reducers from './reducers/index';
import RouterComponent from './components/RouterComponent';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

export default class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
               <RouterComponent />
            </Provider>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();
