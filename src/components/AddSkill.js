import React from 'react';
import SkillItemForm from './SkillItemForm';
import startAddSkill from '../actions/skillusers';
import {connect} from 'react-redux';


export class AddSkillPage extends React.Component {
    onSubmit = (user) => {
        this.props.startAddSkill(user);
        this.props.history.push('/dashboardskilluser');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Skill</h1>
                    </div>
                </div>
                <div className="content-container">
                    <SkillItemForm 
                    onSubmit = {this.onSubmit}
                    />
                </div>
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddSkill: (user) => dispatch(startAddSkill(user))
    };
};

export default connect(undefined, mapDispatchToProps)(AddSkillPage);