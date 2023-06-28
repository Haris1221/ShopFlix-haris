import React from 'react'
import './MenuBar.css'
export default function MenuBar() {
  return (
    <div className='menuBar'>
        <img onClick={()=>{document.querySelector('.menuBar').style.display='none';document.querySelector('.nav').style.display='flex'}} class="navLogo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"></img>

        <img onClick={()=>{document.querySelector('.menuBar').style.display='none';document.querySelector('.nav').style.display='flex'}}class="navAvatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="Netflix Logo"></img>
    </div>
  )
}
