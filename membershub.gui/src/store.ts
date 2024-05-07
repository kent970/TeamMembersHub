// store.ts
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Import redux-thunk if you are using it
import rootReducer from "./utils/reducers";

// Create the Redux store
const store = configureStore({
    reducer: rootReducer,
})

// Export the store
export default store;
