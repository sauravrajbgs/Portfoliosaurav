import React, { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';
import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import facebook from '../../assets/facebook.png';
import facebookicon from '../../assets/facebook-icon.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';

const Contact= ()=> {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
       
    emailjs.sendForm('service_dgtchtu', 'template_moxqq0o', form.current,  'yWPQzVuSmlJCWb-zp',
          )
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              console.log("Email sent sucessfully !")
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
        
  return (
    <section id='contactPage'>
        <div id='client'>
            <h1 className='clientPageTitle'>Client</h1>
            <p className='clientDesc'>I have had a the oppertunity work with diverse group of companies</p>
            <div className='clientImgs'>
                <img src={walmart}alt=''className='clientImg'></img>
                <img src={adobe}alt=''className='clientImg'></img>
                <img src={microsoft}alt=''className='clientImg'></img>
                <img src={facebook}alt=''className='clientImg'></img>
            </div>
        </div>
        <div id='contact'>
            <h1 className='clientPageTitle'>Contact Us</h1>
            <span className='contactDesc'>please fill out the form to discuss any work opportunity</span>
            <form className='contactForm'ref={form} onSubmit={sendEmail}>
                <input type='text'className='name'placeholder=' your name' name='from_name'/>
                <input type='email' className='email'placeholder='your email' name= 'from_email'/>
                <textarea className='msg' name='message'rows='5'placeholder='your message'/>
                <button type='submit'value='send' className='submitBtn' >submit</button>
                <div className='links'>
                    <img src={facebookicon}alt=''className='link'/>
                    <img src={instagram}alt=''className='link'/>
                    <img src={twitter}alt=''className='link'/>
                    <img src={youtube}alt=''className='link'/>
                </div>
            </form>
        </div>

    </section>
  )
}

export default Contact;