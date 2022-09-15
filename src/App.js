import React,{ useState} from 'react';
import AddUser from './components/Users/AddUser';
import './App.css';
import UsersList from './components/Users/UsersList'

function App() {
 const [usersList , setUsersList] = useState([]);

 const saveUserHandler =(uName, uAge, uClg) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList,{name: uName, age: uAge, clg: uClg, id : Math.random().toString()}]
    });
 };
  return (
    <React.Fragment>
    <div className="App">
      <AddUser  onAddUser={saveUserHandler}/>
      <UsersList users={usersList} />
    </div>
    </React.Fragment>
  );
}

export default App;
