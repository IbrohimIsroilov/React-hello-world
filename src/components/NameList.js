import React from 'react'
import Person from './Person';

function NameList() {
    const names=['Bruce', 'Clark', 'Diana'];
    const people=[
        {
            name: 'bruce',
            age: 221,
            skill: 'react',
            id: 1
        }
    ]
    const personList=people.map(person=><Person key={person.id} person={person}/>);
    const nameList=names.map((name,index)=><h2 key={index}>{name}</h2>)
    return (
        <div>
            {
                personList
            }
        </div>
    )
}

export default NameList
