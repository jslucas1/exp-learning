import React from 'react';
import TeammateList from './TeammateList';

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: props.user ? props.user.userName : '',
            userEmail: props.user ? props.user.userEmail : '',
            techncial: props.user ? props.user.technical : '',
            analytical: props.user ? props.user.analytical : '',
            participation: props.user ? props.user.participation : '',
            communication: props.user ? props.user.communication : '',
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

    onTechnicalChange = (e) => {
        const technical = e.target.value;
        this.setState(() => ({technical}));
    };

    onAnalyticalChange = (e) => {
        const analytical = e.target.value;
        this.setState(() => ({analytical}));
    };

    onParticipationChange = (e) => {
        const participation = e.target.value;
        this.setState(() => ({participation}));
    };

    onCommunicationChange = (e) => {
        const communication = e.target.value;
        this.setState(() => ({communication}));
    };

    onCommentsChange = (e) => {
        const comments = e.target.value;
        this.setState(() => ({comments}));
    };

    onSubmit = (e) => {
        e.preventDefault();

        console.log('in the submit', this.state)

        if(!this.state.userName || !this.state.userEmail){
            //Set error state
            this.setState(({error: 'Please provide descritpion and amount'}));
        } else {
            //Clear the error
            this.setState(({error: ''}));

            this.props.onSubmit({
                userName: this.state.userName,
                userEmail: this.state.userEmail,
                technical: this.state.technical,
                analytical: this.state.analytical,
                participation: this.state.participation,
                communication: this.state.communication,
                comments: this.state.comments
            })

        }
    }
    render() {
        const communication = 'COMMUNICATION - is able to effectively present information and elicit information from both clients and fellow teammates';
        const participation = 'PARTICIPATION - maintains a positive attitude, is prompt and focused during work session, is timely in the completion of tasks, is willing to help other team members';
        const analytical = 'ANALYTICAL - performs independent research, thinks innovatively, asks relevant questions, understands the project and its deliverables';
        const technical = 'TECHNICAL - understands the clilents tecnical environment and needs, understands and follows technical methodology steps, and is learning about new/existing technology required for the project';
        let userID360 = {};
        console.log(this.props.user);
        if(this.props.user){
            userID360 = {userID360: this.props.user.id};
        } 
        return (
                <div>
                    <form className="form" onSubmit={this.onSubmit}>
                        {this.state.error && <p className="form__error">{this.state.error}</p>}
                        <p> Please fill out the following 360 Evaluation Form assessing the project contributions, areas for growth, and strengths for you and your teammates. This form is due no later than xxx</p>
                        <p> Name: </p>
                        <input
                            type="text"
                            placeholder="User Name"
                            autoFocus
                            className="text-input"
                            value={this.state.userName}
                            onChange={this.onUserNameChange}
                        />
                        <p> Crimson Email: </p>
                        <input
                            type="text"
                            placeholder="User Email"
                            autoFocus
                            className="text-input"
                            value={this.state.userEmail}
                            onChange={this.onUserEmailChange}
                        />
                        <p> Please review your performance: </p>
                        <p> Examples of criteria for each skill include: </p>
                        <p> {technical}</p>
                        <p> {analytical}</p>
                        <p> {communication}</p>
                        <p> {participation}</p>

                        <p> Technical Skills: </p>
                        <select 
                            onChange={this.onTechnicalChange} 
                            className="text-input" 
                            value={this.state.technical}
                            >
                            <option value = "none">Choose</option>
                            <option value = "poor">Poor</option>
                            <option value = "fair">Fair</option>
                            <option value = "satisfactory">Satisfactory</option>
                            <option value = "very-good">Very Good</option>
                            <option value = "excellent">Excellent</option>
                        </select>

                        <p> Analytical Skills: </p>
                        <select 
                            onChange={this.onAnalyticalChange} 
                            className="text-input" 
                            value={this.state.analytical}
                            >
                            <option value = "none">Choose</option>
                            <option value = "poor">Poor</option>
                            <option value = "fair">Fair</option>
                            <option value = "satisfactory">Satisfactory</option>
                            <option value = "very-good">Very Good</option>
                            <option value = "excellent">Excellent</option>
                        </select>

                        <p> Communication Skills: </p>
                        <select 
                            onChange={this.onCommunicationChange} 
                            className="text-input" 
                            value={this.state.communication}
                            >
                            <option value = "none">Choose</option>
                            <option value = "poor">Poor</option>
                            <option value = "fair">Fair</option>
                            <option value = "satisfactory">Satisfactory</option>
                            <option value = "very-good">Very Good</option>
                            <option value = "excellent">Excellent</option>
                        </select>

                        <p> Participation Skills: </p>
                        <select 
                            onChange={this.onParticipationChange} 
                            className="text-input" 
                            value={this.state.participation}
                            >
                            <option value = "none">Choose</option>
                            <option value = "poor">Poor</option>
                            <option value = "fair">Fair</option>
                            <option value = "satisfactory">Satisfactory</option>
                            <option value = "very-good">Very Good</option>
                            <option value = "excellent">Excellent</option>
                        </select>

                        <p> Additional Comments: </p>
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