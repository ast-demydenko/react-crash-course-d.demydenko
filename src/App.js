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
    const [appTheme, setAppTheme] = useState('App default-app');
        
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

    const handleChangeTheme = () => {
        ~appTheme.indexOf('custom-app')
            ? setAppTheme('App default-app')
            : setAppTheme('App custom-app')
    }

    return (
        <div className={appTheme}>
          <header className="App-header">
            <img src={logo} 
                 className="App-logo" 
                 alt="logo" 
                 onClick={handleChangeTheme} 
                 title="Click to toggle theme" />
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
