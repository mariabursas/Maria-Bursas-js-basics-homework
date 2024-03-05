//Exercise 1
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//Exercise 2
const userInput = " january ";
const userInputToCompare = userInput.toLowerCase().trim();
if (
  userInputToCompare === "september" ||
  userInputToCompare === "october" ||
  userInputToCompare === "november"
) {
  console.log(
    userInputToCompare.charAt(0).toUpperCase() +
      userInputToCompare.slice(1) +
      ", the season is Autumn."
  );
} else if (
  userInputToCompare === "december" ||
  userInputToCompare === "january" ||
  userInputToCompare === "february"
) {
  console.log(
    userInputToCompare.charAt(0).toUpperCase() +
      userInputToCompare.slice(1) +
      ", the season is Winter."
  );
} else if (
  userInputToCompare === "march" ||
  userInputToCompare === "april" ||
  userInputToCompare === "may"
) {
  console.log(
    userInputToCompare.charAt(0).toUpperCase() +
      userInputToCompare.slice(1) +
      ", the season is Spring."
  );
} else if (
  userInputToCompare === "june" ||
  userInputToCompare === "july" ||
  userInputToCompare === "august"
) {
  console.log(
    userInputToCompare.charAt(0).toUpperCase() +
      userInputToCompare.slice(1) +
      ", the season is Summer."
  );
} else console.log("Please add a valid month.");

//Exercise 3
var inkLevels = {
  cyan: 23,
  magenta: 12,
  yellow: 10,
};
var inkLevels = {
  cyan: 432,
  magenta: 543,
  yellow: 777,
};
var inkLevels = {
  cyan: 700,
  magenta: 700,
  yellow: 0,
};

var colorWithLowestInkLevel = null;
var printedPages = Math.min(
  inkLevels.cyan,
  inkLevels.magenta,
  inkLevels.yellow
);
for (const color in inkLevels) {
  if (inkLevels[color] === printedPages) {
    colorWithLowestInkLevel = color;
  }
}
console.log(
  "Only " +
    printedPages +
    " pages can be printed due to the low level of the " +
    colorWithLowestInkLevel +
    " ink."
);

//Exercise 4

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(
  "After adding Meat at the beginning of the array the list is: " + shoppingCart
);

if (!(shoppingCart[shoppingCart.length - 1].toLowerCase() === "sugar")) {
  shoppingCart.push("Sugar");
}
console.log(
  "After adding Sugar at the end of the array the list is: " + shoppingCart
);
var allergic = true;
if (allergic) {
  var indexOfHoney = shoppingCart.indexOf("Honey");
  shoppingCart.splice(indexOfHoney, 1);
}
console.log(
  "After removing Honey if the person is allergic the array is: " + shoppingCart
);
var indexOfTea = shoppingCart.indexOf("Tea");
if (indexOfTea !== -1) {
  shoppingCart.splice(indexOfTea, 1, "Green Tea");
}
console.log("After changing Tea to Green tea the array is: " + shoppingCart);
