import logo from './logo.svg';
import './App.css';
import Login from './comps/login';
import AddUser from './comps/addUser';
import Picture from './comps/picture';
import ChoosenPic from './comps/choosenpic';
import UploadImage from './comps/uplaodimage';
// import UploadImage from './comps/uplaodimage'
function App() {
  return (
    <div>
      {/* <Login></Login> */}
      {/* <AddUser></AddUser> */} 
      <UploadImage></UploadImage>
      <Picture></Picture>
     
      {/* <ChoosenPic></ChoosenPic> */}
    </div>
  );
}

export default App;
