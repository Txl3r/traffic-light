import React, { useState } from "react";
import "../../styles/index.css";

const Home = () => {
	const [myColor, setMyColor] = useState("brown");

	return (
		<div>
			<div className={"traffic-light"}>
				<div
					className={
						myColor == "red"
							? "box-shadow red-light circle"
							: "red-light circle"
					}
					onClick={() => {
						setMyColor("red");
					}}></div>
				<div
					className={
						myColor == "yellow"
							? "box-shadow yellow-light circle"
							: "yellow-light circle"
					}
					onClick={() => {
						setMyColor("yellow");
					}}></div>
				<div
					className={
						myColor == "green"
							? "box-shadow green-light circle"
							: "green-light circle"
					}
					onClick={() => {
						setMyColor("green");
					}}></div>{" "}
			</div>
		</div>
	);
};

export default Home;
