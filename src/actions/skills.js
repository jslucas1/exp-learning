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
        const {
            skillName = '',
            proficiency = 0,
            goalProf = 0,
            note = '',
            userID = ''
        } = userData;
        const user = {skillName, proficiency, goalProf, note, userID}
        
        return database.ref(`Skills`).push(user).then((ref)=>{
            dispatch(addSkill({
                id: ref.key,
                ...user,
                
            }));
        });
    };
};

export const startEditSkill = (id, updates) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`Skills/${id}`).update(updates).then(() => {
            console.log('updates:', updates);
            dispatch(editSkill(id, updates));
        });
    }
};

export const editSkill = ({userID, updates}) => ({
    type: 'EDIT_SKILL',
    userID,
    updates
});

export const startRemoveSkill = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`Skills/${id}`).remove().then(() => {
            dispatch(removeSkills({id}));
        });
    }
};

export const removeSkill = ({id}) => ({
    type: 'REMOVE_SKILL',
    id
});

export const setSkills = (skills) => ({
    type: 'SET_SKILLS',
    skills
});

export const startSetSkills = () => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`Skills`).once('value').then((snapshot) => {
            const skills = [];

            snapshot.forEach((childSnapshot) => {
                skills.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setSkills(skills));
        });
    }
};