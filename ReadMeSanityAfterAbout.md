This is AFTER doing the "About" steps.

1.  Go to frontend_react/src.  Create "client.js"

2.  Write the following:

```
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient ({
    projectId: '',
    dataset: '',
    apiVersion: '',
    useCdn: true,
    token: '',
});
```

3.  SPILT your terminal so you see two on the bottom of the screen.  Go to the "backend_sanity" folder on the 2nd terminal and then type "sanity manage" on the command prompt

4.  Find the "projectId", "dataset", set "apiVersion" to "2022-02-01", and "token".  Token is going to be tricky, so do the following:

-hit "API" tab
-click "Add CORS origin"
-set to "http://localhost:3000" and hit the mark "Allow Credentials"
-"Add API Token".  Name it.  "Editor Permission" checked.

5.  We want to keep some data safe, so create ".env" on the "frontend_react".  Then, apply the following:

```
REACT_APP_SANITY_PROJECT_ID = ((YOUR PROJECT ID))
REACT_APP_SANITY_TOKEN = ((YOUR SANITY TOKEN))
```

Find these two either in the "client.js" that you created OR if from scratch, "sanity manage" command and the page that loads.

6.  Replace in the "client.js" with:

```
export const client = sanityClient ({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});
```
Given on the ".env" file, you have the names there!

This is what you should see:

```
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient ({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

//Useful for your images
const builder = imageUrlBuilder(client);

//Code used when you use images from Sanity
export const urlFor = (source) => builder.image(source);
```

We just got the information with the function "client".  Now we have linked that with the Sanity ID that we verified not too long ago.

7.  Go to "About.jsx"

8.  Below the pointer of "About", add this:

```
const [abouts, setabouts] = useState([]);
```

9.  Type in:

```
const [abouts, setabouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
  }, []);
```

Notice "abouts"?  We're in the process of using actual arrays fron Sanity and not a set value that was done earlier with "const abouts".

10. Apply this:

```
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, []);
```

What this is doing is the following:  Having the properties of "abouts", we have a function named "setAbouts" and we're "useState" that's origianlly an empty array.  Remember that "useState" is a 'react' function.

"useEffect()" will then be pointing to a "query" that is a "pointer" (*) with the name "abouts" in it.

Using the "client" function from "../../client", it'll then "fetch" the "query" (which, again was gathered as "abouts" that was a pointer)

Once it extracts that information, then it's going to promise as a "data" that was extracted and then put in the functions "setAbouts" (which again is a "useState" that's an empty array).

11. Reload your page.  You'll notice, right away, all the icons/descriptions we had is now gone.  That is because, previously, we had used a "static" data:

```
const abouts = [
  { title: 'Web Development', description: 'I am a good web developer', imgUrl: images.about01},
  { title: 'Web Design', description: 'I am a good web developer', imgUrl: images.about02},
  { title: 'Web UI/UX', description: 'I am a good web developer', imgUrl: images.about03},
  { title: 'MERN Stack', description: 'I am a good web developer', imgUrl: images.about04}
];
```

However, since we're tryig to use the data from Sanity, we needed to fetch the information from the server, NOT the static information that's in the code.

12. On the 2nd terminal that has the "sanity", type:
```
sanity start
```

13. Change the code in "About.jsx" to look like this:

```
return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
```

The thing that's different is the "img src".  We have a "urlFor" for the image.  Make sure that the name matches THE SCHEMA THAT YOU USED.


This is an excellent tool to use!  Use CMS to help update and give great feedback to your clients on what to do!