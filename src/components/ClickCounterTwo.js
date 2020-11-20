import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    render() {
        const {count}=this.state;
        return (
            <div>
                <button onClick={this.clickCounter}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounterTwo
