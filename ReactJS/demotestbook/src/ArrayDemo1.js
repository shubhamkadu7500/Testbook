import React from 'react'

export const ArrayDemo1 = () => {
    // const arrayData = [1,13,14,15,2];
    // // console.log('using for each',arrayData.forEach(x=>x*x*x).sort(function(a,b){
    // //     return a -b
    // // }));
    // console.log('using map method',arrayData.map(x=>x*x*x).sort(function(a,b){
    //     console.log(a,b,a-b);
    //     return a -b
    // }));

    //conditional data
    const studentdata= [
        {
        name:"Shubham",
        id:14,
        pass: true
    },
    {
        name:"Manoj",
        id:15,
        pass:false
    },
    {
        name:"Deeraj",
        id:11,
        pass:true
    }
]

  return (
    <div>
        {/* <h1>We are using ArrayDemo1</h1> */}
        {/* using coditional statement */}
        <ul>
            {studentdata.map((data)=>(
                <li key={data.id}>
                    {data.pass?<span>{data.name} is Passed</span>:<span>{data.name} is Failed</span>}
                </li>
            ))};
        </ul>
        
    </div>
  )
}
