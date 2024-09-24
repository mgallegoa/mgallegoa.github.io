# Frontend Mentor - Blog preview card solution

               ███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗███████╗██╗░░░░░
               ████╗░████║██╔══██╗████╗░██║██║░░░██║██╔════╝██║░░░░░
               ██╔████╔██║███████║██╔██╗██║██║░░░██║█████╗░░██║░░░░░
               ██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║██╔══╝░░██║░░░░░
               ██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝███████╗███████╗
               ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚══════╝╚══════╝

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges to improve coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [GitHub repository](https://github.com/mgallegoa/mgallegoa.github.io/tree/main/fem/blog-preview-card-main)
- Live Site URL: [GitHub Pages](https://mgallegoa.github.io/fem/blog-preview-card-main/index.html)

## My process

- Learn default value for font-size to 62.5% to easy calculate rem sizes, for example to 1.6rem is 16px.
- Center element with Grid place-items:center
- Position an element with position:relative and absolute.
- Crop the image if is bigger than the container (.card\_\_header) using overflow:hidden.
- Center the position: absolute image using top, left and transform css attributes.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learning's while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
.card__image {
  width: 335px;
  height: auto; /* Maintain aspect ratio */
  position: absolute; /* Position the image absolutely */
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Adjust position */
}
```

### Continued development

Continue improve the html semantic.
Continue learning about css styles tricks and best practices to write css.

### Useful resources

- [Mozilla web page for documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) - Learn about css specification.

## Author

- Website - [Manuel Fernando Gallego Arias](Add your name here)
- Frontend Mentor - [@mgallegoa](https://www.frontendmentor.io/profile/mgallegoa)

## Acknowledgments
