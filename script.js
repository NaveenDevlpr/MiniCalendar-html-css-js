const date=document.getElementById("date");
const day=document.getElementById("day");

const month=document.getElementById("month");
const year=document.getElementById("year");

const weekDays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const today=new Date();

date.innerHTML=(today.getDate()<10?"0":"")+today.getDate();
const dayNum=today.getDay();
const monthNum=today.getMonth();
day.innerHTML=weekDays[dayNum];
month.innerHTML=months[monthNum];
year.innerHTML=today.getFullYear();
