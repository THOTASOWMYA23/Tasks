// const userInformation = ["SOWMYA", 22, "GODAVARIKHANI","TELANGANA"];
 
// const employeeInformation1 = [...userInformation, "Apple", "Hyderabad", ...userInformation];
// console.log(employeeInformation);
 
// const userInformation1 = {
//     name: "SOWMYA",
//     age: 22,
//     address: "GODAVARIKHANI",
//     state: "TELANGANA"
// }
 
// const employeeInformation = {
//     ...userInformation,
//     ...userInformation,
//     company: "Apple",
//     city: "Hyderabad"
// }
// console.log(employeeInformation);
 
 
 
// Destructing :
// const numList = [10,20,30,40,50];
 
// const [a, b, c, d, e] = numList;
// console.log(num1);
// console.log(num2);
 
// console.log(numList[2]);
 
 
 
// const userInformation3 = {
//     name: "SOWMYA",
//     age: 22,
//     address: "GODAVARIKHANI",
//     state: "TELANGANA"
// }
// console.log(userInformation.address);
// const {nam, age, address, state} = userInformation;
// console.log(nam);
// console.log(age);
// console.log(address);
// console.log(state);
 
// console.log(userInformation.name);
// console.log(userInformation.age);
// console.log(userInformation.address);
// console.log(userInformation.state);


// const message = prompt("Enter your message");
// console.log(message);

// if (message.length > 20) {
//   alert("Enter less than 100 Characters");
// }

// var wordCount = 0;

// function countWords() {
//     var userInput = prompt("Please enter some text:");
//     if (userInput !== null) { // Check if the user didn't cancel the prompt
//         var words = userInput.split(/\s+/); // Split the input text by whitespace to count words
//         wordCount += words.length; // Increment the word count
//         if (wordCount >= 200) {
//             alert("You have reached 200 words!");
//         } else {
//             countWords(); // Continue prompting for more text
//         }
//     }
// }

// countWords();




// function countWords() {
//     var inputText = document.getElementById("wordInput").value;
//     var wordArray = inputText.match(/\S+/g); // Match non-space characters to count words
//     var wordCount = wordArray ? wordArray.length : 0;

//     if (wordCount > 200) {
//         alert("You have exceeded the limit of 200 words.");
//     } else if (wordCount === 0) {
//         alert("You haven't entered any words yet.");
//     } else {
//         alert("You have entered " + wordCount + " word(s).");
//     }

//     var remainingWords = 200 - wordCount;
//     alert("You have entered " + wordCount + " word(s) out of 200. " + remainingWords + " word(s) remaining.");
// }



//   // Define an array of three colors
//   var colors = ["red", "green", "orange"];
//   var currentColorIndex = 0;

//   // Function to change the color of the color box
//   function changeColor() {
//     var colorBox = document.getElementById('colorBox');
//     colorBox.style.backgroundColor = colors[currentColorIndex];
//     // Increment the color index
//     currentColorIndex = (currentColorIndex + 1) % colors.length;
//   }

//   // Attach click event listener to the button
//   document.getElementById('changeColorBtn').addEventListener('click', changeColor);
