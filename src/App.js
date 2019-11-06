import React from 'react';
import logo from './logo.svg';
import './App.css';

import ListUsers from './components/user/List';
import LoadMoreButton from './components/LoadMoreButton';

import { randomUserInstance } from './settings';

class App extends React.Component {
    state = {
        users: []
    };
        
    handleLoadMoreClick = () => {
        randomUserInstance.get() 
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
                        users
                    });
                    
                }
            });
    }

    render() {
        const { users } = this.state;
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
        
              <main className="container">
                  <ListUsers users={users} />
                  <LoadMoreButton onClick={this.handleLoadMoreClick} />
              </main>
            </div>
        );
    }
}

export default App;
