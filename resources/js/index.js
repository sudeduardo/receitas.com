import React from 'react';
import {render} from 'react-dom';
import store from './reducers/index'
import App from './App';
import {Provider} from "react-redux";


render(<Provider store={store}>
    <App/>
</Provider>,document.getElementById('app'));
