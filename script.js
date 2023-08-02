



function calculatebmi() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let bmi = (weight / (height * height)).toFixed(2);

    document.getElementById('heading').innerHTML = 'Your bmi is';
    document.getElementById('bmi').innerHTML = bmi;

}





