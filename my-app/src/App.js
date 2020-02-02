import React,{Component} from 'react';
import logo from './logo.svg';
import Home from './Home'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom' 
import FoodResult from './FoodResult'
class App extends Component {

  
  render (){
    
    
    
    return( 
      <Router>
        <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/result" exact component={FoodResult} />
                
            </Switch>
      </Router>

        
    )
}
}

export default App;
