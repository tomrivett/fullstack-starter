export default function isPrime(value: number) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return value > 1;
}
