import database from '../firebase/firebase';
import {v4 as uuidv4} from 'uuid';
import skillsReducer from '../reducers/skills';



export const addSkillUser = ({...skillUser}) => ({
    type: 'ADD_SKILL_USER',
    ...skillUser
});

export const startAddSkillUser = (userData = {}) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        const {       
            userName = '', 
            userEmail = '' 
        } = userData;
        const skillUser = {userName, userEmail, uid};
        
        return database.ref(`SkillUsers`).push(skillUser).then((ref)=>{
            dispatch(addSkillUser({
                ...skillUser,
            }));
        });
    };
};

export const removeSkillUser = ({id} = {}) => ({
    type: 'REMOVE_SKILL_USER',
    id
});

export const startRemoveSkillUser = ({id} = {}) => {
    return (dispatch, getState) => {
        console.log('in startRemove and the id is', id);
        const uid=getState().auth.uid;
        return database.ref(`SkillUsers/${id}`).remove().then(() => {
            dispatch(removeSkillUser({id}));
        });
    }
};

export const editSkillUser = (id, updates) => ({
    type: 'EDIT_SKILL_USER',
    id,
    updates
});

export const startEditSkillUser = (id, updates) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`SkillUsers/${id}`).update(updates).then(() => {
            dispatch(editSkillUser(id, updates));
        });
    }
};

export const setSkillUsers = (skillUsers) => ({
    type: 'SET_SKILL_USERS',
    skillUsers
});

export const startSetSkillUsers = () => {
    console.log('made it to startSetUsers');
    return (dispatch, getState) => {
        const uid=getState().auth.uid
        return database.ref(`SkillUsers`).once('value').then((snapshot) => {
            const skillUsers = [];


            snapshot.forEach((childSnapshot) => {
                skillUsers.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setSkillUsers(skillUsers));
        });
    }
};

