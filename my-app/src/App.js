import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import APIClient from './api/api.js'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        foods:[]
    }
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await APIClient.getFoods().then(foods => {
        this.setState({
            foods: foods.data.data,
        })
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
