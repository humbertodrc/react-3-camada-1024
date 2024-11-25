import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
