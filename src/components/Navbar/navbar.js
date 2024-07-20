import React, { useState } from 'react'
import './navbar.css'

import {Link}from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menus from '../../assets/contact.png';

function Navbar() {
  const[showMenu ,setshowMenu]=useState(false);
  return (
   <nav className='navbar'>
    <image src='https://imgs.search.brave.com/nWmKuUJsxWmgjFocffE5J9pMR12nI2AmQtqakWynBkM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vMWNhZDNl/YTkxNzViMDc3ODc5/M2QzZDY0OWFhOTUx/MGVlYWJmNzU4MS03/MzF4NzMxLnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw' alt='logo'className='logo'/>
    <div className='desktopMenu'>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItem'>Home</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500}className='desktopMenuItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItem'> Portfolio</Link>
        <Link activeClass='active' to='client' spy={true} smooth={true} offset={-100} duration={500}className='desktopMenuItem'>Client</Link>
    </div>
    
    <button className='desktopMenubtn'onClick={()=>{
     
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    }}>
       
        <img src={contactImg}alt=''className='desktopMenuImg'/>Contact Me</button>

        <image src={menus} alt='logo'className='mobMenu'onClick={()=>setshowMenu(!showMenu)}/>
    <div className='navMenu' style={ {display:showMenu? 'flex':'none'}}>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='MenuItem'onClick={()=>setshowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500}className='MenuItem'onClick={()=>setshowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='MenuItem'onClick={()=>setshowMenu(false)}> Portfolio</Link>
        <Link activeClass='active' to='client' spy={true} smooth={true} offset={-100} duration={500}className='MenuItem'onClick={()=>setshowMenu(false)}>Client</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}className='MenuItem'onClick={()=>setshowMenu(false)}>contact</Link>
    </div>
    
    

   </nav>
  )
}

export default Navbar