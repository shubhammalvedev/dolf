import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'
import rootReducer from '../rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, compose(
  applyMiddleware(thunk),
  process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f
))
export const persistor = persistStore(store);