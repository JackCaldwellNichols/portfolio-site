import React from "react";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Profile from "./Profile.jsx";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";


//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="container mx-auto mt-4 mb-4">
			<div className="row">
				<div className="col-lg-3 col-md-4 col-sm-1">
					<Profile />
				</div>
				<div className="col-lg-9 col-md-8 col-sm-1">
					<About />
					<Skills />
					<Experience />
					<Education />
				</div>
	</div>
		
		</div>
	);
};

export default Home;

