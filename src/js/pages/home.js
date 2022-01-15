import React from "react"
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import ImageSlider from "../../js/shared/slider"
import Spacer from "../shared/spacer"
import ContactForm from "../shared/contactForm";
import AnimationWrapper from "../shared/animationWrapper";
import Constants from "../constants"
import "../../styles/bundle.scss"
import "../../styles/pages/_home.scss"

import EstimateImage from "../../img/brushes.jpg"

const Home = withRouter(({ history, location }) => {
    const { pathname } = location;

    return (
        <div className="page home">
            <section className="hero">
                <AnimationWrapper>
                    <div className="text animate__animated animate__fadeInUp">
                        <h1>Temecula Pro Painters <i className="fas fa-brush"></i></h1>
                        <h3 className="subtitle">Temecula Pro Painters strives to exhibit the highest degree of professionalism by developing innovative solutions to meet our customer's unique needs and expectations</h3>
                        <Spacer />
                        <div className="cta-buttons">
                            <button className="blue call">
                                <a href={`tel:${Constants.mainPhone}`}>Call Now <i className="fas fa-phone"></i></a>
                            </button>
                            <button className="services">
                                <Link to="/services">Services <i className="fas fa-tools"></i></Link>
                            </button>
                        </div>
                    </div>
                </AnimationWrapper>
            </section>
            <section className="about">
                <AnimationWrapper>
                    <div className="content-block">
                        <h2 className="title is-2 mb-5">About Us <i className="fas fa-info-circle"></i></h2>
                        <p>Temecula Pro Painters® of Temecula, CA is pleased to provide the best painting services to our customers. Our painting services range in size from staining a fence to painting the entire interior and exterior of your home. You can count on providing home painting to your specific neighborhood in and around Murrieta.</p>
                        <div className="actions">
                            <button className="grey mt-5">
                                <Link to="/about">learn more</Link>
                            </button>
                        </div>
                    </div>
                </AnimationWrapper>
            </section>
            <section className="with-bg transforming">
                <AnimationWrapper>

                    <div className="text">
                        <p className="title is-3 text-shadow">Transforming homes</p>
                        <p className="title is-3 text-shadow">one room at a time</p>
                    </div>


                </AnimationWrapper>
            </section>
            <section className="services">
                <AnimationWrapper>
                    <div className="content-block animate__animated animate__fadeInUp">
                        <h2 className="title is-2 mb-5">Services <i className="fas fa-tools"></i></h2>
                        <div className="columns">
                            <div className="column">
                                <h3 className="title is-3 mb-2">Painting</h3>
                                <p>With over 20 years of experience, we at Temecula Pro Painters have spent enough time working with different materials in different styles under different circumstances to know exactly what is needed for every job. From residential interiors to industrial coatings, we've done it all.</p>
                            </div>
                            <div className="column">
                                <h3 className="title is-3 mb-2">Powerwashing</h3>
                                <p>When it comes to the most effective and the strongest power washing service, Temecula Pro Painters has been serving Southern California since 1987. We use the best equipment with the strongest pressure to do a deep effective cleaning. </p>
                            </div>
                            <div className="column">
                                <h3 className="title is-3 mb-2">More</h3>
                                <p>We offer many more services including cabinet refinishing, exterior painting and much more! Visit our Services page to get an in depth look at the services we provide.</p>
                            </div>
                        </div>
                        <div className="actions">
                            <button className="grey mt-3">
                                <Link to="/services">learn more</Link>
                            </button>
                        </div>
                    </div>
                </AnimationWrapper>
            </section>
            {/* ESTIMATE */}
            <section className="with-bg estimate">
                <AnimationWrapper>
                    <div className="content-block">
                        <div className="card animate__animated animate__bounce">
                            <div className="columns">
                                <div className="column left is-two-thirds">
                                    <img src={EstimateImage} alt="Schedule an Estimate" />
                                    <div className="text">
                                        <h4 className="title is-4 mb-2">Schedule an Estimate</h4>
                                        <p>Schedule your estimate today and let us contribute to your peace of mind during this uncertain time.</p>
                                        <br />


                                    </div>
                                </div>
                                <div className="column right">
                                    <button className="blue call">
                                        <a href={`tel:${Constants.mainPhone}`}>Call Now <i className="fas fa-phone"></i></a>
                                    </button>
                                </div>
                            </div>
                            <div className="methods">
                                <p>Estimation Methods</p>
                                <ul>
                                    <li>From photos you send us</li>
                                    <li>Using a smartphone app </li>
                                    <li>Drive-by estimate for exterior projects</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimationWrapper>
            </section>
            {/* GALLERY */}
            <section className="image-slider">
                <AnimationWrapper>
                    <div className="content-block animate__animated animate__fadeInUp">
                        <h2 className="title is-2 mb-5">Gallery <i className="fas fa-images"></i></h2>
                        <ImageSlider />
                    </div>
                </AnimationWrapper>
            </section>
            {/* CONTACT FORM */}
            <ContactForm />
        </div>
    )
})

export default Home;