import React, { useState } from 'react'

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

//So we're using the "images.logo".  First, we imported from the "constants" folder.  From there, it detects the first .js on that folder, which is "images.js" since it has the {images} bracket on it.  Then, after loading the .js, we can then call it by using "images.(name)".  That (name) is the name of the import INSIDE "images.js".  So in other words, in short, it did this:

/*
  import logo from '../assets/logo.png';
*/

//Update:  Putting in the resume here as well

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.personallogo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact', 'resume'].map((item) => (
          <li className = "app__flex p-text" key={`link-${item}`}>
            <div />
            { item === 'resume'  ? <a href = "https://elopez08.github.io/Edgardo-Portfolio-Form/assets/files/Edgardo%20Lopez%20Resume%20Software%20PDF%20File.pdf" download>{item}</a>  :  <a href = {`#${item}`}>{item}</a> }
            {/*<a href = {`#${item}`}>{item}</a>*/}
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
  
        <HiMenuAlt4 onClick={() => setToggle(true)}/>

        {toggle && (
          <motion.div
            whileInView={{ x: [300,0] }}
            transition={{duration: 0.85, ease: 'easeOut'}}
          >
            <HiX onClick = {() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href = {`#${item}`} onClick = {() => setToggle(false)}>{item}</a>
                </li>
              ))}
              </ul>
          </motion.div>
        )}

      </div>

    </nav>
  )
}

export default Navbar