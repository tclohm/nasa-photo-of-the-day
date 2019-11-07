import React from "react";

export default function ImageCard(props) {
	const {key, data, explanation, title, url} = props
	return (
		<div className="image-list">
			<img src={url} alt="space"/>
			<h1>{title}</h1>
			<p>{explanation}</p>
		</div>
	)
}