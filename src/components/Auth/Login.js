import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
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

import './login.css';

// import Loginbg from '../../Assets/loginbg.png';
import Google from '../../Assets/Google.png';
import Facebook from '../../Assets/Facebook.png';

import SocialAuth from './SocialAuth';
import LoginForm from './LoginForm';



const theme = createTheme();

export default function Login() {
 

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }} md={{ height: '100vh' }} >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: 'url(/assets/loginbg.png)',
            backgroundSize: 'cover',
          }}
        >
        </Grid>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square sx={{ backgroundColor: "#F0F2F5;" }}>

          <Box
            sx={{
              my: 2,
              mx: 2,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {/* <Grid item> */}

            <Typography variant="p" className="logo-name">ZapSlips</Typography>
            {/* <Typography xs = {false} >Dont have a account ? SignUp</Typography> */}
            {/* </Grid> */}
          </Box>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            {/* <Typography variant="h4" sx={{ color: 'text.secondary' }}>
                Welcome Back
              </Typography> */}

            <Typography component="h1" variant="h5">
              Login into your Account
            </Typography>

              <SocialAuth />
              <LoginForm />

            
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
