import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    clickCounter=()=>{
        this.setState((prevState)=>{
           return {count: prevState.count+1}
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.clickCounter)}
            </div>
        )
    }
}

export default Counter
