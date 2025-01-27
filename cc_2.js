// Task 1

let products = ["Salt Shaker","Pepper Shaker", "Salt Block"];
let removed = products.pop();

console.log(removed); // Output: ["Salt Block"]

products.push ("Pepper Grinder");

console.log(products); // Output: [Salt Shaker, Pepper Shaker, Pepper Grinder]

// Task 2

let scores = [88, 77, 95, 65, 70];
scores[1] = 82;
console.log(scores); //Output: [88, 82, 95, 65, 70]

let totalScore = scores.reduce((total, amount) => total + amount, 0); // Sum of the scores = 400
let averageScore = totalScore / scores.length; // Output: 400/5 = 80

console.log ("Average:", averageScore); // Output = 80

// Task 3

let employee = {
    name: "Luke Smith",
    age: 30,
    department: "Packaging",
    isActive: true
};

employee.department = "Processing";
console.log ("Department:", employee.department); // Output: Luke Smith

employee.position = "Manager";
console.log ("Employee Position:", employee.position); // Output: Manager
console.log (employee) // Employee's Name, Age, Department, and if they are Active

// Task 4

let customers = [
    {name: "Joseph Willock", email: "joewillock@gmail.com", purchaseAmount: 60},
{name: "Emily Heslin", email: "emilyheslin@gmail.com", purchaseAmount: 35},
{name: "Mike Freeman", email: "mikefreeman@gmail.com", purchaseAmount: 45}
];

customers.push({name: "Chad Newsom", email: "chadnewsom@gmail.com", purchaseAmount: 75}); // This adds an object (Customer)

console.log(customers) // Objects Listed. Each Object contains Customer Name, Email, and the Purchase Amount

// Task 5

let order = {
    orderID: 18946, 
    customerName: "Brett Lyons",
    amount: 25,

    calculateTax: function(){const taxRate = .10;
        return this.amount * taxRate}
};

console.log (order); // Ouput: Order ID: 18946; Customer Name: Brett Lyons; Amount: 25
console.log ("Tax Amount:", order.calculateTax()) // The Tax Amount = $2.5