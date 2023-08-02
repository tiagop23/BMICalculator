



function calculatebmi() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let bmi = (weight / (height * height)).toFixed(2);

    document.getElementById('heading').innerHTML = 'Your bmi is';
    document.getElementById('bmi').innerHTML = bmi;

    if (bmi < 18.5) {
        document.getElementById('message').innerHTML = "Underweight";
    }

    if (bmi >= 18.5 && bmi < 24.5) {
        document.getElementById('message').innerHTML = "Normal";

    }

    if (bmi >= 24.5 && bmi < 30) {
        document.getElementById('message').innerHTML = "Overweight";
    }

    if (bmi > 30) {
        document.getElementById('message').innerHTML = "Obesity";
    }

}





