//String Concatenation
function myQuestion1() {
  var stringVar = "What is your Full Name? ";
  alert(stringVar + "Raegan Faith F. Paguirigan");
}
function myQuestion2() {
  var stringVar = "What is your favorite color? ";
  alert(stringVar + "Pink");
}
function myQuestion3() {
  var stringVar = "Who is your favorite artist? ";
  alert(stringVar + "Taylor Momsen");
}
function myQuestion4() {
  var stringVar = "What is your favorite pet? ";
  alert(stringVar + "Cat");
}
function myQuestion5() {
  var stringVar = "Where is your goal destination?  ";
  alert(stringVar + "Tokyo, Japan");
}
function myQuestion6() {
  var stringVar = "What is your zodiac sign? ";
  alert(stringVar + "Cancer");
}
function myQuestion7() {
  var stringVar = "When is your birthday? ";
  alert(stringVar + "July 10");
}
function myQuestion8() {
  var stringVar = "What is your comfort food? ";
  alert(stringVar + "Ice Cream");
}
function myQuestion9() {
  var stringVar = "What is your pet peeve? ";
  alert(stringVar + "Loud or noisy people in the cafe.");
}
function myQuestion10() {
  var stringVar = "What is your favorite band? ";
  alert(stringVar + "Twenty One Pilots");
}

//Basic Math
function myMath1() {
  var numberVar = 1;
  alert(numberVar + 3);
}
function myMath2() {
  var numberVar = 10;
  alert(numberVar * 2);
}
function myMath3() {
  var numberVar = 15;
  alert(numberVar + 2);
}
function myMath4() {
  var numberVar = 5;
  alert(numberVar + 0);
}
function myMath5() {
  var numberVar = 8;
  alert(numberVar + 2);
}
function myMath6() {
  var numberVar = 1;
  alert(numberVar + 6);
}
function myMath7() {
  var numberVar = 3;
  alert(numberVar + 5);
}
function myMath8() {
  var numberVar = 5;
  alert(numberVar - 2);
}
function myMath9() {
  var numberVar = 10;
  alert(numberVar / 5);
}
function myMath10() {
  var numberVar = 1;
  alert(numberVar * 9);
}

function add(){
  var number1 = document.getElementById("num1").value;
  var number2 = document.getElementById("num2").value;

  var result = parseFloat(number1)+parseFloat(number2);

  document.getElementById("answer1").innerHTML = "OUTPUT: " + result;
}
function add1(){
  var number3 = document.getElementById("num3").value;
  var number4 = document.getElementById("num4").value;

  var result = parseFloat(number3)+parseFloat(number4);

  document.getElementById("answer2").innerHTML = "OUTPUT: " + result;
}
function subtract(){
  var number5 = document.getElementById("num5").value;
  var number6 = document.getElementById("num6").value;

  var result = parseFloat(number5)-parseFloat(number6);

  document.getElementById("answer3").innerHTML = "OUTPUT: " + result;
}
function subtract1(){
  var number7 = document.getElementById("num7").value;
  var number8 = document.getElementById("num8").value;

  var result = parseFloat(number7)-parseFloat(number8);

  document.getElementById("answer4").innerHTML = "OUTPUT: " + result;
}
function multiply(){
  var number9 = document.getElementById("num9").value;
  var number10 = document.getElementById("num10").value;

  var result = parseFloat(number9)*parseFloat(number10);

  document.getElementById("answer5").innerHTML = "OUTPUT: " + result;
}
function multiply1(){
  var number11 = document.getElementById("num11").value;
  var number12 = document.getElementById("num12").value;

  var result = parseFloat(number11)*parseFloat(number12);

  document.getElementById("answer6").innerHTML = "OUTPUT: " + result;
}
function divide(){
  var number13 = document.getElementById("num13").value;
  var number14 = document.getElementById("num14").value;

  var result = parseFloat(number13)/parseFloat(number14);

  document.getElementById("answer7").innerHTML = "OUTPUT: " + result;
}
function divide1(){
  var number15 = document.getElementById("num15").value;
  var number16 = document.getElementById("num16").value;

  var result = parseFloat(number15)/parseFloat(number16 );

  document.getElementById("answer8").innerHTML = "OUTPUT: " + result;
}