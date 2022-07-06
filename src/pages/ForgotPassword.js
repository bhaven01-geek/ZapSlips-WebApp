import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// Styles and Copyright from Signup Form
// import { Copyright, useStyles } from "./Signup";

// Material UI
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import '../components/login.css'
import { useTheme } from '@mui/material/styles';

export default function ForgotPassword() {
  // const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();

  const { resetPassword, currentUser } = useAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Forgot Password Submit
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className="login-signup-container">
      
      <Container component="main" maxWidth="sm" sx = {{mt:3}}>
        
        <CssBaseline />
        
        <Grid component={Paper} elevation={6}
         sx = {{  display: "flex",
                    flexDirection: "column",
                    alignItems: "center",}} >
          
          {/* Top Icon on the form */}
          <Avatar sx = {{ backgroundColor: theme.palette.secondary.main, mt: 2}}>
            <LockOutlinedIcon />
          </Avatar>

          {/* Form Heading */}
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sm={6} md={6} sx={{ mt: 1 }}>
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
            {currentUser && navigate("/")}

            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                
                {/* Email Input */}
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />

              </Grid>

            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
           
              disabled={loading}
            >
              Send Password Reset E-Mail
            </Button>
            
            {/* Links */}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Have an account? Log in
                </Link>
              </Grid>
            </Grid>

          </Box>

        </Grid>

        {/* <Box mt={5} mb={5}>
          <Copyright />
        </Box> */}

      </Container>

    </div>
  );
}
