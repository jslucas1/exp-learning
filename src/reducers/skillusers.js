const skillUsersReducerDefaultState = [];

const skillUsersReducer = (state = skillUsersReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return [...state, action.user]
        case 'REMOVE_USER':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_USER':
            return state.map((user) => {
                if(user.id === action.id){
                    return {
                        ...user,
                        ...action.updates
                    }
                } else {
                    return user;
                }
            });
        case 'SET_USERS':
            return action.users;
        case 'ADD_SKILL':
            return {
                ...user,
                skill: {
                    skillName,
                    proficiency,
                    goalProf,
                    note
                }
            }
        case 'EDIT_SKILL':
            return state.user.map((user)=> {
                if (user.skill.skillName != action.skillName){
                    return {
                        ...user,
                        skill:{
                            skillName,
                            proficiency,
                            goalProf
                        }
                    }
                }
            })
        case 'REMOVE_SKILL':
            return state.filter(({id})=> id != action.id)
        default:
            return state;
    }
}

export default skillUsersReducer;