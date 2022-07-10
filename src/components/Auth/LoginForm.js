import React , {useState}from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from "react-router-dom";
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// import { provider, Fbprovider } from '../../firebase'
import { useAuth } from "../../contexts/AuthContext";

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

const LoginForm = () => {

  const { login } = useAuth();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleClickShowPassword = () => {setshowPassword(!showPassword)}


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("../app/dashboard" , {replace:true});
    } catch(error) {
      setError("The email or password you entered is incorrect." , error);
    }

    setLoading(false);
  }
 
    return (
        <>
          <Box component="form" noValidate onSubmit={handleSubmit} sm={6} md={6} sx={{ mt: 1 }}>
          {error && <Alert severity="error">{error}</Alert>}
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className="text-field"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text":"password"}
                className="text-field"
                onChange={(e) => setPassword(e.target.value)}
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
                  <Link href="signup" variant="body2">
                    Don't have an account? Signup
                  </Link>
                  {/* <FormControlLabel
                    control={<Checkbox value="rememebrr" />}
                    label="Remember me"
                  /> */}
                </Grid>
                <Grid item>
                  <Link href = "forgot-password" variant="body2" sx={{ color: '#D93F21', textDecorationColor: '#D93F21' }}>
                    {"Recover Password"}
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, border: '1px solid #5A5A5A', color: '#000000' }}
                className="Button"
                disabled={loading}
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 4 }} />
            </Box>  
        </>
    )
}

export default LoginForm
