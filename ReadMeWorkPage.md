PLEASE go to the "HigherEndComponent" FIRST.  That has a lot of information in terms of "wrapper" and it is REALLY important.

1.  Type the following:

```
import React, { useState, useEffect } from 'react'

//Something new
import { AiFillEye, AiFillGitHub } from 'react/icons/ai';
//This if for the motion
import { motion } from 'framer-motion';

//Remember this?  Now we can use it immediately!
import { AppWrap } from '../../wrapper';
//Remember the client server for the Sanity?
import { urlFor, client } from '../../client';

import './Work.scss';

const Work = () => {

  

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick = {() => handleWorkFilter(item)}
          >

          </div>
        ))}
      </div>
    </>
  )
}

export default Work
```

Notice a few properties that we used previously and now we're using this one.

2.  Do this:
```
  const handleWorkFilter = (item) => {

  }
```
This is for the property that's inside the "onClick" function

3.  Apply this on the div:
```
 className = {`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
 ```

 We have a few properties that are set up as well as an "activeFilter" of the "item".  If it's there, then do the "item-active" property.  Otherwise, leave it empty.  This is only if we have some sort of information.

 4. PLEASE BE CAREFUL ON YOUR WRITING!
 ```
 'react-icons/ai'
 ```
 IS THE ACTUAL THING!

 5. Write the following:
 ```
 <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
 ```

 6. Set the motion with <motion>
 -write this first:
 ```
const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
 ```
 Then:
```
<motion.div
        animate = {animateCard}
        transition = {{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >

</motion.div>
```

This is defining the motion for the data, but we still need to extract the data.  Remember:  We did this before and we already got the "Sanity" information from before in another section, so we can do the same method here

7.  Now we need to get the information from "Sanity".  Do this:
```
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])
```
where query is the information from "works".  And also remember that "client" was already defined in the "client" folder.  Recall that the "client.js" has the sanityClient, imageUrlBuilder as well as the Id and the token for our database!

8.  Create the "useStateSnippet" and do the following:
```
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
```
where both of these states originally start out as "empty" arrays.

With that in mind, we have now grabbed the information from Sanity!  Keep in mind that BOTH "setWorks" AND "setFilterWork" are both the SAME data extracted from the query "works".

9.  Apply this:
```
<motion.div
        animate = {animateCard}
        transition = {{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name}/>
            </div>
          </div>
        ))}
      </motion.div>
```

We applied the properties of the animation and also we got the extracted information.  Recall that "work" is the name of the map and the "index" is an array identity.  NOTHING should happen because we have NO work, so we need to go back to the Sanity server to do that.

10. Go to "Sanity" and make sure you fill out the information for "Works"

11. Add this below the <img>
```
            <motion.div
                whileHover={{opacity: [0,1]}}
                transition={{ duration: 0.25, ease: 'easeInOut',  staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
```
There's a new property called "staggerChildren".  This means that elements is going to show ONE AFTER ANOTHER

12. Assign an anchor tag <a> inside <motion.div>:
```
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                </a>
```
13. Make this inside the anchor tag:
```
                  <motion.div
                    whileInView={{scale: [0,1]}}
                    whileHover={{scale: [1,0.9]}}
                    transition={{ duration: 0.25}}
                    className="app__flex"
                  >

                  </motion.div>
```

14. Finally, put this inside:
```
<AiFillEye />
```

You should see the eye:



Note that it is REALLY REALLY small right now.

15. Duplicate the anchor tag:
```
<a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0,1]}}
                    whileHover={{scale: [1,0.9]}}
                    transition={{ duration: 0.25}}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
```
Copy this BELOW the "AiFillEye" anchor tag

16. Under the </motion.div> AND </div>, 
```
<div className="app__work-content app__flex">
              <h4 className="bolt-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
            </div>
```

If we do everythign correctly, we should see the description:

((description-with-icons))

17. Add this below the <p> from previous step:
```
<div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
```

18. Remember:  We need the AppWrap, so we change the bottom portion to look something like this:
```
export default AppWrap(Work, 'work');
```

It's going to look bad, but remember:  We haven't done any properties for the handleWorkFilter just yet.  We'll have to do that next

19. To begin, let's go to the "Work.scss" for the styling of this specific document.

Side note:  When I applied ".app__works{}" inside the "Work.scss", the compilation has finally been completed.  This confirms it:  The error is there solely due to the fact that there was a tag that WAS NEVER used.  If and ONLY if all the tags have been mapped out, targetted, and used inside the project, then you'll have NO errors.  The error was something that was intimidating, but now, this is a great thing since we can see what we are missing from our work!

20. Apply the properties that is being mentioned.  Look at the comments to see additioinal information.

There are a lot of lines to go through, but should it work, the result is something like this:

((work-after-scss))

21. One more thing:  The tags that were located above isn't working.  We need to change something in the "work.jsx"

Apply this:
```
const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);

      if(item ==='All'){
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500);
  }
```

However, at the start, we couldn't see anything.  I decided to use another GitHub project with the "Weather Report" that had a tag "Web App".  When I did that, it now appears in the site.

With that out of the way, we finally reach the "Work" section and it is displaying with full animation!