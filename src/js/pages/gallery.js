import React from "react"
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import Subpage from "../shared/subpage";
import AnimationWrapper from "../shared/animationWrapper";
import { SRLWrapper } from "simple-react-lightbox";
import ContactForm from "../shared/contactForm";
import "../../styles/pages/_gallery.scss"

// Standard Images 
import standardImage_One from "../../img/gallery/standard/1.jpg"
import standardImage_Two from "../../img/gallery/standard/2.jpg"
import standardImage_Three from "../../img/gallery/standard/3.jpg"
import standardImage_Four from "../../img/gallery/standard/4.jpg"

// BeforeAfter Images 
import beforeAfterImage_One from "../../img/gallery/before-and-after/1.jpg"
import beforeAfterImage_Two from "../../img/gallery/before-and-after/2.jpg"
import beforeAfterImage_Three from "../../img/gallery/before-and-after/3.jpg"
import beforeAfterImage_Four from "../../img/gallery/before-and-after/4.jpg"
import beforeAfterImage_Five from "../../img/gallery/before-and-after/5.jpg"
import beforeAfterImage_Six from "../../img/gallery/before-and-after/6.jpg"
import beforeAfterImage_Seven from "../../img/gallery/before-and-after/7.jpg"
import beforeAfterImage_Eight from "../../img/gallery/before-and-after/8.jpg"
import beforeAfterImage_Nine from "../../img/gallery/before-and-after/9.jpg"
import beforeAfterImage_Ten from "../../img/gallery/before-and-after/10.jpg"
import beforeAfterImage_Eleven from "../../img/gallery/before-and-after/11.jpg"
import beforeAfterImage_Twelve from "../../img/gallery/before-and-after/12.jpg"
import beforeAfterImage_Thirteen from "../../img/gallery/before-and-after/13.jpg"


const Gallery = withRouter(({ history, location }) => {
    const { pathname } = location;

    return (
        <Subpage title="Gallery" className={"gallery"}>
            <section className="thumbnails">
                <div className="content-block">
                    <AnimationWrapper>
                        <SRLWrapper>
                            <h2>Standard Images</h2>
                            <div className="thumbnail-images">
                                <img src={standardImage_One} />
                                <img src={standardImage_Two} />
                                <img src={standardImage_Three} />
                                <img src={standardImage_Four} />
                            </div>
                            <h2>Before & After Images</h2>
                            <div className="thumbnail-images">
                                <img src={beforeAfterImage_One} alt="One" />
                                <img src={beforeAfterImage_Two} alt="Two" />
                                <img src={beforeAfterImage_Three} alt="Three" />
                                <img src={beforeAfterImage_Four} alt="One" />
                                <img src={beforeAfterImage_Five} alt="One" />
                                <img src={beforeAfterImage_Six} alt="One" />
                                <img src={beforeAfterImage_Seven} alt="One" />
                                <img src={beforeAfterImage_Eight} alt="One" />
                                <img src={beforeAfterImage_Nine} alt="One" />
                                <img src={beforeAfterImage_Ten} alt="One" />
                                <img src={beforeAfterImage_Eleven} alt="One" />
                                <img src={beforeAfterImage_Twelve} alt="One" />
                                <img src={beforeAfterImage_Thirteen} alt="One" />
                            </div>
                        </SRLWrapper>
                    </AnimationWrapper>
                </div>
            </section>
            <ContactForm />
        </Subpage>
    )
})

export default Gallery;