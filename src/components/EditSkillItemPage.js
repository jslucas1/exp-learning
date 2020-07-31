import React from 'react';
import SkillItemForm from './SkillItemForm';
import {startEditSkill} from '../actions/skills';
import {connect} from 'react-redux';


export class EditSkillItemPage extends React.Component {
    onSubmit = (skill) => {
        console.log(this.props.match.params.id);
        this.props.startEditSkill(this.props.match.params.id, skill);
        this.props.history.push('/dashboardskilluser');
    };
    render() {
        let userID = this.props.match.params.id;
        console.log('on the edit skill page this should be the user ID', userID)
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Skill</h1>
                    </div>
                </div>
                <div className="content-container">
                    <SkillItemForm 
                    onSubmit = {this.onSubmit}
                    skill={this.props.skill}
                    userID={userID}
                    />
                </div>
            </div>
        )

    }
}
const mapStateToProps = (state, props) => {
    return {
        skill: state.skills.find((skill) => skill.userID === props.match.params.id)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditSkill: (userID, skill) => dispatch(startEditSkill(userID, skill))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSkillItemPage);