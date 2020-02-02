import React,{Component,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import getAllFoods from './api/api.js'
import Autocomplete from './Autocomplete'
class App extends Component {

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
    
    const title = this.state.foods.data.map(food => food.product_name)
    
    
    return( 
      <div className="App">
      <Autocomplete
        options={title}
      />
    </div>

        
    )
}
}

export default App;
