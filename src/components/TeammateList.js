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
                        props.users.map((teammate) => {
                        return <TeammateListItem key={teammate.id} {...teammate} />;
                        })
                    )
            }
        </div>
        <div className="page-header__actions">
                    <Link className="button" to="/createteammate/${state.auth.id}">Add Teammate</Link>
        </div>
        
    </div>
);

const mapStateToProps = (state) => {
    const uid=state.auth.uid;
    return{
        teammates: selectTeammates(uid, state.teammates),
    }
};

export default connect(mapStateToProps)(TeammateList);