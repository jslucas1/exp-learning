import React from 'react';
import {Link} from 'react-router-dom';

const UserListItem = ({dispatch, id, userName, userEmail}) => (
        <Link className = "list-item" to= {`/edituser/${id}`}>
            <div>
                <h3 className="list-item__title">{userName}</h3>
            </div>
            <h3 className="list-item__data">{userEmail}</h3>
        </Link>
);

export default UserListItem;