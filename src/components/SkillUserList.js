import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SkillUserListItem from './SkillUserListItem';
import {getVisibleSkillUsers} from '../selectors/skillusers';

export const SkillUserList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Skill Users</div>
            <div className="show-for-desktop">User</div>
            <div className="show-for-desktop">User Email</div>
        </div>
        <div className = "list-body">
            {
                props.skillUsers.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Users in the Skill Tracker App</span>
                    </div>
                ) : (
                        props.skillUsers.map((skillUser) => {
                        return <SkillUserListItem key={skillUser.uid} {...skillUser} />;
                        })
                    )
            }
        </div>
        <div className="page-header__actions">
                    <Link className="button" to="/createskilluser">Add Skill User</Link>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return{
        skillUsers: getVisibleSkillUsers(state.skillUsers),
    }
};

export default connect(mapStateToProps)(SkillUserList);

