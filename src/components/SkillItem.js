import React from 'react';

const SkillItem = ({skillName, proficiency, goalProf}) => {
    return (
        <Link className = "list-item" to= {`/editskilluser/${id}`}>
            <div>
                <h3 className="list-item__title">{skillName}</h3>
                <h2 className="list-item__data">{proficiency}</h2>
            </div>
            <h3 className="list-item__data">{goalProf}</h3>
        </Link>
        
    )
}

export default SkillItem;