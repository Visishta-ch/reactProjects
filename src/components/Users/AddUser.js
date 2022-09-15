import React,{ useState, useRef} from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
// import Wrapper from '../Helpers/Wrapper'
const AddUser = (props) => {
     const userInput = useRef();
     const ageInput = useRef();
     const clgInput = useRef();
    
    const [error,setError] = useState('');
   

    const saveHandler = (e) => {
        e.preventDefault();
        userInput.current.focus();
        const enteredName = userInput.current.value;
        const enteredAge = ageInput.current.value;
        const enteredClg = clgInput.current.value;
        console.log("form submitted")
        
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 || enteredClg.trim().length === 0){
          setError({
            title: 'Missing User Details',
            message: 'Please enter valid details to proceed'
          })
          return;
        }
        if(+enteredAge < 1){
          setError({
            title: 'Invalid Age',
            message: 'Please enter valid age (>0) '
          })
          return;
        }
        
        props.onAddUser(enteredName,enteredAge,enteredClg);
        userInput.current.value = '';
        ageInput.current.value = '';
        clgInput.current.value= '';

        
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
            <input type="text" placeholder="Name" id = "name" name='userName' ref={userInput} />
            <label htmlFor="age">Age</label>
            <input type="number" placeholder="Age" id = "age" name='userAge' ref={ageInput}/>
            <label htmlFor="clgname">College Name</label> 
            <input type="text" placeholder="College Name" id = "clgname" ref={clgInput} />

            <Button type="submit" id='btn'> Add User Details </Button>
        </form>

        
    </Card>
    </>
  )
}

export default AddUser