import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import NormalComponent from "./components/NormalComponent";
import ProblematicComponent from "./components/ProblematicComponent";

function App() {
	return (
		<main>
			<h1>Ejemplo del ErrorBoundery</h1>

			{/* <ErrorBoundary>
				<ProblematicComponent />
			</ErrorBoundary>

			<ErrorBoundary>
				<NormalComponent />
      </ErrorBoundary> */}
      

      <ErrorBoundary>
        <div>
          <h2>Varios componentes</h2>
          <NormalComponent />
          <ProblematicComponent />
        </div>
      </ErrorBoundary>
		</main>
	);
}

export default App;
