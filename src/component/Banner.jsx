import { Button } from "@material-ui/core";
import React from "react";
import "../styles/Banner.css";

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner__text">
				<h2>
					Not sure where <br />
					to go? Perfect.
				</h2>
				<Button variant="contained" color="default">
					I'm flexible
				</Button>
			</div>
		</div>
	);
};

export default Banner;
