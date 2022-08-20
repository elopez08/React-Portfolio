//These are EXTERNAL imports
import React, { useState, useEffect } from 'react';
//Something new
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
//This if for the motion
import { motion } from 'framer-motion';

//Notice that this is separated?  This group is the INTERNAL imports
//Remember this?  Now we can use it immediately!
import { AppWrap, MotionWrap } from '../../wrapper';
//Remember the client server for the Sanity?
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {

  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  //Testimonial you're currently viewing:
  //Note:  It is set to "0" first since that's the first thing we see
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    //Fetch two data from the Sanity server
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    //Recall that "query is targetting "experiences
    client.fetch(query)
      .then((data) => {

        setTestimonials(data);
      })
    //Look at "skillsQuery".  This is targeting "skills"
    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      })
  }, [])


  const test = testimonials[currentIndex];

  return (
    <>
    {/* This is to check IF testimonials is there by seeing the length of the array. */}
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test.imageurl)} alt= "testimonial"/>
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex -1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>

          </div>
        </>
      )}

      {/* Reserve this for the brands as a testimonial in the future */}
      {/* 
      <div className="app__testimonials-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition= {{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
      */}
      
    </>
  )
}

//export default Testimonial
export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'), 
  'testimonial',
  "app__primarybg"
);