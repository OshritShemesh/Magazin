import './App.css';
import MainRouter from './mainrouter';
import { Provider } from 'react-redux';
import store from './redux/store/store'
import CreateMagazine from './comps/createMagazine';
import CreatePost from './comps/createPost'
// import UploadImage from './comps/uplaodimage'
import ViewMagazins from './comps/ViewMagazins'

function App() {
  return (
    <div>

      <Provider store={store}>
        <MainRouter></MainRouter>

        <CreateMagazine />
        <ViewMagazins />

        <CreatePost />
      </Provider>

      {/* <ChoosenPic></ChoosenPic> */}
    </div>
  );
}

export default App;