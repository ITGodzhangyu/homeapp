'use strict';

import InputNumber from '../src';
import React from 'react';
import ReactDOM from 'react-dom';

class InputNumberDemo extends React.Component {
    constructor() {
        super();
        this.state = {value: 9, step: 2, min: -5, max: 10, extraClass: '', disable: false, inputDisable: false};
    }

    onChange(val) {
        this.setState({value: val});
    }

    render() {
        return (
            <div>
                <h2 onClick={()=>this.setState({value: -4, step: 1, disable: false, inputDisable: true})}>click</h2>
                <InputNumber
                    value={this.state.value}
                    step={this.state.step}
                    min={this.state.min}
                    max={this.state.max}
                    inputDisable={this.state.inputDisable}
                    onChange={val => this.onChange(val)}
                    extraClass={this.state.extraClass}
                    disable={this.state.disable}
                />
                <InputNumber
                    value={3}
                    disable={true}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <InputNumberDemo/>,
    document.getElementById('content')
);
