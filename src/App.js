import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import Home from "./views/Home";
import Register from './views/Register'
import Login from './views/Login'
import Create from './views/Create'
import Products from './views/Products'
import View from './views/View'
import Edit from "./views/Edit";
import CreateDemand from "./views/CreateDemand";
import History from "./views/History"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Create" element={<Create/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/View/:id" element={<View/>}/>
                <Route path="/Edit/:id" element={<Edit/>}/>
                <Route path="/CreateDemand" element={<CreateDemand/>}/>
                <Route path="/History" element={<History/>}/>
            </Routes>
            <GlobalStyle />
        </Router>
    );
}

export default App;
