// When button is pressed
let counter = window.localStorage.getItem('counter') || 0;
let counterDisplay = document.getElementById('counter-display');
updateDisplayCounter(counter)

document.addEventListener('click', function(event) {
  if (event.target.id == 'increment') {
    // Tick counter up by one
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
    counter = 0;
    updateDisplayCounter(counter);
    window.localStorage.setItem('counter', counter);
  }
});

function updateDisplayCounter(counter) {
  counterDisplay.innerHTML = counter; 
}


// todo: clear button and undo button