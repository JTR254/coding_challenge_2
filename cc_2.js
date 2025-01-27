// Task 1

let products = ["Salt Shaker","Pepper Shaker", "Salt Block"];
let removed = products.pop();

console.log(removed); // Output: ["Salt Block"]

products.push ("Pepper Grinder");

console.log(products); // Output: [Salt Shaker, Pepper Shaker, Pepper Grinder]

// Task 2

let scores = [88, 77, 95, 65, 70]
scores[1] = 82
console.log(scores); //Output: [88, 82, 95, 65, 70]

let totalScore = totalScore.reduce((total, amount) => total + amount, 0); // Sum of the scores = 400
let averageScore = totalScore / scores.length // Output: 400/5 = 80

console.log (totalScore)
console.log ("Average", averageScore)
