import React from 'react';
import database from '../firebase/firebase';

export default class SkillItemForm extends React.Component {
    constructor(props) {
        super(props);



        this.state = {
                
                skillName: props.skill ? props.skill.skillName : '',
                proficiency: props.skill ? props.skill.proficiency : 1,
                goalProf: props.skill ? props.skill.goalProf : 2,
                note: props.skill ? props.skill.note : '',
                userID: props.userID,
                error: ''
        };
    }



    //onSkillsChange = (e) => {
    //    const skills = e.target.value;
    //    this.setState(() => ({...skills}));
    //};

    onNameChange = (e) => {
        const skillName = e.target.value;
        this.setState(() => ({skillName}));
    };
    onProfChange = (e) => {
        const proficiency = e.target.value;
        this.setState(() => ({proficiency}));
    };

    onGoalProfChange = (e) => {
        const goalProf = e.target.value;
        this.setState(() => ({goalProf}));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=> ({note}));
    }

    onSubmit = (e) => {
        e.preventDefault();

            this.setState(({error: ''}));

            console.log('Name:', this.state.skillName, ' Prof:', this.state.proficiency, ' goal:', this.state.goalProf, ' note:', this.state.note, ' userID:', this.state.userID);

            this.props.onSubmit({
                skillName: this.state.skillName,
                proficiency: this.state.proficiency,
                goalProf: this.state.goalProf,
                note: this.state.note,
                userID: this.state.userID
            })

        
    }
    render() {
        return (
                    <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input 
                        type="text"
                        placeholder="Skill"
                        autoFocus
                        className="text-input"
                        value={this.state.skillName} 
                        onChange={this.onNameChange}>
                    </input>
                    <select value={this.state.proficiency} onChange={this.onProfChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <select value={this.state.goalProf} onChange={this.onGoalProfChange}>
                        <option>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Note"
                        autoFocus
                        className="text-input"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <div>
                        <button className="button">Save Skill</button>
                    </div>
                </form>
        )
    }
}