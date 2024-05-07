// RootState.ts
import { combineReducers } from 'redux';
import teamMembersReducer from './reducers'; // Assuming you have a separate file for your teamMembersReducer

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

// Combine all reducers into a single rootReducer
const rootReducer = combineReducers({
    teamMembers: teamMembersReducer,
});
