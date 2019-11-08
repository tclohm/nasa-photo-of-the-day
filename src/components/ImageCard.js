import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Jumbotron
} from "reactstrap";
import "../App.css"

export default function ImageCard(props) {
	const {key, data, explanation, title, url} = props

	let jumboBackground = {
		background: `url(${url}) no-repeat center`
	}

	let gold = {
		color: "#FFF",
		textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black"
	}

	/*<Col xs="12">
      <Jumbotron style={jumboBackground}>
        <h1 className="display-4" style={gold}>{title}</h1>
        <h5 style={gold}>{explanation}</h5>
      </Jumbotron>
  </Col>*/

    /*<Col xs="12">
			<Card>
				<CardImg
					top
					width="100%"
					src={url}
					alt="card space img"
				/>
				<CardBody>
					<CardTitle>{title}</CardTitle>
					<CardText>{explanation}</CardText>
				</CardBody>
			</Card>
		</Col>*/

	return (

		<Col xs="12">
			<Jumbotron style={jumboBackground}>
        <h1 className="display-4" style={gold}>{title}</h1>
      </Jumbotron>
			<Card>
				<CardText>{explanation}</CardText>
			</Card>
		</Col>

	)
}