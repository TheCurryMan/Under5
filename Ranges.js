var range = 
[["Dairy",["Dead", "Big", "force one cow to make the milk for three", "spend millions developing cheese"]], 
["Chemicals",["Alive", "Big", "use chemicals and start WWIII", "React more Sodium and Chloride for the saltiest nation alive"]], 
["Airplanes", ["Dead", "Big", "find two new buildings", "trust no one, and suspect everyone. The world is filled with corporate spies"]],
["Crops", ["Alive", "Big", "develop 400 tons of harmful pesticides", "create law suits for genetic theft"]],
["Banking", ["Alive", "Big", "mislead the nation, and start a second Great Depression", "bill people, and push people into debt"]],
["Tech", ["Alive", "Big", "release a new device every other hour", "claim to be a hacker and strike fear into all"]],
["Books", ["Dead", "Big", "read Farenheit 451 and learn from it", "burn those pages"]],
["Education", ["Alive", "Big", "pay teachers 1/1000 of what atheletes make", "hire unqualified people to teach the future"]],
["Energy",["Alive", "Big", "start nuclear meltdown", "swim in cash made by solar panels"]],
["Fashion",["Alive", "Big", "keep it 90% skin, 10% translucent", "Buy everything never wear anything"]],
["Beverages",["Alive", "Big", "try to keep the percentage legal", "know how to skip fake IDs"]],
["Health", ["Alive", "Big", "complain about Obama", "overdose patients"]],
["Insurance", ["Alive", "Big", "get 15% off car insurance", "just scam"]],
["Law", ["Alive", "Big", "Keep lying", "Defend the rich"]],
["Manufacturing", ["Alive", "Big", "always produce in china", "live for yourself, and only yourself"]],
["Media", ["Alive", "Big", "sexualize, and agrandize", "make sure people hear what they want to hear"]],
["Music", ["Alive", "Big", "remember that emotions are underrated", "move the masses"]],
["Cars", ["Alive", "Big", "build a faulty mechanism", "blame crashes on the drivers"]],
["Steel", ["Alive", "Big", "develop a monopoly", "wallow in misery because you will never be Carnegie"]],
["Oil", ["Alive", "Big", "develop a monopoly", "wallow in misery because you will never be Rockefeller"]],
["Video Games", ["Alive", "Big", "brainwash a generation of killers", "destroy children's socializing capability"]],
["Phones", ["Alive", "Big", "confine people to their devices", "destroy current social interaction"]],
["Stationary", ["Alive", "Big", "make a new paperweight. Sell it for 100$", "make pencils and paper luxuries"]], 
["Junk Food", ["Alive", "Big", "claim price efficiency, and rip everyone off", "increase obesity in America"]],
["Beauty", ["Alive", "Big", "make photoshop your best friend", "promote eating disorders"]],
["Art", ["Alive", "Big", "underpay college grads", "continue forging fakes"]],
["Culinary", ["Alive", "Big", "get yelled at by Gordon Ramsey", "call an existing recipe yours"]],
["Shipping", ["Alive", "Big", "ship products 2 months late", "overcharge"]],
["Plastics", ["Alive", "Big", "remember to destroy the environment", "defy mother nature"]],
["News", ["Alive", "Big", "get the weather wrong", "spread government propoganda"]],
["Radios", ["Alive", "Big", "try to sound hype", "falsely advertise"]],
["Politics", ["Alive", "Big", "sling mud everywhere", "lie all the time"]], 
["Headphones", ["Alive", "Big", "add more bass", "get dominated by Dre" ]],
["Toys", ["Alive", "Big", "study children", "enforce social stereotypes"]],
["Jewelry", ["Alive", "Big", "underappraise others' jewelry", "overprice everything"]]
];


function generateRanges(wordTopic2) {
    
    var wordIndex2 = wordlist2.indexOf(wordTopic2)
    
    var num = wordIndex2;
    var num2 = Math.floor(Math.random()*2);
    
    var topic = range[num];
    
    var statement = topic[1];

   
    document.getElementById("textarea4").value = statement[num2 + 2];
    
    return false
}

var wordlist2 = ['Dairy', 'Chemicals', 'Airplanes', 'Crops', 'Banking', 'Tech', 'Books', 'Education', 'Energy', 'Fashion', 'Beverages', 'Health', 'Insurance', 'Law', 'Manufacturing', 'Media', 'Music', 'Cars', 'Steel', 'Oil', 'Video Games', 'Phones', 'Stationary', 'Junk Food', 'Beauty', 'Art', 'Culinary', 'Shipping', 'Plastics', 'News', 'Radios', 'Politics', 'Headphones', 'Toys', 'Jewelry'];

function buildSlotItem1(text) {
  return $('<div>').addClass('slottt-machine-recipe__item')
    .text(text);
}

function buildSlotContents1($container, wordlist) {
  $items = wordlist2.map(buildSlotItem1());
  $container.append($items);
}

function popPushNItems1($container, n) {
  $children = $container.find('.slottt-machine-recipe__item');
  $children.slice(0, n).insertAfter($children.last());

  if (n === $children.length) {
    popPushNItems1($container, 1);
  }
}

// After the slide animation is complete, we want to pop some items off
// the front of the container and push them onto the end. This is
// so the animation can slide upward infinitely without adding
// inifinte div elements inside the container.
function rotateContents1($container, n) {
  setTimeout(function() {
    popPushNItems1($container, n);
    $container.css({
      top: 0
    });
  }, 300);
}

function randomSlotttIndex1(max) {
  var randIndex = (Math.random() * max | 0);
  return (randIndex > 10) ? randIndex : randomSlotttIndex1(max);
}

function animate1() {
  var wordIndex = randomSlotttIndex1(wordlist2.length);
  $wordbox2.animate1({
    top: -wordIndex * 150
  }, 500, 'swing', function() {
    rotateContents1($wordbox2, wordIndex);
  });
}
   