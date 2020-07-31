import React from 'react';
import {Link} from 'react-router-dom';

const SkillItem = ({skillName, proficiency, goalProf, note, userID, id}) => {
    return (
        <Link className = "list-item" to= {`/editskill/${id}`}>
            <div>
                <h3 className="list-item__title">{skillName}</h3>
                
            </div>
            <div>
                 <h2 className="list-item__data">Skill Level: {proficiency}</h2>
                 <h3 className="list-item__data">Goal: {goalProf}</h3>
                 <h7>userID: {userID}</h7>
            </div>
            
        </Link>
        
    )
}

export default SkillItem;