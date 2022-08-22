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

// player select option

document.getElementById('messi-btn').addEventListener('click', function () {
    if (selV()) {
        const messilist = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = 'Leonel Messi';
        messilist.appendChild(li);

        // button display none//
        const btn = document.getElementById('messi-btn');
        btn.disabled = 'true';
        btn.style.backgroundColor = 'darkgray';
    }
})
document.getElementById('ronaldo-btn').addEventListener('click', function () {
    if (selV()) {
        const messilist = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = 'Cristiano Ronaldo';
        messilist.appendChild(li);
        const btn = document.getElementById('ronaldo-btn');
        btn.disabled = 'true';
        btn.style.backgroundColor = 'darkgray';
    }

})
document.getElementById('neymer-btn').addEventListener('click', function () {
    if (selV()) {
        const messilist = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = 'Neymar Jr';
        messilist.appendChild(li);
        const btn = document.getElementById('neymer-btn');
        btn.disabled = 'true';
        btn.style.backgroundColor = 'darkgray';
    }
})
document.getElementById('sakib-btn').addEventListener('click', function () {
    if (selV()) {
        const messilist = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = 'Casemiro';
        messilist.appendChild(li);
        const btn = document.getElementById('sakib-btn');
        btn.disabled = 'true';
        btn.style.backgroundColor = 'darkgray';
    }
})
document.getElementById('mbappe-btn').addEventListener('click', function () {
    if (selV()) {
        const messilist = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = 'Kylian Mbappé';
        messilist.appendChild(li);
        const btn = document.getElementById('mbappe-btn');
        btn.disabled = 'true';
        btn.style.backgroundColor = 'darkgray';
    }
})


document.getElementById('salah-btn').addEventListener('click', function () {
    if (selV()) {
        const messilist = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerText = 'Mohamed Salah';
        messilist.appendChild(li);
        const btn = document.getElementById('salah-btn');
        btn.disabled = 'true';
        btn.style.backgroundColor = 'darkgray';
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
        return 0;
    }
    else if (inputfildvalue === 'string') {
        alert('Please enter your number value');
        return 0;
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