import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./component/Banner";
import Header from "./component/Header";
import Headersecond from "./component/Header2";
import HeaderInside from "./component/HeaderInside";
import Places from "./component/Places";

function App() {
	const [navbar, setNavbar] = useState(0);

	// const changeBackground = () => {
	// 	// setNavbar(window.scrollY);
	// 	// setNavbar(window.pageYOffset);

	// };

	console.log(navbar);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setNavbar(window.scrollY);
		});
	}, []);

	return (
		<div className="app">
			{navbar >= 80 && <Headersecond />}
			{navbar < 80 && <Header />}
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
