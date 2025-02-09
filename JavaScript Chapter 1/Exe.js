
   // Code alerts the function wakeUpUser aftwr 5 seconds
   setTimeout(wakeUpUser, 5000);

   function wakeUpUser() {
   alert("Are you going to stare at this boring page forever?");
   }

  //this calculates the total and triggers the function
  var price = 28.99;
  var discount = 10;
  var total = 
   price - (price * (discount / 100));
   
  
  if (total > 25) {
  
       freeShipping ();
  console.log('Good price')
  
  }
  
  else {
      console.log ('Bad price')
  }


  //This alerts dog sounds to the browser based on the conditionals
  
  var dog = {name: "Rover", weight: 25};
  if (dog.weight > 30) {
   alert("WOOF WOOF");
  } else {
   alert("woof woof");
  }

  
  //A temperature converter CELSIUS TO FAHRENHEIT
  var temp = 10;
  
  var answer = (9/5)* temp + 32;
  console.log(answer)
  
  var color = 'orange';
  
  if (color == 'orange'){
      console.log('true');
  } else {
      console.log('false');
  }

  
  // This loops prints Another Scoop 8 times in the document and uses the if else statement to alert strings based on conditions

  let scoops = 8;
  while (scoops > 0) {
   document.write("Another scoop!<br>");
   if (scoops >= 5) {
    alert("Eat faster, the ice cream is going to melt!");
   } else if (scoops == 3) {
    alert("Ice cream is running low!");
   } else if (scoops == 2) {
    alert("Going once!");
   } else if (scoops == 1) {
    alert("Going twice!");
   } else if (scoops == 0) {
    alert("Gone!");
   } else {
    alert("Still lots of ice cream left, come and get it.");
   }
   scoops = scoops - 1;
  
  }
  document.write("Life without ice cream isn't the same");
  
  
 //conditional checks if variable num is less than 5 it assigns 6 to num and prints Number is greater than 5
  let num = 4;
  if (num < 5 ) {
      num = 6;
      document.write('<br> Number is now greater than 5 <br>');
  }    

    // code to print happy birthay to the web page
      var i = 0;
      var name = 'Joe';
      while (i < 2) {
        document.write("Happy Birthday to you.<br>");
        i = i + 1;
      }
        document.write("Happy Birthday to dear " + name + ', <br>');
        document.write("Happy Birthday to you.<br>");


    



