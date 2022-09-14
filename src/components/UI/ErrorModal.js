import React from 'react'
import ReactDOM from 'react-dom'
import Card from "./Card"
import Button from './Button'
import classes from './ErrorModal.module.css'


const Backdrop = (props) => {
   return <div className={classes.backdrop} onClick={props.closeErrorHandler}></div>
}

const ModalOverlay = (props) => {

  return (
      <Card className = {classes.modal}>
      <header className = {classes.header}>
          <h2>{props.title}</h2>
      </header>

      <div className={classes.content}>
          <p>{props.message}</p>
      </div>

      <footer className= {classes.actions}>
          <Button onClick={props.closeErrorHandler} > Ok </Button>
      </footer>
</Card>)

}
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop closeErrorHandler={props.closeErrorHandler}/>, document.getElementById('backdrop-root'))}  

      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} closeErrorHandler={props.closeErrorHandler}/>, document.getElementById('overlay-root'))}  
    </React.Fragment>
  )
}

export default ErrorModal 