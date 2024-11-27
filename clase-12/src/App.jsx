import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import {CartProvider} from "./context/CartContext";

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<h1>Not Found</h1>} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
