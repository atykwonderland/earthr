import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import getAllFoods from './api/api.js'
import Autocomplete from './Autocomplete'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom' 
import FoodResult from './FoodResult'
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
        foods:{
          data:[]
        }
    }
  }
  
  componentDidMount = async () => {
    getAllFoods().then(foods => {
        this.setState({
            foods: foods.data,
        })
        console.log("hi")
        console.log(this.state.foods)
    })
  }
  
  render (){
    
    
    
    return( 
      <div>
        
        <Autocomplete
          options={this.state.foods.data}
        />      
      </div>
        
    )
}
}

export default Home;
