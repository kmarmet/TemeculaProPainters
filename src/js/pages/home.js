import React from "react"
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import ImageSlider from "../../js/shared/slider"
import Spacer from "../shared/spacer"
import ContactForm from "../shared/contactForm";
import AnimationWrapper from "../shared/animationWrapper";
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
                        <Spacer />
                        <div className="cta-buttons">
                            <button className="blue call">
                                <a href="tel:3300000000">Call Now <i className="fas fa-phone"></i></a>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis repudiandae et vitae impedit beatae temporibus ratione iure, quos optio amet perspiciatis dolorem excepturi, voluptates repellat ducimus! Nesciunt ut earum rerum obcaecati veritatis officiis dolores eos vero consectetur at fuga expedita officia ratione laborum est quam, repellat labore maiores possimus dignissimos cum, non nulla?</p>
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis repudiandae et vitae impedit beatae temporibus ratione iure, quos optio amet perspiciatis dolorem excepturi, voluptates repellat ducimus! </p>
                            </div>
                            <div className="column">
                                <h3 className="title is-3 mb-2">Powerwashing</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis repudiandae et vitae impedit beatae temporibus ratione iure, quos optio amet perspiciatis dolorem excepturi, voluptates repellat ducimus! </p>
                            </div>
                            <div className="column">
                                <h3 className="title is-3 mb-2">More</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis repudiandae et vitae impedit beatae temporibus ratione iure, quos optio amet perspiciatis dolorem excepturi, voluptates repellat ducimus! </p>
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
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, repellat.</p>
                                    </div>
                                </div>
                                <div className="column right">
                                    <button className="blue call">
                                        <a href="tel:3300000000">Call Now <i className="fas fa-phone"></i></a>
                                    </button>
                                </div>
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