import React from "react";
import "../styles/HeaderInside.css";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const HeaderInside = () => {
	return (
		<div className="headerinside">
			<div className="headerInside__box animate__bounce">
				<div className="headerInside__boxLocation">
					<p>Location</p>
					<span>Where are you going?</span>
				</div>
				<div className="headerInside__boxCheckIn">
					<p>Check In</p>
					<span>Add dates</span>
				</div>
				<div className="headerInside__boxCheckOut">
					<p>Check out</p>
					<span>Add dates</span>
				</div>
				<div className="headerInside__boxGuest">
					<div className="headerInside__boxGuestbox">
						<p>Guests</p>
						<span>Add guests</span>
					</div>
					<div className="headerInside__boxGuestSearch">
						<SearchIcon />
					</div>
				</div>
			</div>

			<div className="headerInside__text">
				<div className="headerInside__textbanner">
					<h2>
						Olympian & <br /> Paralympian
						<br /> Online
						<br />
						Experiences
					</h2>
				</div>
				<Button variant="contained">Explore now</Button>
			</div>
		</div>
	);
};

export default HeaderInside;
