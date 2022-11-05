import React, { useState } from "react";
import ItemCard from "../Card/Card";
import dataBook from "../data/data";
// import "./Shopping.css";

const Shopping = () => {
	const [items, setItems] = useState([]);
	let text = "";
	const handleClick = (item) => {
		items.push(item);
		console.log("This Items ", items);
		items.filter((i, index) => {
			console.log(i.id);
			//check condition ?
			if (i.id == 2) {
				console.log("promotion 10%");
				text = document.getElementById("text");
				text.innerHTML = "YOU GET PROMOTION 10% ";
				text.style.color = "salmon";
			}
		});
	};
	return (
		<>
			<div style={{ display: "flex", justifyContent: "center" }}>
				{dataBook.map((item) => {
					return (
						<ItemCard key={item.id} item={item} handleClick={handleClick} />
					);
				})}
			</div>
			<p id="text" style={{ textAlign: "center" }}></p>
		</>
	);
};

export default Shopping;
