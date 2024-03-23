let count = 0;

document.getElementById('incrementBtn').addEventListener('click', increment);
document.getElementById('decrementBtn').addEventListener('click', decrement);
document.getElementById('clearBtn').addEventListener('click', clearCounter);

function increment() {
  if (document.getElementById('error-message').style.display === 'block') {
    document.getElementById('error-message').style.display = 'none';
  }
  
  count++;
  document.getElementById('count').innerHTML = count;
  updateButtonVisibility();
}

function decrement() {
    if (count > 0) {
      count--;
      document.getElementById('count').innerHTML = count;
      updateButtonVisibility();
    } else {
      count = 0; 
      document.getElementById('count').innerHTML = count;
      document.getElementById('error-message').textContent = 'Error: cannot go below zero';
      document.getElementById('error-message').style.display = 'block';
    }
  }
  
  

function clearCounter() {
  count = 0;
  document.getElementById('count').innerHTML = count;
  document.getElementById('error-message').style.display = 'none';
  updateButtonVisibility();
}

function updateButtonVisibility() {
  if (count <= 0) {
    document.getElementById('decrementBtn').disabled = false;
    document.getElementById('clearBtn').style.display = 'none';
  } else {
    document.getElementById('decrementBtn').disabled = false;
    document.getElementById('clearBtn').style.display = 'block';
  }
}
