'use client'

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong in Dashboard!</h2>
      <button onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
