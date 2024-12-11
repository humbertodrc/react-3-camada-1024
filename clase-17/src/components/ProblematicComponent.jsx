const ProblematicComponent = () => {
	const random = Math.random();
	console.log(random);

	if (random > 0.7) {
		throw new Error("Error en ProblematicComponent");
	}

	return <div>Todo esta funcionado correctamente {random.toFixed(2)}</div>;
};
export default ProblematicComponent;
