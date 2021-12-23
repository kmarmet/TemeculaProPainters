import React from "react"
import { AnimatedOnScroll } from "react-animated-css-onscroll";
const AnimationWrapper = ({ children }) => {
    return (
        <AnimatedOnScroll animationIn="fadeInUp">
            {children}
        </AnimatedOnScroll>
    )
}

export default AnimationWrapper;