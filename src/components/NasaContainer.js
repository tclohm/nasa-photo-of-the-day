import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import axios from "axios";

export default function NasaContainer() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
		.then(response => {
			setData(response.data);
			console.log(response.data);	
		})
		.catch(error => {
			console.log("error", error);
		})
	}, []);

	//return null;

	return (
		<div className="nasa">
			<ImageCard
				explanation={data.explanation}
				title={data.title}
				url={data.url}
			/>
		</div>
	);

}