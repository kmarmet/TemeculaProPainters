import React from "react"
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import Subpage from "../shared/subpage";
import AnimationWrapper from "../shared/animationWrapper";
import { SRLWrapper } from "simple-react-lightbox";
import ContactForm from "../shared/contactForm";
import "../../styles/bundle.scss"
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
                                <img src={beforeAfterImage_One} />
                                <img src={beforeAfterImage_Two} />
                                <img src={beforeAfterImage_Three} />
                                <img src={beforeAfterImage_Four} />
                                <img src={beforeAfterImage_Five} />
                                <img src={beforeAfterImage_Six} />
                                <img src={beforeAfterImage_Seven} />
                                <img src={beforeAfterImage_Eight} />
                                <img src={beforeAfterImage_Nine} />
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