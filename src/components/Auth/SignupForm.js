import React , {useState} from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://zapone.io/">
          Zapone Solutions Pvt Ltd
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const SignupForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setshowPassword] = useState(false);
  
    const { signup, logout } = useAuth();
    const navigate = useNavigate();
  
    const handleClickShowPassword = () => {setshowPassword(!showPassword)};

    // Handle Signup submit
    async function handleSubmit(e) {
      e.preventDefault();
  
      if (password !== passwordConf) {
        return setError("Passwords do not match");
      }
  
      try {
        setError("");
        setLoading(true);
        await signup(email, password);
        setMessage("You are successfully Signed Up");
        
      } catch (errorMessage) {
        if (errorMessage.code === "auth/invalid-email")
          setError("Please try again with a valid e-mail address");
        else setError(errorMessage.message);
      }
  
      setTimeout(async() => {
        try {
          setError("");
          setLoading(true);
          await logout();
          navigate("../login");
        } catch {
          setError("Failed to log out");
        }
      }, 500);
  
      setLoading(false);
    }
      

    return (
        <>
            <Box component="form" noValidate onSubmit={handleSubmit} sm={6} md={6} ls = {3} sx = {{mt:1 , maxWidth:"500px"}}>
                 {/* Errors and messages */}
            {error && (
              <Alert style={{ marginBottom: "16px" }} severity="error">
                {error}
              </Alert>
            )}
            {message && (
              <Alert style={{ marginBottom: "16px" }} severity="success">
                {message}
              </Alert>
            )}
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    className="text-field"
                    onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text": "password"}
                    className="text-field"
                    onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    sx = {{
                                      '&:focus':{
                                        border:"none",
                                        outline:"none"
                                      }
                                    }}
                                onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                                >
                                    {/* // Instead of true show password value will come */}
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                   
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirm password"
                    label="Confirm Password"
                    type={showPassword ? "text":"password"}
                    className="text-field"
                    onChange={(e) => {
                        setPasswordConf(e.target.value);
                      }}
                      value={passwordConf}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    sx = {{
                                      '&:focus':{
                                        border:"none",
                                        outline:"none"
                                      },
                                    }}
                                onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                                >
                                    {/* // Instead of true show password value will come */}
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    
                />
                {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              */}
               {/* <div className="bg-blur-box"></div> */}
                <Grid container>
                    <Grid item xs>
                        {/* <Link href="#" variant="body2">
                    Remember Me
                  </Link> */}
                        {/* <FormControlLabel
                    control={<Checkbox value="rememebrr" />}
                    label="Remember me"
                  /> */}
                    </Grid>
                    <Grid item>
                        <Link href="login" variant="body2">
                            {"Already have an account? Log in"}
                        </Link>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2, backgroundColor: "blue", color: "white" }}
                    className="signup-btn"
                >
                    Sign Up
                </Button>
                <Copyright sx={{ mt: 4 }} />
            </Box>
        </>
    )
}

export default SignupForm
