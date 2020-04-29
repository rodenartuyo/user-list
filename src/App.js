import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './Components/NavBar';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';

class App extends Component {

    //state ?
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filterUsers: [] // 1
        }
    }

    componentWillMount() {
        axios.get('https://api.github.com/users').then(response => {
            // set the result in state users
            this.setState({ users: response.data });
        }).catch( err => {
            console.log(err)
        })
    }

    // will filter by their login name;
    filterUser = (query) => {
        const filterUsers = this.state.users.filter((user) => {
            return user.login.includes(query);
        });

        this.setState({filterUsers: filterUsers});
    }

    render() {
        return (
            <div className="ui container">
                <NavBar 
                   filterSearch={ this.filterUser }
                />
                <UserForm />
                <UserList 
                    users={ this.state.filterUsers.length !== 0 ? this.state.filterUsers : this.state.users }
                />
            </div>
        )
    }
}

export default App;
