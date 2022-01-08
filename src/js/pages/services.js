import React from "react"
import Subpage from "../shared/subpage";
import AnimationWrapper from "../shared/animationWrapper";
import ContactForm from "../shared/contactForm";
import "../../styles/pages/_services.scss"
import servicePainting from "../../img/services/service-painting.jpg"
import servicePressureWashing from "../../img/services/service-pressure-washing.jpg"
import serviceOther from "../../img/services/service-other.jpg"
import { withRouter } from 'react-router';

const Services = withRouter(({ history, location }) => {
    return (
        <Subpage title="Services" className={"services"}>
            <AnimationWrapper>
                <section className="painting service ">
                    <div className="columns content-block">
                        <div className="column left">
                            <img src={servicePainting} alt="Painting Service" />
                        </div>
                        <div className="column right">
                            <h2 className="section-title mb-2">Painting</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi cumque, facilis culpa quam consequuntur harum, quos sapiente, et officia fuga tempore vel. Temporibus nemo a iusto molestias minima sapiente quae deserunt eos nobis consequuntur neque maxime nam inventore alias adipisci ea, provident, repudiandae id! Cumque error exercitationem facilis ratione deleniti.</p>
                            <button className="button blue mt-5"><i className="far fa-calendar-alt"></i> <a href="tel:3300000000">Book Service</a></button>
                        </div>
                    </div>
                </section>
            </AnimationWrapper>
            <AnimationWrapper>
                <section className="service pressure-washing ">
                    <div className="columns content-block">
                        <div className="column left">
                            <img src={servicePressureWashing} alt="Pressure Washing Service" />
                        </div>
                        <div className="column right">
                            <h2 className="section-title mb-2">Pressure Washing</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi cumque, facilis culpa quam consequuntur harum, quos sapiente, et officia fuga tempore vel. Temporibus nemo a iusto molestias minima sapiente quae deserunt eos nobis consequuntur neque maxime nam inventore alias adipisci ea, provident, repudiandae id! Cumque error exercitationem facilis ratione deleniti.</p>
                            <button className="button mt-5"><i className="far fa-calendar-alt"></i> <a href="tel:3300000000">Book Service</a></button>
                        </div>
                    </div>
                </section>
            </AnimationWrapper>
            <AnimationWrapper>
                <section className="service other ">
                    <div className="columns content-block">
                        <div className="column left">
                            <img src={serviceOther} alt="Other Services" />
                        </div>
                        <div className="column right">
                            <h2 className="section-title mb-2">Other Services</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi cumque, facilis culpa quam consequuntur harum, quos sapiente, et officia fuga tempore vel. Temporibus nemo a iusto molestias minima sapiente quae deserunt eos nobis consequuntur neque maxime nam inventore alias adipisci ea, provident, repudiandae id! Cumque error exercitationem facilis ratione deleniti.</p>
                            <button className="button mt-5"><i className="far fa-calendar-alt"></i> <a href="tel:3300000000">Book Service</a></button>
                        </div>
                    </div>
                </section>
            </AnimationWrapper>
            <ContactForm />
        </Subpage>
    )
})

export default Services;