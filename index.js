let myName;
myName = "Anton";
alert(myName);

function sayHello(name) {
    alert(`Здравствуйте, ${name}!`);
  }
  
  sayHello("Антон");

function celsiusToFahrenheit() {
  var x, y, z;
  x = document.getElementById('CelFah').value;
  x = parseInt(x);
  y = x*1.8+32;
  z = (x + " градусов это " + y + " по фаренгейту ");
  document.getElementById('out').innerHTML = z;
}

