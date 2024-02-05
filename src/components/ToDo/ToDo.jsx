import React, { Component } from 'react';
import List from './List';

export default class ToDo extends Component {
    state = {
        firstList: this.props.list,
        secondList: [],
        thirdList: []
    }

    transferToSecond() {
        let taskIndex = this.state.firstList[0];
        let newFirstList = this.state.firstList.slice(1);
        let newSecondList = [taskIndex, ...this.state.secondList];

        this.setState({
            firstList: newFirstList,
            secondList: newSecondList
        });
    }

    transferToFirst() {
        let taskIndex = this.state.secondList[0];
        let newSecondList = this.state.secondList.slice(1);
        let newFirstList = [taskIndex, ...this.state.firstList];

        this.setState({
            firstList: newFirstList,
            secondList: newSecondList
        });
    }

    transferToThird() {
        let taskIndex = this.state.secondList[0];
        let newSecondList = this.state.secondList.slice(1);
        let newThirdList = [taskIndex, ...this.state.thirdList];

        this.setState({
            secondList: newSecondList,
            thirdList: newThirdList
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
                    actions={[{
                        text: "Transfer first to right",
                        action: this.transferToSecond.bind(this)
                    }]}
                />
                <List
                    list={this.state.secondList}
                    actions={[{
                        text: "Transfer first to left",
                        action: this.transferToFirst.bind(this)
                    },
                    {
                        text: "Transfer first to right",
                        action: this.transferToThird.bind(this)
                    }]}
                />
                <List
                    list={this.state.thirdList}
                    actions={[{
                        text: "Remove last item",
                        action: this.removeLastItem.bind(this)
                    }]}
                />
            </div>
        )
    }
}