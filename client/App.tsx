import React from 'react';

export default function App() {
  const history = [
    { value: 3, isPrime: true },
    { value: 4, isPrime: false },
  ];

  return (
    <div>
      <form>
        <input />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <button disabled>Redo</button>
      <button>Undo</button>
      <hr />
      <strong>History</strong>
      {history.map((entry) => (
        <p>
          <strong>{entry.value}</strong> {entry.isPrime ? 'is prime!' : 'is not prime.'}
        </p>
      ))}
    </div>
  );
}
