import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import User from "./Components/User/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from "./Redux/Store";
import { Provider } from "react-redux";
import UpdateUser from "./Components/User/UpdateUser";


function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Header />
      <Routes>
      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/users' element={<User />} />
      <Route path='/' element={<Home />} />
      <Route path='/update-user' element={<UpdateUser />} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
