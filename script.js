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

// Basic Math 2
// Addition 
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
function add2(){
  var number5 = document.getElementById("num5").value;
  var number6 = document.getElementById("num6").value;

  var result = parseFloat(number5)+parseFloat(number6);

  document.getElementById("answer3").innerHTML = "OUTPUT: " + result;
}
function add3(){
  var number7 = document.getElementById("num7").value;
  var number8 = document.getElementById("num8").value;

  var result = parseFloat(number7)+parseFloat(number8);

  document.getElementById("answer4").innerHTML = "OUTPUT: " + result;
}
function add4(){
  var number9 = document.getElementById("num9").value;
  var number10 = document.getElementById("num10").value;

  var result = parseFloat(number9)+parseFloat(number10);

  document.getElementById("answer5").innerHTML = "OUTPUT: " + result;
}

// Sybtraction
function subtract(){
  var number11 = document.getElementById("num11").value;
  var number12 = document.getElementById("num12").value;

  var result = parseFloat(number11)-parseFloat(number12);

  document.getElementById("answer6").innerHTML = "OUTPUT: " + result;
}
function subtract1(){
  var number13 = document.getElementById("num13").value;
  var number14 = document.getElementById("num14").value;

  var result = parseFloat(number13)-parseFloat(number14);

  document.getElementById("answer7").innerHTML = "OUTPUT: " + result;
}
function subtract2(){
  var number15 = document.getElementById("num15").value;
  var number16 = document.getElementById("num16").value;

  var result = parseFloat(number15)-parseFloat(number16);

  document.getElementById("answer8").innerHTML = "OUTPUT: " + result;
}
function subtract3(){
  var number17 = document.getElementById("num17").value;
  var number18 = document.getElementById("num18").value;

  var result = parseFloat(number17)-parseFloat(number18);

  document.getElementById("answer9").innerHTML = "OUTPUT: " + result;
}
function subtract4(){
  var number19 = document.getElementById("num19").value;
  var number20 = document.getElementById("num20").value;

  var result = parseFloat(number19)-parseFloat(number20);

  document.getElementById("answer10").innerHTML = "OUTPUT: " + result;
}
// Multiplication
function multiply(){
  var number21 = document.getElementById("num21").value;
  var number22 = document.getElementById("num22").value;

  var result = parseFloat(number21)*parseFloat(number22);

  document.getElementById("answer11").innerHTML = "OUTPUT: " + result;
}
function multiply1(){
  var number23 = document.getElementById("num23").value;
  var number24 = document.getElementById("num24").value;

  var result = parseFloat(number23)*parseFloat(number24);

  document.getElementById("answer12").innerHTML = "OUTPUT: " + result;
}
function multiply2(){
  var number25 = document.getElementById("num25").value;
  var number26 = document.getElementById("num26").value;

  var result = parseFloat(number25)*parseFloat(number26);

  document.getElementById("answer13").innerHTML = "OUTPUT: " + result;
}
function multiply3(){
  var number27 = document.getElementById("num27").value;
  var number28 = document.getElementById("num28").value;

  var result = parseFloat(number27)*parseFloat(number28);

  document.getElementById("answer14").innerHTML = "OUTPUT: " + result;
}
function multiply4(){
  var number29 = document.getElementById("num29").value;
  var number30 = document.getElementById("num30").value;

  var result = parseFloat(number29)*parseFloat(number30);

  document.getElementById("answer15").innerHTML = "OUTPUT: " + result;
}
//Division
function divide(){
  var number31 = document.getElementById("num31").value;
  var number32 = document.getElementById("num32").value;

  var result = parseFloat(number31)/parseFloat(number32);

  document.getElementById("answer16").innerHTML = "OUTPUT: " + result;
}
function divide1(){
  var number33 = document.getElementById("num33").value;
  var number34 = document.getElementById("num34").value;

  var result = parseFloat(number33)/parseFloat(number34);

  document.getElementById("answer17").innerHTML = "OUTPUT: " + result;
}
function divide2(){
  var number35 = document.getElementById("num35").value;
  var number36 = document.getElementById("num36").value;

  var result = parseFloat(number35)/parseFloat(number36);

  document.getElementById("answer18").innerHTML = "OUTPUT: " + result;
}
function divide3(){
  var number37 = document.getElementById("num37").value;
  var number38 = document.getElementById("num38").value;

  var result = parseFloat(number37)/parseFloat(number38);

  document.getElementById("answer19").innerHTML = "OUTPUT: " + result;
}
function divide4(){
  var number39 = document.getElementById("num39").value;
  var number40 = document.getElementById("num40").value;

  var result = parseFloat(number39)/parseFloat(number40);

  document.getElementById("answer20").innerHTML = "OUTPUT: " + result;
}

//Grading System
function Average(){
  var number1 = document.getElementById("assignment").value;
  var number2 = document.getElementById("seatwork").value;
  var number3 = document.getElementById("activity").value;
  var number4 = document.getElementById("exam").value;
  var sum = parseFloat(number1) + parseFloat(number2) + parseFloat(number3) + parseFloat(number4);
  var average = sum/4;

  document.getElementById("average").innerHTML = "Average: " + average;
  
  if(average<60){
    document.getElementById("status").innerHTML = "Grade Status: FAILED"
  } else if(average>60 || average==60){
    document.getElementById("status").innerHTML = "Grade Status: PASSED"
  } else{
    document.getElementById("average").innerHTML = "Average: INC"
    document.getElementById("status").innerHTML = "Grade Status: INC"
  }

}