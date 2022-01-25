import React from "react"
import Subpage from "../shared/subpage";
import AnimationWrapper from "../shared/animationWrapper";
import ContactForm from "../shared/contactForm";
import "../../styles/pages/_services.scss"
import servicePainting from "../../img/services/service-painting.jpg"
import servicePressureWashing from "../../img/services/service-pressure-washing.jpg"
import serviceCabinets from "../../img/services/service-cabinets.jpg"
import serviceExteriorPainting from "../../img/services/service-exterior-painting.jpg"
import { withRouter } from 'react-router';
import Constants from "../constants";

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
                            <p>When you're in need of a good paint job, never underestimate the importance of hiring the right contractor. Not many people realize how much goes into a truly professional, long-lasting paint job. There is a major difference, for instance, between painting on wood and on metal, or between painting a home and an industrial plant. Every individual job requires a unique set of skills, products and premium equipment.</p>
                            <p>With over 20 years of experience, we at Temecula Pro Painters have spent enough time working with different materials in different styles under different circumstances to know exactly what is needed for every job. From residential interiors to industrial coatings, we've done it all.</p>
                            <button className="button blue mt-5"><i className="far fa-calendar-alt"></i> <a href={`tel:${Constants.mainPhone}`}>Book Service</a></button>
                        </div>
                    </div>
                    <div className="content-block">
                        <h2>The Process</h2>
                        <p>The colors of the inside of your home or office can affect your everyday life in many ways. That is why Temecula Pro Painters focuses our attention on every detail, from personal color preference to how it matches your furniture, tile, cabinets and even the exterior view.  Where digital color renderings are used for exteriors, color consultations and painted brush-outs are available for interiors.</p>
                        <p>We carefully move all furniture to a well-protected area, then cover and protect all flooring, valuables, and furniture.  Your walls are then fully prepared, cleaned, plaster holes filled, and texture repaired, as needed.</p>
                        <p>From there, we prime as needed: cut in walls and roll the chosen paint onto the walls. We also sand and prepare the trim, then hand-brush the trim with only the best self-leveling, low- or no-VOC paints to give the smoothest, hardest and most durable finish.  The results are breathtaking and the quality is outstanding.</p>
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
                            <p>When it comes to the most effective and the strongest power washing service, Temecula Pro Painters has been serving Southern California since 1987. We use the best equipment with the strongest pressure to do a deep effective cleaning. Our highly skilled and trained technicians provide residential, commercial and industrial application power washing. Our prices are very affordable and our products are environmentally safe. We also clean up afterwards and make sure the area is clean and safe.</p>
                            <p>It stands to reason that the outside area of your business and your home are important to the overall appearance. Clean exterior areas, including walkways, garage doors, exterior walls and driveways, give a neat and tidy presentation while at the same time limiting the amounts of dirt and debri that finds its way inside.</p>
                            <button className="button mt-5"><i className="far fa-calendar-alt"></i> <a href={`tel:${Constants.mainPhone}`}>Book Service</a></button>
                        </div>
                    </div>
                </section>
            </AnimationWrapper>
            <AnimationWrapper>
                <section className="service exterior-painting ">
                    <div className="columns content-block">
                        <div className="column left">
                            <img src={serviceExteriorPainting} alt="Pressure Washing Service" />
                        </div>
                        <div className="column right">
                            <h2 className="section-title mb-2">Exterior Painting</h2>
                            <p>Our team provides a variety of custom exterior painting services to ensure your home stands out among the rest. We are the right exterior home painters for the job. Color is an important concern for every exterior project and we are here to help you through that process.  We can offer fan decks of colors to look through, digital renderings of a photo of your home with color schemes applied, colored 8x11 sheets or even apply small samples to a wall for review.  These are all options available to help you with your color choices.  </p>
                            <p>Once your colors are chosen, we will schedule and begin work.  If your house was built before 1978 we will use lead safety precautions as outlined by the EPA for RRP contractors, which  means protecting all flooring and plants with thick plastic and Duct Tape.  We then wet scrape with full containment and cleanup using HEPPA Vacuums.  All bare areas are then properly primed with chalking or stains.  Finally, we caulk trim, windows, cracked siding, or damaged wood, and use Elastomeric patch for all stucco cracks.  </p>
                            <p>Once all the necessary preparations are done, we will paint all surfaces with two full coats of ultra-premium paints as described by the PDCA and the paint manufacturer.  We make sure to apply all paint to the proper thickness to ensure all manufacturer warranties apply and that the paint will last for as long as possible. That means we use far more paint than most painters, but this ensures we are able to warranty our work much longer than most.  </p>
                            <button className="button blue mt-5"><i className="far fa-calendar-alt"></i> <a href={`tel:${Constants.mainPhone}`}>Book Service</a></button>
                        </div>
                    </div>
                </section>
            </AnimationWrapper>
            <AnimationWrapper>
                <section className="service cabinets ">
                    <div className="columns content-block">
                        <div className="column left">
                            <img src={serviceCabinets} alt="Other Services" />
                        </div>
                        <div className="column right">
                            <h2 className="section-title mb-2">Cabinet Refinishing</h2>
                            <p>The kitchen is commonly referred to as, “the most important room in the house.” Because your kitchen cabinets get so much scrutiny on a daily basis, Temecula Pro Painters, in the Inland Empire of CA highly-rated and reputable painting company, has world-class cabinet painters who specialize in staining (refinishing) cabinets by sanding/stripping to bare wood.</p>
                            <p>We then condition the wood, stain it, then apply the first clear coat. These steps are followed by sanding with a fine grit sandpaper and applying another clear coat. If you're looking for industry-leading, professional cabinet painters, you’ve found the right kitchen cabinet painting company.</p>
                            <p>Our mastery in the ability to paint kitchen cabinets is a similar process to staining. Because we have high specifications, it is an arduous process. Similar to staining, we begin with fully sanding your cabinets before they receive a full priming. Before we lay the first coat we caulk areas as needed. As with staining, sanding with a high grit sandpaper is needed before applying the final coat.</p>


                        </div>
                    </div>
                    <div className="content-block">
                        <p>The finish for kitchen cabinets is especially important because you see them closely throughout the day. So Temecula Pro Painters recommends a hard finish that levels out to a smooth finish. It also means that for most cabinet projects, we spray the paint on, but don't brush or roll it. This allows for a very smooth finish and a great looking final product. Kitchen cabinet painting is an art we have mastered, and our cabinet painters consistently wow clients with their kitchen transformations. Our kitchen cabinet painting contractors don't just contract a kitchen cabinet painter for your home, we hire an artist.</p>
                        <p>Following our strict standards of cleanliness on job sites is required by all crew members. Our kitchen cabinet painters pay extra attention to tidiness on the job. Your search for a kitchen cabinet painting company ends here. Our service area is expansive and includes all parts of the Inland Empire area. We have the utmost confidence in our expert work and competitive pricing for all residential and commercial clients who seek a cabinet painting company with a spotless reputation, vast portfolio, elite workmanship and attention to detail.
                        </p>
                    </div>
                    <button className="button mt-5"><i className="far fa-calendar-alt"></i> <a href={`tel:${Constants.mainPhone}`}>Book Service</a></button>
                </section>
            </AnimationWrapper>
            <ContactForm />
        </Subpage>
    )
})

export default Services;