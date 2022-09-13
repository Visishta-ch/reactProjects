import React from 'react';

import './Button.css';

const Button = props => {
  // console.log("goal is"+ props.type);

  return (
    <button type={props.type}  className="button" onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;
