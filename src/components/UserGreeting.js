import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props);

        this.state={
            isLoggedin: false
        }
    }
    render() {
        return this.state.isLoggedin?(
            <div>Wlcome Ibrohim</div>
        ) : (
            <div>Welcome vishwas</div>
        )
    }
}

export default UserGreeting
