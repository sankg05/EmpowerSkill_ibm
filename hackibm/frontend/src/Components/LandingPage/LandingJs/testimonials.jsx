import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ProfilePic from "../images/man1.jpg";
import { AiFillStar } from "react-icons/ai";
import '../Landingcss/testimonial.css';

const testimonials = [
  // here api call will be remade
  {
    // comment
    text: "Lorem ipsum dolor sit amet consectetur...",  
    // rating
    stars: 5,
    // name of person
    author: "Name1"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur...",
    stars: 2,
    author: "Name2"
  },
  // Add more testimonials
];

const Testimonial = () => {
  return (
    <div id="testimonials" className="work-section-wrapper">
      <div className="work-section-top">
        
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        {/* testimonials are mapped here */}
        <Carousel showArrows={true} showThumbs={false}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <img src={ProfilePic} alt="" />
              <p>{testimonial.text}</p>
              <div className="testimonials-stars-container">
                {[...Array(testimonial.stars)].map((_, starIndex) => (
                  <AiFillStar key={starIndex} />
                ))}
              </div>
              <h2>{testimonial.author}</h2>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
