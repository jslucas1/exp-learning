import React from 'react';

export default class TeammateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teammateName: props.teammate ? props.teammate.teammateName : '',
            teammateEmail: props.teammate ? props.teammate.teammateEmail : '',
            error: ''
        };
    }


    onTeammateNameChange = (e) => {
        const teammateName = e.target.value;
        this.setState(() => ({teammateName}));
    };
    
    onTeammateEmailChange = (e) => {
        const teammateEmail = e.target.value;
        this.setState(() => ({teammateEmail}));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.teammateName || !this.state.teammateEmail){
            //Set error state
            this.setState(({error: 'Please provide descritpion and amount'}));
        } else {
            //Clear the error
            this.setState(({error: ''}));

            this.props.onSubmit({
                teammateName: this.state.teammateName,
                teammateEmail: this.state.teammateEmail
            })

        }
    }
    render() {
        return (
                    <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Teammate Name"
                        autoFocus
                        className="text-input"
                        value={this.state.teammateName}
                        onChange={this.onTeammateNameChange}
                    />
                    <input
                        type="text"
                        placeholder="Teammate Email"
                        autoFocus
                        className="text-input"
                        value={this.state.teammateEmail}
                        onChange={this.onTeammateEmailChange}
                    />
                    <div>
                        <button className="button">Save Teammate</button>
                    </div>
                </form>
        )
    }
}