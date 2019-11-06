import React from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import ListUsers from './components/user/List';
import LoadMoreButton from './components/LoadMoreButton';
import CancelRequestButton from './components/CancelRequestButton';

import { RANDOM_USER_URL } from './settings';

class App extends React.Component {
    state = {
        users: [],
        isLoading: false,
        requestInfo: {}
    };
        
    handleLoadMoreClick = () => {
        const CancelToken = axios.CancelToken;
        const request = CancelToken.source();

        this.setState({
            isLoading: true,
            request
        });

        axios.get(RANDOM_USER_URL, {
            cancelToken: request.token
        }) 
            .then(res => {
                if (res.status === 200)  {
                    const user = res.data.results[0];
                    const { users } = this.state;

                    users.push({
                        id: user.id.value,
                        firstName: user.name.first,
                        lastName: user.name.last,
                        image: user.picture.large
                    });
                    this.setState({
                        isLoading: false,
                        users
                    });
                    
                }
            })
            .catch(err => {
                if (axios.isCancel(err)) {
                    alert(err.message);
                } else {
                    alert(err.message)
                }

                this.setState({
                    isLoading: false
                });
            });
    }

    render() {
        const { users, isLoading, request } = this.state;
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
        
              <main className="container">
                  <ListUsers users={users} />
                  <LoadMoreButton onClick={this.handleLoadMoreClick} isLoading={isLoading} />
                  
                  { isLoading && 
                    <CancelRequestButton request={request}
                                         message="Loading new user was cancaled by the user..."

                    /> 
                  } 
              </main>
            </div>
        );
    }
}

export default App;
