import React from 'react';
import database from '../firebase/firebase';

export default class SkillItemForm extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
                
                skillName: props.skillName,
                proficiency: 1,
                goalProf: 1,
                note: props.note,
                uid: '',
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
        console.log(skillName)
    };
    onProfChange = (e) => {
        const proficiency = e.target.value;
        this.setState(() => ({proficiency}));
        console.log(proficiency)
    };

    onGoalProfChange = (e) => {
        const goalProf = e.target.value;
        this.setState(() => ({goalProf}));
        console.log(goalProf)
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=> ({note}));
        console.log(note);
    }

    onSubmit = (e) => {
        e.preventDefault();

            this.setState(({error: ''}));

            console.log(this.state.skillName);
            console.log(this.state.proficiency);
            

            this.props.onSubmit({skill:{
                skillName: this.state.skillName,
                proficiency: this.state.proficiency,
                goalProf: this.state.goalProf,
                note: this.state.note,
                uid: ''
            }})

        
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