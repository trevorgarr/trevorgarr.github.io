import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
          .sendForm('default_service', 'template_zrlu1kj', form.current, 'xU1DcVU4sw37YXr_g')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
    }

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 2000)
    }, [])

    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>
                    TODO: If you have any requests or
                    questions, don't hesitate to contact me using the form below.
                </p>
                <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input placeholder="Name" type="text" name="name" required />
                        </li>
                        <li className="half">
                            <input placeholder="Email" type="email" name="email" required/>
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <li>
                            <textarea placeholder="Message" name="message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND" />
                        </li>
                    </ul>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact