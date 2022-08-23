// function for limited select player//
function selV() {
    const ol = document.getElementById('player-list');
    const li = ol.getElementsByTagName('li');
    const l = li.length;

    if (li.length < 5) {
        return true;
    } else {
        alert('You already selected your Best V');
        return false;
    }
}

function displayget(displayid) {
    const btn = document.getElementById(displayid);
    btn.disabled = 'true';
    btn.style.backgroundColor = 'darkgray';
}

function getol(olid, text) {
    const messilist = document.getElementById(olid);
    const li = document.createElement('li');
    messilist.appendChild(li);
    li.innerText = text;
    messilist.appendChild(li);

}
// player select option

document.getElementById('messi-btn').addEventListener('click', function () {
    if (selV()) {
        getol('player-list', 'leonel Messi');

        // button display none//
        displayget('messi-btn');

    }
})
document.getElementById('ronaldo-btn').addEventListener('click', function () {
    if (selV()) {
        getol('player-list', 'Cristiano Ronaldo');

        displayget('ronaldo-btn');
    }

})
document.getElementById('neymer-btn').addEventListener('click', function () {
    if (selV()) {
        getol('player-list', 'Neymar Jr');

        displayget('neymer-btn');
    }
})
document.getElementById('casamiro-btn').addEventListener('click', function () {
    if (selV()) {
        getol('player-list', 'Casamiro');

        displayget('casamiro-btn')
    }
})
document.getElementById('mbappe-btn').addEventListener('click', function () {
    if (selV()) {
        getol('player-list', 'Kylian Mbappé');

        displayget('mbappe-btn');
    }
})


document.getElementById('salah-btn').addEventListener('click', function () {
    if (selV()) {
        getol('player-list', 'Mohamed Salah');

        displayget('salah-btn');
    }

})
document.getElementById('sakib-btn').addEventListener('click', function () {
    if (selV()) {
        getol('player-list', 'Shakib Al Hasan');

        displayget('sakib-btn');
    }

})
document.getElementById('benzama-btn').addEventListener('click', function () {
    if (selV()) {
        getol('player-list', 'Karim Benzema');

        displayget('benzama-btn');
    }

})
document.getElementById('mane-btn').addEventListener('click', function () {
    if (selV()) {
        getol('player-list', 'Sadio Mané');

        displayget('mane-btn');
    }

})

// input code function
function getinputfieldvalue(inputid) {
    const inputfield = document.getElementById(inputid);
    const inputfildvaluestring = inputfield.value;
    const inputfildvalue = parseFloat(inputfildvaluestring)
    // inputfield.value = '';
    // non vale and string value error message//
    if (isNaN(inputfildvalue)) {
        alert('Please enter your number value');
        return;
    }
    else if (inputfildvalue === 'string') {
        alert('Please enter your number value');
        return;
    }
    return inputfildvalue;
}

//  function calculate total display

function setTextElementValueById(inputid, value) {
    const subTotalElement = document.getElementById(inputid);
    subTotalElement.innerText = value;
}

// function player expenses
function calculate() {
    // ol inside li value count
    const ollist = document.getElementById('player-list').getElementsByTagName('li').length;
    const perplayercost = getinputfieldvalue('input-player-cost');
    const playertotalcost = ollist * perplayercost;
    console.log(playertotalcost);
    setTextElementValueById('total-expence', playertotalcost);
}

// function for calculate total
function calculatrtotal() {
    const playerexpence = document.getElementById('total-expence');
    const expencetring = playerexpence.innerText;
    const Expence = parseFloat(expencetring);


    const managercost = getinputfieldvalue('input-manager');

    const coachcost = getinputfieldvalue('input-coach');
    const totalpayment = Expence + managercost + coachcost;

    setTextElementValueById('total-expence-cost', totalpayment);
}

// calculate button work
document.getElementById('btn-calculate').addEventListener('click', function () {
    calculate()

})

// total calculate button work
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    calculatrtotal()

})