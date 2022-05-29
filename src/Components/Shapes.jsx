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
			payload = {
				value : "c1"
			};
		}
		else if (text === "2") {
			payload = {
				value : "c2"
			};
		}
		else if (text === "3") {
			payload = {
				value : "c3"
			};
		}
		else if (text === "4") {
			payload = {
				value : "c4"
			};
		}
		else if (text === "5") {
			payload = {
				value : "c5"
			};
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
						return <div className={e.value} />;
					})}
				</div>
				<div id="circles">
					<div className="c1" />
					<br />
					<div className="c2" />
					<br />
					<div className="c3" />
					<br />
					<div className="c4" />
					<br />
					<div className="c5" />
				</div>
				<input type="text" id="inp" value={text} onChange={(e) => setText(e.target.value)} />
				<button id="bb" onClick={handlestack}>
					shoot
				</button>
			</div>
		</div>
	);
};
