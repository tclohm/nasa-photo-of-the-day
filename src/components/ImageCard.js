import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from "reactstrap";

export default function ImageCard(props) {
	const {key, data, explanation, title, url} = props
	return (
		<Col xs="12">
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
		</Col>
	)
}