import React, { Component } from 'react';

export default class List extends Component {
    render() {
        let { list, actions } = this.props;

        return (
            <div>
                <ul>
                    {list.map(item => (
                        <li key={item.id}>
                            {item.title}
                        </li>
                    ))}
                </ul>
                {list.length > 0 && (actions.map((item, index) => (
                    <button key={index} onClick={item.action}>
                        {item.text}
                    </button>
                )))}
            </div>
        )
    }
}