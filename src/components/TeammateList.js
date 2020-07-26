import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TeammateListItem from './TeammateListItem';
import selectTeammates from '../selectors/teammates';

export const TeammateList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Teammates</div>
            <div className="show-for-desktop">Teammate Name</div>
            <div className="show-for-desktop">Teammate Email</div>
        </div>
        <div className = "list-body">
            {
                props.teammates.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Teammates</span>
                    </div>
                ) : (
                        props.teammates.map((teammate) => {
                        return <TeammateListItem key={teammate.id} {...teammate} {...props.userID360} />;
                        })
                    )
            }
        </div>
        <div className="page-header__actions">
                    <Link className="button" to="/createteammate/${state.auth.id}">Add Teammate</Link>
        </div>
        
    </div>
);

const mapStateToProps = (state, props) => {

    const userID360 = props.userID360
    return{
        teammates: selectTeammates(userID360, state.teammates),
    }
};

export default connect(mapStateToProps)(TeammateList);