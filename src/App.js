import React, { Component } from 'react';
import Grades from './components/grades/Grades';
import Results from './components/results/Results';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            grades: [
                {
                    id: 1,
                    name: 'Modulo 01 - Fundamentos (0 - 100)',
                    rate: 0
                },
                {
                    id: 2,
                    name: 'Modulo 02 - Angular (0 - 100)',
                    rate: 0
                },
                {
                    id: 3,
                    name: 'Modulo 03 - React (0 - 100)',
                    rate: 0
                },
                {
                    id: 4,
                    name: 'Modulo 04 - Vue (0 - 100)',
                    rate: 0
                },
                {
                    id: 5,
                    name: 'Modulo 05 - Desafio Final (0 - 100)',
                    rate: 0
                }
            ]
        };
    }

    handlerRate = (alterededId, newRate) => {
        const { grades } = this.state;

        const updatedGrades = grades.map(grade => {
            if (grade.id === alterededId) {
                grade.rate = newRate;
            }

            return grade;
        });

        this.setState({
            grades: updatedGrades
        });
    }

    render() {
        const { grades } = this.state;

        return (
            <div style={{ display: 'flex'}}>
                <Grades grades={grades} onChangeRate={this.handlerRate} />
                <Results grades={grades} />
            </div>
        );
    }
}
