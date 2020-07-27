import moment from 'moment';
//Get Visible Users
export const getVisibleSkillUsers = (skillUsers) => {
    return skillUsers.sort((a, b) => {
            return a.userName < b.userName ? 1 : -1;
    });
}

export const getVisibleSkills = (skills, userID) => {
    return skills.filter((skill) => {
        let isSkill = false;
        if(userID && userID===skill.userID){
            isSkill = true;
        }  
        return isSkill;
    }).sort((a, b) => {
            return a.skillName < b.skillName ? 1 : -1
    });
}




