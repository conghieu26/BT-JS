var eleMoney = document.getElementById("money")


var getMoney = prompt("money ($)",);

var money = Number(getMoney) * 23_500;

eleMoney.innerHTML = `Đổi sang tiền Việt Nam: ${money} VND`;