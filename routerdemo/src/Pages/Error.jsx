import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export const Error = () => {
  useEffect(()=>{
    let styleObj = document.querySelector('.navconatiner');
    // console.log(styleObj);
    styleObj.style.display='none';
  })
  return (
    <>
    <div style={{textAlign:'center'}}>
        <img src="error.png" alt="error img" style={{height:'400px'}}/><br />
    </div>
    <div style={{textAlign:'center'}}>
        <button style={{backgroundColor:'rgb(225,189,189)', border:'none', padding:'10px'} }><Link to='/' style={{textDecoration:'none'}}>Go To Home Page</Link></button>
    </div>
    </>
  )
}
