import { useRef } from 'react';
import './index.css';
import emailjs from '@emailjs/browser';


const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
      console.log(result).catch((error)=>{
        console.log(error);
      })
    })
  }
 
  return (
    <form ref={form} onSubmit={sendEmail} className='form'>
        <input type="text" name="user_name" placeholder='Name' required />
        <input type="email" name="user_email" placeholder='Email' required/>
        <textarea name="message" placeholder='Message' required/>
        <input type="submit" value="Send" className='input-btn'/>
    </form>
  )
}

export default Form