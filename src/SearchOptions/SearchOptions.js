import React, { Component } from 'react';
import './SearchOptions.css';

class SearchOptions extends Component {
    sendOptions(e) {
        e.preventDefault();
        const query = e.target.search.value;
        const printType = e.target.print_type.value;
        const bookType = e.target.book_type.value;
        const options = {
            query: query,
            filterStr: printType,
            printType: bookType
        };
        console.log(options);
        this.props.getOptions(options)
    }
    render() {
        return (
            <form className="search-form" onSubmit={e => this.sendOptions(e)}>
                <section className="search">
                    <label htmlFor="search">Search: </label>
                    <input name="search" id="search" type="text" placeholder="search for books" />
                    <button>Search</button>
                </section>
                <section className="options">
                    <label htmlFor="print_type">Print Type: </label>
                    <select name="print_type" id="print_type">
                        <option value="None">Select one...</option>
                        <option value="all">All types</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>  
                    <label htmlFor="book_type">Book Type: </label>
                    <select name="book_type" id="book_type">
                        <option value="None">Select one...</option> 
                        <option value="ebooks">eBooks</option>
                        <option value="free-ebooks">Free eBooks</option>
                        <option value="full">Fully-viewable</option>
                        <option value="paid-ebooks">Paid eBooks</option>
                        <option value="partial">Partially viewable</option>
                    </select>
                </section>
            </form>
        );
    }
}

export default SearchOptions;