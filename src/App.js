import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import List from './List';
import Error from './Error';



//  ul, li

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      books: [],
      error: '',
    }
  }

  updateBooks = (books) => {
    this.setState({books});
  }

  updateError = (errorMsg) => {
    this.setState({error: errorMsg});
  }

  updateLoading = (bool) => {
    this.setState({loading: bool});
  }

  render() {
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <div className="App">
          <SearchForm updateBooks={this.updateBooks} updateError={this.updateError} updateLoading={this.updateLoading}/>
          {this.state.loading ? <h2>Loading...</h2> : this.state.error ? <Error msg={this.state.error} /> : <List books={this.state.books}/>}
        </div>
      </div>
    );
  }
}

export default App;
