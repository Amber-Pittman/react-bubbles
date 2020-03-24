import axios from "axios";

export function getToken() {
	return localStorage.getItem("token");
}


export const axiosWithAuth = () => {
	return axios.create({		
		baseURL: "http://localhost:/api", 
		headers: {
			Authorization: getToken(),
		},
	})
}