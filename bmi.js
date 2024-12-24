function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}

var bmi = bmiCalculator(74, 1.8);
console.log(bmi);

if (bmi < 18.5) {
    console.log("Your BMI is " + bmi + ", so you are underweight");
}

if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Your BMI is " + bmi + ", so you have a normal weight.");
}

if (bmi > 24.9) {
    console.log("Your BMI is " + bmi + ", so you are overweight.");
}