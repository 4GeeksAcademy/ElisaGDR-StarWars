const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			starships: [],
			planets: [],
			characters: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			getUsers: async () => {
				const url = "https://www.swapi.tech/api/people";
				const options = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					setStore({ users: data.results });
				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			},

			getStarships: async () => {
				const url = "https://www.swapi.tech/api/starships";
				const options = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					setStore({ starships: data.results });
				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			},

			getPlanets: async () => {
				const url = "https://www.swapi.tech/api/planets";
				const options = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					setStore({ planets: data.results });
				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			},

			getCharacters: async (idContact) => {
				const url = `https://www.swapi.tech/api/people/${idContact}`;
				const options = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					setStore({ characters: data.result });
				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			}

		}
	};
};

export default getState;
