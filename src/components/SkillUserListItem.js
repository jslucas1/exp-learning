import React from 'react';
import {Link} from 'react-router-dom';
import startRemoveSkillUser from '../actions/skillusers';

const SkillUserListItem = ({dispatch, id, userName, userEmail}) => (
    <div>

        <Link className = "list-item" to= {`/editskilluser/${id}`}>
            <div>
                <h3 className="list-item__title">{userName}</h3>
            </div>
            <div>
                <h3 className="list-item__data">{userEmail}</h3>
            </div>
        </Link>
        

    </div>
        
);

export default SkillUserListItem;