<<<<<<< HEAD
var domain2 = 
[["Tesla", ["Alive", "Big", "Abuse your user base", "Hire Apple Enginers"]],
["Apple", ["Alive", "Big", "Stay 4 years behind comeptitors", "Sue the World"]],
["Microsoft", ["Alive", "Big", "Market first, fix bugs later", "Build a helper that creates more problems"]], 
=======
var domain2 =
[["Tesla", ["Alive", "Big", "Abuse your user base", "Hire Apple Enginers"]],
["Apple", ["Alive", "Big", "Stay 4 years behind comeptitors", "Sue the World"]],
["Microsoft", ["Alive", "Big", "Market first, fix bugs later", "Build a helper that creates more problems"]],
>>>>>>> 55650f1d469dbc705b34b649231d433e2a66a1c9
["Yahoo", ["Alive", "Big", "Question your existence",  "Do nothing for 5 years."]],
["Walmart", ["Alive", "Big", "Build a 200 Billion dollar scam",  "Become a house for the shady"]],
["BP Oil", ["Alive", "Big", "Spill Oil in the Pacific Ocean", "Deny everything"]],
["Trump", ["Alive", "Big", "Insult the people you need", "Build a wall"]],
<<<<<<< HEAD
["T-Mobile", ["Alive", "Big", "Say you have doubled in size every year", "beat verizon in their own marketing"]],
["Verizon", ["Alive", "Big", "Make your first priority bad customer service", "Over charge you most loyal customers"]],
["Silk Road", ["Alive", "Big", "Start out shady", "Only trade in bitcoins"]],
["Starbucks", ["Alive", "Big", "Market to white suburbian girls", "Lead an army of white suburbian girls"]],
["Urban Outfitters", ["Alive", "Big", "Price inventory its weight in gold", "Charge the users to look homeless"]],
["Yeezy", ["Alive", "Big", "Be the bigest douche as possible", "Run for president"]],
["Costco", ["Alive", "Big", "Sell items only in bulk", "Charge people to buy your products"]],
["Call Of Duty", ["Alive", "Big", "Rebrand the same product every year", "Add a dog"]],
["Pepsi", ["Alive", "Big", "Can I have coke", "Always be the second choice"]],
["Abercrombie and Fitch", ["Alive", "Big", "Only sell to anorexic teens",  "Call everybody who doesnt by your products losers"]],
["Home Depot", ["Alive", "Big", "Turn a blind eye to illegal imployment",  "Market illegal immigrants"]],
["Google", ["Alive", "Big", "Hire a kid to rename your company", "Get in a pissing fight with Amazon"]],
["Reddit", ["Alive", "Big", "Become the front page of the internet",  "Piss of Jennifer Lawrence"]],
["Comcast", ["Alive", "Big", "Moniter users for torrenting", "Become the most hated company"]],
["Air bnb", ["Alive", "Small", "Take a cat and divide it into 6 equal peices", "Buy a time share"]],
["United Airlines", ["Alive", "Big", "Charge more for less"]],
["Coca Cola", ["Alive", "Big", "Use a fat old man to market your product", "Slowly kill off all of your consumers"]],
["Ubisoft", ["Alive", "Big", "Produce a product that is always broken", "Produce the exact same product every year"]],
["Electronic Arts", ["Alive", "Big", "Sell part of your product and then spoon feed the rest of the product", "Become a franchise ruining super company"]],
["Valve", ["Alive", "Big", "Never release the product all of your consumers want", "Make lots of great products and then stop"]],
["Nike", ["Alive", "Big", "Sell overpriced versions of your product", "Take advantage of countries' poverty"]],
["Origin", ["Alive", "Big", "Never become as big as Steam", "Become a partner with EA"]],
["Youtube", ["Alive", "Big", "Your average user is 10", "Slowly become worse and worse with every year"]],
["Gamestop", ["Alive", "Big", "Buy back products from your buyers for 1 tenth of its price", "Become known for the worst employees of all time"]],
["Ebay", ["Alive", "Big", "Blame everything on the users", ""]],
=======
["TMobile", ["Alive", "Big", "Say you have doubled in size every year", "beat verizon in their own marketing"]],
["Verizon", ["Alive", "Big", "Make your first priority bad customer service", "Over charge you most loyal customers"]],
["Silk Road", ["Alive", "Big", "Start out shady", "Only trade in bitcoins"]],
["Starbucks", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
>>>>>>> 55650f1d469dbc705b34b649231d433e2a66a1c9
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
["", ["Alive", "Big", ""]],
]

<<<<<<< HEAD

function generateDomain(wordTopic) {
    
    var wordIndex = wordlist.indexOf(wordTopic)
    
    var num = wordIndex;
    var num2 = Math.floor(Math.random()*2);
    
    var topic = domain2[num];
    
    var statement = topic[1];

   
    document.getElementById("textarea3").value = statement[num2 + 2];
    
   
    
    return false
}




// IFTTT Slottt Machine by Jen Hamon
// jen@ifttt.com
// github.com/jhamon

var wordlist = [
  "Tesla", "Apple", "Microsoft", "Yahoo", "Walmart", "BP Oil", "Trump", "TMobile", "Verizon",
  "Silk Road", "Starbucks", "Urban Outfitters", "Yeezy", "Costco", "Call Of Duty", "Pepsi", "Steve Jobs", "Ebay"
];

function buildSlotItem(text) {
  return $('<div>').addClass('slottt-machine-recipe__item')
    .text(text);
}

function buildSlotContents($container, wordlist) {
  $items = wordlist.map(buildSlotItem);
  $container.append($items);
}

function popPushNItems($container, n) {
  $children = $container.find('.slottt-machine-recipe__item');
  $children.slice(0, n).insertAfter($children.last());

  if (n === $children.length) {
    popPushNItems($container, 1);
  }
}

// After the slide animation is complete, we want to pop some items off
// the front of the container and push them onto the end. This is
// so the animation can slide upward infinitely without adding
// inifinte div elements inside the container.
function rotateContents($container, n) {
  setTimeout(function() {
    popPushNItems($container, n);
    $container.css({
      top: 0
    });
  }, 300);
}

function randomSlotttIndex(max) {
  var randIndex = (Math.random() * max | 0);
  return (randIndex > 10) ? randIndex : randomSlotttIndex(max);
}


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
=======
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateDomain() {


    var num = Math.floor(Math.random()*7);
    var num2 = Math.floor(Math.random()*2);

    var topic = domain2[num];

    var statement = topic[1];

    document.getElementById("textarea1").value = topic[0];
    document.getElementById("textarea3").value = capitalizeFirstLetter(statement[num2 + 2]);

    return false
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
>>>>>>> 55650f1d469dbc705b34b649231d433e2a66a1c9
