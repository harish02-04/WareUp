import { BrowserRouter, Route } from "react-router-dom";
import "./css/login.css";
import "./css/home.css";
import SignIn from "./pages/signin";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/signin" component={SignIn}></Route>
      <Route exact path="/" component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
