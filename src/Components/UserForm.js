import React, { Component } from 'react'

class UserForm extends Component {
    render() {
        return (
            <div className="ui Segment">
               <div className="ui form">
                    <div className="fields">
                        <div className="field">
                            <input type="text" placeholder="Full Name" />
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Email Address" />
                        </div>
                        <div className="field">
                            <button className="ui positive basic button">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserForm;
