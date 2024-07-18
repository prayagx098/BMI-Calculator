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
        // alert("enter a valid input");
        console.log("Error code:400 'error in value' ")
        resultView.innerHTML = `SORRY`
    }

    
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);


    result=bmi.toFixed(2);

    if(result<=24.9 && result>=18.5){
        discription.innerHTML = "Your BMI is Optimal"
        resultView.style.backgroundColor = 'greenyellow'
        resultView.style.borderRadius = '10px'
        confetti()
    }else if(result>=24.9 && result<=18.5){
        discription.innerHTML = "Your BMI is not Optimal"
        resultView.style.backgroundColor = 'red'
        resultView.style.borderRadius = '10px'
    }else{
        discription.innerHTML = "Enter a valid Number"
        resultView.style.backgroundColor = 'yellow'
        resultView.style.borderRadius = '10px'
    }

    // console.log(username);


    if(username==''){
        welcomeGreet.innerHTML = `Hello User ,`
    }else{
        welcomeGreet.innerHTML = `Hello, ${username}`
    }

    if(result=='NaN'){
        resultView.innerHTML = `SORRY`
    }else{
        resultView.innerHTML = `BMI value is : ${result}`
    }
    
    

    // To change the image in the modal

    // Define the condition
    if (bmi > 25) {
        imageElement.src = 'sad-emoji.png';
    } else if (bmi < 18.5) {
        imageElement.src = 'sad-emoji.png';
    } else if(25>=bmi>=18.5){
        imageElement.src = 'smile.png';
    }else {
        imageElement.src = 'confused.png';
    }
}


function Refreshpage(){
    window.location='./index.html'
}

//   onclick="confetti()"


// 18.5 and 24.9 kg/m2