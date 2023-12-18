const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate PAYE
const calculatePAYE = (salary) => {
    if (salary <= 24000) {
        return 0;
    } else if (salary <= 32333) {
        return (salary - 24000) * 0.1;
    } else if (salary <= 500000) {
        return (salary - 32334) * 0.25 + 832;
    } else if (salary <= 800000) {
        return (salary - 500001) * 0.3 + 109895;
    } else {
        return (salary - 800000) * 0.35 + 238895;
    }
};

// Function to calculate NHIF
const calculateNHIF = (grossPay) => {
    const nhifRates = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 35000, max: Infinity, deduction: 950 }
    ];

    const applicableRate = nhifRates.find(rate => grossPay >= rate.min && grossPay <= rate.max);

    return applicableRate ? applicableRate.deduction : 0;
};

// Function to calculate NSSF
const calculateNSSF = (grossPay) => {
    const tier1Limit = 6000;
    const tier2Limit = 18000;
    const employeeContribution = grossPay <= tier1Limit ? grossPay * 0.06 : tier1Limit * 0.06 + Math.min(grossPay - tier1Limit, tier2Limit - tier1Limit) * 0.06;
    const employerContribution = employeeContribution;

    return {
        employee: employeeContribution,
        employer: employerContribution
    };
};

// Function to calculate Net Salary
const calculateNetSalary = (basicSalary, benefits) => {
    const grossSalary = basicSalary + benefits;

    const payee = calculatePAYE(grossSalary);

    const nhif = calculateNHIF(grossSalary);

    const nssf = calculateNSSF(grossSalary);

    const netSalary = grossSalary - payee - nhif - nssf.employee;

    return {
        grossSalary,
        payee,
        nhif,
        nssf,
        netSalary
    };
};

// Get user input using readline
rl.question("Enter your basic salary: ", (basicSalaryInput) => {
    rl.question("Enter your benefits: ", (benefitsInput) => {
        // Convert inputs to numbers
        const basicSalary = parseFloat(basicSalaryInput);
        const benefits = parseFloat(benefitsInput);

        // Check if inputs are valid numbers
        if (!isNaN(basicSalary) && !isNaN(benefits)) {
            const salaryDetails = calculateNetSalary(basicSalary, benefits);
            console.log("Gross Salary:", salaryDetails.grossSalary);
            console.log("PAYE (Tax):", salaryDetails.payee);
            console.log("NHIF Deduction:", salaryDetails.nhif);
            console.log("NSSF Contribution (Employee):", salaryDetails.nssf.employee);
            console.log("Net Salary:", salaryDetails.netSalary);
        } else {
            console.log("Please enter valid numbers for basic salary and benefits.");
        }

        // Close the readline interface
        rl.close();
    });
});