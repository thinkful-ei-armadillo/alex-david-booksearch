import React from 'react';

function ListItem(props){
    const authorNames = props.data.volumeInfo.authors ? props.data.volumeInfo.authors.join() : '';
    const imageUrl = props.data.volumeInfo.imageLinks.thumbnail;
    const title = props.data.volumeInfo.title;
    const price = (props.data.saleInfo.retailPrice && props.data.saleInfo.retailPrice.amount) ? props.data.saleInfo.retailPrice.amount : props.data.saleInfo.saleability.replace(/_/g, " ").toLowerCase().replace(/(?: |\b)(\w)/g, function(key) { return key.toUpperCase()});
    const description = props.data.volumeInfo.description ? props.data.volumeInfo.description : '';

  return (
    <li className="result-item">
        <hr/>
      <img src={imageUrl} alt="Book Thumbnail"/>
      <h2>{title}</h2>
      {authorNames && <h3>{authorNames}</h3>}
      <h3>{price}</h3>
      <p>{description}</p>
    </li>
  )
}

export default ListItem;