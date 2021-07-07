let name = "Sergii",
  developer;
developer = name;

/* function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
} */

/* 
var myArr = [2, 3, 4, 5, 6];
console.log(myArr.length); */

/* // Setup
var collection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  if (prop != "tracks" && value !== "") {
    object[id][prop] = value;
    return object;
  } else if (prop == "tracks" && value != "") {
    object[id][prop].push(value);
    return object;
  } else if (value == "") {
    delete object[id][prop];
    return object;
  } else {
  }
} */

// updateRecords(collection, 5439, 'artist', 'ABBA');

/* let stringToTrainOn = " String to train on \fnew line";
console.log(stringToTrainOn);
let countString = "count";
console.log(countString.length);
console.log(countString[countString.length - 1]);
console.log(3 != "3");
 */

/* var count = 0;

function cc(card) {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card >= 7 && card <= 9) {
    count = 0;
  } else if (
    card == 10 ||
    card == "J" ||
    card == "Q" ||
    card == "K" ||
    card == "A"
  ) {
    count--;
  }
  switch (count) {
    case count > 0:
      return count + " Bet";
    case count <= 0:
      return count + " Hold";
  }
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A"); */

/* var count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6) {
    count++;
    if (count <= 0) {
      return count + " Hold";
    }
    return count + " Bet";
  } else if (card >= 7 && card <= 9) {
    count = 0;
    return count + " Hold";
  } else if (
    card == 10 ||
    card == "J" ||
    card == "Q" ||
    card == "K" ||
    card == "A"
  ) {
    count--;
    if (count <= 0) {
      return count + " Hold";
    }
    return count + " Bet";
  }
  return "Change Me";
  // Only change code above this line
}
 */
