import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const wellness = (state = 0, action) => {
    if (action.type === 'SET_WELLNESS_SCORE') {
        return action.payload;
    } else if (action.type === 'CLEAR FORM') {
        return 0;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers(
        {
            wellness,
        }
    ),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
