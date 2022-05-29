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
	var Color1 = () => {
		return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();
	};
	var Color2 = () => {
		return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();
	};
	var Color3 = () => {
		return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();
	};
	var Color4 = () => {
		return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();
	};
	var Color5 = () => {
		return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();
	};

	return (
		<div>
			<div id="container">
				<div id="empty">
					{stack.map((e) => {
						return (
							<div
								className={e}
								style={
									e === "c1" ? (
										{ backgroundColor: Color1() }
									) : e === "c2" ? (
										{ backgroundColor: Color2() }
									) : e === "c3" ? (
										{ backgroundColor: Color3() }
									) : e === "c4" ? (
										{ backgroundColor: Color4() }
									) : e === "c5" ? (
										{ backgroundColor: Color5() }
									) : (
										{ backgroundColor: "" }
									)
								}
							/>
						);
					})}
				</div>
				<div id="circles">
					<div
						className="c1"
						style={
							stack.includes("c1") ? (
								{ display: "none", backgroundColor: "" }
							) : (
								{ display: "", backgroundColor: Color1() }
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
								{ display: "", backgroundColor: Color2() }
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
								{ display: "", backgroundColor: Color3() }
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
								{ display: "", backgroundColor: Color4() }
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
								{ display: "", backgroundColor: Color5() }
							)
						}
					/>
				</div>
				<input type="text" id="inp" value={text} onChange={(e) => setText(e.target.value)} />
				<button id="bb" onClick={handlestack}>
					shoot
				</button>
			</div>
		</div>
	);
};
