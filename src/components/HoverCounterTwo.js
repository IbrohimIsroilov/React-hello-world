import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    render() {
        const {count}=this.state
        return (
            <div>
                <h1 onMouseOver={this.clickCounter}>Hovered {count} times</h1>
            </div>
        )
    }
}

export default HoverCounterTwo
