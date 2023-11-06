import React, { useEffect } from 'react'

export const Home = () => {
  useEffect(()=>{
    let styleObj = document.querySelector('.navconatiner');
    // console.log(styleObj);
    styleObj.style.display='block';
  })
  return (
    <div>
        <h1>Home Componant</h1>
    </div>
  )
}
