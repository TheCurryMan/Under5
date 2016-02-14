var picdomain = 
[
  ["Box"],
  ["carton"],
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
  [],
  [],
  [],
  [],
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


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            