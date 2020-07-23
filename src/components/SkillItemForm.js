import React from 'react';

export default class SkillItemForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName:props.skillUser ? props.skillUser.userName : '',
            skills:[{
                skillName: props.skillName,
                proficiency: props.proficiency,
                goalProf: props.goalProf,
                note: props.note
            }],
            error: ''
        };
    }


    onSkillsChange = (e) => {
        const skills = e.target.value;
        this.setState(() => ({...skills}));
    };

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
        console.log(note);
    }

    onSubmit = (e) => {
        e.preventDefault();

            this.setState(({error: ''}));

            this.props.onSubmit({
                skillName: this.state.skills.skillName,
                proficiency: this.state.skills.proficiency,
                goalProf: this.state.skills.goalProf,
                note: this.state.skills.note
            })

        
    }
    render() {
        return (
                    <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <select value={this.state.skills.skillName} onChange={this.onNameChange}>
                        <option value="OOP">OOP</option>
                        <option value="JavaScript">JavaScript</option>
                    </select>
                    <select value={this.state.skills.proficiency} onChange={this.onProfChange}>
                        <option>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <select value={this.state.skills.goalProf} onChange={this.onGoalProfChange}>
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
                        value={this.state.skills.note}
                        onChange={this.onNoteChange}
                    />
                    <div>
                        <button className="button">Save Skill</button>
                    </div>
                </form>
        )
    }
}