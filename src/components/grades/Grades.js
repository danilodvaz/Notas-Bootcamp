import React, { Component } from 'react';
import Input from '../input/Input';
import css from './grades.module.css';

export default class Grades extends Component {
    handlerRate = (id, rate) => {
        this.props.onChangeRate(id, rate);
    };

    render() {
        const { grades } = this.props;

        return (
            <div className={css.container}>
                <h3 className={css.align}>Notas Atuais</h3>
                <div>
                    {
                        grades.map(({id, name, rate}) => {
                            return <Input key={id} idInput={id} labelName={name} rate={rate} onChangeRate={this.handlerRate} />
                        })
                    }
                </div>
            </div>
        )
    }
}
