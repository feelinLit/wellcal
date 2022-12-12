const form = document.getElementById("calculator-form");
form.addEventListener('submit', calculate)

// catch form onsubmit event from calculator.html
function calculate(event) {
    event.preventDefault();

    // get the form values
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var activity = document.getElementById("activity").value;

    // save inputs
    localStorage.setItem('age', age);
    localStorage.setItem('gender', gender);
    localStorage.setItem('weight', weight);
    localStorage.setItem('height', height);
    localStorage.setItem('activity', activity);

    var goal = document.getElementsByName("goal"); // radio
    for (var i = 0; i < goal.length; i++) {
        if (goal[i].checked) {
            goal = goal[i].value;
            localStorage.setItem('goal', goal);
            break;
        }
    }

    // calculate the result
    if (gender === 'Male') {
        gender = 5;
    }
    else if (gender == 'Female') {
        gender = -161;
    }
    else {
        throw new Error('Gender is not set');
    }

    switch (activity) {
        case 'Sedentary':
            activity = 1.2;
            break;
        case 'Lightly active':
            activity = 1.375;
            break;
        case 'Moderately active':
            activity = 1.55;
            break;
        case 'Very Active':
            activity = 1.725;
            break;
        case 'Extremely Active':
            activity = 1.9;
            break;
        default:
            throw new Error('Activity is not set');
    }
    
    var calories = activity * (10 * weight + 6.25 * height - 5 * age + gender);

    if (goal === 'lose-weght') {
        calories -= 500;
    }
    else if (goal === 'gain-weight') {
        calories += 500;
    }

    water = 1200 + 20 * weight;

    proteins = calories * 0.25 / 4;
    fats = calories * 0.3 / 9;
    carbs = calories * 0.45 / 4;

    displayResult(calories, water, proteins, fats, carbs);
}


function displayResult(calories, water, proteins, fats, carbs) {
    resultDiv = document.querySelector("#calculator-result");

    if (resultDiv.childElementCount === 0) {
        bigList = createResultElement();
        resultDiv.appendChild(bigList);
    }
    
    document.getElementById("calorie-limit").value = calories.toFixed() + ' kcal';
    document.getElementById("daily-water").value =  water.toFixed() + ' ml';
    document.getElementById("daily-protein").value =  proteins.toFixed() + ' g';
    document.getElementById("daily-fat").value =  fats.toFixed() + ' g';
    document.getElementById("daily-carbs").value =  carbs.toFixed() + ' g';
    
    resultDiv.style.display = 'flex';
}


function createResultElement() {
    listOfResults = document.createElement('div');
    listOfResults.classList.add('big-list');
    listOfResults.style.minWidth = 'auto';

    // calorie limit element
    labelCal = document.createElement('label');
    labelCal.classList.add('fancy-list__label');
    labelCal.innerHTML = 'Calorie limit';

    inputTemplate = document.createElement('input');
    inputTemplate.classList.add('fancy-list__input-box');
    inputTemplate.setAttribute('type', 'text');
    inputTemplate.setAttribute('readonly', 'readonly');
    
    inputCal = inputTemplate.cloneNode(true);
    inputCal.setAttribute('id', 'calorie-limit');

    labelCal.appendChild(inputCal);
    listOfResults.appendChild(labelCal);

    // daily water element
    labelWater = document.createElement('label');
    labelWater.classList.add('fancy-list__label');
    labelWater.innerHTML = 'Daily water';
    
    inputWater = inputTemplate.cloneNode(true);
    inputWater.setAttribute('id', 'daily-water');

    labelWater.appendChild(inputWater);
    listOfResults.appendChild(labelWater);

    // PFC element
    labelPfc = document.createElement('label');
    labelPfc.classList.add('fancy-list__label');
    labelPfc.innerHTML = 'PFC';

    pfcList = document.createElement('div');
    pfcList.classList.add('fancy-list');
    inputWater.setAttribute('id', 'daily-water');

    inputProtein = inputTemplate.cloneNode(true);
    inputProtein.setAttribute('id', 'daily-protein');

    inputFat = inputTemplate.cloneNode(true);
    inputFat.setAttribute('id', 'daily-fat');

    inputCarbs = inputTemplate.cloneNode(true);
    inputCarbs.setAttribute('id', 'daily-carbs');

    pfcList.appendChild(inputProtein);
    pfcList.appendChild(inputFat);
    pfcList.appendChild(inputCarbs);

    labelPfc.appendChild(pfcList);
    listOfResults.appendChild(labelPfc);

    return listOfResults;
}
