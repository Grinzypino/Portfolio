import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () =>{

const [letterClass, setLetterClass]= useState('animated-text')
const refForm = useRef()
useEffect(() => {
    setTimeout(() => {
    return setLetterClass('animated-text-hover')
    }, 3000)
}, []);

const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
        'service_4g90qdm',
        'template_kmdn6dc',
        refForm.current,
        'u7dFnpoZgIPVxaomu'
    )
    .then(
        () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, please try again.')
        }
    )
}

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
        <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ','m', 'e']}
            ind={15}
            />
        </h1>
        <p>
        Hello there! I'm thrilled that you're considering reaching out. I am open to exploring new projects or internships that align with my passion for front-end development and software engineering. 
        Your inquiry is important to me, and I am eager to connect and discuss how my skills and enthusiasm can contribute to your team's success.
        </p>
        <p>
        Don't hesitate to drop me a message using the contact form below, and I'll get back to you promptly. Let's create something remarkable together!
        </p>
        <div className='contact-form'>
        <form ref={refForm} onSubmit={sendEmail}>
        <ul>
            <li className='half'>
                <input type='text' name='name' placeholder='Name' required/>
            </li>
            <li className='half'>
                <input type='email' name='email' placeholder='Email' required/>
            </li>
            <li>
                <input type='text' name='subject' placeholder='Subject' required/>
            </li>
            <li>
                <textarea name='message' placeholder='Message' required/>
            </li>
            <li>
                <input type='submit' className='flat-button' value='send'/>           
            </li>

        </ul>
        </form>
        </div>
            </div>
        </div>
        <div className='info-map'>
            Jeet Gupta,
            <br/>
            Vivekanand Hostel, IIT BHU
            <br/>
            Varanasi, U.P. 
            <br/>
            PinCode: 221005
            <br/>
            <span>jeetgupta11gp@gmail.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[25.25907377422935, 82.98681004437212]} zoom={18}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[25.25907377422935, 82.98681004437212]}>
              <Popup>Jeet lives here, come over for some chit chat!</Popup>
            </Marker>
            </MapContainer>   

        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact