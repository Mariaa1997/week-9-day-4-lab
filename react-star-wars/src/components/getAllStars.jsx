const baseUrl = 'https://swapi.dev/api';

export async function getAllStars() {
  try {
    const response = await fetch(`${baseUrl}/starships/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching starships:', error);
    throw error;
  }
}