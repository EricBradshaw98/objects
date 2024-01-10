const raisinAlarm = function(cookie) {
  // Put your solution here
// collaboration by Eric B and Jonas K


  //check if raisin emoji is present in a given array, return true/false value

  if (cookie.includes("🍇")) {
    return "Raisin alert!";
  } else {
    return "All good!";
  }

};

//return Raisin alert if raisin is true, ALL GOOD if raisin is false ^^

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));