import React, { useState } from "react";
import "../styles/HeaderInside.css";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

const HeaderInside = () => {
	const [calendar, setCalendar] = useState(false);

	const handleClick = () => {
		if (calendar === true) {
			setCalendar(false);
		} else {
			setCalendar(true);
		}
	};

	const [startDate, setStartdate] = useState(new Date());
	const [endDate, setEnddate] = useState(new Date());
	const [day, setDay] = useState([]);

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	function handleSelect(ranges) {
		setStartdate(ranges.selection.startDate);
		setEnddate(ranges.selection.endDate);
		setDay([startDate]);
	}

	return (
		<div className="headerinside">
			<div className="headerInside__box animate__bounce">
				<div className="headerInside__boxLocation">
					<p>Location</p>
					<span>Where are you going?</span>
				</div>
				<div
					className="headerInside__boxCheckIn"
					onClick={() => handleClick()}
				>
					<p>Check In</p>
					<span>Add dates</span>
				</div>
				<div
					className="headerInside__boxCheckOut"
					onClick={() => handleClick()}
				>
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
			{calendar === true ? (
				<div className="headerInside__dateRange">
					<DateRangePicker
						ranges={[selectionRange]}
						onChange={handleSelect}
					/>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default HeaderInside;
