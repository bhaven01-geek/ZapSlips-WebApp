import React from 'react'
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
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

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

    const handleSubmit = (event) => {

      };

    return (
        <>
          <Box component="form" noValidate onSubmit={handleSubmit} sm={6} md={6} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              */}
              <div className="bg-blur-box"></div>
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
                  <Link href="#" variant="body2" sx={{ color: '#D93F21', textDecorationColor: '#D93F21' }}>
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
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>  
        </>
    )
}

export default LoginForm
