# Frontend Mentor - Intro component with sign up form solution

               ███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗███████╗██╗░░░░░
               ████╗░████║██╔══██╗████╗░██║██║░░░██║██╔════╝██║░░░░░
               ██╔████╔██║███████║██╔██╗██║██║░░░██║█████╗░░██║░░░░░
               ██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║██╔══╝░░██║░░░░░
               ██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝███████╗███████╗
               ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚══════╝╚══════╝

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- Validations for the fields.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [GitHub repository](https://github.com/mgallegoa/mgallegoa.github.io/tree/main/fem/5_N_intro-component-with-signup-form-master)
- Live Site URL: [GitHub Pages](https://mgallegoa.github.io/fem/5_N_intro-component-with-signup-form-master/index.html)

## My process

- Center element with Grid place-items:center
- Position an element with position:relative and absolute.
- Crop the image if is bigger than the container (.card\_\_header) using overflow:hidden.
- Center the position: absolute image using top, left and transform css attributes.
- Practice validations with JavaScript

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learning's while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
.error-icon {
  position: absolute;
  display: none;
  right: 2.6rem;
}
.error-message {
  display: none;
  color: var(--clr-primary-advice);
  font-size: 0.5rem;
  margin-top: 0.2rem;
  text-align: right;
  margin-right: 2.5rem;
}
```

```JavaScript
function validateFirstName() {
  let firstName = document.getElementsByName("firstName");
  let errorIcon = document.querySelector('[data-icon="firstName"]');
  let errorMessage = document.querySelector('[data-message="firstName"]');
  const isValid = validateRequired(firstName[0].value);
  toggleError(isValid, firstName[0], errorIcon, errorMessage);
  return isValid;
}
```

### Continued development

Continue improve the html semantic.
Continue learning about css styles tricks and best practices to write css.
Practice validations with JavaScript

### Useful resources

- [Mozilla web page for documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) - Learn about css specification.

## Author

- Website - [Manuel Fernando Gallego Arias](https://mgallegoa.github.io/)
- Frontend Mentor - [@mgallegoa](https://www.frontendmentor.io/profile/mgallegoa)

## Acknowledgments
