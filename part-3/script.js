/*
const text = document.createElement('p');

function primeUpToN(n) {
  let primeNumbers = [];
  for (let i = 3; i < n; i += 2) {
    let isPrime = true;
    for (let m = 3; m ** 2 <= i; m += 2) {
      if (i % m === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      primeNumbers.push(i);
    }
  }

  text.innerHTML = primeNumbers.join('<br>');
  document.body.appendChild(text);
  alert('The calculation is finished');
}

primeUpToN(10000);
*/

/*
const text = document.createElement('p');
document.body.appendChild(text);

function primeUpToN(n) {
  let primeNumbers = [];
  let i = 3;

  function calculateNextPrime() {
    if (i >= n) {
      text.innerHTML = primeNumbers.join('<br>');
      alert('The calculation is finished');
      return;
    }

    let isPrime = true;
    for (let m = 3; m ** 2 <= i; m += 2) {
      if (i % m === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeNumbers.push(i);
      text.innerHTML = primeNumbers.join('<br>');
    }

    i += 2;
    setTimeout(calculateNextPrime, 0);
  }

  calculateNextPrime();
}

primeUpToN(10000);
*/

const text = document.createElement('p');

function primeUpToN(n) {
  let primeNumbers = [];
  for (let i = 3; i < n; i += 2) {
    let isPrime = true;
    for (let m = 3; m ** 2 <= i; m += 2) {
      if (i % m === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      primeNumbers.push(i);
    }
  }

  text.innerHTML = primeNumbers.join('<br>');
  document.body.appendChild(text);
  setTimeout(() => {
    alert('The calculation is finished');
  }, 0);
}

primeUpToN(10000);
