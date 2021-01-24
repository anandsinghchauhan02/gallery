import { Provider } from "react-redux";
import {store,persistor} from './store';
import Gallery from './gallery/Gallery';
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Gallery/>
      </PersistGate>
    </Provider>
  );
}

export default App;
