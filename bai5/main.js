var eleAcreage = document.getElementById("number")

var getNumber = prompt("Nhập 1 số có 2 chữ số:",);



var firstNumber = Math.floor(Number(getNumber) / 10);
var secondNumber = Number(getNumber) % 10;

var total = firstNumber + secondNumber;


eleAcreage.innerHTML = total; 
