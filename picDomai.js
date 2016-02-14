var domain2 = 
[["Tesla", ["Alive", "Big", "Abuse your user base", "Hire Apple Enginers"]],
["Apple", ["Alive", "Big", "Stay 4 years behind comeptitors", "Sue the World"]],
["Microsoft", ["Alive", "Big", "Market first, fix bugs later", "Build a helper that creates more problems"]], 
["Yahoo", ["Alive", "Big", "Question your existence",  "Do nothing for 5 years."]],
["Walmart", ["Alive", "Big", "Build a 200 Billion dollar scam",  "Become a house for the shady"]],
["BP Oil", ["Alive", "Big", "Spill Oil in the Pacific Ocean", "Deny everything"]],
["Trump", ["Alive", "Big", "Insult the people you need", "Build a wall"]],
["T-Mobile", ["Alive", "Big", "Say you have doubled in size every year", "beat verizon in their own marketing"]],
["Verizon", ["Alive", "Big", "Make your first priority bad customer service", "Over charge you most loyal customers"]],
["Silk Road", ["Alive", "Big", "Start out shady", "Only trade in bitcoins"]],
["Starbucks", ["Alive", "Big", "Market to white suburbian girls", "Lead an army of white suburbian girls"]],
["Urban Outfitters", ["Alive", "Big", "Price inventory its weight in gold", "Charge the users to look homeless"]],
["Yeezy", ["Alive", "Big", "Be the bigest douche as possible", "Run for president"]],
["Costco", ["Alive", "Big", "Sell items only in bulk", "Charge people to buy your products"]],
["Call Of Duty", ["Alive", "Big", "Rebrand the same product every year", "Add a dog"]],
["Pepsi", ["Alive", "Big", "Can I have coke", "Always be the second choice"]],
["Steve Jobs", ["Alive", "Big", "Take credit for your friends idea",  "Become CEO, give graduation speech at Stanford and call everybody idiots"]],
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
]


function generateDomain(wordIndex) {
    
    
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
  "Silk Road", "Starbucks", "Urban Outfitters", "Yeezy", "Costco", "Call Of Duty", "Pepsi", "Steve Jobs"
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


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            