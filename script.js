// Function to calculate BMI


function calculateBMI() {

    const imageElement = document.getElementById('resultImage');
    let adviceText = '';
    let adviceNote = '';
    let username = document.getElementById('userName').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let age = document.getElementById('age').value;

    let welcomeGreet = document.getElementById('exampleModalToggleLabel');
    let discription = document.getElementById('OutputDef');
    let resultView = document.getElementById('Output');
    let dAvuce = document.getElementById('advice');
    
    if (age <= 0 || weight <= 0 || height <= 0) {
        // alert("enter a valid input");
        console.log("Error code:400 'error in value' ")
        resultView.innerHTML = `SORRY`
    }

    
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);


    result=bmi.toFixed(2);

    if(result<=24.9 && result>=18.5){
        discription.innerHTML = "Your weight is Optimal"
        resultView.style.backgroundColor = 'greenyellow'
        adviceNote ="Maintain your healthy lifestyle through balanced diet and regular exercise."
        adviceText = `Your BMI is ${result}, which indicates you have a normal weight. Maintain your healthy lifestyle through balanced diet and regular exercise.`;
        resultView.style.borderRadius = '10px'
        confetti()
    }else if(result>=24.9 || result<=18.5){
        // resultView.style.backgroundColor = 'red'
        // resultView.style.borderRadius = '10px'

        if(result>=30){
            discription.innerHTML = "Your are OBESE"
            resultView.style.backgroundColor = 'red'
            adviceNote =" It's important to consult with a healthcare provider to develop a plan that includes diet, exercise, and possibly other treatments."
            adviceText = `Your BMI is ${result}, which indicates obesity. It's important to consult with a healthcare provider to develop a plan that includes diet, exercise, and possibly other treatments.`;
            resultView.style.borderRadius = '10px'  
        }else{
            if(result>=24.9){
                discription.innerHTML = "Your are Overweighted"
                resultView.style.backgroundColor = 'orange'
                adviceNote = "Consider adopting healthier eating habits and increasing your physical activity to shed some pounds."
                adviceText = `Your BMI is ${result}, which indicates you are overweight. Consider adopting healthier eating habits and increasing your physical activity to shed some pounds.`;
                resultView.style.borderRadius = '10px'
            }else{
                discription.innerHTML = "Your are Underweighted"
                resultView.style.backgroundColor = 'Yellow'
                adviceNote ="It's important to eat a balanced diet and include more calories. Consider consulting a nutritionist."
                adviceText = `Your BMI is ${result}, which indicates you are underweight. It's important to eat a balanced diet and include more calories. Consider consulting a nutritionist.`;
                resultView.style.borderRadius = '10px'
            }
        }

    }else{
        discription.innerHTML = "Enter a valid Number"
        resultView.style.backgroundColor = 'grey'
        resultView.style.borderRadius = '10px'
    }

    // console.log(username);


    if(username==''){
        welcomeGreet.innerHTML = `Hello User ,`
    }else{
        welcomeGreet.innerHTML = `Hello ${username} ,`
    }

    if(result=='NaN'){
        resultView.innerHTML = `SORRY`
        adviceText = `Please enter valid Details to check your bmi`;
    }else{
        resultView.innerHTML = `BMI value is : ${result}  Kg/m<sup>2</sup>`
    }
    
    advice.innerHTML = `${adviceNote}`
    

    // To change the image in the modal

    // Define the condition
    if (bmi < 18.5 || bmi > 25) {
        imageElement.src = 'sad-emoji.png';
    } else if (bmi >= 18.5 && bmi <= 25) {
        imageElement.src = 'smile.png';
    } else {
        imageElement.src = 'confused.png';
    }

    
    speakText()

    function speakText() {
        let audioT = `Hello ${username}. ${adviceText} .`;

        const utterance = new SpeechSynthesisUtterance(audioT);

        utterance.pitch = 1.9; //  0 to 2
        utterance.rate = 0.9; //   0.1 to 10
        utterance.volume = 2; //   0 to 1

        speechSynthesis.speak(utterance);
    }
}



function Refreshpage(){
    window.location='./index.html'
}

//   onclick="confetti()"


// 18.5 and 24.9 kg/m2