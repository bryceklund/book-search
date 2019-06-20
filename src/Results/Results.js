import React, { Component } from 'react';
import './Results.css';
import Result from './Result/Result';

class Results extends Component {
    render() {
        return (
            <section className="results">
                <ul>
                    <Result />
                </ul>
            </section>
        );
    }
}

export default Results;