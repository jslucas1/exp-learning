import database from '../firebase/firebase';

export const addSkillUser = (user) => ({
    type: 'ADD_SKILL_USER',
    user
});

export const startAddSkillUser = (userData = {}) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        const {       
            userName = '', 
            userEmail = '' 
        } = userData;
        const skillUser = {userName, userEmail};
        
        return database.ref(`skills`).push(skillUser).then((ref)=>{
            dispatch(addSkillUser({
                id: ref.key,
                ...skillUser
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
        const uid=getState().auth.uid;
        return database.ref(`skills/${id}`).remove().then(() => {
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
        return database.ref(`skills/${id}`).update(updates).then(() => {
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
        const uid=getState().auth.uid;
        return database.ref(`skills`).once('value').then((snapshot) => {
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