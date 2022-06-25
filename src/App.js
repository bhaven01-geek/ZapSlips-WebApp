// import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import { ThemeProvider } from '@mui/material/styles';
// import { CssBaseline, StyledEngineProvider } from '@mui/material';

// import theme from './themes/index'
import DashboardLayout from './layout/layout1';
import Dashboard from './layout/MainComponents/Dashboard';
import PayslipMode from './pages/PayslipMode';
import ExcelCard from './layout/ExcelCard/ExcelCard';
import MultiStepEmpForm from './layout/MultiStepsForm/StepForm';


function App() {
  return (

    <div className="App">

      {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Header />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='/app' element={<DashboardLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='payslips' element={<PayslipMode />} />
            <Route path='excel' element={<ExcelCard />} />
            <Route path='employee' element={<MultiStepEmpForm />} />
          </Route>

        </Routes>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </div>

  );
}

export default App;


//  "@material-ui/core": "^4.12.3",
//     "@material-ui/icons": "^4.11.2",
//     // "@material-ui/lab": "^4.0.0-alpha.60",