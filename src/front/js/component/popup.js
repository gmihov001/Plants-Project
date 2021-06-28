import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PlantList } from "../pages/PlantList";

export const Popup = props => {
	return (
		<>
			<div className="popup-container">
				<div className="popup-content">
					<span>{props.details}</span>
					<span onClick={props.handlePopup}>
						<i className="far fa-2x fa-times-circle color-item2" />
					</span>
				</div>
				<div className="text-center">
					<button onClick={props.handlePopup} className="btn btn-style btn-list">
						Select
					</button>

					<Link to="/addplant">
						<button className="btn btn-style btn-list">Go Back to Search</button>
					</Link>
				</div>
			</div>
		</>
	);
};

Popup.propTypes = {
	details: PropTypes.string,
	handlePopup: PropTypes.func
};
