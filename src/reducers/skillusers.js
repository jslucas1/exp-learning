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