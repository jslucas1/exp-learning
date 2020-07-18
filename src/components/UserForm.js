import React from 'react';

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: props.user ? props.user.userName : '',
            userEmail: props.user ? props.user.userEmail : '',
            error: ''
        };
    }


    onUserNameChange = (e) => {
        const userName = e.target.value;
        this.setState(() => ({userName}));
    };
    
    onUserEmailChange = (e) => {
        const userEmail = e.target.value;
        this.setState(() => ({userEmail}));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.userName || !this.state.userEmail){
            //Set error state
            this.setState(({error: 'Please provide descritpion and amount'}));
        } else {
            //Clear the error
            this.setState(({error: ''}));

            this.props.onSubmit({
                userName: this.state.userName,
                userEmail: this.state.userEmail
            })

        }
    }
    render() {
        return (
                    <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="User Name"
                        autoFocus
                        className="text-input"
                        value={this.state.userName}
                        onChange={this.onUserNameChange}
                    />
                    <input
                        type="text"
                        placeholder="User Email"
                        autoFocus
                        className="text-input"
                        value={this.state.userEmail}
                        onChange={this.onUserEmailChange}
                    />
                    <div>
                        <button className="button">Save User</button>
                    </div>
                </form>
        )
    }
}