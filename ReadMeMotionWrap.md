Read this AFTER getting through ReadMeSkillsSection.

We have a lot of god going on and while we can see the animation and the wrapper that happens in each section, this only happens once.  We want to make sure it constantly happens when we reach it.

1.  Go to "src/wrapper".  Make a new file and call it "MotionWrap.js"

2.  Make this base:
```
import React from "react";

import { motion } from "framer-motion";

import React from 'react'

const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div>
        
    </motion.div>
  )
}

export default MotionWrap
```

3.  Change this under <motion.div>:
```
<motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0,0,1]}}
        transition= {{ duration: 0.5 }}
        className={`${classNames} app__flex`}
    >
        <Component />
    </motion.div>
```

4.  That "Component" is the sections that is currently being displayed.  Since it differs from one to the other, it'll be set to that name.

5.  Go to "About.jsx".  Change the line:
```
import { AppWrap, MotionWrap } from '../../wrapper';
```

BEFORE THAT, though, we need to make sure that IN THE "index.js" INSIDE THE "wrapper" folder, we add this line:

```
export { default as MotionWrap } from './MotionWrap';
```

This is because we need to make sure we're exporting on what's inside the folder and since we made a new property, we need to export that as well in the "index.js".

Finally, at the bottom of the "About.jsx", write this:

```
export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  "app__whitebg"
);
```

Now to explain this.  From what I could gather, here's what it is doing:
-Must like before, we're "wrapping" something.  We are doing the "MotionWrap" first for the overall component.
-Next, there's another wrap.  This time, it's coming from:  "MotionWrap"
-We then have "About" being the one that's being exported.  Though now the question is:  what exactly is the "app__about"?

"app__about" is an extra class that is being added

We also have 'about'.  Not sure what that is

"app__whitebg", on the other hand, is clear.  This is a style that was taken from the overall stylesheet.  This is applying a background color of white.  So when we go to the "About" section, we'll notice the "white" background.  This is the reason why.

When you get the styles, we need to apply for all the other compoonents as well

6.  For the "Work.jsx", we're doing the same thing.  When you copied, you can double click on the "MotionWrap" and then hit ctrl+space.  That will pop out a few functions that can be auto filled.  Hitting the one with the little box will then have the "MotionWrap" be also displayed where the "AppWrap" is.

I've noticed one thing.  Pay close attention:
This is before the code was changed:
```
export default AppWrap(Work, 'work');
```

This is after it:
```
export default AppWrap(
  MotionWrap(Work, 'app__work'), 
  'work',
  "app__primarybg"
);
```

I do notice that the two properties are there still.  It's just read a LITTLE bit different.  If we were to make it on the single line and compare:
```
export default AppWrap(Work, 'work');
export default AppWrap(MotionWrap(Work, 'app__work'), 'work' "app__primarybg");
```
Watch closely:  BOTH have wraps in it.  If we were to look at (Work, app__work) as a single property, you'll see that the only difference between the two is the "app__primarybg".  We know for the fact that is just a color of the background from the styling.  So now from what I could gather is this:
`Work is, of course, the const function that's inside the code.  'app__work' is the class property that's being added in addition.  So if we were to decipher this:
-MotionWrap takes both the "const" function and the class "app__work" and apply its properties.  Then, "AppWrap" is going to take the result of that, 'work' (which is the identity of the file), and the class "app__primary-bg"(which is just the color style!).

In other words, thinking mathematically, we can see the similarities between the two!

There's one more thing to note:  Try changing the "app__works" to another funciton that isn't available, say, "app__wokrs".  What will happen?  This, actually, destroys the code.  There's one main reason why:  The .scss

The video played a little bit of a foresight here.  In the VEEEEEEEEEEERY beginning, there was one code that made no sense if you think about it:

```
.app__works {
    flex: 1;
    width: 100%;
    flex-direction: column;
}
```

This was NEVER EVER used... until now.  So we can confirm that the big overall value of "Work" and its contents have this value in it, making the page look presentable!


7.  Do the EXACT same thing for "Skills.jsx".

Finally, we added all the wraps on what we worked and it works!

Only two more to go