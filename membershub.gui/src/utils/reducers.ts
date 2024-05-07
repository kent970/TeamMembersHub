// reducers.ts
import { combineReducers } from 'redux';
import { FETCH_TEAM_MEMBERS_SUCCESS, TeamMembersActionTypes } from './actions';

interface TeamMember {
    // Define your team member data structure here
}

interface TeamMembersState {
    teamMembers: TeamMember[];
}

const initialState: TeamMembersState = {
    teamMembers: [],
};

const teamMembersReducer = (state = initialState.teamMembers, action: TeamMembersActionTypes): TeamMember[] => {
    switch (action.type) {
        case FETCH_TEAM_MEMBERS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    teamMembers: teamMembersReducer,
});

export default rootReducer;
