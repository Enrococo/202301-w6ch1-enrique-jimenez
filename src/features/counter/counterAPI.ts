// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function fetchRandom() {
  return new Promise<number[]>(async (resolve) => {
    const response = await fetch(
      'https://www.randomnumberapi.com/api/v1.0/random?min=10&max=50'
    );
    const randomResponse: number[] = await response.json();
    resolve(randomResponse);
  });
}
