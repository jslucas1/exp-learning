import database from '../firebase/firebase';

export const addSkillUser = (user) => ({
    type: 'ADD_USER',
    user
});

export const startAddSkillUser = (userData = {}) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        const {       
            userName = '', 
            userEmail = '' 
        } = userData;
        const user = {userName, userEmail};
        
        return database.ref(`SkillUsers/${uid}`).push(user).then((ref)=>{
            dispatch(addSkillUser({
                id: ref.key,
                ...user
            }));
        });
    };
};

export const removeSkillUser = ({id} = {}) => ({
    type: 'REMOVE_USER',
    id
});

export const startRemoveSkillUser = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`SkillUsers/${uid}`).remove().then(() => {
            dispatch(removeSkillUser({id}));
        });
    }
};

export const editSkillUser = (id, updates) => ({
    type: 'EDIT_USER',
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

export const setSkillUsers = (users) => ({
    type: 'SET_USERS',
    users
});

export const startSetSkillUsers = () => {
    console.log('made it to startSetUsers');
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`SkillUsers`).once('value').then((snapshot) => {
            const users = [];

            snapshot.forEach((childSnapshot) => {
                users.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setSkillUsers(users));
        });
    }
};

export const addSkill = (userID,{skillName, proficiency, goalProf}) => ({
    type: 'ADD_SKILL',
    userID,
    skillName,
    proficiency,
    goalProf
});
export const startAddSkill = (userData = {}) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        const {       
            userName = '', 
            skill:{
            skillName='',
            proficiency= 0,
            goalProf=0,
            note= '',
            }
        } = userData;
        const user = {userName, skill:{skillName, proficiency, goalProf, note}};
        
        return database.ref(`SkillUsers/${uid}/skill`).push(user).then((ref)=>{
            dispatch(addSkill({
                id: ref.key,
                ...user
            }));
        });
    };
};

export const editSkill = (userID,{skillName, updates}) => ({
    type: 'EDIT_SKILL',
    userID,
    skillName,
    updates
});

export const removeSkill = (userID,{skillName}) => ({
    type: 'REMOVE_SKILL',
    userID,
    skillName
});