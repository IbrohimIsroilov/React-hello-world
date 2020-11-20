import React, {Component} from 'react';

const Greet=(props)=>{
    const {name,heroName}=props;
return (
    <div>
       <h1>Hello {name} as {heroName}</h1>
    </div>
) 
}

export default Greet;