import React from "react"
import AnimationWrapper from "../shared/animationWrapper";
const Subpage = ({ className, title, children }) => {
    return (
        <div className={`subpage ${className}`}>
            <div className="hero">
                <AnimationWrapper>
                    <h1 className="title is-1">{title}</h1>
                </AnimationWrapper>
            </div>
            <div className="content">
                {children}
            </div>

        </div>
    )
}

export default Subpage;