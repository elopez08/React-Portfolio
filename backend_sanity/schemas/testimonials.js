export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        }
    ]
}

//The name is the name of the person
//Company is the company that they belong to
//Image is the picture of the person with a hotspot option on Sanity
//Why hotspot:  We'll be able to crop of a chosen image (uploaded).  Think of it like a spotlight.  Where is the focus on the image?  It's going to be a circle.  Another one to think about is the Discord account.  The image chosen is also a circle