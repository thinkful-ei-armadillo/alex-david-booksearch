import React, {Component} from 'react';

class SearchForm extends Component {
  state = {
    searchText: '',
    printType: '',
    bookType: '',
  }

  searchTextChanged = (searchText) => {
    this.setState({searchText})
  }

  printTypeChanged = (printType) => {
    this.setState({printType})
  }

  bookTypeChanged = (bookType) => {
    this.setState({bookType})
  }

  handleSearchRequest = (event) => {
    event.preventDefault();
    const params = { q: this.state.searchText, printType: this.state.printType, filter: this.state.bookType };
    const url = 'https://www.googleapis.com/books/v1/volumes';
    const options = {
      method: 'GET',
      body: JSON.stringify(params),
      headers: {
        'Content-type': 'application/json',
        'apiKey': 'AIzaSyAiiQRXhroZbEdbvrUwWxR7A14_7E9W9P8'
      }
    }
    fetch(url, options)
      .then(res => {
        if (!res.ok) {throw new Error('Unable to search')}
        return res.json()
        })
      .then(data => this.props.updateBooks(data))
      .catch()
}


  render(){
    return (
      <div>
        <form id="bookSearch" onSubmit={(e) => this.handleSearchRequest(e)}>
          <label htmlFor ="userSearch">Search </label>
          <input placeholder = "Enter author, title, etc." name="userSearch" id="userSearch" value={this.state.searchText} type="text" onChange={(e) => this.searchTextChanged(e.target.value)}/>
          <button type="submit"> Search</button>
        </form>
          <label htmlFor="printType">Print Type </label>
          <select id="printType" onChange={(e) => this.printTypeChanged(e.target.value)}>
            <option value="all">All</option>
            <option value="ebooks">ebooks</option>
            <option value="free-ebooks">free-ebooks</option>
            <option value="full">full</option>
            <option value="paid-ebooks">paid-ebooks</option>
            <option value="partial">partial</option>
          </select>
          <label for="bookType">Book Type</label>
          <select id="bookType" onChange={(e) => this.bookTypeChanged(e.target.value)}>
            <option value="all">all</option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
          </select>
      </div>
    );
  }
}

export default SearchForm