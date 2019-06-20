import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
    render() {
        return (
            <li class="result">
                <h2>Henry I</h2>
                <h3>A very nice book</h3>
                <img src="http://books.google.com/books/content?id=UjgsDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="book cover" />
                <p class="author-price">
                    Author: Warren Hollister<br />
                        Price: $50.00
                </p>
                <p class="description">The resulting volume is one that will be welcomed by students and general readers alike.</p>
            </li>
        );
    }
}

export default Result;