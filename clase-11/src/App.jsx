import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Dashborad from "./pages/dashboard/Dashborad";
import {Stats} from "./pages/dashboard/Stats";
import Product from "./pages/Product";
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={
          <ProtectedRoute isLoggedIn={true}>
            <Dashborad />
          </ProtectedRoute>
        }>
          <Route path="stats" element={<Stats />} />
          <Route path='profile' element={<h1>Profile</h1>} />
				</Route>
				<Route path="/product/:id" element={<Product />}></Route>
				<Route path="*" element={<h1>Not Found 404</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
