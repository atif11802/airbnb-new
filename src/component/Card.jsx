import React from "react";
import "../styles/Card.css";

const Card = ({ img, title, subtitle }) => {
	return (
		<div className="card">
			<img src={img} alt={title} />
			<h5>{title}</h5>
			<p>{subtitle}</p>
		</div>
	);
};

export default Card;
