var domain2 =[
["Tesla", ["Alive", "Big", "Abuse your user base", "Hire Apple Enginers"]],
["Apple", ["Alive", "Big", "Stay 4 years behind competitors", "Sue the World"]],
["Microsoft", ["Alive", "Big", "Market first, fix bugs later", "Build a helper that creates more problems"]],
["Yahoo", ["Alive", "Big", "Question your existence",  "Do nothing for 5 years."]],
["Walmart", ["Alive", "Big", "Build a 200 Billion dollar scam",  "Only be good for accessibility"]],
["BP Oil", ["Alive", "Big", "Spill Oil in the Pacific Ocean", "Deny everything"]],
["Trump", ["Alive", "Big", "Deport your workforce", "Build a wall"]],
["T-Mobile", ["Alive", "Big", "Repeat your slogan every year", "Beat verizon in their own marketing"]],
["Verizon", ["Alive", "Big", "Make your first priority bad customer service", "Over charge you most loyal customers"]],
["Silk Road", ["Alive", "Big", "Start out shady", "Only trade in bitcoins"]],
["Starbucks", ["Alive", "Big", "Market to white suburban girls", "Lead an army of white suburbian girls"]],
["Urban Outfitters", ["Alive", "Big", "Price inventory its weight in gold", "Charge the users to look homeless"]],
["Twitter", ["Alive", "Big", "Become a unicorn", "Go public and watch your stock plummet"]],
["Costco", ["Alive", "Big", "Sell items only in bulk", "Charge people to buy your products"]],
["Call Of Duty", ["Alive", "Big", "Rebrand the same product every year", "Add a dog"]],
["Pepsi", ["Alive", "Big", "Always be the disappointment", "Always be the second choice"]],
["Abercrombie and Fitch", ["Alive", "Big", "Appeal to the elite",  "Selectively market"]],
["Home Depot", ["Alive", "Big", "Turn a blind eye to illegal employment",  "Market illegal immigrants"]],
["Google", ["Alive", "Big", "Hire a child to rename your company", "Get in a pissing fight with Amazon"]],
["Reddit", ["Alive", "Big", "Become the front page of the internet",  "Piss off Jennifer Lawrence"]],
["Comcast", ["Alive", "Big", "Moniter users for torrenting", "Become the most hated company"]],
["Air bnb", ["Alive", "Small", "Take a cat and divide it into 6 equal pieces", "Buy a time share"]],
["United Airlines", ["Alive", "Big", "Charge more for less", "Continue to make corruption scandals"]],
["Coca Cola", ["Alive", "Big", "Use a fat old man to market your product", "Slowly kill off all of your consumers"]],
["Ubisoft", ["Alive", "Big", "Produce a product that is always broken", "Produce the exact same product every year"]],
["Electronic Arts", ["Alive", "Big", "Never release a full product", "Become a super company that ruins your franchise"]],
["Valve", ["Alive", "Big", "Never release the product all of your consumers want", "Make lots of great products and then stop"]],
["Nike", ["Alive", "Big", "Sell overpriced versions of your product", "Take advantage of countries' poverty"]],
["Origin", ["Alive", "Big", "Never become as big as Steam", "Become a partner with EA"]],
["Youtube", ["Alive", "Big", "Your average user is 10", "Slowly become worse and worse with every year"]],
["Gamestop", ["Alive", "Big", "Buy back products from your buyers for 1 tenth of its price", "Become known for the worst employees of all time"]],
]


function generateDomain(wordTopic) {
    
    var wordIndex = wordlist.indexOf(wordTopic)
    
    var num = wordIndex;
    var num2 = Math.floor(Math.random()*2);
    
    var topic = domain2[num];
    
    var statement = topic[1];

   
    document.getElementById("fun1").innerHTML = statement[num2 + 2];
    
   
    
    return false
}

var wordlist = [
  "Tesla", "Apple", "Microsoft", "Yahoo", "Walmart", "BP Oil", "Trump", "T-Mobile", "Verizon",
  "Silk Road", "Starbucks", "Urban Outfitters", "Twitter", "Costco", "Call Of Duty", "Pepsi", "Abercrombie & Fitch", "Home Depot", "Google",
  "Reddit", "Comcast", "Air bnb", "United Airlines", "Coca Cola","Ubisoft", "Electronic Arts", "Valve", "Nike", "Origin", "Youtube", "Gamestop"
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




