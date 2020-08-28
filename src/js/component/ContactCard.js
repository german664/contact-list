import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";

export const ContactCard = props => {
	const [state, setState] = useState({
		full_name: "",
		email: "",
		agenda_slug: "german664",
		phone: "",
		address: ""
	});
	const [modify, setModify] = useState(false);

	const { store, actions } = useContext(Context);

	const handleInput = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	return store.agendaData.map((el, i) => {
		return (
			<li key={"key-" + i} className="list-group-item">
				<div className="row w-100">
					<div className="col-12 col-sm-6 col-md-3 px-0">
						<img
							src={`https://image.flaticon.com/icons/png/128/2960/2960006.png`}
							alt={el.full_name}
							className="rounded-circle mx-auto d-block img-fluid"
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
						<div className=" float-right">
							<i
								className="fas fa-pencil-alt cursor-pointer"
								onClick={e => {
									actions.defineID(el.id);
									if (!modify) {
										setModify(true);
										setState({
											full_name: el.full_name,
											email: el.email,
											agenda_slug: "german664",
											phone: el.phone,
											address: el.address
										});
									} else {
										setModify(false);
									}
								}}
							/>

							<i
								className="fas fa-trash-alt btn"
								onClick={e => {
									props.onDelete();
									actions.defineID(el.id);
								}}
							/>
						</div>
						<label className="name lead">
							{modify && store.currentID == el.id ? (
								<input type="text" placeholder={el.full_name} name="full_name" onChange={handleInput} />
							) : (
								el.full_name
							)}
						</label>
						<br />
						<i className="fas fa-map-marker-alt text-muted mr-3" />
						<span className="text-muted">
							{modify && store.currentID == el.id ? (
								<input placeholder={el.address} name="address" onChange={handleInput} />
							) : (
								el.address
							)}
						</span>
						<br />
						<span
							className="fa fa-phone fa-fw text-muted mr-3"
							data-toggle="tooltip"
							title=""
							data-original-title="(870) 288-4149"
						/>
						<span className="text-muted small">
							{modify && store.currentID == el.id ? (
								<input placeholder={el.phone} name="phone" onChange={handleInput} />
							) : (
								el.phone
							)}
						</span>
						<br />
						<span
							className="fa fa-envelope fa-fw text-muted mr-3"
							data-toggle="tooltip"
							data-original-title=""
							title=""
						/>
						<span className="text-muted small text-truncate">
							{modify && store.currentID == el.id ? (
								<input placeholder={el.email} name="email" onChange={handleInput} />
							) : (
								el.email
							)}
						</span>
						{modify && store.currentID == el.id && (
							<button
								className="d-block mt-3 ml-5 btn btn-success"
								onClick={() => {
									actions.modifyContact(el.id, state);
									actions.modifyData(i, state);
									setModify(false);
								}}>
								Guardar cambios
							</button>
						)}
					</div>
				</div>
			</li>
		);
	});
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
