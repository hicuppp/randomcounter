// When button is pressed
let counter = window.localStorage.getItem('counter') || 0;
let currentName = window.localStorage.getItem('currentName') || '';
const counterDisplay = document.getElementById('counter-display');
const counterHeader = document.getElementById('counter-header');
const nameEntry = document.getElementById('name-input');
const li = document.getElementById('list');

updateDisplayCounter(counter)
updatePreviousCounters();


if(currentName != '') {
  document.getElementById('counter-header').innerHTML = currentName + " Counter";
  nameEntry.value = currentName;
}

document.addEventListener('click', function(event) {
  if (event.target.id == 'increment') {
    counter++;
    window.localStorage.setItem('counter', counter);
    updateDisplayCounter(counter);
  }

  if (event.target.id == 'decrement' && counter > 0) {
    counter--;
    window.localStorage.setItem('counter', counter);
    updateDisplayCounter(counter);
  }

  if (event.target.id == 'reset') {
    let counterNames = JSON.parse(window.localStorage.getItem('counterNames')) || [];
    let counters = JSON.parse(window.localStorage.getItem('counters')) || [];
    let currentName = window.localStorage.getItem('currentName');

    if ((currentName != '' && currentName != null) && counter != 0) {
      counterNames.push(currentName);
      counters.push(counter);
      window.localStorage.setItem('counterNames', JSON.stringify(counterNames));
      window.localStorage.setItem('counters', JSON.stringify(counters));
    }
    if ((currentName == '' || currentName === null) && counter != 0) {
      counterNames.push('Random Counter');
      counters.push(counter);
      window.localStorage.setItem('counterNames', JSON.stringify(counterNames));
      window.localStorage.setItem('counters', JSON.stringify(counters));
    }

    updatePreviousCounters();
    updateDisplayCounter(0);
    window.localStorage.setItem('counter', 0);
    counter = 0
  }

});

nameEntry.addEventListener('keyup', function(event) {
  window.localStorage.setItem('currentName', nameEntry.value);
  counterHeader.innerHTML = nameEntry.value + " Counter";
});

function updateDisplayCounter(counter) {
  counterDisplay.innerHTML = counter; 
}

function updatePreviousCounters() {
  let counterNames = JSON.parse(window.localStorage.getItem('counterNames')) || [];
  let counters = JSON.parse(window.localStorage.getItem('counters')) || [];
  li.innerHTML = '';
  for (let i = counterNames.length; i > 0; i--) {
    let li = document.createElement('li');
    li.innerHTML = counterNames[i - 1] + ': ' + counters[i - 1];
    document.getElementById('list').appendChild(li);
  }
}