const daysInput = document.querySelector('#days');
const monthsInput = document.querySelector('#months');
const yearsInput = document.querySelector('#years');

const errorDay = document.querySelector('.day');
const errorMonth = document.querySelector('.month');
const errorYear = document.querySelector('.year');

const labelDay = document.querySelector('.label-day');
const labelMonth = document.querySelector('.label-month');
const labelYear = document.querySelector('.label-year');

const calculatedDays = document.querySelector('#calculated-days');
const calculatedMonths = document.querySelector('#calculated-month');
const calculatedYears = document.querySelector('#calculated-years');

const animation = document.querySelectorAll('.animate');

const button = document.querySelector('.submit');

const currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

button.addEventListener('click', () => {
    
    resetErrorText();
    checkDateValid(daysInput,monthsInput,yearsInput);
    checkDayValid(daysInput,monthsInput,yearsInput);
     
    if (allowCalculation()) {
        addAnimation();
        calculateCurrentAge(daysInput,monthsInput,yearsInput);
        removeErrorStyles();   
    }
    else{
        resetAgeText();
        addErrorStyles();
    } 
});

function addAnimation(){
    for (let index = 0; index < animation.length; index++) {
        animation[index].style.animation = "none";
        animation[index].offsetWidth;
        animation[index].style.animation = "1s anim-age ease-out";
    }
}

function checkDateValid(inputDay,inputMonth,inputYear){
 
    if(inputMonth.value === ""){
        errorMonth.textContent = "This field is required";
    }
    else if(inputMonth.value > 12 || inputMonth.value == 0 || inputMonth.value > currentMonth && inputYear.value == currentYear){
        errorMonth.textContent = "Must be a valid month";    
    }
    if(inputYear.value === ""){
        errorYear.textContent = "This field is required";
    }
    else if(inputYear.value > currentYear){
        errorYear.textContent = "Must be a valid year";
    }
    else if(inputYear.value <= 0) {
        errorYear.textContent = "Must be a valid year";
    }
    if(inputDay.value === ""){
        errorDay.textContent = "This field is required";
        console.log(inputDay.value);
    }
    else if(inputDay.value > currentDay){
        errorDay.textContent = "Must be a valid day";
    }
    else if (inputDay.value == 0) {
        errorDay.textContent = "Must be a valid day";
    }
}

function checkDayValid(inputDay,inputMonth,inputYear){
    const leapYear = inputYear.value % 4;

     if(inputDay.value >= 31 && (inputMonth.value == 4 || inputMonth.value == 6 || inputMonth.value == 9 || inputMonth.value == 11 )){
        errorDay.textContent = "Must be a valid date";
    }
    if(inputMonth.value == 2 && leapYear != 0 && inputDay.value >= 29){
        errorDay.textContent = "Not a leap year";
    }
    if(inputDay.value >= 32){
        errorDay.textContent = "Must be a valid day";
    }
}

function allowCalculation(){
    if(errorDay.textContent != "" || errorMonth.textContent != "" || errorYear.textContent != ""){
        return false;
    }
    else{
        console.log();
        return true;
    }
}

function resetAgeText(){
    calculatedDays.textContent = "--";
    calculatedMonths.textContent = "--";
    calculatedYears.textContent = "--";
}
function resetErrorText(){
    errorYear.textContent = "";
    errorMonth.textContent = "";
    errorDay.textContent = "";
}

function addErrorStyles(){
    errorDay.style.color = "var(--primary-light-red)";
    daysInput.style.border = "1px solid var(--primary-light-red)";
    labelDay.style.color = "var(--primary-light-red)";
    errorMonth.style.color = "var(--primary-light-red)";
    monthsInput.style.border = "1px solid var(--primary-light-red)";
    labelMonth.style.color = "var(--primary-light-red)";
    errorYear.style.color = "var(--primary-light-red)";
    yearsInput.style.border = "1px solid var(--primary-light-red)";
    labelYear.style.color = "var(--primary-light-red)";
}

function removeErrorStyles(){
    daysInput.style.border = "1px solid var(--neutral-light-grey)";
    labelDay.style.color = "var(--neutral-smokey-grey)";
    monthsInput.style.border = "1px solid var(--neutral-light-grey)";
    labelMonth.style.color = "var(--neutral-smokey-grey)";
    yearsInput.style.border = "1px solid var(--neutral-light-grey)";
    labelYear.style.color = "var(--neutral-smokey-grey)";
}

function calculateCurrentAge(inputDay,inputMonth,inputYear){
    if(currentMonth < inputMonth.value) {
        calculatedYears.textContent = currentYear - inputYear.value - 1;     
        calculatedMonths.textContent =  currentMonth - inputMonth.value + 12;
        calculatedDays.textContent = currentDay - inputDay.value;
    }
    else if(currentDay < inputDay.value){
        calculatedYears.textContent = currentYear - inputYear.value;
        calculatedMonths.textContent = currentMonth - inputMonth.value - 1;
        calculatedDays.textContent = inputDay.value - currentDay;
    }
    else{
        calculatedYears.textContent = currentYear - inputYear.value;
        calculatedMonths.textContent = currentMonth - inputMonth.value;
        calculatedDays.textContent = currentDay - inputDay.value;
    }
}