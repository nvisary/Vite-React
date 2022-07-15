import { useState } from "react";
import "./App.css";

export function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h3>Count is {count}</h3>
			<div>
				<button onClick={() => setCount((prev) => prev + 1)}>Plus</button>
				<button onClick={() => setCount((prev) => prev - 1)}>Minus</button>
			</div>
			
		</div>
	);
}


