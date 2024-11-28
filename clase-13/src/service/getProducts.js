export const getProducts = async () => {
	try {
		const endPoint = "https://rickandmortyapi.com/api/character";
		const response = await fetch(endPoint);
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.log("Error al obtener los productos", error);
	}
};
