var range = 
[["Dairy",["Dead", "Big", "force one cow to make the milk for three", "spend thousands developing cheese"]], 
["Chemicals",["Alive", "Big", "use chemicals and start WWIII", "React more Sodium and Chloride for the saltiest nation alive"]], 
["Airplanes", ["Dead", "Big", "find two new buildings", "trust no one, and suspect everyone. The world is filled with corporate spies"]],
["Crops", ["Alive", "Big", "develop 400 tons of harmful pesticides", "create law suits for genetic theft"]],
["Banking", ["Alive", "Big", "mislead the nation, and start a second Great Depression", "bill people, and push people into debt"],
["Tech", ["Alive", "Big", "release a new device every other hour", "claim to be a hacker and strike fear into all"]],
["Books", ["Dead", "Big", "read Farenheit 451 and learn from it", "burn those pages"]],
["Education", ["Alive", "Big", "pay teachers 1/1000 of what atheletes make", "hire unqualified people to teach the future"]],
["Energy",["Alive", "Big", "start nuclear meltdown", ""]],
["Fashion",["Alive", "Big", "keep it 90% skin, 10% translucent", "Buy everything never wear anything"]],
["Beverages",["Alive", "Big", "try to keep the percentage legal", "know how to skip fake IDs"]],
["Health", ["Alive", "Big", "complain about Obama", "overdose patients"]],
["Insurance", ["Alive", "Big", "get 15% off car insurance", "just scam"]],
["Law", ["Alive", "Big", "Keep lying", "Defend the rich"]],
["Manufacturing", ["Alive", "Big", "always produce in china", "live for yourself, and only yourself"]],
["Media", ["Alive", "Big", "sexualize, and agrandize", "make sure people hear what they want to hear"]],
["Music", ["Alive", "Big", "remember that emotions are underrated", "move the masses"]],
["Tourism", ["Alive", "Big", ""]],
["Cars", ["Alive", "Big", ""]],
["Steel", ["Alive", "Big", ""]],
["Oil", ["Alive", "Big", ""]],
["Video Games", ["Alive", "Big", "Brainwash a generation of killers", "Destroy children's socializing capability"]],
["Phones", ["Alive", "Big", ""]],
["Boats", ["Alive", "Big", ""]],
["Fishing", ["Alive", "Big", ""]],
["Stationeries", ["Alive", "Big", ""]], 
["Junk Food", ["Alive", "Big", ""]]
["Beauty", ["Alive", "Big", ""]],
["Watches", ["Alive", "Big", ""]],
["Messaging", ["Alive", "Big", ""]],
["Art", ["Alive", "Big", ""]],
["Clothes", ["Alive", "Big", ""]],
["Culinary", ["Alive", "Big", ""]],
["Shipping", ["Alive", "Big", ""]],
["Plastics", ["Alive", "Big", ""]],
["Lights", ["Alive", "Big", ""]],
["Appliances", ["Alive", "Big", ""]],
["Pets", ["Alive", "Big", ""]],
["Furniture", ["Alive", "Big", ""]],
["Gardening", ["Alive", "Big", ""]],
["News", ["Alive", "Big", ""]],
["Radios", ["Alive", "Big", ""]],
//["Adult Film Industry", ["Alive", "Big", "say welcome to 47% of the online industry", "spread a new virus"]], 
["Videos", ["Alive", "Big", ""]],
["Politics", ["Alive", "Big", ""]], 
["Headphones", ["Alive", "Big", ""]],
["Toys", ["Alive", "Big", ""]],
["Alcohol", ["Alive", "Big", ""]],
["Supplies", ["Alive", "Big", ""]],
["Jewelries", ["Alive", "Big", ""]]
]]


function generateRanges() {
    
    
    var num = Math.floor(Math.random()*15);
    var num2 = Math.floor(Math.random()*2);
    
    var topic = range[num];
    
    var statement = topic[1];
    
    document.getElementById("textarea2").value = topic[0];
    document.getElementById("textarea4").value = statement[num2 + 2];
    
    return false
}
   