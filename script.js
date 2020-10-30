const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const inputWeight = event.target.querySelector('#weight');
    const inputHeight = event.target.querySelector('#height');
    

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        setResult('Invalid Weight', false);
        return;
    }
    if (!height){
        setResult('Invalid Height', false);
        return;
    }
    

    const imc = getImc(weight, height);
    const nivel= getNiveImc(imc);

    const msg = `YOUR IMC IS ${imc} (${nivel}).`; 

    setResult(msg, true);

    console.log(imc, nivel);
});


function getNiveImc (imc){
    const nivel = ['Underweight', 'Normal Weight', 'Overweight','Obcity 1', 'Obcity 2', 'Obcity 3' ];

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc >= 18.5) return nivel[0];
}

function getImc (weight, height){

    const imc = weight/ height ** 2;
    return imc.toFixed(2);
}


function stript(){
    const kajoma = document.createElement('p');
    return kajoma;
}


function setResult (msg, isValid) {
    const result = document.querySelector('#result');

    result.innerHTML = '';

  

    const kajoma = stript();

    if(isValid) {
        kajoma.classList.add('paragrafo-resultado')
    } else {
        kajoma.classList.add('bad');
    }

    kajoma.innerHTML = msg;
    result.appendChild(kajoma);
}