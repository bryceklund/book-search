import React, { Component } from 'react';
import './App.css';
import SearchOptions from './SearchOptions/SearchOptions';
import Results from './Results/Results';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      error: null
    }
  }

  makeURL(options) {
    const query = `q=${options.query}`;
    const key = `&key=AIzaSyCO3gsu9tyAmUMoAYnqYWCi9zSAufgMPKQ`;
    let filter = '';
    let printType = '';
    if (options.filterStr !== "None") {
      filter = `&filter=${options.filterStr}`;
    }
    if (options.printType !== "None") {
      printType = `&printType=${options.printType}`;
    } 
    const url = `https://www.googleapis.com/books/v1/volumes?${query}${filter}${printType}${key}`;
    this.callAPI(url);
  }

  callAPI(url) {
    fetch(url)
    .then(res => {
        if(!res.ok) {
            throw new Error('something went wrong!');
        }
        return res.json()
    })
    .then(data => {
      console.log(data)
        data.items.map(item => {
          const book = {
            title: item.volumeInfo.title,
            subtitle: item.volumeInfo.subtitle,
            price: 'free',
            description: item.volumeInfo.description,
            link: item.selfLink,
            image: item.volumeInfo.imageLinks.smallThumbnail,
            author: item.volumeInfo.authors.toString()
          };
          if (item.saleInfo.listPrice) {
            book.price = item.saleInfo.listPrice.amount;
          }
          this.setState({
            books: [...this.state.books, book]
          });
        })
        console.log(this.state)
    })
    .catch(err => {
        this.setState({
            error: err.message
        })
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchOptions getOptions={options => this.makeURL(options)} />
        <Results books={this.state.books}/>
      </div>
    );
  }
}

export default App;
