import React, {useState} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import ListUsers from './components/user/List';
import LoadMoreButton from './components/LoadMoreButton';
import CancelRequestButton from './components/CancelRequestButton';

import { randomUserInstance } from './settings';

function App() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [request, setRequest] = useState({});
        
    const handleLoadMoreClick = () => {
        const CancelToken = axios.CancelToken;
        const request = CancelToken.source();

        setLoading(true);
        setRequest(request);

        randomUserInstance.get('', {
            cancelToken: request.token
        }) 
            .then(res => {
                if (res.status === 200)  {
                    const user = res.data.results[0];

                    users.push({
                        id: user.id.value,
                        firstName: user.name.first,
                        lastName: user.name.last,
                        image: user.picture.large
                    });

                    setUsers(users);
                    setLoading(false);
                }
            })
            .catch(err => {
                if (axios.isCancel(err)) {
                    alert(err.message);
                } else {
                    alert(err.message)
                }

                setLoading(false);
            });
    }

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
    
          <main className="container">
              <ListUsers users={users} />
              <LoadMoreButton onClick={handleLoadMoreClick} isLoading={isLoading} />
              
              { isLoading && 
                <CancelRequestButton request={request}
                                     message="Loading new user was cancaled by the user..."

                /> 
              } 
          </main>
        </div>
    );
}

export default App;
