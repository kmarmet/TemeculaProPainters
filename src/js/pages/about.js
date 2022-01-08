import React from "react"
import Subpage from "../shared/subpage";
import AnimationWrapper from "../shared/animationWrapper";
import whitePaint from "../../img/about/white-paint.jpg"
import map from "../../img/about/map.jpg"
import { withRouter } from 'react-router';
import "../../styles/pages/_about.scss"

const About = withRouter(({ history, location }) => {
    return (
        <Subpage title="About" className={"about"}>
            <AnimationWrapper>
                <section className="about-text">
                    <div className="columns content-block">
                        <div className="column left">
                            <h2 className="section-title mb-2">About Us</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi cumque, facilis culpa quam consequuntur harum, quos sapiente, et officia fuga tempore vel. Temporibus nemo a iusto molestias minima sapiente quae deserunt eos nobis consequuntur neque maxime nam inventore alias adipisci ea, provident, repudiandae id! Cumque error exercitationem facilis ratione deleniti.</p>
                        </div>
                        <div className="column right">
                            <img src={whitePaint} alt="About Us" />
                        </div>
                    </div>
                </section>
            </AnimationWrapper>
            <section className="service-area">
                <div className="content-block">
                    <AnimationWrapper>
                        <h2 className="section-title mb-2">Proudly Serving Temecula, CA</h2>
                        <ul>
                            <li>location 1</li>
                            <li>location 2</li>
                            <li>locaiton 3</li>
                            <li>location 4</li>
                            <li>location 5</li>
                        </ul>
                    </AnimationWrapper>
                </div>
            </section>
        </Subpage>
    )
})

export default About;