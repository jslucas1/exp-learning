import moment from 'moment';
//Get Visible Users
export const getVisibleSkillUsers = (skillUsers) => {
    return skillUsers.sort((a, b) => {
            return a.userName < b.userName ? 1 : -1;
    });
}

export const getVisibleSkills = (Skills, skillUsers) => {
    return Skills.filter((skill) => {
        skillUsers.filter((user) => {
            if (skill.uid === user.uid){
                return {...skill};
            }
        })
    })

}



