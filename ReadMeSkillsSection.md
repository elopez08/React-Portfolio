Before we get to this, be sure to look at the notes for the "WorkPage".

1.  Before we begin, apply the general ideas for the "React"

2.  We need to do:
```
npm install react-tooltip
```

We never installed it!

3.  Other than that, follow the same method as before.  I did leave a comment explaining more as to how "skills" and "skill" differ from one another.

4.  Once you are done, make the "skills" information.  Go to the Sanity site and then make that.

When we are done, we can see this:

Note, though, that the icons differ in sizes and it looks a bit messy.  We need to do something for this to work properly.

5.  Go to "Skills.scss" to start designing.  All the comments will be there just in case to see what is going on and where it is going

6.  We have a second <motion.div>.  This one, though, we're going to have something different:
```
data-tip
data-for
```
Why this is used, it is because...

7.  And we hit a blocking point.  We have errors.  A tip that was issued in terms of finding these said errors is to include a "?" such as the one BEORE the .works.map
```
{experience?.works.map((work)
```

Once it works, you'll notice that you aren't getting anything.  We need to do something else.

8.  There's one more:

```
{console.log('here ' ,experience.works)}
```

This is returning as "unidentified".  So getting this was the problem.  How are we going to solve this?
 I'm also going to leave the command there, but just commented out.

 We're going to comment out the ENTIRE BLOCK OF CODE taht was inside the "experience.work"

 Then change this:
 ```
 experience?.works?.map((work)
 ```

 To this:
```
experience?.map((work)
```

Make it look like this:
```
{experience?.map((work) => (
            work.year

            ))}
```

WE'll GET THE YEAR!

I edited the entire code as to what happened and what was going on.  This is what we get:

```
{skills?.map((skill) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" styel = {{backgroundColor: skill.bgColor}}>
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
```

The thing that took a while was the experience.  We needed to map out, but originally, we weren't able to get it to show.  We needed to do something else.  The code has been rewritten so it goes:
```
experience.map
```
This ist he base.  It'll then extract a property from it.  We called it "experience".  Then, we moved onto what we needed to do, such as "year".

Inside it, we then do "experience.works that's INSIDE the originall map.  So from what I could tell we did a double map:  One that had the properties of the beginning (which was "experience" all by itself), but then we had to dive in AGAIN and this time, we mapped out INSIDE that one and map the "works".

So essentially, we were reading two different arrays:  One that's for the year and the other was with respect of the identified experienced with that year and map out its "works".  A double array

9.  After finishing and making sure that it is working properly, we then move onto the styles again.  This time, we'll be focusing on the "experience" sections.

All the way towards the end, we have .skills-tooltip, but something ended up happening:  It doesn't really work.  When we try to do something, say, background, it's not going to do it.  I believe there's a property that needed to be declared inside the element, which without it, it's going to prevent it.  The video instructs of using "important" property, though, IT IS NOT RECOMMENDED.  For the sake of the project, though, we're implementing it so we can see the restults.


10. Go to the GitHub and copy the style of the "skills-tooltip" and then deploy it!