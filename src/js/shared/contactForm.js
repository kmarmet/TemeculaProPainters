
import React, { Fragment, useState } from "react"
import AnimationWrapper from "./animationWrapper";
import contactForm from "../../styles/contactForm.scss"
const ContactForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState([]);

    const ValidateEmail = () => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const ValidateInputs = () => {
        const _errors = [];
        if (!ValidateEmail()) _errors.push("Invalid Email");
        if (fullName === "" || fullName === null) _errors.push("Name is Required")
        if (message === "" || message === null) _errors.push("A Message is Required")

        if (_errors.length === 0) {
            setFullName("");
            setMessage("");
            setEmail("")
        }
        setErrors(_errors);
    }

    return (
        <section className="contact-form">
            <AnimationWrapper>
                <div className="content-block">
                    <div className="form">
                        <h2 className="title is-2 mb-5">Contact Us <i className="far fa-paper-plane"></i></h2>
                        {errors.length > 0 &&
                            <div className="errors mb-5">
                                {errors.length > 0 && errors.map((error, index) => {
                                    return <p className="error" key={index}>{error}</p>
                                })}
                            </div>
                        }
                        <div className="columns">
                            <div className="field column">
                                <div className="control">
                                    <input className="input" type="text" placeholder="Full Name *" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                                </div>
                            </div>

                            <div className="field column">
                                <div className="control has-icons-left">
                                    <input className="input is-danger" type="email" placeholder="Email Address *" onChange={(e) => setEmail(e.target.value)} value={email} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="field mt-0">
                            <div className="control">
                                <textarea className="textarea" placeholder="Message *" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                            </div>
                        </div>
                        <div className="control">
                            <button className="centered button submit" onClick={ValidateInputs}>send message</button>
                        </div>
                    </div >
                </div>
            </AnimationWrapper>
        </section>
    )
}

export default ContactForm;