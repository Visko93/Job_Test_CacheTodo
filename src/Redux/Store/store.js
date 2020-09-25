 
import { createStore, combineReducers, applyMiddleware } from 'redux';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({ }),
        applyMiddleware()
    );

    return store;
}