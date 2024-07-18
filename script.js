// Function to calculate BMI


function calculateBMI() {

    const imageElement = document.getElementById('resultImage');

    let username = document.getElementById('userName').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let age = document.getElementById('age').value;

    let welcomeGreet = document.getElementById('exampleModalToggleLabel');
    let discription = document.getElementById('OutputDef');
    let resultView = document.getElementById('Output');
    
    if (age <= 0 || weight <= 0 || height <= 0) {
        alert("enter a valid input");
    }

    
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);


    result=bmi.toFixed(2);

    if(result<=24.9 && result>=18.5){
        discription.innerHTML = "Your BMI is Optimal"
        resultView.style.backgroundColor = 'greenyellow'
        resultView.style.borderRadius = '10px'
        confetti()
    }else{
        discription.innerHTML = "Your BMI is not Optimal"
        resultView.style.backgroundColor = 'red'
        resultView.style.borderRadius = '10px'
    }

    welcomeGreet.innerHTML = `Hello, ${username}`

    resultView.innerHTML = `BMI value is : ${result}`

    console.log(result);

    

    // To change the image in the modal

    // Define the condition
    if (bmi > 25) {
        imageElement.src = 'sad-emoji.png';
    } else if (bmi < 18.5) {
        imageElement.src = 'sad-emoji.png';
    } else {
        imageElement.src = 'smile.png';
    }
}


function Refreshpage(){
    window.location='./index.html'
}

//   onclick="confetti()"


// 18.5 and 24.9 kg/m2