var eleAcreage = document.getElementById("acreage")
var elePerimeter = document.getElementById("perimeter")

var getWidth = prompt("width",);
var getHeight= prompt("height",);

var acreage = Number(getWidth) * Number(getHeight);
var perimeter = (Number(getWidth) + Number(getHeight)) * 2;

eleAcreage.innerHTML = `Diện tích hình chữ nhật: ${acreage}`;
elePerimeter.innerHTML = `Chu vi hình chữ nhật: ${perimeter}`;