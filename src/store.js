import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index';
const persistConfig={
    key:'root',
    storage:storage,
};
const initialState={
    Auth:{},
}

const persistedReducer=persistReducer(persistConfig,rootReducer);
const middleware=applyMiddleware(thunk,logger);

export default()=>{
    const store=createStore(persistedReducer,initialState,middleware);
    const persistor=persistStore(store);
    return {store,persistor}
}