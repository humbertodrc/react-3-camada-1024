import {useNavigate} from "react-router-dom";
import Layout from "../components/Layout";

const INITIAL_PRODUCTS = [
	{id: 1, name: "Product 1", price: 100},
	{id: 2, name: "Product 2", price: 200},
	{id: 3, name: "Product 3", price: 300},
	{id: 4, name: "Product 4", price: 400},
	{id: 5, name: "Product 5", price: 500},
];

function Products() {
	const navigate = useNavigate();

	const handleClick = (id) => {
		navigate(`/product/${id}`);
	};

	return (
		<Layout>
			{INITIAL_PRODUCTS.map((product) => (
				<div key={product.id} onClick={() => handleClick(product.id)}>
					<h3>{product.name}</h3>
					<p>{product.price}</p>
				</div>
			))}
		</Layout>
	);
}
export default Products;
