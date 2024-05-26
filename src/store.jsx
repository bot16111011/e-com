import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import productReducer from './features/slices/productSlice';
import cartReducer from './features/slices/cartSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
export default store;
