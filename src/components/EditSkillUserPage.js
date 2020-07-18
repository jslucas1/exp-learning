import React from 'react';
import {connect} from 'react-redux';
import SkillUserForm from './SkillUserForm';
import {startEditSkillUser, startRemoveSkillUser} from '../actions/skillusers';

export class EditSkillUserPage extends React.Component {
    onSubmit = (skillUser) => {
    this.props.startEditSkillUser(this.props.skillUser.id, skillUser);
    this.props.history.push('/dashboardskilluser');    
    }

    onRemove = () => {
        this.props.startRemoveSkillUser({id: this.props.skillUser.id});
        this.props.history.push('/dashboardskilluser'); 
    }
    render() {
        return (
            <div>
                <div className = "page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Your Skills</h1>
                    </div>
                </div>
                <div className="content-container">
                    <SkillUserForm
                        skillUser={this.props.skillUser}
                        onSubmit = {this.onSubmit}
                    />
                    <button className="button button--secondary" onClick = {this.onRemove}>Remove Skill User</button>
                </div>

            </div>
        );

    }
}

const mapStateToProps = (state, props) => {
    return {
        skillUser: state.skillUsers.find((skillUser) => skillUser.id === props.match.params.id)
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditSkillUser: (id, skillUser) => dispatch(startEditSkillUser(id, skillUser)),
        startRemoveSkillUser: (data) => dispatch(startRemoveSkillUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSkillUserPage);