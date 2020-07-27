
//Get Visible Teammates
const getVisibleTeammates = (userID360, teammates) => {
    return teammates.filter((teammate) => {
        let isTeammate = false;
        if(userID360 && userID360===teammate.userID360){
            isTeammate = true;
        }  
        return isTeammate;
    }).sort((a, b) => {
            return a.teammateName < b.teammateName ? 1 : -1
    });
}

export default getVisibleTeammates;

