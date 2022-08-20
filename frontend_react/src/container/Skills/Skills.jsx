import React, { useState, useEffect } from 'react'

//This if for the motion
import { motion } from 'framer-motion';
//This is new being added to Skills
import ReactTooltip from 'react-tooltip';
//Remember this?  Now we can use it immediately!
import { AppWrap, MotionWrap } from '../../wrapper';
//Remember the client server for the Sanity?
import { urlFor, client } from '../../client';


import './Skills.scss';


const Skills = () => {

  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    //Fetch two data from the Sanity server
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    //Recall that "query is targetting "experiences
    client.fetch(query)
      .then((data) => {

        console.log(data)

        setExperience(data);
      })
    //Look at "skillsQuery".  This is targeting "skills"
    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
  }, [])

  return (
    <>
      <h2 className="head-text">Skill & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {/* Pay close attention:  Notice that "skills" is in the ".map"?  That's the one coming from the useState while "skill" is the name we're using for this function, a single "skill" that'll display */}
          {skills?.map((skill) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style = {{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt= {skill.name}/>
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {/* Use this trick.  You CAN inspect a given array from Sanity and then display it! */}
          {/*{console.log('here ' ,experience.works)}*/}
          {experience?.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className = "app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                  <motion.div
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 0.5}}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                  </motion.div>
                  <ReactTooltip
                    id={work.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                  >
                    {work.desc}
                  </ReactTooltip>
                </>
                ))}
              </motion.div>
            </motion.div>

            ))}
          
        </motion.div>

      </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills',
  "app__whitebg"
);