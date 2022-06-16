// import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
      <Routes>

        <Route path = '/' element={<Header />} />
        <Route path = 'login' element={<Login/>} />
        <Route path = 'signup' element = {<SignUp/>} />

      </Routes>
    </BrowserRouter>
     </div>
    //     {/* <Header /> */}
    //     <Login />
    //     {/* <SignUp /> */}
  );
}

export default App;


//  "@material-ui/core": "^4.12.3",
//     "@material-ui/icons": "^4.11.2",
//     // "@material-ui/lab": "^4.0.0-alpha.60",