import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SkillItem from './SkillItem';
import selectSkillUsers from '../selectors/skillusers';

export const MySkillsList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Skills List</div>
            <div className="show-for-desktop">Skills</div>
            <div className="show-for-desktop">Skills</div>
        </div>
        <div className = "list-body">
            {
                props.skillUsers.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No skills yet</span>
                    </div>
                ) : (
                        props.skillUsers.map((skillUser) => {
                        return <SkillItem key={skillUser.id} {...skillUser} />;
                        })
                    )
            }
        </div>
        <div className="page-header__actions">
                    <Link className="button" to="/addskill">Add Skill</Link>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return{
        skillUsers: selectSkillUsers(state.skillUsers),
    }
};

export default connect(mapStateToProps)(MySkillsList);