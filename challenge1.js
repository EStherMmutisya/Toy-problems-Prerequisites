//imporinng a module from node.js
const readline = require('readline');

//creating an interface that will read input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// a functiion to calculate the grade and marks of a student
function gradeCalculator() {
    //Getting iput from the user for marks
  rl.question('Enter the marks of the students (between 0 and 100): ', (userInput) => {
    //converting the input into a number
    const marks = parseFloat(userInput);

    //checking if the input is contained in the number bracket
    if (isNaN(marks) || marks < 0 || marks > 100) {
      console.log('Invalid input. Enter a number between 0 and 100.');
    } else {
      let grade;

      // calculting the marks and grade

      if (marks > 79) {
        grade = 'A';
      } else if (marks >= 60) {
        grade = 'B';
      } else if (marks >= 50) {
        grade = 'C';
      } else if (marks >= 40) {
        grade = 'D';
      } else {
        grade = 'E';
      }

      console.log(`The student has scored: ${grade}`);
    }

    rl.close();
  });
}

// Call the function to get and display the student grade
gradeCalculator();
