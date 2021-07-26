import React from "react";
import "../styles/places.css";
import Card from "./Card";
import pic1 from "../images/pexels-mike-glezos-3278939.jpg";
import pic2 from "../images/pexels-ericson-fernandes-3459765.jpg";
import pic3 from "../images/pexels-deva-darshan-938582.jpg";
import pic4 from "../images/pexels-los-muertos-crew-8908119.jpg";
import pic5 from "../images/pexels-krystyna-zygalska-1662242.jpg";
import pic6 from "../images/pexels-suzy-hazelwood-3117550.jpg";
import Button from "@material-ui/core/Button";

const Places = () => {
	return (
		<div className="places">
			<div className="places__live">
				<h2>Live anywhere</h2>
				<div className="places__livebox">
					<Card
						img={pic1}
						title="Outdoor gataways"
					/>
					<Card img={pic2} title="Unique stays" />
					<Card img={pic3} title="Entire homes" />
				</div>
			</div>
			<div className="places__discover">
				<h2>Discover things to do</h2>
				<div className="places__discoverBox">
					<Card
						img={pic4}
						title="Experiences"
						subtitle="find unforgettable activities near you."
					/>
					<Card
						img={pic5}
						title="Online experiences"
						subtitle="Live,Interactive activities led by hosts."
					/>
					<Card
						img={pic6}
						title="Featured Collection: Wanderlust"
						subtitle="travel from with online experiences."
					/>
				</div>
			</div>
			<div className="plcaes__banner">
				<div className="places__bannerText">
					<h2>Try hosting</h2>
					<p>
						earn extra income and unlock new
						<br />
						opportunities by sharing your
						space
					</p>
					<Button
						variant="contained"
						color="default"
					>
						Learn more
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Places;
