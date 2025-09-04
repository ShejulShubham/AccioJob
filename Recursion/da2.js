function fibo(n) {
  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(50));

//-------------------------------------------------
function fib(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  return fibonacci(0, 1, n);
}

function fibonacci(a, b, n) {
  if (n === 1) return a;

  let c = a + b;
  return fibonacci(b, c, n - 1);
}

//-------------------------------------------------
function NthEvenFibonacci(n) {
  if (n === 1) return 2;
  if (n === 2) return 8;

  const MOD = 1e9 + 7;

  let first = (4 * NthEvenFibonacci(n - 1)) % MOD;

  let second = NthEvenFibonacci(n - 2) % MOD;

  let result = (first + second) % MOD;

  return result;
}

//-------------------------------------------------

function fib(a, b, index, target) {
  const MOD = 1e9 + 7;

  if (b % 2 === 0) {
    index++;
  }

  if (target === index) return b % MOD;

  return fib(b, a + b, index, target);
}

function NthEvenFibonacci(n) {
  return fib(0, 1, 0, n);
}

//------------------------------------------------
function xPowerN(x, n) {
  if (n === 1) return x;

  return x * xPowerN(x, n - 1);
}

//------------------------------------------------

function xPowerN(x, n) {
  if (n === 0) return 1;

  const half = xPowerN(x, Math.floor(n / 2));

  if (n % 2 === 0) {
    return half * half;
  } else {
    return x * half * half;
  }
}

// Even: x^n = (x^(n/2))^2
// Odd: x^n = x*(x ^(n/2))^2

//-----------------------------------------------

