import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<div>
			<nav>
				<div className="logo">
					<h1>MakewebBKK</h1>
				</div>
				<div className="cart">
					<span>
						<FontAwesomeIcon icon={faCartShopping} />
					</span>
					<span>0</span>
				</div>
			</nav>
		</div>
	);
};
export default Navbar;
