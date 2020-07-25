const skillUsersReducerDefaultState = [];

const skillUsersReducer = (state = skillUsersReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_SKILL_USER':
            return [...state, action.skillUser]
        case 'REMOVE_SKILL_USER':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_SKILL_USER':
            return state.map((skillUser) => {
                if(skillUser.id === action.id){
                    return {
                        ...skillUser,
                        ...action.updates
                    }
                } else {
                    return skillUser;
                }
            });
        case 'SET_SKILL_USERS':
            return action.skillUsers;

        default:
            return state;
    }
}

export default skillUsersReducer;