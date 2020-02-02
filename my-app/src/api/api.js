import axios from 'axios'

const api = axios.create({
    baseURL: 'http://earthr.herokuapp.com:33507',
})

class APIClient{
    getFoods(){
        return this.perform('get', '/foods')
    }
}
export default APIClient;
