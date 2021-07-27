import React from "react";
import "../styles/HeaderSecond.css";
import SearchIcon from "@material-ui/icons/Search";

import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Headersecond = () => {
	return (
		<div className="headerSecond">
			<div className="headerSecond__logo">
				<img
					src="https://cdn.worldvectorlogo.com/logos/airbnb.svg"
					alt=""
				/>
			</div>
			<div className="headerSecond__middle">
				<div className="headerSecond__middleSearch">
					<input
						type="text"
						placeholder="Start your search"
					/>
					<div className="headerSecond__middleSearchSearch">
						<SearchIcon />
					</div>
				</div>
			</div>
			<div className="header__right">
				<div className="header__rightHost">
					<p>Become a Host</p>
				</div>
				<div className="header__rightLang">
					<LanguageIcon />
				</div>
				<div className="header__rightUser">
					<div className="header__rightUserBar">
						<MenuIcon />
					</div>
					<div className="header__rightUserAvatar">
						<AccountCircleIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Headersecond;
