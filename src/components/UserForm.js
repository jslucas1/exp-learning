import React from 'react';
import TeammateList from './TeammateList';

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: props.user ? props.user.userName : '',
            userEmail: props.user ? props.user.userEmail : '',
            techRate: props.user ? props.user.techRate : '',
            comments: props.user ? props.user.comments : '',
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

    onTechRateChange = (e) => {
        const techRate = e.target.value;
        this.setState(() => ({techRate}));
    };

    onCommentsChange = (e) => {
        const comments = e.target.value;
        this.setState(() => ({comments}));
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
                userEmail: this.state.userEmail,
                techRate: this.state.techRate,
                comments: this.state.comments
            })

        }
    }
    render() {
        let userID360 = {};
        if(this.props.user){
            userID360 = {userID360: this.props.user.id};
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
                        <select onChange={this.onTechRateChange} className="text-input" value={this.state.techRate}>
                            <option value = "1">Consistently Exceeds Expectations</option>
                            <option value = "2">Often Exceeds Expectations</option>
                            <option value = "3">Meets Expecatation</option>
                            <option value = "4">Does Not Meet Expectations</option>
                        </select>
                        <textarea
                            placeholder="Add additional comments"
                            className="textarea"
                            value={this.state.comments}
                            onChange={this.onCommentsChange}
                        >
                        </textarea>
                        <div>
                            <button className="button">Save User</button>
                        </div>
                    </form>
                    <div>
                        <TeammateList {...userID360}/> 
                    </div>
                </div>
        )


    }
}