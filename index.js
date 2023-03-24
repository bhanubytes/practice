// let tweet = prompt("Compose your tweet:");
// let tweetCount = tweet.length;
// alert(
//   `you have writtent ${tweetCount} characters, you have ${
//     280 - tweetCount
//   } characters remaining`
// );

// var nameCut = "Bhanu";
// var charactersCut = nameCut.slice(0, 150);
// console.log(charactersCut + "...");

function calculateBMI(weight, height) {
  let BMI = weight / (height * height);
  return BMI;
}
let myWeight = 84;
let myHeight = 1.64;
let myBmi = calculateBMI(myWeight, myHeight);
console.log("My BMI is: ", myBmi);
