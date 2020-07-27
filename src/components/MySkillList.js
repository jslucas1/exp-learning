import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SkillItem from './SkillItem';
import {getVisibleSkills} from '../selectors/skillusers'; 

export const MySkillsList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Skills List</div>
            <div className="show-for-desktop">Skills</div>
            <div className="show-for-desktop">Skills</div>
        </div>
        <div className = "list-body">
            {
                props.skills.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No skills yet</span>
                    </div>
                ) : (
                        props.skills.map((skill) => {
                        return <SkillItem key={skill.id} {...skill} {...props.userID}/>;
                        })
                    )
            }
        </div>
        <div className="page-header__actions">
                    <Link className="button" to={`/addskill/${props.userID}`}>Add Skill</Link>
        </div>
    </div>
);

const mapStateToProps = (state, props) => {
    const userID = props.userID;
    return{
        skills: getVisibleSkills(state.skills, userID),
    }
};

export default connect(mapStateToProps)(MySkillsList);
