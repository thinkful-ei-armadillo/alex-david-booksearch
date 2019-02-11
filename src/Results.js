import React from 'react';

function Results(props){
  return (
    <li className="result-item">
      <img src="" alt="Book"/>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <h3>{props.price}</h3>
      <p>{props.description}</p>
    </li>
  )
}

export default Results;