import moment from 'moment';
//Get Visible Users
const getVisibleSkillUsers = (skillUsers) => {
    return skillUsers.sort((a, b) => {
            return a.userName < b.userName ? 1 : -1;
    });
}

export default getVisibleSkillUsers;