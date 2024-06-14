// PART 1 STACK OVERFLOW

let counter = 1;

function increment() {
  counter++;
  increment();
}

try {
  increment();
} catch (error) {
  console.log('Counter:', counter);
  console.log('Error:', error);
}
