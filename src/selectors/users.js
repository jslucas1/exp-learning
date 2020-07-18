import moment from 'moment';
//Get Visible Users
const getVisibleUsers = (users) => {
    return users.sort((a, b) => {
            return a.userName < b.userName ? 1 : -1;
    });
}

export default getVisibleUsers;