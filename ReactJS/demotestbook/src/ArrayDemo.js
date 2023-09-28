import React from 'react'

export const ArrayDemo = () => {
    // const myArray = [14,19,18];
    const myArray = ["apple", "orange", "banana"];

    // let items = [];
    // for(let index = 0; index < myArray.length; index++){
    //   //items = myArray[index];
    //     items.push(<li>{myArray[index]}</li>);
    // }

    //creating array object
    const user = [
        {firstname :"Shubham", designation:"spiderman", email:"shuhbham@gmail.com"},
        {firstname :"Manoj", designation:"superman", email:"manoj@gmail.com"},
        {firstname :"deeraj", designation:"padman", email:"deeraj@gmail.com"}
    ]

  return (
    <div>
        {/* this is array and how to print array*/}
        {/* //printing array using indexing */}
        {/* {myArray[0]}<br/>
        {myArray[1]}<br/>
        {myArray[2]} */}
        {/*printing array using for loop */}
        {/* {items} */}

        {/* this is arrays methods */}
        <h1>Array Map Method in React</h1>
        {/* {myArray.map((data) => { 
            return (
                <div>
                    <h1>{data}</h1>
                </div>
            )
        })} */}

        {user.map((data, id) => { 
            console.log(id);
            console.log(data);
            return (
                <div key={id}>
                    <h1>{data.firstname}</h1>
                    <h1>{data.designation}</h1>
                    <h1>{data.email}</h1>
                </div>
            )
        })}


    </div>
  )
}
