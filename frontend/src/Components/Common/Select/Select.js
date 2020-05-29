import React, { Component } from 'react';

export default class Select extends Component {
    render() {
        return (
            <select 
                onClick={this.props.onClick || function(){}}
            >
                {this.props.caption|| this.props.children || "Combo"}
            </select>
        );
    }
};