import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Picture from "./comps/picture";
import UploadImage from "./comps/uplaodimage";
import Login from "./comps/login";
import AddUser from "./comps/addUser";
import Home from "./comps/home";
import History from './comps/history'
import Register from './comps/register'
export default function MainRouter(props) {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/pictures">
                        <Picture></Picture>
                    </Route>
                    <Route path="/history">
                        <History></History>
                    </Route>
                    <Route path="/uploadimage">
                        <UploadImage></UploadImage>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/addUser">
                        <AddUser></AddUser>
                    </Route>
                    <Route path="/register">
                      <Register></Register>
                    </Route>
                    <Route path="/">
                        <Login></Login>
                    </Route>
                </Switch>
            </Router>
        </>
    )

}

// function Menue(props){

//     return(

//     )
// }
