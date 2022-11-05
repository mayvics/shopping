import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";
const ItemCard = ({ item, handleClick }) => {
	const { title, price, img } = item;

	return (
		<>
			{/* <div className="card" style={{ width: "18rem" }}>
				<img src={img} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 clasName="card-title">{title}</h5>
					<p className="card-text">{price}</p>
					<button className="primary">Add to Cart</button>
				</div>
			</div> */}
			<Card style={{ width: "18rem" }} className="itemCard">
				<Card.Img variant="top" src={img} style={{ width: 250, height: 343 }} />
				<Card.Body>
					<Card.Title style={{ marginTop: 20 }}>{title}</Card.Title>
					<Card.Text style={{ marginTop: 20 }}>Price: {price}</Card.Text>
					<Button
						variant="primary"
						style={{
							padding: 4,
							borderRadius: 8,
							border: "none",
							backgroundColor: "#6495ED",
							color: "#ffffff",
							width: "100%",
							marginTop: 20,
						}}
						onClick={() => handleClick(item)}
					>
						Add to Cart
					</Button>
				</Card.Body>
			</Card>
		</>
	);
};

export default ItemCard;
