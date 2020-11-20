import React, { PureComponent } from 'react'

class Purecomp extends PureComponent {
    render() {
        console.log("Pure comp render")
        return (
            <div>
                Pure component {this.props.name}
            </div>
        )
    }
}

export default Purecomp
