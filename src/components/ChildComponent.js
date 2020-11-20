import React from 'react'

function ChildComponent() {
    return (
        <div>
            <button onClick={()=> props.greetHandler('hi')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
