import React, {Component} from "react"
import { FaDivide } from "../../node_modules/react-icons/fa";
import { IoIosCloseCircle } from "../../node_modules/react-icons/io";
import { FaPhoneSquare } from "../../node_modules/react-icons/fa";
import { FaLinkedin } from "../../node_modules/react-icons/fa";
import { IoIosNavigate } from "../../node_modules/react-icons/io";


class ContactForm extends Component {
    render() {
        return (
            <div className="contact-form-container">
                <div className="close" onClick={hideForm}><IoIosCloseCircle /></div>
                <div className="form-header">
                    <h3 className="title">Contact Us</h3>
                    <p className="welcome">Please submit the form below and we will get back to you as soon as possible.</p>
                </div>                
                <form className="contact-form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <p>
                        <label>Name <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Email <input type="email" name="email" required /></label>
                    </p>
                    <p>
                        <label>Phone number <input type="tel" name="phone" /></label>
                    </p>
                    <p>
                        <label>Message <textarea rows="6" name="body"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>

                <div className="contact-footer">
                    <ul>
                        <li><IoIosNavigate /></li>
                        <li><FaPhoneSquare /></li>
                        <li><FaLinkedin /></li>
                    </ul>                    
                </div>
            </div>
            
        )
    }
}

const hideForm = (event) => {
    document.querySelector('.contact-form-container').classList.remove('show')
}
export default ContactForm