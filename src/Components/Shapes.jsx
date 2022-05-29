import { useState } from "react";
// import { Box } from "./Box";
import "./Shapes.css";

export const Shapes = () => {
	const [
		stack,
		setStack
	] = useState([]);

	const [
		text,
		setText
	] = useState("");

	const handlestack = () => {
		var payload;
		if (text === "1") {
			payload = "c1";
		}
		else if (text === "2") {
			payload = "c2";
		}
		else if (text === "3") {
			payload = "c3";
		}
		else if (text === "4") {
			payload = "c4";
		}
		else if (text === "5") {
			payload = "c5";
		}
		setStack([
			...stack,
			payload
		]);
	};
	console.log(stack);
	return (
		<div>
			<div id="container">
				<div id="empty">
					{stack.map((e) => {
						return <div className={e} />;
					})}
				</div>
				<div id="circles">
					<div className="c1" style={stack.includes("c1") ? { display: "none" } : { display: "" }} />
					<br />
					<div className="c2" style={stack.includes("c2") ? { display: "none" } : { display: "" }} />
					<br />
					<div className="c3" style={stack.includes("c3") ? { display: "none" } : { display: "" }} />
					<br />
					<div className="c4" style={stack.includes("c4") ? { display: "none" } : { display: "" }} />
					<br />
					<div className="c5" style={stack.includes("c5") ? { display: "none" } : { display: "" }} />
				</div>
				<input type="text" id="inp" value={text} onChange={(e) => setText(e.target.value)} />
				<button id="bb" onClick={handlestack}>
					shoot
				</button>
			</div>
		</div>
	);
};
