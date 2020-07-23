import React from 'react';

const SkillItem = ({skillName, proficiency, goalProf}) => {
    return (
        <div>
            <div>
                <h3>{skillName}</h3>
            </div>
            <div>
                <li>Proficiency: {proficiency}</li>
                <li>Goal Proficency: {goalProf}</li>
            </div>
        </div>
        
    )
}

export default SkillItem;