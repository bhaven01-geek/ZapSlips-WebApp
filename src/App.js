// import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";


// import { ThemeProvider } from '@mui/material/styles';
// import { CssBaseline, StyledEngineProvider } from '@mui/material';

// import theme from './themes/index'
// import DashboardLayout from './layout/layout1';
import Dashboard from './layout/MainComponents/Dashboard';
import PayslipMode from './pages/PayslipMode';
import ExcelCard from './layout/ExcelCard/ExcelCard';
import MultiStepEmpForm from './layout/MultiStepsForm/StepForm';
import ChooseTheme from './pages/ChooseTheme';
import UpdateProfile from './pages/UpdateProfile';
import StoreAgencyDetails from './pages/UpdateCompanyDetails';
import PrivateRoute from './PrivateRoute';
import GenerateSlip from './components/GenerateSlip';
import ForgotPassword from './pages/ForgotPassword';
import Logout from './components/Auth/Logout';
import { DashboardProvider } from './components/DashboardData';

function App() {
  return (

    <>

      {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}

      <BrowserRouter>
        <AuthProvider>
          <DashboardProvider>
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/app' element={<PrivateRoute />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='payslips' element={<PayslipMode />} />
              <Route path='excel' element={<ExcelCard />} />
              <Route path='employee' element={<MultiStepEmpForm />} />
              <Route path='themes' element={<ChooseTheme />} />
              <Route path='updateprofile' element={<UpdateProfile />} />
              <Route path='companydetails' element={<StoreAgencyDetails />} />
              <Route path='themes/gen-slip' element={<GenerateSlip />} />
              <Route path='logout' element={<Logout />} />
            </Route>
          </Routes>
          </DashboardProvider>
        </AuthProvider>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </>

  );
}

export default App;


//  "@material-ui/core": "^4.12.3",
//     "@material-ui/icons": "^4.11.2",
//     // "@material-ui/lab": "^4.0.0-alpha.60",