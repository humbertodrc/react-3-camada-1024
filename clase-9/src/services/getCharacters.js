export const getCharacters = async () => {
	const url = "https://rickandmortyapi.com/api/character";

	try {
		const data = await fetch(url);
		const response = await data.json();

		if (response.error) {
			return response;
		}

		return response.results;
	} catch (error) {
		console.error("Fetch Error", error);
	}
};
