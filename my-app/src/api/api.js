import axios from 'axios'

const api = axios.create({
	baseURL: 'http://127.0.0.1:5000',
	//baseURL: 'http://earthr.herokuapp.com:33507',
})

class APIClient{
    getFoods(){
        return this.perform('get', '/foods')
    }
}
export default APIClient;
