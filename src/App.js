import { Provider } from "react-redux";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {store,persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react'
import Gallery from './gallery/Gallery';
import Navigation from './components/Navbar/Navbar';
import View from './components/View/View';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation/>
        <Router>
          <Switch>
            <Route path="/" exact component={Gallery}/>
            <Route path="/:id" component={View}/>
           </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
