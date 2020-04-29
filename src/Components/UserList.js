import React from 'react';

const UserList = (props) => {
    return (
        <div className="ui link cards">
            {props.users.map((user, index) => {
                return (
                    <div className="card" key={index}>
                        <div className="image">
                            <img src={ user.avatar_url } />
                        </div>
                        <div className="content">
                            <div className="header">
                                { user.login }
                            </div>
                            <div className="meta">
                                <a>Friends</a>
                            </div>
                            <div className="description">
                                Matthew is an interior designer living in New York.
                            </div>
                        </div>
                        <div className="extra content">
                            <span className="right floated">
                                Joined in 2013
                            </span>
                            <span>
                                <i className="user icon"></i>
                                75 Friends
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default UserList;