import React, { useState } from "react";
import "../../styles/index.css";

const Home = () => {
	const [myColor, setMyColor] = useState("");

	return (
		<div className="traffic-light">
			<div className="red-light circle"></div>
			<div className="yellow-light circle"></div>
			<div className="green-light circle"></div>
		</div>
	);
};

export default Home;
