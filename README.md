# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview


### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot


### Links

- Live Site URL: [https://elin4o.github.io/age-calculator-app-main/](https://elin4o.github.io/age-calculator-app-main/)

## My process

  - Create the HTML elements that are needed - divs with children, inputs, buttons and paragraphs.
  - Style the elements without the additional error message.
  - Create javascript logic.
  - Style the additional element - error message.
  - Make it responsible.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

That to calculate a certain age you have a lot of "ifs":
  -day must be between 1 and 31, except for the months april (4), june (6), september (9) and november (11) which only have 30 days. And february which only has 29 days every 4 years.
  -months should also be between 1 and 12

## Author

- Frontend Mentor - [@Elin4o](https://www.frontendmentor.io/profile/yourusername)
