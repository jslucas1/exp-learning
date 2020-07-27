import database from '../firebase/firebase';

export const addUser = (user) => ({
    type: 'ADD_USER',
    user
});

export const startAddUser = (userData = {}) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        const {       
            userName = '', 
            userEmail = '',
            technical = '',
            analytical = '',
            participation = '',
            communication = '',
            comments = '' 
        } = userData;
        const user = {userName, userEmail, technical, analytical, participation, communication, comments};
        
        return database.ref(`users`).push(user).then((ref)=>{
            dispatch(addUser({
                id: ref.key,
                ...user
            }));
        });
    };
};

export const removeUser = ({id} = {}) => ({
    type: 'REMOVE_USER',
    id
});

export const startRemoveUser = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`users/${id}`).remove().then(() => {
            dispatch(removeUser({id}));
        });
    }
};

export const editUser = (id, updates) => ({
    type: 'EDIT_USER',
    id,
    updates
});

export const startEditUser = (id, updates) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`users/${id}`).update(updates).then(() => {
            dispatch(editUser(id, updates));
        });
    }
};

export const setUsers = (users) => ({
    type: 'SET_USERS',
    users
});

export const startSetUsers = () => {
    console.log('made it to startSetUsers');
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`users`).once('value').then((snapshot) => {
            const users = [];

            snapshot.forEach((childSnapshot) => {
                users.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setUsers(users));
        });
    }
};