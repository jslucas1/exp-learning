import database from '../firebase/firebase';

export const addTeammate = (teammate) => ({
    type: 'ADD_TEAMMATE',
    teammate
});

export const startAddTeammate = (teammateData = {}) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        const {       
            teammateName = '', 
            teammateEmail = '',
            userID360 = '', 
        } = teammateData;
        const teammate = {teammateName, teammateEmail, userID360};
       
        return database.ref(`teammates`).push(teammate).then((ref)=>{
            dispatch(addTeammate({
                id: ref.key,
                ...teammate
            }));
        });
    };
};

export const removeTeammate = ({id} = {}) => ({
    type: 'REMOVE_TEAMMATE',
    id
});

export const startRemoveTeammate = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`teammates/${id}`).remove().then(() => {
            dispatch(removeTeammate({id}));
        });
    }
};

export const editTeammate = (id, updates) => ({
    type: 'EDIT_TEAMMATE',
    id,
    updates
});

export const startEditTeammate = (id, updates) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`teammates/${id}`).update(updates).then(() => {
            dispatch(editTeammate(id, updates));
        });
    }
};

export const setTeammates = (teammates) => ({
    type: 'SET_TEAMMATES',
    teammates
});

export const startSetTeammates = () => {
    console.log('made it to startSetTeammates');
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`teammates`).once('value').then((snapshot) => {
            const teammates = [];

            snapshot.forEach((childSnapshot) => {
                teammates.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setTeammates(teammates));
        });
    }
};