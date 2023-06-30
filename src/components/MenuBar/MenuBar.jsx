import React, { useEffect } from 'react'
import './MenuBar.css'
import { Link } from 'react-router-dom';
export default function MenuBar() {

const section1 = document.querySelector('.menuBar')
useEffect(()=>{
  window.addEventListener('scroll', () => {
    if(window.scrollY>50){
    section1.style.backgroundColor = `black`
    }
    else{
      section1.style.backgroundColor = `rgba(0, 0, 0, 0)`
    }
  })
})

  return (
    <div className='menuBar'>
        <Link to='/'><img  className="navLogo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"></img></Link>
        <div className='menuBarFlex'>
        
        
        <p className='mm' onClick={()=>{document.querySelector('.menuBar').style.display='none';document.querySelector('.nav').style.display='flex'}}>MENU</p>
        <Link to='/kids'><p>KIDS</p></Link>
        <Link to='/'><p>HOME</p></Link>
        <Link to='/orders/new'><svg aria-hidden="true" focusable="true" viewBox="0 0 92.01 66.78" height='24' width='24' fill="#e8e6e3" xmlns="http://www.w3.org/2000/svg"><g  data-darkreader-inline-fill="#ffffff"><path d="m68.17 66.78a7.29 7.29 0 1 1 7.29-7.28 7.29 7.29 0 0 1 -7.29 7.28zm0-10.57a3.29 3.29 0 1 0 3.29 3.29 3.29 3.29 0 0 0 -3.29-3.29z"></path><path d="m28.45 66.78a7.29 7.29 0 1 1 7.29-7.28 7.29 7.29 0 0 1 -7.29 7.28zm0-10.57a3.29 3.29 0 1 0 3.29 3.29 3.29 3.29 0 0 0 -3.29-3.29z"></path><path d="m22.15 46.94-13.51-42.94h-8.64v-4h10.11a2 2 0 0 1 1.89 1.4l14 44.34z"></path><path d="m23.04 44.13h4v10.65h-4z" transform="matrix(.9555875 -.29470752 .29470752 .9555875 -13.46 9.58)"></path><path d="m33.74 57.49h29.15v4h-29.15z"></path><path d="m77.26 48.34h-53.17a2 2 0 0 1 -1.91-1.4l-10.09-32.09a2 2 0 0 1 1.91-2.6h76a2 2 0 0 1 1.87 2.75l-12.75 32.07a2 2 0 0 1 -1.86 1.27zm-51.71-4h50.35l11.17-28.09h-70.35z"></path></g></svg></Link>
        <img onClick={()=>{document.querySelector('.menuBar').style.display='none';document.querySelector('.nav').style.display='flex'}} className="navAvatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="Netflix Logo"></img>
        </div>
    </div>
  )
}
