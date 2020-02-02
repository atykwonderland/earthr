import React,{Component,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import getAllFoods from './api/api.js'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        foods:[]
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
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
         
        </a>
      </header>
    </div>

        
    )
}
}

export default App;
