import React, { useState } from "react";

const Home = () => {
	const [myColor, setmyColor] = useState("black");

	return (
		<>
			<div onClick={() => setmyColor("red")}>
				{myColor === "black" ? (
					<div>{myColor}</div>
				) : (
					<div onClick={() => setmyColor("red")}>this is red</div>
				)}
			</div>
			<br></br>
			<div onClick={() => setPie("yellow")}>
				{pie === "black" ? (
					<div>{pie}</div>
				) : (
					<div onClick={() => setPie("yellow")}>this is yellow</div>
				)}
			</div>
			<br></br>
			<div onClick={() => setPie("yellow")}>
				{pie === "black" ? (
					<div>{pie}</div>
				) : (
					<div onClick={() => setPie("yellow")}>this is yellow</div>
					)}
			</div>
		</>
	);
};

export default Home;
