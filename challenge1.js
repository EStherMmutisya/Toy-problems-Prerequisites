const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function gradeCalculator() {
  rl.question('Enter the marks of the students (between 0 and 100): ', (userInput) => {
    const marks = parseFloat(userInput);

    if (isNaN(marks) || marks < 0 || marks > 100) {
      console.log('Invalid input. Enter a number between 0 and 100.');
    } else {
      let grade;

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
