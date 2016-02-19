var domain2 =[
["Tesla", ["Alive", "Big", "Abuse your user base", "Hire Apple Enginers"]],
["Apple", ["Alive", "Big", "Stay 4 years behind competitors", "Sue the World"]],
["Microsoft", ["Alive", "Big", "Market first, fix bugs later", "Build a helper that creates more problems"]],
["Yahoo", ["Alive", "Big", "Question your existence",  "Do nothing for 5 years."]],
["Walmart", ["Alive", "Big", "Build a 200 Billion dollar scam",  "Only be good for accessibility"]],
["BP Oil", ["Alive", "Big", "Spill Oil in the Pacific Ocean", "Deny everything"]],
["Trump", ["Alive", "Big", "Deport your workforce", "Build a wall"]],
["T-Mobile", ["Alive", "Big", "Focus on marketing rather than improving your service", "Beat verizon in their own marketing"]],
["Verizon", ["Alive", "Big", "Make your first priority bad customer service", "Over charge you most loyal customers"]],
["Silk Road", ["Alive", "Big", "Meet the next darknet admin", "Only trade in bitcoins"]],
["Urban Outfitters", ["Alive", "Big", "Charge large amounts for ripped clothes", "Charge the users to look homeless"]],
["Twitter", ["Alive", "Big", "Claim to social network, but limit social expression", "Go public and watch your stock plummet"]],
["Call Of Duty", ["Alive", "Big", "Rebrand the same product every year", "When all else fails, add a dog"]],
["Pepsi", ["Alive", "Big", "Always be the disappointment", "Always be the second choice"]],
["Abercrombie and Fitch", ["Alive", "Big", "Appeal to the elite",  "Selectively market"]],
["Home Depot", ["Alive", "Big", "Turn a blind eye to illegal employment",  "Market illegal immigrants"]],
["Google", ["Alive", "Big", "Open source all your projects", "Fight with Apple to the death"]],
["Jet Fuel", ["Alive", "Big", "", ""]],
["Minecraft", ["Alive", "Big", "Become the front page of the internet",  "#wasteacommunity'stime"]],
["Amazon", ["Alive", "Big", "", ""]],
["iPhone", ["Alive", "Big", "", ""]],
["Google Fiber", ["Alive", "Big", "", ""]],
["Digg", ["Alive", "Big", "", ""]],
["Github", ["Alive", "Big", "", ""]],
["BMW", ["Alive", "Big", "", ""]],
["Facebook", ["Alive", "Big", "", ""]],
["McDonalds", ["Alive", "Big", "", ""]],
["IBM", ["Alive", "Big", "", ""]],
["eBay", ["Alive", "Big", "", ""]],
["Android", ["Alive", "Big", "", ""]],
["Lego", ["Alive", "Big", "", ""]],
["Kodak", ["Alive", "Big", "", ""]],
["Circuit City", ["Alive", "Big", "File ", ""]],
["Quizlet", ["Alive", "Big", "", ""]],
["Skype", ["Alive", "Big", "", ""]],
["Soviet Union", ["Alive", "Big", "", ""]],
["Russia", ["Alive", "Big", "", ""]],
["North Korea", ["Alive", "Big", "", ""]],
["Adidas", ["Alive", "Big", "", ""]],
["Honda", ["Alive", "Big", "", ""]],
["Xbox One", ["Alive", "Big", "", ""]],
["PS4", ["Alive", "Big", "", ""]],
["Java", ["Alive", "Big", "", ""]],
["C++", ["Alive", "Big", "", ""]],
["Python", ["Alive", "Big", "", ""]],
["Netflix", ["Alive", "Big", "Netflix and Chill", ""]],
["Spotify", ["Alive", "Big", "", ""]],
["Reddit", ["Alive", "Big", "Become the front page of the internet",  "#WasteACommunity's time"]],
["Comcast", ["Alive", "Big", "Monopolize area service", "Become the most hated company"]],
["Air bnb", ["Alive", "Small", "Take a cat and divide it into 6 equal pieces", "Buy a time share"]],
["United Airlines", ["Alive", "Big", "Charge more for less", "Continue to make corruption scandals"]],
["Coca Cola", ["Alive", "Big", "Use a fat old man to market your product", "Slowly kill off all of your consumers"]],
["Ubisoft", ["Alive", "Big", "Produce a product that is always broken", "Produce the exact same product every year"]],
["Electronic Arts", ["Alive", "Big", "Never release a full product", "Become a super company that ruins your franchise"]],
["Valve", ["Alive", "Big", "Never release the product all of your consumers want", "Make lots of great products and then stop"]],
["Nike", ["Alive", "Big", "Sell overpriced versions of your product", "Take advantage of countries' poverty"]],
["Origin", ["Alive", "Big", "Never become as big as Steam", "Become a partner with EA"]],
["Youtube", ["Alive", "Big", "Create a cat video epidemic", "Slowly become worse and worse with every update"]],
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
  "Silk Road", "Urban Outfitters", "Twitter", "Call Of Duty", "Pepsi", "Abercrombie & Fitch", "Home Depot", "Google",
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




