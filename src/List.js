import React from 'react';
import ListItem from './ListItem';
import './List.css';

function List(props){
  const books = props.books.map((book,index) => {
    return (
      <ListItem key={index} data={book}/>
    );
  });

  return (
   <ul id="results">
    {books}
   </ul>
  )
}

export default List;