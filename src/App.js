import './App.css';
import MainRouter from './mainrouter';
import { Provider } from 'react-redux';
import store from './redux/store/store'
// import UploadImage from './comps/uplaodimage'
function App() {
  return (
    <div>
    
      <Provider store={store}>
        <MainRouter></MainRouter>
      </Provider>

      {/* <ChoosenPic></ChoosenPic> */}
    </div>
  );
}

export default App;
