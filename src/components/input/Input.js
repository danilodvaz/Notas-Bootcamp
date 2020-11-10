import React, { Component } from 'react'

export default class Input extends Component {
    handlerRate = (event) => {
        const {id, value} = event.target;
        this.props.onChangeRate(parseInt(id), parseInt(value));
    };

    color(rate) {
        const style = {
            color: "red"
        }

        if (rate >= 60) {
            style.color = "green";
        }

        return style;
    }

    render() {
        const { labelName, rate, idInput } = this.props;

        return (
            <label>{labelName}
                <input id={idInput} type="number" value={rate} onChange={this.handlerRate} style={this.color(rate)} min="0" max="100" />
            </label>
        );
    }
}
