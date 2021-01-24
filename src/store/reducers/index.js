import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import galleryReducer from './gallery.reducer';

import storage from "redux-persist/lib/storage"


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    galleryReducer,
});

export default persistReducer(persistConfig, rootReducer);
