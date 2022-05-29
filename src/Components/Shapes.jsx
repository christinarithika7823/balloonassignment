import { useState } from "react";
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

	// var Color1 = () => {
	// 	return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();
	// };
	// var Color2 = () => {
	// 	return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();
	// };
	// var Color3 = () => {
	// 	return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();
	// };
	// var Color4 = () => {
	// 	return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();
	// };
	// var Color5 = () => {
	// 	return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();
	// };

	const handlecircles = (el) => {
		var pos = 0;
		for (var j = 0; j < stack.length; j++) {
			if (el.target.className === stack[j]) {
				pos = j;
			}
		}
		stack.splice(pos, 1);
		setStack([
			...stack,
			stack
		]);
		console.log(el.target.className);
	};
	console.log(stack[0]);
	return (
		<div>
			<h1>Balloon Assignment</h1>
			<div id="container">
				<div id="empty">
					{stack.map((e) => {
						return (
							<div
								className={e}
								onClick={(e) => handlecircles(e)}
								style={
									e === "c1" ? (
										{ backgroundColor: "aquamarine" }
									) : e === "c2" ? (
										{ backgroundColor: "chocolate" }
									) : e === "c3" ? (
										{ backgroundColor: "darkred" }
									) : e === "c4" ? (
										{ backgroundColor: "rosybrown" }
									) : e === "c5" ? (
										{ backgroundColor: "lightcoral" }
									) : (
										{ backgroundColor: "" }
									)
								}
							/>
						);
					})}
				</div>

				<div id="circles">
					<h3>Circles</h3>
					<div
						className="c1"
						style={
							stack.includes("c1") ? (
								{ display: "none", backgroundColor: "" }
							) : (
								{ display: "", backgroundColor: "aquamarine" }
							)
						}
					/>
					<br />
					<div
						className="c2"
						style={
							stack.includes("c2") ? (
								{ display: "none", backgroundColor: "" }
							) : (
								{ display: "", backgroundColor: "chocolate" }
							)
						}
					/>
					<br />
					<div
						className="c3"
						style={
							stack.includes("c3") ? (
								{ display: "none", backgroundColor: "" }
							) : (
								{ display: "", backgroundColor: "darkred" }
							)
						}
					/>
					<br />
					<div
						className="c4"
						style={
							stack.includes("c4") ? (
								{ display: "none", backgroundColor: "" }
							) : (
								{ display: "", backgroundColor: "rosybrown" }
							)
						}
					/>
					<br />
					<div
						className="c5"
						style={
							stack.includes("c5") ? (
								{ display: "none", backgroundColor: "" }
							) : (
								{ display: "", backgroundColor: "lightcoral" }
							)
						}
					/>
				</div>
				<div>
					<input type="text" id="inp" value={text} onChange={(e) => setText(e.target.value)} />
					<button id="bb" onClick={handlestack}>
						shoot
					</button>
				</div>
			</div>
		</div>
	);
};
