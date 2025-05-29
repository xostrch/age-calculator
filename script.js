function calculate(){

const inputDateStr = document.getElementById("take-date").value;

const currentDate = new Date();
const inputDate = new Date(inputDateStr);

let yearNow = currentDate.getFullYear();
let monthNow =currentDate.getMonth()+1;
let dayNow = currentDate.getDate();

const yearInput = inputDate.getFullYear();
const monthInput = inputDate.getMonth()+1;
const dayInput = inputDate.getDate();

let years = yearNow - yearInput;
let months = monthNow - monthInput;
let days = dayNow - dayInput;

if (days<0)
{
    months -= 1;
    const prevMonth = new Date(yearNow, monthNow-1, 0);
    days += prevMonth.getDate();
}

if(months<0)
{
    months+=12;
    years -= 1;
}

let resultYear =document.getElementById('years');
let resultMonth =document.getElementById('months');
let resultDay =document.getElementById('days');

if(years<0){
    alert("Wrong Date!!!");
    resultYear.innerHTML="--";
    resultMonth.innerHTML="--";
    resultDay.innerHTML="--";
}else{
    resultYear.innerHTML=years;
    resultMonth.innerHTML=months;
    resultDay.innerHTML=days;
}


}

function clearPage(){
    document.getElementById("take-date").value="";
    document.getElementById('years').innerHTML="--";
    document.getElementById('months').innerHTML="--";
    document.getElementById('days').innerHTML="--"; 
}