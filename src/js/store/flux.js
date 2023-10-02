const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			starships: [],
			planets: [],
			characters: {},
			vehicles: {},
			planetoid: {},
			favorites: [],
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

			getDetailedCharacters: async (id) => {
				const store = getStore();
				const url = `https://www.swapi.tech/api/people/${id}`;
				const options = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					console.log(data);
					const details = data.result;
					console.log(details);
					setStore({ characters: details });
				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			},

			getDetailedStarships: async (id) => {
				const store = getStore();
				const url = `https://www.swapi.tech/api/starships/${id}`;
				const options = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					console.log(data);
					const details = data.result;
					console.log(details);
					setStore({ vehicles: details });
				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			},

			getDetailedPlanets: async (id) => {
				const store = getStore();
				const url = `https://www.swapi.tech/api/planets/${id}`;
				const options = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					console.log(data);
					const details = data.result;
					console.log(details);
					setStore({ planetoid: details });
				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			},
			addToFavorites: (item, type) => {
				const store = getStore();
				// Verificar si el personaje ya está en favoritos
				const isAlreadyFavorited = store.favorites.some((fav) => fav.uid === item.uid);
		
				if (!isAlreadyFavorited) {
				  // Agregar el personaje a la lista de favoritos
				  setStore({ favorites: [...store.favorites, { ...item, type }] });
				}
			  },

		}
	};
};

export default getState;
