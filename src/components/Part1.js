import React, { Component } from 'react';
import data from '../data';
import Part2 from './Part2';

console.log(data)

class Part1 extends Component {
    constructor() {
        super();

        this.state = {
            index: 0
        }
    }

    prevButton() {
        if (this.state.index === 0) {
            return this.setState({ index: data.length - 1 })
        }

        this.setState({ index: this.state.index - 1 })
    }

    nextButton() {
        if (this.state.index === data.length - 1) {
            return this.setState({ index: 0 })
        }

        this.setState({ index: this.state.index + 1 })
    }

    render() {
        const { name, city, country, title, employer, favoriteMovies, id } = data[this.state.index]
        return (
            <div className="main-card">
                <div style={{padding: '20px'}}>
                <div className="name-number">
                    <div className="name">{name.first} {name.last} </div>
                    <div className="number">{id}/25</div>
                </div>
                <p><strong>From:</strong> {city}, {country}</p>
                <p><strong>Job Title:</strong> {title}</p>
                <p><strong>Employer:</strong> {employer}</p>
                <div className="favorites">
                    <p>
                        <strong>Favorite Movies:</strong>
                    </p>
                    <ol>
                        <li>{favoriteMovies[0]}</li>
                        <li>{favoriteMovies[1]}</li>
                        <li>{favoriteMovies[2]}</li>
                    </ol>

                </div>
                </div>
                <Part2 
                prevButton={() => this.prevButton()}
                nextButton={() => this.nextButton()}/>
            </div>
        )
    }
}

export default Part1
