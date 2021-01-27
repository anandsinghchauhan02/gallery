import { Provider } from "react-redux";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import store from './store';
import Gallery from './gallery/Gallery';
import Navigation from './components/Navbar/Navbar';
import View from './components/View/View';


function App() {
  return (
    <Provider store={store}>
        <Navigation/>
        <Router>
          <Switch>
            <Route path="/" exact component={Gallery}/>
            <Route path="/:id" component={View}/>
           </Switch>
        </Router>
    </Provider>
  );
}

export default App;
