import React from 'react';
import './Error.css';

function Error(props){
  return (
    <div className="error-msg">
        <h2>{props.msg}</h2>
    </div>
  )
}

export default Error;