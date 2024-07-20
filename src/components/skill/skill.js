import React from 'react'
import './skill.css';
import UiDesign from '../../assets/ui-design.png';
import webDesign from '../../assets/website-design.png';
import appDesign from '../../assets/app-design.png';
function Skill() {
  return (
   <section id='skill'>
   <span className='skillTitle'>What I Do</span>
   <span className='skillDesc'>I am a skilled and passionate web developer with experience in creating  visually appealing 
    and user-friendly website.I have a strong understanding of development and a keen eye for detail.I am proficient in HTML ,CSS and JavaScript 
    ,Node Js, React ,MongoDb, Express ,Tailwind.Css, Bootstrap, as well as intrested in software field and knowladge of programing language c++ and DSA.
    </span>
    <div className='skillBars'>
<div className='skillBar'>
<img src={appDesign}alt=''className='skillBarImg'/>
    <div className='skillBarText'>
        <h2> Software Developer</h2>
        <p>i am specialist in frontend development of having skill HTML,CSS ,Java Script</p>
</div>
    
    </div>
   </div>
   <div className='skillBars'>
<div className='skillBar'>
<img src={webDesign}alt=''className='skillBarImg'/>
    <div className='skillBarText'>
        <h2> Software Developer</h2>
        <p>i am specialist in frontend development of having skill HTML,CSS ,Java Script</p>
</div>
    
    </div>
   </div>
   <div className='skillBars'>
<div className='skillBar'>
<img src={UiDesign}alt=''className='skillBarImg'/>
    <div className='skillBarText'>
        <h2> Software Developer</h2>
        <p>i am specialist in frontend development of having skill HTML,CSS ,Java Script</p>
</div>
    
    </div>
   </div>
   </section>
  )
}

export default Skill