THIS IS THE FINAL SECTION OF THE PORTFOLIO.  Don't read this until you have done EVERYTHING.  The last step that we did was on ReadMeTestimonials.md

Everything looks similar, but there are a few key differences:

1.  Loading
We have something to "load".  
```
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
```

Both will start out false since one, we don't have anything initially and two, since we are just loading the page, we aren't really "loading" any messages.

2.  Change this button:
```
<button type ="button" className="p-text" onClick={handleSubmit}>
        {loading ? 'Sending' : 'Send Message'}
      </button>
```
What happens here is that inside the property, we have a "loading" going on.  If it is loading, do 'Sending'.  Otherwise, just say 'Send Message'.

3.  Follow all the patterns.  Here, in specific, we're stopping:
```
  const handleSubmit = () => {
    setLoading(true);

    
  }
```

We're going to change this to "false", but for us to see, we need to have this value to set to "true".  This is the result:

((before-footer-design))


4.  Apply this:
```
    //Look at the "contact.js" on the schema.  It is the exact same thing and _type is the name of the schema we're using, which is 'contact.
    //Normally, we do "name: formData.name", but remember we already deconstructed the formData before?  We can simply change:
    /*
     name: formData.name, => name: name,
    */
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    //USING SANITY to UPLOAD the data from our client!
    //This is to show a success message for below!
    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }
```

5.  Apply an "if and else" statement:
```
{!isFormSubmitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your email" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea 
            className="p-text"
            placeholder="Your Message"
            value= {message}
            name={message}
            onChange={handleChangeInput}
          />
        </div>
        <button type ="button" className="p-text" onClick={handleSubmit}>
        {loading ? 'Sending' : 'Send Message'}
        </button>
      </div>
      :
      <div>
        <h3 className ="head-text">Thank you for getting in touch!</h3>
      </div>
    }
```

This is saying if the form wasn't submitted, display the first statement.  If it did, display the next that shows "Thank you for getting in touch!"

6.  Add the final styles!

The very last thing we need to do is hop over back one more time to the ".jsx" to find the "form".

The only thing that needed to be change is this:
```
"value="message" "
```

We aren't writing in statically.  We need it to be dynamic.

Lastly, the favicon.  Go to the "public" folder and find "index.html"

On the "logo" property, have it your logo.