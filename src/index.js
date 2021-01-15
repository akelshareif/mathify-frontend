import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistedStore } from './store';

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
