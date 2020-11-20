import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ibrohim'
        }
        console.log("LifecycleB constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getderivedstateform")
        return null;
    }
    componentDidMount(){
        console.log("LifecycleB componentdidmount")
    }
    render() {
        console.log("LifecycleB render")
        return (
            <div>
                Lifecycle A
            </div>
        )
    }
}

export default LifecycleB
