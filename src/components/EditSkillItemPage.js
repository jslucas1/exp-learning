import React from 'react';
import {connect} from 'react redux';
import RemoveSkill from '../actions/skillusers';
import EditSkill from '../actions/skillusers';


export class EditSkillItemPage extends React.Component{


    render(){
        return(
            <div>
                <div className = "page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Skill</h1>
                    </div>
                </div>
                <div className="content-container">
                    <SkillListForm
                        skillUser={this.props.skillUser}
                        onSubmit = {this.onSubmit}
                    />
                </div>

            </div>
        )
    }
}