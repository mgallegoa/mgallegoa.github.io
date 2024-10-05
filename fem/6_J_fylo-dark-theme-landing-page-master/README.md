# Frontend Mentor - Fylo dark theme landing page solution

               ███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗███████╗██╗░░░░░
               ████╗░████║██╔══██╗████╗░██║██║░░░██║██╔════╝██║░░░░░
               ██╔████╔██║███████║██╔██╗██║██║░░░██║█████╗░░██║░░░░░
               ██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║██╔══╝░░██║░░░░░
               ██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝███████╗███████╗
               ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚══════╝╚══════╝

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

1. See the landing page in mobile and desktop
2. The fonts correctly in the page.
3. Validations for the field email.
4. The active states for buttons and links elements.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [GitHub repository](https://github.com/mgallegoa/mgallegoa.github.io/tree/main/fem/6_J_fylo-dark-theme-landing-page-master)
- Live Site URL: [GitHub Pages](https://mgallegoa.github.io/fem/6_J_fylo-dark-theme-landing-page-master/index.html)

## My process

1. Using Variant fonts for the different fonts styles
2. Using flex-box to align elements, using for responsive design.
3. Center element with Grid, using for responsive design.
4. Practice validations with JavaScript

### Built with

1. Semantic HTML5 markup
2. Font variant
3. CSS custom properties
4. JavaScript
5. Flexbox
6. CSS Grid
7. Mobile-first workflow

### What I learned

To see how you can add code snippets, see below:

```css
@import url("global/reset.css");

.productive {
  grid-template-columns: 1fr 1fr;
  padding-inline: 6.5rem;
}
```

```JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("email");

  email.addEventListener("focusout", () => {
    validateEmail();
  });
});
```

### Continued development

Continue improve the html semantic.
Continue learning about css styles tricks and best practices to write css.
Practice validations with JavaScript

### Useful resources

1. Using variant fonts: https://www.youtube.com/watch?v=jO8iVc4hEe8&t=27s
2. [Mozilla web page for documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) - Learn about css specification.

## Author

- Website - [Manuel Fernando Gallego Arias](https://mgallegoa.github.io/)
- Frontend Mentor - [@mgallegoa](https://www.frontendmentor.io/profile/mgallegoa)

## Acknowledgments
