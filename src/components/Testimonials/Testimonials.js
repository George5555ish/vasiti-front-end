import React from 'react';
import './Testimonials.css'

function Testimonials({testimonials}) {


   
    return (
        <div className="testimonials margin-class">
        {
            testimonials.map((testimonial, index) => {
                return(
                    <div key={index} className={testimonial.type.toUpperCase() ==='CUSTOMER' ? "testimonials-container" : "testimonials-container padding-down alt-div"}>
                        <img src={testimonial.imageUrl} alt={`testimonial ${index}`}/>
                        <h3> {testimonial.name}</h3>
                        <div className="testimonial-child">
                           {
                               testimonial.location ? 
                               <><p className="testimonial-location">{testimonial.location}</p>
                            <p  className={testimonial.type.toUpperCase() ==='CUSTOMER' ? "testimonial-type blue-class": "testimonial-type green-class"}>
                                {testimonial.type.toUpperCase()}
                            </p></> :  <p className={testimonial.type.toUpperCase() ==='CUSTOMER' ? "testimonial-type blue-class": "testimonial-type green-class"}>
                                {testimonial.type.toUpperCase()}
                            </p>

                           }
                        </div>
                        <p className="testimony">{testimonial.testimony}</p>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Testimonials
