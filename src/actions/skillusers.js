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
        
        return database.ref(`skills/${uid}`).push(user).then((ref)=>{
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
        return database.ref(`skills/${id}`).remove().then(() => {
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
        return database.ref(`skills/${id}`).update(updates).then(() => {
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
        return database.ref(`skills`).once('value').then((snapshot) => {
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