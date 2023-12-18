const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function speedDetector() {
    rl.question("Enter the driver's speed: ", (userInput) => {
        const driverSpeed = parseFloat(userInput);

        if (driverSpeed <= 70) {
            console.log("OK");
        } else {
            const units = Math.ceil((driverSpeed - 70) / 5);

            if (units > 12) {
                console.log(`License Suspended - Points: ${units}`);
            } else {
                console.log(`Points: ${units}`);
            }
        }

        rl.close();
    });
}

speedDetector();