import React from 'react'
import bgImg from '../../assets/image.png'
import {Link}from 'react-scroll';
import btnImg from'../../assets/hireme.png';
import './intro.css';


function Intro() {
  return (
    
      <section id='intro'>
      <div className='introcontent'>
        <span className='hello'>hello,</span>
        <span className='introText'>I'am<span className='introName'>Saurav kumar</span><br/>Web Developer</span>
        <p className='intoPara'>I am a professional webdeveloper</p>
        <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='btn'><img src={btnImg}alt='' className='btnimg'/>Hire Me</button></Link>
      </div>
      <img src={bgImg}alt=''className='bg'/>
    </section>
  
  
  )
}

export default Intro;