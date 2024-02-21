import React, { Component } from 'react';
import List from './List';

export default class ToDo extends Component {
    state = {
        firstList: this.props.list,
        secondList: [],
        thirdList: []
    }

    transferToSecond() {
        this.setState({
            secondList: [this.state.firstList.shift(), ...this.state.secondList]
        });
    }

    transferToFirst() {
        this.setState({
            firstList: [this.state.secondList.shift(), ...this.state.firstList]
        });
    }

    transferToThird() {
        this.setState({
            thirdList: [this.state.secondList.shift(), ...this.state.thirdList]
        });
    }

    removeLastItem() {
        this.setState({
            thirdList: this.state.thirdList.slice(0, -1)
        });
    }

    render() {
        return (
            <div className='three-lists'>
                <List
                    list={this.state.firstList}
                    actions={[
                        {
                            text: "Transfer first to right",
                            action: this.transferToSecond.bind(this)
                        }
                ]}/>
                <List
                    list={this.state.secondList}
                    actions={[
                        {
                            text: "Transfer first to left",
                            action: this.transferToFirst.bind(this)
                        },
                        {
                            text: "Transfer first to right",
                            action: this.transferToThird.bind(this)
                        }
                    ]}/>
                <List
                    list={this.state.thirdList}
                    actions={[
                        {
                            text: "Remove last item",
                            action: this.removeLastItem.bind(this)
                        }
                    ]}/>
            </div>
        )
    }
}