import "./App.css";
import Banner from "./component/Banner";
import Header from "./component/Header";
import HeaderInside from "./component/HeaderInside";
import Places from "./component/Places";
import { useState } from "react";
import Headersecond from "./component/Header2";

function App() {
	const [navbar, setNavbar] = useState(0);

	const changeBackground = () => {
		// setNavbar(window.scrollY);
		// setNavbar(window.pageYOffset);
		setNavbar(
			document.documentElement.scrollTop ||
				window.pageYOffset ||
				window.scrollY
		);
	};

	console.log(navbar);
	window.addEventListener("scroll", changeBackground);

	return (
		<div className="app">
			{navbar >= 80 ? <Headersecond /> : <Header />}
			{/* <Header2 /> */}
			{/* <Header /> */}

			<div className="app__bg">
				<HeaderInside />
			</div>
			<Banner />
			<Places />
		</div>
	);
}

export default App;
