import React, { Component } from 'react';
import './SearchOptions.css';

class SearchOptions extends Component {
    render() {
        return (
            <form class="search-form">
                <section class="search">
                    <label for="search">Search: </label>
                    <input name="search" id="search" type="text" placeholder="search for books" />
                    <button>Search</button>
                </section>
                <section class="options">
                    <label for="print-type">Print Type: </label>
                    <select name="print-type" id="print-type">
                        {/*!--map the options down or include them manually-->*/}
                    </select>
                    <label for="book-type">Book Type: </label>
                    <select name="book-type" id="book-type">
                        {/*!--map the options down or include them manually-->*/}
                    </select>
                </section>
            </form>
        );
    }
}

export default SearchOptions;