import React, { Component } from 'react';
import css from './result.module.css';

export default class Results extends Component {
    calculate() {
        const { grades } = this.props;

        const rates = grades.map(grade => parseInt(grade.rate));

        const totalRate = this.calculateTotal(rates);
        const percTotal = this.calculatePercTotal(totalRate);
        const approvedAverage = this.calculateApprovedAverage(rates);
        const approvedTotal = this.calculateApprovedTotal(totalRate);

        return {
            totalRate,
            percTotal,
            approvedAverage,
            approvedTotal
        };
    }

    calculateTotal(rates) {
        const total = rates.reduce((acc, rate) => {
            return acc + rate;
        }, 0);

        return total;
    }

    calculatePercTotal(totalRate) {
        return totalRate / 5;
    }

    calculateApprovedAverage(rates) {
        const approved = rates.every(rate => rate >= 60);

        return approved ? 'Sim' : 'Não';
    }

    calculateApprovedTotal(totalRate) {
        return totalRate >= 350 ? 'Sim' : 'Não';
    }

    color(status) {
        const style = {
            color: "red"
        }

        if (status === 'Sim') {
            style.color = "green";
        }

        return style;
    }

    render() {
        const { totalRate, percTotal, approvedAverage, approvedTotal } = this.calculate();

        return (
            <div className={css.container}>
                <h3 className={css.align}>Resultados</h3>
                <p>Nota Total: {totalRate} </p>
                <p>Percentual Total: {percTotal} </p>
                <p>Aprovação pela média (60%)?: <span style={this.color(approvedAverage)}>{approvedAverage}</span> </p>
                <p>Aprovação pelo percentual total (70%)?: <span style={this.color(approvedTotal)}>{approvedTotal}</span> </p>
            </div>
        )
    }
}
