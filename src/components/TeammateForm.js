import React from 'react';

export default class TeammateForm extends React.Component {
    constructor(props) {
        super(props);
        console.log('in the constructor', props.userID360);
        this.state = {
            teammateName: props.teammate ? props.teammate.teammateName : '',
            teammateEmail: props.teammate ? props.teammate.teammateEmail : '',
            userID360: props.teammate ? props.teammate.userID360 : props.userID360,
            technical: props.teammate ? props.teammate.technical: '',
            analytical: props.teammate ? props.teammate.analytical: '',
            communication: props.teammate ? props.teammate.communication: '',
            participation: props.teammate ? props.teammate.participation: '',
            strengths: props.teammate ? props.teammate.strengths: '',
            growth: props.teammate ? props.teammate.growth: '',
            comments: props.teammate ? props.teammate.comments: '',
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
    onTechnicalChange = (e) => {
        const technical = e.target.value;
        this.setState(() => ({technical}));
    }
    onAnalyticalChange = (e) => {
        const analytical = e.target.value; 
        this.setState(() => ({analytical}));
    }
    onCommunicationChange = (e) => {
        const communication = e.target.value;
        this.setState(() => ({communication}));
    }
    onParticipationChange = (e) => {
        const participation = e.target.value;
        this.setState(() => ({participation}));
    }
    onStrengthsChange = (e) => {
        const strengths = e.target.value;
        this.setState(() => ({strengths}));
    }
    onGrowthChange = (e) => {
        const growth = e.target.value;
        this.setState(() => ({growth}));
    }
    onCommentsChange = (e) => {
        const comments = e.target.value;
        this.setState(() => ({comments}));
    }
    

    onSubmit = (e) => {
        e.preventDefault();

        console.log('in the submit', this.state.userID360);

        if(!this.state.teammateName || !this.state.teammateEmail){
            //Set error state
            this.setState(({error: 'Please provide a teammate name and email'}));
        } else {
            //Clear the error
            this.setState(({error: ''}));

            this.props.onSubmit({
                teammateName: this.state.teammateName,
                teammateEmail: this.state.teammateEmail,
                technical: this.state.technical,
                analytical: this.state.analytical,
                communication: this.state.communication,
                participation: this.state.participation,
                strengths: this.state.strengths,
                growth: this.state.growth,
                comments: this.state.comments,
                userID360: this.state.userID360
            })

        }
    }
    render() {
        const communication = 'COMMUNICATION - is able to effectively present information and elicit information from both clients and fellow teammates';
        const participation = 'PARTICIPATION - maintains a positive attitude, is prompt and focused during work session, is timely in the completion of tasks, is willing to help other team members';
        const analytical = 'ANALYTICAL - performs independent research, thinks innovatively, asks relevant questions, understands the project and its deliverables';
        const technical = 'TECHNICAL - understands the clilents tecnical environment and needs, understands and follows technical methodology steps, and is learning about new/existing technology required for the project';
        return (
                    <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    
                    <p> Please enter your teammates name to review: </p>
                    <input
                        type="text"
                        placeholder="Teammate Name"
                        autoFocus
                        className="text-input"
                        value={this.state.teammateName}
                        onChange={this.onTeammateNameChange}
                    />
                    <p> Please enter your teammates crimson email</p>
                    <input
                        type="text"
                        placeholder="Teammate Email"
                        autoFocus
                        className="text-input"
                        value={this.state.teammateEmail}
                        onChange={this.onTeammateEmailChange}
                    />
                    <p> Examples for criteria for each skill includes:</p>
                    <p> {technical}</p>
                    <p> {analytical}</p>
                    <p> {communication}</p>
                    <p> {participation}</p>
                    <p> Technical Skills: </p>
                    <select 
                        onChange = {this.onTechnicalChange}
                        value = {this.state.technical}
                        className = "text-input">
                    <option value = "none"> Choose </option>
                    <option value = "poor"> Poor</option>
                    <option value = "fair"> Fair</option>
                    <option value = "satisfactory"> Satisfactory </option>
                    <option value = "very-good"> Very Good </option>
                    <option value = "excellent"> Excellent</option>
                    </select>

                    <p> Analytical Skills: </p>
                    <select 
                        onChange = {this.onAnalyticalChange}
                        value = {this.state.analytical}
                        className = "text-input">
                    <option value = "none"> Choose </option>
                    <option value = "poor"> Poor</option>
                    <option value = "fair"> Fair</option>
                    <option value = "satisfactory"> Satisfactory </option>
                    <option value = "very-good"> Very Good </option>
                    <option value = "excellent"> Excellent</option>
                    </select>

                    <p> Communication Skills: </p>
                    <select 
                        onChange = {this.onCommunicationChange}
                        value = {this.state.communication}
                        className = "text-input">
                    <option value = "none"> Choose </option>
                    <option value = "poor"> Poor</option>
                    <option value = "fair"> Fair</option>
                    <option value = "satisfactory"> Satisfactory </option>
                    <option value = "very-good"> Very Good </option>
                    <option value = "excellent"> Excellent</option>
                    </select>

                    <p> Participation Skills: </p>
                    <select 
                        onChange = {this.onParticipationChange}
                        value = {this.state.participation}
                        className = "text-input">
                    <option value = "none"> Choose </option>
                    <option value = "poor"> Poor</option>
                    <option value = "fair"> Fair</option>
                    <option value = "satisfactory"> Satisfactory </option>
                    <option value = "very-good"> Very Good </option>
                    <option value = "excellent"> Excellent</option>
                    </select>

                    <p> In the free responce sections, please provide as much detail as you see fit. If you do not 
                    have any input, please enter "n/a" </p>

                    <p> What strengths does your teammate bring to your team?</p>
                    <input 
                        type = "text"
                        className = "text-input"
                        name = "strengths"
                        value = {this.state.strengths}
                        onChange = {this.onStrengthsChange}
                    />

                    <p> What areas for growth exist? </p>
                    <input 
                        type = "text"
                        className = "text-input"
                        name = "growth"
                        value = {this.state.growth}
                        onChange = {this.onGrowthChange}
                    />

                    <p> Additional Comments: </p>
                    <input 
                        type = "text"
                        className = "text-input"
                        name = "comments"
                        value = {this.state.comments}
                        onChange = {this.onCommentsChange}
                    />
                    <div>
                        <button className="button">Save Teammate</button>
                    </div>
                </form>
        )
    }
}