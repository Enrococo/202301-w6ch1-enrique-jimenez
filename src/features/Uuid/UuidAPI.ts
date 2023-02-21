export async function fetchRandomUuid() {
  const response = await fetch(
    'http://www.randomnumberapi.com/api/v1.0/randomuuid'
  );
  const randomResponse: string[] = await response.json();
  return randomResponse;
}
