import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist'
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' && 
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store)

const storeObj = {
    store,
    persistor,
};

export default storeObj;