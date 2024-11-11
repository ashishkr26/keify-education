
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
import { Provider } from 'react-redux';
import appStore from './utils/store/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      {/* <Header/> */}
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
