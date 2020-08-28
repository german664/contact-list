import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Modal = props => {
	const [editItem, setEditItem] = useState({
		full_name: "",
		email: "",
		agenda_slug: "german664",
		address: "",
		phone: ""
	});
	const { store, actions } = useContext(Context);
	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={e => {
								props.setState(false);
							}}>
							Oh no!
						</button>
						<button
							type="button"
							className="btn btn-danger"
							data-dismiss="modal"
							onClick={e => {
								actions.deleteContact(store.currentID);
								props.setState(false);
							}}>
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	setState: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null,
	setState: PropTypes.func
};
