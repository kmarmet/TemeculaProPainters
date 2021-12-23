import React from "react"
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import Subpage from "../shared/subpage";
import ContactForm from "../shared/contactForm";
import AnimationWrapper from "../shared/animationWrapper";
import "../../styles/bundle.scss"
import "../../styles/pages/_home.scss"

const Contact = withRouter(({ history, location }) => {
    const { pathname } = location;

    return (
        <Subpage title="Contact" className={"contact"}>
            {/* CONTACT FORM */}
            <section className="contact-form">
                <AnimationWrapper>
                    <div className="content-block">
                        <ContactForm />
                    </div>
                </AnimationWrapper>
            </section>
        </Subpage>
    )
})

export default Contact;