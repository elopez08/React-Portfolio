Before doing this, look over the "Header" section first.  This is the 3rd step overall, so before that, there's the beginning as well!

1.  One thing to note is if we're working step by step, we could always go to the "App.js" and then ctrl+left lick on the section we want to work on (once it has been defined).  We have "About" with the container, so that does shift it to the next file, which is "About.jsx"

2.  Add in "{useState, useEffect}" as well as "{motion}" just like before

3.  Delete the contents and then start with "<>" first.  Then add in <h2> with the className "head-text", followed by "I Know That", then <span>Good Design</span>.  Next, new line "means", then new line <span>Good Business!</span>

4.  "<br/> is added after the first </span>

5.  Make the "const abouts".  We need the following:

///

const abouts = [
  { title: 'Web Development', description: 'I am a good web developer', imgUrl: ''},
  { title: 'Web Design', description: 'I am a good web developer', imgUrl: ''},
  { title: 'Web UI/UX', description: 'I am a good web developer', imgUrl: ''},
  { title: 'Web Animations', description: 'I am a good web developer', imgUrl: ''}
];

///

6.  Loops your "abouts" by doing the following:

```
{abouts.map((about,index) => (
          <motion.div></motion.div>
))}
```

Remember:  "map" function allows it so that the property of "abouts" is going to be mapped out.  Also, we have "about" and "index" on the ready just in case.

To go over slowly, the "about".  THink of it as a name for "abouts".  So the property of "abouts" has this as one of the arrays:

```
{ title: 'Web Development', description: 'I am a good web developer', imgUrl: ''}
```
Evidence of this is from this:
```
key={about.title+index}
      ^^    ^^
```
Since we defined the map to have "about", that has "abouts"'s properties.  With that, "about.title" = "abouts.title"

7.  Add this:

```
{abouts.map((about,index) => (
          <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: 'tween'}}
          className="app__profile-item"
          key={about.title+index}
          >
            <img src = {about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
```

So we're making a "motion" property.  This happens while this section is viewed.  If hover, it'll scale.  The transition lasts around 0.5 seconds as it "tweens".  Tween means more of a motion blur.  It'll have a classname of "app__profile-item" (which is a style).  Finally, we have the "key" being about.title+index where "index" is the current array.



Afterwards, you shou see something like this:

((about-animation-made))

So recall what this did:  

-whieInView property indicates when the property, itself, is being looked at.  Change that to max opacity
-if the mouse hovers, have the overall scale increase by 110%
-if animations are about, have a transition change of 0.5 seconds and have it motion of 'tween'
-all of that have the style of the "app__profile-item"
-property of "key" is set to {about.title+index}, which was mapped out thanks to "abouts.map" and the name "about"
-it'll contain an image of "about.imgUrl", which is a link.  It's alt name (when not able to load on the site), it'll say "about.title" (or the title of the array)
-have a Header 2 with the name {about.title}
-there's a description on "p" with {about.description}

8.  Next, we need test out the images.  Apply:

```
import { images } from '../../constants';
```

to get the folder of the images.  This will then allow the array to form something like this:

```
const abouts = [
  { title: 'Web Development', description: 'I am a good web developer', imgUrl: images.about01},
                                                                                  ^^     ^^
...
```
where "images" is the "React" name from the folder and "about01" is the file name of the image.

Once that's done, this is what it looks like:

((after-applying-images))

9.  Go to "About.scss" for the design.  Follow the comments line by line and see why was it needed

10. Go back to "About.jsx".  Put the <h2> property IN ONE LINE:

```
<h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
```

This is because if we have them in separate lines, it's not going to tell where is the spacing.  Having it like this will let the program know where the spacing is (look at "means").



WHAT NEEDS TO CHANGE:

Change the "titles" to meet your capacity and also change the "images" to something that will help you stand out.  Make sure you also have everything you need that fits you.