import React, { Component } from 'react'

class NavBar extends Component {

    handleSearch = e => {
        
        let query = e.currentTarget.value;
        
        if (query) {
            this.props.filterSearch(query);
        }
    }

    render() {
        return (
            <div className="ui secondary pointing menu">
                <a className="active item" href="/">
                    Users
                </a>
                <a className="item" href="/">
                    Messages
                </a>
                <a className="item" href="/">
                    Friends
                </a>
                <div className="right menu">
                    <div className="item">
                        <div className="ui transparent icon input">
                            <input 
                                type="text" 
                                placeholder="Search..."
                                onChange={ this.handleSearch }
                            />
                            <i className="search link icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;