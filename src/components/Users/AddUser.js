import React,{ useState} from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'
const AddUser = (props) => {
    const [username,setUserName] = useState('');
    const [age,setAge] = useState('');
    const [error,setError] = useState('');
    const changeHandler = (e) => {
      const {name,value } = e.target;
      if(name === 'userName'){
        setUserName(value);
      }
      else
        setAge(value);
        
    }

    const saveHandler = (e) => {
        e.preventDefault();
        console.log("form submitted")
        // let userDetails = {};
        // userDetails['Name'] = username;
        // userDetails['Age'] = age;
        if(username.trim().length === 0 || age.trim().length === 0){
          setError({
            title: 'Missing User Details',
            message: 'Please enter valid username and age'
          })
          return;
        }
        if(+age < 1){
          setError({
            title: 'Invalid Age',
            message: 'Please enter valid age (>0) '
          })
          return;
        }
        console.log(username,age)
        props.onAddUser(username,age);
        setUserName('');
        setAge('');
    }

    const errorHandler = () => {
      setError(null)
    }
  return ( 
    <>
      {error && <ErrorModal title={error.title} message={error.message} closeErrorHandler={errorHandler}/>}
    <Card className={classes.input}>
        <form onSubmit={saveHandler}>
            <label htmlFor="name">Name</label> 
            <input type="text" placeholder="Name" id = "name" name='userName' onChange={changeHandler} value={username} />
            <label htmlFor="age">Age</label>
            <input type="number" placeholder="Age" id = "age" name='userAge' onChange={changeHandler} value={age} />

            <Button type="submit" id='btn'> Add User Details </Button>
        </form>

        
    </Card>
    </>
  )
}

export default AddUser