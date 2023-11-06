import React from 'react'
import { useParams } from 'react-router-dom'

export default function StudentData() {
    const params=useParams();
    const {name, location}=params;
  return (
    <>
    <h1 style={{textAlign:'center'}}>Student  Data</h1>
    <h3>The name is {name} && location is {location}</h3>
    </>
  )
}
