import React from 'react'
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

import { createTheme, ThemeProvider } from '@mui/material/styles';


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

    const handleSubmit = (event) => {
      
      };

      
    return (
        <>
            <Box component="form" noValidate onSubmit={handleSubmit} sm={3} md={3} sx={{ mt: '2', alignItems: "center" }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    // autoFocus
                    // variant="outlined"
                    className="text-field"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    className="text-field"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                // onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                                >
                                    {/* // Instead of true show password value will come */}
                                    {false ? <Visibility /> : <VisibilityOff />}
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
                    type="password"
                    className="text-field"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                // onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                                >
                                    {/* // Instead of true show password value will come */}
                                    {false ? <Visibility /> : <VisibilityOff />}
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
                        <Link href="#" variant="body2">
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