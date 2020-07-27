const skillsReducer = (state=[], action) => {

    switch(action.type){
        case 'ADD_SKILL': 
            return [...state, action.skill];
        case 'EDIT_SKILL':
            return state.map((skill) => {
                if (skill.id === action.id){
                    return {
                        ...skill,
                        ...action.updates
                    }
                }
            })
        case 'REMOVE_SKILL':
            state.filter(({id}) => id != action.id);
        case 'SET_SKILLS':
                return action.skills;
        default: return state;
    }

}

export default skillsReducer;