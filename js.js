let now = new Date();

const showDate = ()=>{
    const Date = document.querySelector('.wrap__data__date');
    const Month = document.querySelector('.wrap__data__month');
    const Year = document.querySelector('.wrap__data__year');
    const arrMonth = [
        "Январ",
        "Феврал",
        "Март",
        "Апрел",
        "Май",
        "Июн",
        "Июл",
        "Август",
        "Сентябр",
        "Октябр",
        "Ноябр",
        "Декабр"
    ];
    const arrDay = [
        "Якшанбе",
        "Душанбе",
        "Сешанбе",
        "Чоршанбе",
        "Панҷшанбе",
        "Ҷумъа",
        "Шанбе"
    ];

    Date.innerHTML = now.getDate() + '</br>' + arrDay[now.getDay()];
    Month.textContent = arrMonth[now.getMonth()];
    Year.textContent = now.getUTCFullYear();
}
showDate();

let getSeconds = now.getSeconds();
let getMinutes = now.getMinutes();
let getHours = now.getHours();

const Hour = document.querySelector('.wrap__time__hour');
const Minute = document.querySelector('.wrap__time__minute');
const Second = document.querySelector('.wrap__time__second');

const showTime = ()=>{
    getSeconds+=1;
    
    if(getSeconds >= 60){
        getSeconds = 0;
        getMinutes+=1;
    }else if(getMinutes >= 60){
        getMinutes = 0;
        getHours+=1;
    }else if(getHours >= 24){
        getHours = 0;
    }
     if(getHours >= 18 || getHours < 7){
        document.body.style.backgroundImage = "url(./img/night.jpg)";
    }else{
        document.body.style.backgroundImage = "url(./img/background2.jpg)";        
    }
    Second.innerHTML = checkTime(getSeconds);
    Minute.innerHTML = checkTime(getMinutes); 
    Hour.innerHTML = getHours;   
}
setInterval(showTime,1000);
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

