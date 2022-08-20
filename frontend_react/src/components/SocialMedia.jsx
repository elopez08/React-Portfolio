import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go'
import {GrLinkedin} from 'react-icons/gr';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
    <a href= "https://github.com/elopez08">
      <div>
        <GoMarkGithub />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/edgardo-lopez-a54927108/">
      <div>
        <GrLinkedin/ >
      </div>
    </a>
    
  </div>
);

export default SocialMedia;