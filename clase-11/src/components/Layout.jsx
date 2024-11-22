import Navbar from "./Navbar";

function Layout({children}) {
	return (
		<>
			<Navbar />
			{children}
			<footer>
				<p>© 2024</p>
			</footer>
		</>
	);
}
export default Layout;
