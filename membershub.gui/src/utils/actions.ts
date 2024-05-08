import {Dispatch} from 'redux';

export const FETCH_TEAM_MEMBERS_SUCCESS = 'FETCH_TEAM_MEMBERS_SUCCESS';

interface FetchTeamMembersSuccessAction {
    type: typeof FETCH_TEAM_MEMBERS_SUCCESS;
    payload: any[];
}

export type TeamMembersActionTypes = FetchTeamMembersSuccessAction;

export const fetchTeamMembersSuccess = (teamMembers: any[]): TeamMembersActionTypes => ({
    type: FETCH_TEAM_MEMBERS_SUCCESS,
    payload: teamMembers,
});

export const fetchTeamMembers = () => {
    return async (dispatch: Dispatch<TeamMembersActionTypes>) => {
        try {
            const response = await fetch('your-api-endpoint');
            const data = await response.json();
            dispatch(fetchTeamMembersSuccess(data));
        } catch (error) {
            console.error('Error fetching team members:', error)
        }
    };
};
