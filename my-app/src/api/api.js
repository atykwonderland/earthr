import axios from 'axios'

const api = axios.create({
	baseURL: 'http://127.0.0.1:5000',
	//baseURL: 'http://earthr.herokuapp.com:33507',
})
export const getAllFoods = () => api.get(`/foods`)


export default getAllFoods;
