## Yo, I'm a Readme

You should probably update me so people looking at your code have an idea what it is being used for :)
var data = { nameinfo: [
      {username: "john", firstName: "John", lastName: "Albritton", email: "jtareb1@gmail.com" },
      {username: "ed", firstName: "Ed", lastName: "Smith", email: "edsmith2@gmail.com"},
    ]};

var  num1, num2, sum, calculate;
    num1 = document.getElementById('num_one');
    num2 = document.getElementById('num_two');
    x = Number('num1').value;
    y = Number('num2').value;
    calculate = document.getElementById('calculateBtn');
  

    calculate.onclick = function () {
    sum = x + y;
    sum.innerHTML = 'calculateBtn';
    answer=sum.innerHTML;
    