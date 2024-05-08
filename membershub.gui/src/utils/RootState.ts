import { combineReducers } from 'redux';
import teamMembersReducer from './reducers';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    teamMembers: teamMembersReducer,
});
