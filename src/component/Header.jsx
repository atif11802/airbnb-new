import React from "react";
import "../styles/Header.css";
import logo from "../images/pngkey.com-airbnb-logo-png-606021.png";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = () => {
	return (
		<div className="header ">
			<div className="header__logo">
				<img src={logo} alt="" />
			</div>
			<div className="header__middle">
				<p>Places to Stay</p>
				<p>Experiences</p>
				<p>Online Experiences</p>
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

export default Header;
