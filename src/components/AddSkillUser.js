import React from 'react';
import SkillUserForm from './SkillUserForm';
import {connect} from 'react-redux';
import {startAddSkillUser}  from '../actions/skillusers';

export class AddSkillUserPage extends React.Component {
    onSubmit = (skillUser) => {
        this.props.startAddSkillUser(skillUser);
        this.props.history.push('/dashboardskilluser');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Skill User</h1>
                    </div>
                </div>
                <div className="content-container">
                    <SkillUserForm 
                    onSubmit = {this.onSubmit}
                    />
                </div>
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddSkillUser: (skillUser) => dispatch(startAddSkillUser(skillUser))
    };
};

export default connect(undefined, mapDispatchToProps)(AddSkillUserPage);