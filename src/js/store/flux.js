const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			agendaData: [],
			currentID: ""
		},
		actions: {
			addContact: async newContact => {
				let actions = getActions();
				const result = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(newContact),
					headers: {
						"Content-Type": "application/json"
					}
				});
				const data = await result.json();
				if (data.msg) {
					alert("CORREO YA UTILIZADO");
				} else {
					actions.getData();
				}
			},
			getData: async () => {
				const result = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/german664");
				const data = await result.json();
				setStore({ agendaData: data });
			},
			deleteContact: async id => {
				let actions = getActions();
				const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, { method: "DELETE" });
				const data = await result.json();
				actions.getData();
			},
			defineID: id => {
				setStore({ currentID: id });
			},
			modifyContact: async (id, modifiedContact) => {
				let actions = getActions();
				const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "PUT",
					body: JSON.stringify(modifiedContact),
					headers: {
						"Content-Type": "application/json"
					}
				});

				/* actions.getData(); */
			},
			modifyData: (i, newData) => {
				const store = getStore();
				const data = (store.agendaData[i] = newData);
				setStore({ agendaData: store.agendaData, data });
			}
		}
	};
};
export default getState;
