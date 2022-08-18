Steps for creating the Portfolio:

1.  npm instsall -g @sanity/cli

2.  Next, we then made our schema under the name of "testimonials.js" under the "schemas folder.  This is the properties we're going to have for our profile.

3.  Under the testimonials.js, we added "import testimonials from './testimonials';" to import the information from the "testimonials.js" to the "schema.js"

4.  On "testimonials.js", we put in "testimonials" where the "  types: schemaTypes.concat([ " is located to identify the type of schema we're using

Viewing time!  We then tried to see what this did and we got the following:  

((when-initiated-schema-first-time))

We basically define on what the schema will contain:

((when-making-new-schema))

((schema-on-testimonials-for-first-time))

This defined the information to schema.  When we made our identities, we made the choices for it

When we add in the information, a new Testimonials is shown with the name being the "Name" field that was typed in.  We just created a "database".  Keep that in mind!

5.  Make the new schemas in the "schemas" folder (I have "about.js", "brands.js", etc.)

6.  Import the other schemas like "Testimonials" (write the name we're going to use and then import it from the name file we're using)

7.  Run "Sanity" again to see if all the given functions and names are displayed.

8.  Issue the command: "npx create-react-app frontend_react" after going up a step (make sure you are in "backend_sanity" folder).

9.  When you are done, open the "frontend_react" folder and then delete the "src" folder.  We're going to make one of our own, not what was given.  Then, make the "index.js" file in the "src" folder.

10. Do the following in the "index.js":

            import React from 'react';

            //This helps connect to the HTML file
            import { ReactDOM } from 'react';

            import App from './App';

            import './index.css';

            ReactDOM.render(<App />, document.getElementById('root'));

Look into the "public" folder and find "index.html".  This is what you'll see:

((index-before-change))

If you look back to the "index.js", you'll notice that REACTDOM.render has a property of "getElementById('root').  This is where it's going in the HTML

11. Make "App.js" in the "src" folder.

12. Type in "rafce" to issue a basic skeleton of the React function.  If this doesn't work, get "ES7+ React/Redux/React-..." and download that in the system (V Studios).

13. Make the file "index.css" in the "src" folder

14. Use this in the index.css:

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

:root {
  --font-base: "DM Sans", sans-serif;

  --primary-color: #edf2f8;
  --secondary-color: #313bac;
  --black-color: #030303;
  --lightGray-color: #e4e4e4;
  --gray-color: #6b7688;
  --brown-color: #46364a;
  --white-color: #ffffff;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

This is just the basic scheme of lines for the files.

The link has its own sets of properties that you'll use.  Think of it as arrays that is waiting to be called

15. Do this:  "npm install @sanity/client @sanity/image-url framer-motion node-sass react-icons" in the terminal.  This is installing the dependencies we have on the folder

16. Change the "div" to "h1" with the "App" to see it clearly on the application.

17. Run "npm start" to see what is being read

18. Make a new folder in the frontend_react and call it "components" and another "assets", "constants", 

19. Once that's done, create a folder in the "container" and call it "About".  It'll have "About.jsx" and "About.scss".  Do this for the same on "Footer", "Header", "Skills", "Testimonial", and "Work".

20. In the "frontend_react" folder and on the "container", make a new file and call it "index.js".  You'll be placing all the "exports" here from the other folders so we don't repeat on the files over and over again.

21. Apply this line from the "App.js" file in the "src" folder:

    import { About, Footer, Header, Skills, Testimonial, Work } from './container';

Everything we did on the "index.js" will now be read in one line.

22. Replace the <h1> line with the lines such as <Header /> to now start using the import information.  Navigation bar is the only thing that we don't have, by the way.

23. On the "components" folder, make a folder call it "Navbar".  Inside it, make new files same name, but have ".jsx" and ".scss".

24. On the "COMOPONENTS" folder (NOT the "Navbar" folder), make an "index.js" file.

25. On the "index.js", apply:

    export { default as Navbar } from './Navbar/Navbar';

26. On the "App.js", also include the "Navbar" this time and then place it on top before the <Header />

27. If everything was applied, this is what it looks like:

((No-edit-just-name))

28. On the "src" folder, make the "App.scss" and then use this:

    https://github.com/adrianhajdin/project_professional_portfolio/blob/master/src/App.scss

Styles already there.

29. Apply "import './App.scss' " on the "App.js" file

30. Make a few changes in the "Nav.js" file.  Be sure to add the "assets" folder to the "src" with this link:

    https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fadrianhajdin%2Fproject_professional_portfolio%2Ftree%2Fmaster%2Fsrc%2Fassets

31. On the "constants" folder, make "images.js" file.  We're going to try and use all the images from the "assets" folder as suppose to calling it one at a time.

32. On the fle, copy this and paste:

    https://github.com/adrianhajdin/project_professional_portfolio/blob/master/src/constants/images.js

This is basicall naming all the files of the images as "import" names to be used.

33. Make an "index.js" file on the "constants" folder.  And then use "export { default as images } from './images';"

34. On the "Navbar.jsx", add two things:

    import { images } from '../../constants'; //for the images to be read

    //
    return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
      <ul>
        {['home', 'about', 'contact', 'work', 'skills', 'contact'].map((item) => (

        ))}
      </ul>
    </nav>
  )
  //

That one is setting up for the array.

The "item" that it is referring to is the array that was defined.  And the pointer "=>", we want to point at the function and return something.

35. Add this in the pointer function:

<li key={`link-${item}`}>
            <div />
            <a href = {`#${item}`}>{item}</a>
          </li>

It has grabbed the key and then inputs for each ('home', 'about', etc.).  Then, in the "a href", we're providing a "#" so it can go to the properties of said function to its respected link (item).

Remember:  {} is RENDERING the item.  This value changes depending what is being called (in this case, the list that was defined earlier).

36. <nav className="app__navbar">

One function to note is the "__" (it's double _).  We can create clean CSS with "BEM".  "BEM" is a front-end naming method that helps out with the styling such as "Block", "Element".

https://www.devbridge.com/articles/implementing-clean-css-bem-method/

<div className="app__navbar-logo">

<ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href = {`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

37. Create the Navbar.scss.  There are notes on what has been done and explaining the different details on why it was used in .scss as suppose to .css

38. Once we have everything that we applied as style, make the "menu" bar for the "navigator".  This will display whenever we're on a smaller screen.

One step involves using useState.  Initialize by typing "useState" and then click on the option to immediately do the setup for you.

Framer-motion has a function where we can use a special type for the movement.  We simply put "motion.div" where "motion" is the name given as a React in {} while "div" is the element that's interacting with it.

"framer.com/developers" gives you more functions to play with Framer motion!


"<a href = {`#${item}`} onClick = {() => setToggle(false)}>{item}</a>
                </li>"

Is a poperty that is used when we CLICK on the word, it'll transition to that particular area, but also it'll close the menu since we want to see what we just clicked.

If we did everything correctly, it should look like this:

((navbar-after-editting-and-styling))

((menu-on-small-screen))

We have done our first style for the Navbar!!!  Move onto the next step for the next section (spliting since it's going to be REALLY long)