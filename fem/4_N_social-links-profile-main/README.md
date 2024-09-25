# Frontend Mentor - Social links profile solution

               ███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗███████╗██╗░░░░░
               ████╗░████║██╔══██╗████╗░██║██║░░░██║██╔════╝██║░░░░░
               ██╔████╔██║███████║██╔██╗██║██║░░░██║█████╗░░██║░░░░░
               ██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║██╔══╝░░██║░░░░░
               ██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝███████╗███████╗
               ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚══════╝╚══════╝

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

### Links

- Solution URL: [GitHub repository](https://github.com/mgallegoa/mgallegoa.github.io/tree/main/fem/4_N_social-links-profile-main)
- Live Site URL: [GitHub Pages](https://mgallegoa.github.io/fem/4_N_social-links-profile-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow

### What I learned

```css
*,
*::before,
*::after {
  /* Padding and border are included in the width and height calculations */
  box-sizing: border-box;
}
@font-face {
  font-family: Inter;
  src: url("../assets/fonts/Inter-VariableFont_slnt\,wght.ttf");
  /* Safari, Android, iOS */
  font-weight: 400 700; /* Range of weights */
  font-stretch: 50% 200%; /* Range of stretches (if applicable) */
  font-style: normal; /* Can also specify italic or other styles */
}
:root {
  --ff-primary: "Inter", sans-serif;

  /* Font weights */
  --fw-thinner: 400;
  --fw-regular: 600;
  --fw-bolder: 700;

  /* Font style */
  --fs-normal: normal;

  /* Font sizes */
  --fz-normal: 1.4rem;

  /* Colors */
  --clr-green: hsl(75, 94%, 57%);
  --clr-white: hsl(0, 0%, 100%);
  --clr-grey-700: hsl(0, 0%, 20%);
  --clr-grey-800: hsl(0, 0%, 12%);
  --clr-grey-900: hsl(0, 0%, 8%);
}
```

Use the light server 'npm install -g live-server' for fast reload.

### Continued development

CSS tricks and best practices in front end

### Useful resources

- [Mozilla web page for documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) - Learn about css specification.

## Author

- Website - [Manuel Fernando Gallego Arias](Add your name here)
- Frontend Mentor - [@mgallegoa](https://www.frontendmentor.io/profile/mgallegoa)

## Acknowledgments
