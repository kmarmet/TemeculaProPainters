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
                            <p>Temecula Pro Painters® of Temecula, CA is pleased to provide the best painting services to our customers. Our painting services range in size from staining a fence to painting the entire interior and exterior of your home. You can count on providing home painting to your specific neighborhood in and around Murrieta.</p>

                            <h2 className="section-title mb-2">Mission Statement</h2>
                            <p>Temecula pro painters strives to exhibit the highest degree of professionalism by developing innovative solutions to meet our customer's unique needs and expectations.</p>
                            <p>We honor our responsibilities as a recognized leader in the painting and protective coatings industry, by providing our employees with the highest level of technical training, safety education, and commitment to excellence, while providing our customers with the highest level of service and quality assurance in a safe and environmentally responsible manner.</p>
                            <p>We will respect our customer's need to have a project completed as specified, within schedule, and on budget.</p>
                            <p>We will always do what we say we are going to do.</p>
                            <p>We Adhere to Paint Warranty Guidelines</p>
                        </div>
                        <div className="column right">
                            <img src={whitePaint} alt="About Us" />
                        </div>
                    </div>
                </section>
            </AnimationWrapper>
            <section className="paint-preference">
                <p> Temecula Pro Painters prefers Sherwin-Williams Paints because of their lifetime guarantee, low- and no-VOC levels, and superior quality.  To comply with the standards of the paint manufacturer, we apply the paint to the proper manufacturer's specified thickness. This insures you receive their product guarantee and can offer a seven-year warranty on every project.</p>
            </section>
            <section className="service-area">
                <div className="content-block">
                    <AnimationWrapper>
                        <h2 className="section-title mb-2 text-shadow">Proudly Serving Temecula, CA</h2>
                    </AnimationWrapper>
                </div>
            </section>
        </Subpage>
    )
})

export default About;