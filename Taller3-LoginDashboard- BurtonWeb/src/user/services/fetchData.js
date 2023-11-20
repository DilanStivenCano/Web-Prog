const fetchData = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '569fd3e29cc7ac7ba04f7af475fa3fd2';
  const personId = 510;

  try {
    // Obtener información de la persona
    // const personResponse = await fetch(`${BASE_URL}/person/${personId}?api_key=${API_KEY}`);
    // if (!personResponse.ok) {
    //   throw new Error('Error fetching person data from API');
    // }
    // const personData = await personResponse.json();
    

    // Obtener información de los créditos combinados
    const combinedCreditsResponse = await fetch(`${BASE_URL}/person/${personId}/combined_credits?api_key=${API_KEY}`);
    if (!combinedCreditsResponse.ok) {
      throw new Error('Error fetching combined credits data from API');
    }
    const combinedCreditsData = await combinedCreditsResponse.json();

    return { combined_credits: combinedCreditsData };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export default fetchData