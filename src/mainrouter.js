import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./comps/home";
export default function MainRouter(props) {

    return (
        <>
            <Router>
                <Switch>
                    {/* <Route path="/pictures">
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
                    </Route> */}
                    <Route path="/">
                        <Home></Home>
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
