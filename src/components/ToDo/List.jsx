import React, { Component } from 'react';

export default class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.list.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
                {this.props.list.length > 0 && (this.props.actions.map((item, index) => (
                    <button key={index} onClick={item.action}>{item.text}</button>
                )))}
            </div>
        )
    }
}
