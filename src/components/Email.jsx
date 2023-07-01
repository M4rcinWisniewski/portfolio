import '../styles/Email.css'
import '../styles/Email-mobile.css'
import emailjs from '@emailjs/browser';
import { useRef, } from 'react';
import image from '../images/letter.png'

export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_onbemwv', 'template_hvmxiz9', form.current, 'ajYgf-wmRFz9yN0Z0')
        .then((result) => {
            console.log(result.text);
            alert('Wiadomość została wysłana!');
        }, (error) => {
            console.log(error.text);
            alert('Wiadomość została wysłana!');
        });
    };

  return (
    <form className="feedback" ref={form} onSubmit={sendEmail}>
        <div className='leftD'>
        <h1>Napisz do mnie!</h1>
        <img className="image"src={image} alt="" />
        </div>
        <div className='form'>
            <input type="text" name="name" className="question" id="nme" required autocomplete="off" />
            <label for="nme"><span>What's your name?</span></label>
            <input type="email" name="name" className="question" id="nme" required autocomplete="off" />
            <label for="nme"><span>What's your Email?</span></label>
            <textarea name="message" rows="2" className="question" id="msg" required autocomplete="off"></textarea>
            <label for="msg"><span>What's your message?</span></label>
            <input type="submit" value="Submit!" onSubmit={sendEmail} />
        </div>
    </form>
  );
};




export default ContactUs  