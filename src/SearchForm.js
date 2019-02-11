import React, {Component} from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  state = {
    q: '',
    filter: '',
    printType: '',
  }

  searchTextChanged = (q) => {
    this.setState({q})
  }

  printTypeChanged = (printType) => {
    this.setState({printType})
  }

  bookTypeChanged = (filter) => {
    this.setState({filter})
  }

  handleSearchRequest = (event) => {
    event.preventDefault();
    // const params = { q: this.state.searchText, printType: this.state.printType, filter: this.state.bookType };
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.q}${this.state.filter && '&filter='+this.state.filter}${this.state.printType && '&printType='+this.state.printType}`;
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'apiKey': 'AIzaSyAiiQRXhroZbEdbvrUwWxR7A14_7E9W9P8'
      }
    }
    this.props.updateLoading(true);
    fetch(url, options)
      .then(res => {
        if (!res.ok) {throw new Error('Unable to search')}
          return res.json()
      })
      .then(books => {
        this.props.updateBooks(books.items)
        this.props.updateLoading(false);
      })
      .catch(error => { 
        this.props.updateLoading(false);
        this.props.updateError(error.message);
      });
}


  render(){
    return (
      <form id="bookSearch" onSubmit={(e) => this.handleSearchRequest(e)}>
        <div className="input-group">
          <label htmlFor ="userSearch">Search</label>
          <input placeholder = "Enter author, title, etc." name="userSearch" id="userSearch" value={this.state.q} type="text" onChange={(e) => this.searchTextChanged(e.target.value)} required/>
        </div>
        <div className="input-group">
          <label htmlFor="printType">Print Type </label>
          <select id="printType" onChange={(e) => this.printTypeChanged(e.target.value)}>
            <option value="">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="bookType">Book Type</label>
          <select id="bookType" onChange={(e) => this.bookTypeChanged(e.target.value)}>
            <option value="">All</option>
            <option value="ebooks">eBooks</option>
            <option value="free-ebooks">Free eBooks</option>
            <option value="paid-ebooks">Paid eBooks</option>
            <option value="full">Full</option>
            <option value="partial">Partial</option>
          </select>
        </div>
        <button type="submit"> Search</button>
      </form>
    );
  }
}

export default SearchForm