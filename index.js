import ReactDOM from "react-dom";
// import App from './App'
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter , Routes , Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
    
   </>
);