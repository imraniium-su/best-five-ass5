document.getElementById('messi-btn').addEventListener('click', function () {
    const messilist = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = 'Leo Messi';
    messilist.appendChild(li);
})
document.getElementById('ronaldo-btn').addEventListener('click', function () {
    const messilist = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = 'Cristiano Ronaldo';
    messilist.appendChild(li);
})
document.getElementById('neymer-btn').addEventListener('click', function () {
    const messilist = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = 'Neymar Jr';
    messilist.appendChild(li);
})
document.getElementById('sakib-btn').addEventListener('click', function () {
    const messilist = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = 'Shakib Al Hasan';
    messilist.appendChild(li);
})
document.getElementById('mbappe-btn').addEventListener('click', function () {
    const messilist = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = 'Kylian Mbappé';
    messilist.appendChild(li);
})

document.getElementById('salah-btn').addEventListener('click', function () {
    const messilist = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = 'Mohamed Salah';
    messilist.appendChild(li);
})

function getinputfieldvalue(inputid) {
    const inputfield = document.getElementById(inputid);
    const inputfildvaluestring = inputfield.value;
    const inputfildvalue = parseFloat(inputfildvaluestring)
    // inputfield.value = '';
    return inputfildvalue;
}

function setTextElementValueById(inputid, value) {
    const subTotalElement = document.getElementById(inputid);
    subTotalElement.innerText = value;
}
function calculate() {
    const ollist = document.getElementById('player-list').getElementsByTagName('li').length;
    const perplayercost = getinputfieldvalue('input-player-cost');
    const playertotalcost = ollist * perplayercost;
    console.log(playertotalcost);
    setTextElementValueById('total-expence', playertotalcost);
}

function calculatrtotal() {
    const playerexpence = document.getElementById('total-expence');
    const expencetring = playerexpence.innerText;
    const Expence = parseFloat(expencetring);


    const managercost = getinputfieldvalue('input-manager');

    const coachcost = getinputfieldvalue('input-coach');
    const totalpayment = Expence + managercost + coachcost;
    console.log(totalpayment);

    setTextElementValueById('total-expence-cost', totalpayment);
}


document.getElementById('btn-calculate').addEventListener('click', function () {
    calculate()

})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    calculatrtotal()

})