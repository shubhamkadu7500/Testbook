//this is created for understand props as per lecture
import React from 'react'
import PropTypes from 'prop-types';
export const HelloWorld = (props, name, age) => {
    const welcomemessage1 = props.welcomemessage;
    const name1 = props.name;
    const age1 = props.age;
    const user = props.user;
    // console.log(props);

  return (
    <div>
        <h1>This is Prop part2</h1>
        <h2>{props.welcomemessage}</h2>
        <h2>Name : {props.name}</h2>
        <h2>Age : {props.age}</h2>
        {/* another way to show case */}
        <h2>{welcomemessage1}</h2>
        <h2>{name1}</h2>
        <h2>{age1}</h2>
        {/* showing object */}
        <h1>The id is : {user.id}</h1>
        <h1>The text is : {user.text}</h1>
    </div>
  )
}
//this is default parameter or props of helloworld when you are not passing parent component then default values are used 
HelloWorld.defaultProps={
    age:99,
    name:"Manoj"
}
// here we can tell what type of data to be inserted
HelloWorld.propTypes = {
    // name:PropTypes.string
    name:PropTypes.number
}