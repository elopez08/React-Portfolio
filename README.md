Private Portfolio
=========================

By Edgardo Lopez
-------------------------

## Table of Contents
==============================
*   [The Purpose](#the-purpose)
*   [Critera](#criteria)
*   [Installation](#installation)
*   [Usage](#usage)
*   [The Process](#the-process)
*   [What Was Done Differently](#differently)
*   [Built With](#built-with)
*   [Contributing](#contributing)
*   [Project Status](#project-status)
*   [Disclaimer](#disclaimer)
*   [Website](#website)
==============================

#   [The Purpose](#the-purpose)

There are two purposes:  One, to show my personal portfolio for the others to see when introducing myself.  Two, to contribute on a more public usage by showing how the portfolio was made to aid those making their own portfolio.

#   [Critera](#criteria)

    CRITERIA:

    GIVEN I need to sample a potential employee's previous work

    WHEN I load their portfolio
    THEN I am presented with the developer's name, a recent photo or avatar, and links to sections about them, their work, and how to contact them

    WHEN I click one of the links in the navigation
    THEN the UI scrolls to the corresponding section

    WHEN I click on the link to the section about their work
    THEN the UI scrolls to a section with titled images of the developer's applications

    WHEN I am presented with the developer's first application
    THEN that application's image should be larger in size than the others

    WHEN I click on the images of the applications
    THEN I am taken to that deployed application

    WHEN I resize the page or view the site on various screens and devices
    THEN I am presented with a responsive layout that adapts to my viewport

#   [Installation](#installation)

Head on over to the GitHub:

When you have a folder location, issue the command:  

```bash
git clone {link of the project}
```
There are additional steps:
-Make sure your device is able to get Sanity to work.  If it's not, you'll need to update your device.  Click on the link when it prompts if you get that error for more information
-Need to have a Sanity Account.  I used the "GitHub" account to be able to use it
-Because this project is linked to your account, you'll need to not only sign in, but also, you need to change these two values:
```
export const client = sanityClient ({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID, <=
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN, <=
});
```
This is found in the "App.js" file in: frontend-react/src.
To do this, however, you'll either need to change that OR make a new ".env" file in the source and then apply the changes there.  You'll need to go to your Sanity Account to get the ID and token.

CAUTION:  Replacing the values in the "App.js" is not advisable.  Use the ".env" file instead!

Once you do that, you'll need two different terminals:
-for the backend_sanity, use the command
```
sanity start
```
-for the frontend_react:
```
npm run start
```

#   [Usage](#usage)

For the most part, you'll need to go to Sanity.  When the program is running, most of it to use... is really easy.  All you got to do is go to Sanity and then fill out the correspondent information:

((SHOW SCREENSHOT))



#   [The Process](#the-process)

I followed the steps of JavaScript Mastery.  In it, I followed step by step, even taking notes on what each of the functions does.  Throughout the code, there are comments for my personal guidance to see how the function interact and work.  I've also made another folder, with ALL the ReadMe's sections to try and understand more on what was going on.

In the beginning, it was a struggle since there was so much to take, but after about 2 hours in, not only was I able to put the pieces together, but was also able to come up with different ideas for the code.

When the guidance was done, I then went back and change up a few values to reflect the portfolio itself.  I went and changed some of the coding to also include features that weren't in the video such as including a Resume and links from the social networks.  

#  [What Was Done Differently](#differently)

Comparing to the module itself, this was taken from the style of the project 3.  Using both Sanity and the "react-dom" that wasn't used in class.  I've also used different files such as .jsx and .cscc.  Finally, to get it online:
https://edgardo-portfolio-final.netlify.app/
This is the result.  I used the services of "netlify"

#   [Built With](#built-with)

    *HTML
    *SCSS
    *.jsx
    *Sanity

#  [Contributing](#contributing)
Made with ❤️ by [Edgardo Lopez]

#  [Project Status](#project-status)

As stated on the "What Was Done Differently", there are portions of the file that have been changed since assigned.  As I continue to grow as a developer, I'll be inputing additional of my work from GitHub on the portfolio as well as reconstructing the layout of the page (such as the previous change when using Grid instead of Flex).  Keep an eye out for any updates on the portfolio itself!

#  [Disclaimer](#disclaimer)

The project is open for anyone to use.  As stated on the purpose, it's to help out those that are starting in making a portfolio of their own.

#   [Website](#website)

GitHub:
https://github.com/elopez08/React-Portfolio
Working site:
https://edgardo-portfolio-final.netlify.app/