//importing readline from node.js
const readline = require('readline');


// an interface that reads input from a user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// the function to detect speed and calculate points

function speedDetector() {
    //getting input for the speed
    rl.question("Enter the driver's speed: ", (userInput) => {
       
       //converting the input to match the points and speed limit
        const driverSpeed = parseFloat(userInput);
        
        //checking if the speed is 70 or below
        if (driverSpeed <= 70) {
            console.log("OK");
        } else {
            // calculating points to be deducted
            const units = Math.ceil((driverSpeed - 70) / 5);

            // checking if points exceed the limit for licesnse suspension
            if (units > 12) {
                console.log(`License Suspended - Points: ${units}`);
            } else {
                console.log(`Points: ${units}`);
            }
        }
        //closing the readline interface
        rl.close();
    });
}
//calling the function to get display and the speed limit points
speedDetector();