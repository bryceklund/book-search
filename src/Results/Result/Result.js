import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
    render() {
        return (
            this.props.books.map((book, index) => {
                return (
                        <li className="result" key={index}>
                        <h2>{book.title}</h2>
                        <h3>{book.subtitle}</h3>
                        <img src={`${book.link}`} alt="book cover" />
                        <p className="author-price">
                            Author: {book.author}<br />
                                Price: {book.price}
                        </p>
                        <p className="description">{book.description}</p>
                    </li>
                )   
            })          
        )
    }
}

export default Result;