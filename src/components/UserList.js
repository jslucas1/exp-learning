import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import UserListItem from './UserListItem';
import selectUsers from '../selectors/users';
import TeammateList from './TeammateList';

export const UserList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Users</div>
            <div className="show-for-desktop">User Name</div>
            <div className="show-for-desktop">User Email</div>
        </div>
        <div className = "list-body">
            {
                props.users.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Users</span>
                    </div>
                ) : (
                        props.users.map((user) => {
                        return <UserListItem key={user.id} {...user} />;
                        })
                    )
            }
        </div>
        <div className="page-header__actions">
                    <Link className="button" to="/createuser">Add User</Link>
        </div>
        <TeammateList /> 
    </div>
);

const mapStateToProps = (state) => {
    return{
        users: selectUsers(state.users),
    }
};

export default connect(mapStateToProps)(UserList);