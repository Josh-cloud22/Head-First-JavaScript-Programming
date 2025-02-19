var boyNames = ['Josh', 'Jake', 'Pete', 'James'];
var out;
// var len = boyNames.length;
var counter = 0;
while (counter < boyNames.length ){
    out = 'These are boy names:' + boyNames+ " " + counter;
    console.log(out);
    // console.log(len)
    counter = counter +1
};

var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var last = products[3]
var recent = products[0]
console.log(last, '', recent)

function makePhrases() {
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);
    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    alert(phrase);
    }
    makePhrases();

    var scores = [60, 50, 60, 58, 54, 54, 
        58, 50, 52, 54, 48, 69,
        34, 55, 51, 52, 44, 51,
        69, 64, 66, 55, 52, 61,
        46, 31, 57, 52, 44, 18,
        41, 53, 55, 61, 51, 44];
    
    var output;
    var i = 0;
    while (i < scores.length){
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        i = i +1
    }
//This is a for
    var output;
    for (var i = 0; i < scores.length; i = i +1){
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        
    }
   
var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [
    false, 
    false, 
    false, 
    true];
  
 for (i = 0; i < hasBubbleGum.length; i++) {
if (hasBubbleGum[i]) {
console.log(products[i] + 
 " contains bubble gum");
}

}
