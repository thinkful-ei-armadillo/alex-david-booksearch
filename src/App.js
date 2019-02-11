import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Filters from './Filters';
import List from './List';
import { url } from 'inspector';



//  ul, li

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      books: [],
      printFilter: null,
      bookFilter: null,
      searchTerm: null
    }
  }

  updateBooks = (data) => {
    const books = data.items.map((book) => {
      return {
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors,
        imageUrl: book.volumeInfo.imageLinks.smallThumbnail,
        price: book.saleInfo.retailPrice.amount,
        description: book.volumeInfo.description
      }
    });
    this.setState({books});
  }

  render() {
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <div className="App">
          <SearchForm />
          <Filters />
          <List />
        </div>
      </div>
    );
  }
}

export default App;
