import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import gpl from 'graphql-tag';
import { graphql } from 'react-apollo';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from './graphQL/queries';

function App() {
  const [users, setUsers] = useState([]);
  const { error, loading, data } = useQuery(GET_ALL_USERS);
  useEffect(() => {
    if (data) {
      console.log(data);
      setUsers(data.users);
    }
  }, [data]);
  if (loading) return <img src={logo} className="App-logo" alt="logo" />;
  if (error) return <div>{JSON.stringify(error)}</div>;
  return (
    <div className="App">
      {users.map((user, index) => (
        <div key={index}>
          {Object.keys(user).map((key, index) => (
            <div key={index}>
              <p>{key}</p>
              <p>{user[key]}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
