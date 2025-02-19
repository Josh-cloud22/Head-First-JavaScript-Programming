
//This collects prompts check age and displays details
var name = prompt('Enter name here');
var currentYear = prompt('Enter current year')
var birthYear = prompt('Enter birth year')
var age = currentYear - birthYear;
var height = 88;
var sex = ' Male';
var status = age;
function person (name,age, height,sex, status){
   if (age > 18){
      var status = 'FYB';
   } else {
      var status = 'fresher';
   }
console.log('Here are your details:  ' + name, age, height, sex, status);
}
person(name, age, 6,'male');


   function dogYears(dogName, age) {
    var years = age * 7;
    console.log(dogName + " is " + years + " years old");
   }
   var myDog = "Fido";
   dogYears(myDog, 4);
 
   
   function makeTea(cups, tea) {
    console.log("Brewing " + cups + " cups of " + tea);
   }
//    var guests = 3;
   makeTea(3, "Earl Grey");
   
   
   function speak(kind) {
    var defaultSound = "";
    if (kind == "dog") {
    alert("Woof");
    } else if (kind == "cat") {
    alert("Meow");
    } else {
    alert(defaultSound);
    }
   }
   var pet = prompt("Enter a type of pet: ");
//    var kind = prompt("Enter a type of pet: ");
   speak(pet);
//    speak(kind);

   

   function addNumbers (num1, num2){
    var addedNumbers = num1 + num2;
    console.log(addedNumbers);
    return addedNumbers;
   }
   addNumbers(4, 4)

   var result = addNumbers(3, 10);

   console.log(result);

   function getScore(points) {
    var score = 0;  
    var i = 0;
    var levelThreshold = 10;  

    while (i < levelThreshold) {
        score += points;  
        i = i + 1;  
    }

    console.log("Final Score:", score);  
    return score;  
}

var result = getScore(5);
console.log(result);



   function clunk(times) {
    var num = times;
    while (num > 0) {
    display("clunk");
    num--;
    }
   }

   function thingamajig(size) {
    var facky = 1;
    clunkCounter = 0;
    if (size == 0) {
    display("clank");
    } else if (size == 1) {
    display("thunk");
    } else {
    while (size > 1) {
    facky = facky * size;
    size = size - 1;
    }
    clunk(facky);
    }
   }

   function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
   }
   var clunkCounter = 0;
   thingamajig(5);
   console.log(clunkCounter);
   
   var balance = 10500;
   var cameraOn = true;
   function steal(balance, amount) {
    cameraOn = false;
    if (amount < balance) {
    balance = balance - amount;
    }
    return amount;
    cameraOn = true; //any code after the return keyword does not run
   }
   var amount = steal(balance, 1250);
   alert("Criminal: you stole " + amount + "!");