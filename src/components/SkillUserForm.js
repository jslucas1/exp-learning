import React from 'react';
import MySkillList from './MySkillList';

export default class SkillUserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: props.skillUser ? props.skillUser.userName : '',
            userEmail: props.skillUser ? props.skillUser.userEmail : '',
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
            this.setState(({error: 'Please provide name and email'}));
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
        let userID = {};
        console.log(this.props.user);
        if(this.props.user){
            userID = {userID: this.props.user.id};
        } 
        return (
            <div>
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
                        <button className="button">Save Skill User</button>
                    </div>
                </form>
                <div>
                    <MySkillList {...userID}/>
                </div>
            </div>
                    
        )
    }
}