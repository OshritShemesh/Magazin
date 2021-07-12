import logo from './logo.svg';
import './App.css';
import Login from './comps/login';
import AddUser from './comps/addUser';
import Picture from './comps/picture';
import ChoosenPic from './comps/choosenpic';
import UploadImage from './comps/uplaodimage';
// import Router from './mainrouter'
import MainRouter from './mainrouter';
import { Provider } from 'react-redux';
import store from './redux/store/store'
// import UploadImage from './comps/uplaodimage'
function App() {
  return (
    <div>
      {/* <Login></Login> */}
      {/* <AddUser></AddUser> */}
      {/* <UploadImage></UploadImage>
      <Picture></Picture> */}
      <Provider store={store}>
        <MainRouter></MainRouter>
      </Provider>

      {/* <ChoosenPic></ChoosenPic> */}
    </div>
  );
}

export default App;
