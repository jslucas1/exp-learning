import database from '../firebase/firebase';
import {v4 as uuidv4} from 'uuid';

export const addSkill = (refKey, ...skill) => ({
    type: 'ADD_SKILL',
    refKey,
    ...skill
});
export const startAddSkill = (userData = {}) => {
    return (dispatch, getState) => {
        const uuid = uuidv4();
        const uid=getState().auth.uid;
        const user = {...userData, uid}
        
        return database.ref(`Skills/${uuid}`).push(user).then((ref)=>{
            dispatch(addSkill(
                ref.key,
                ...user
            ));
        });
    };
};

export const editSkill = ({...skillUser},{skillName, updates}) => ({
    type: 'EDIT_SKILL',
    ...skillUser,
    skillName,
    updates
});

export const removeSkill = ({skillUser},{skillName}) => ({
    type: 'REMOVE_SKILL',
    ...skillUser,
    skillName
});