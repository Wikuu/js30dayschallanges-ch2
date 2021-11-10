const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

setInterval(()=>{
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    console.log(hour, minute, second);

    hourHand.style.transform = `rotate(${30 * hour}deg)`;
    minuteHand.style.transform = `rotate(${30 * minute}deg)`;
    secondHand.style.transform = `rotate(${6 * second}deg)`;

}, 1000);