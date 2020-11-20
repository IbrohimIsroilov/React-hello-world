import React, { Component } from 'react'
import Regcomp from './Regcomp'
import Purecomp from './Purecomp'
import MemoComp from './MemoComp'

class Parentcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ibrohim'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Ibrohim'
            })
        },2000)
    }
    render() {
        console.log("Parent comp render")
        return (
            <div>
                Parent component
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default Parentcomp
