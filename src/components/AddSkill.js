import React from 'react';
import SkillItemForm from './SkillItemForm';
import {startAddSkill} from '../actions/skills';
import {connect} from 'react-redux';


export class AddSkillPage extends React.Component {
    onSubmit = (skill) => {
        this.props.startAddSkill(skill);
        this.props.history.push('/dashboardskilluser');
    };
    render() {
        let userID = this.props.match.params.userID;
        console.log('on the add skill page this should be the user ID', userID)
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
                    userID={userID}
                    />
                </div>
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddSkill: (skill) => dispatch(startAddSkill(skill))
    };
};

export default connect(undefined, mapDispatchToProps)(AddSkillPage);