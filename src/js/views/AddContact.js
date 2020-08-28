import React, { useContext, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const handleInput = e => {
		e.preventDefault();
		SetNewContact({ ...newContact, [e.target.name]: e.target.value });
	};
	const [newContact, SetNewContact] = useState({
		full_name: "",
		email: "",
		agenda_slug: "german664",
		phone: "",
		address: ""
	});
	/* 	function historyGoBack() {
			const history = useHistory();
			history.goBack();
		} */

	const formName = useRef(null);
	const formEmail = useRef(null);
	const formPhone = useRef(null);
	const formAddress = useRef(null);
	const formBtn = useRef(null);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form
					onSubmit={e => {
						e.preventDefault();
						let inputs = Object.values(newContact);
						if (!inputs.includes(null) && !inputs.includes("")) {
							actions.addContact(newContact);
							console.log(inputs);
							SetNewContact({
								full_name: "",
								email: "",
								agenda_slug: "german664",
								phone: "",
								address: ""
							});
						} else {
							alert("Faltan datos por llenar");
						}
					}}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							ref={formName}
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
							value={newContact.full_name}
							onChange={handleInput}
							onKeyDown={e => {
								if (e.keyCode === 13 && e.target.value !== "") {
									e.preventDefault();
									formEmail.current.focus();
								} else if (e.keyCode === 13 && e.target.value === "") {
									e.preventDefault();
								}
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							ref={formEmail}
							type="email"
							name="email"
							value={newContact.email}
							className="form-control"
							placeholder="Enter email"
							onChange={handleInput}
							onKeyDown={e => {
								if (e.keyCode === 13 && e.target.value !== "") {
									e.preventDefault();
									formPhone.current.focus();
								} else if (e.keyCode === 13 && e.target.value === "") {
									e.preventDefault();
								}
							}}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							ref={formPhone}
							type="number"
							name="phone"
							value={newContact.phone}
							className="form-control"
							placeholder="Enter phone"
							onChange={handleInput}
							onKeyDown={e => {
								if (e.keyCode === 13 && e.target.value !== "") {
									e.preventDefault();
									formAddress.current.focus();
								} else if (e.keyCode === 13 && e.target.value === "") {
									e.preventDefault();
								}
							}}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							ref={formAddress}
							type="text"
							name="address"
							value={newContact.address}
							className="form-control"
							placeholder="Enter address"
							onChange={handleInput}
							onKeyDown={e => {
								if (e.keyCode === 13 && e.target.value !== "") {
									e.preventDefault();
									formBtn.current.focus();
								} else if (e.keyCode === 13 && e.target.value === "") {
									e.preventDefault();
								}
							}}
						/>
					</div>
					<button ref={formBtn} type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
