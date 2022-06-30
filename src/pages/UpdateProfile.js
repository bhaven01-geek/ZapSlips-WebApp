import React, { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";
// import { useHistory } from "react-router-dom";

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
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { Alert } from "@mui/material";
import '../components/login.css';
// Update Profile component
export default function UpdateProfile() {
    //   const classes = useStyles();
    //   const history = useHistory();
    //   const { currentUser, updatePassword, updateEmail } = useAuth();

    //   const [email, setEmail] = useState(currentUser.email);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // handle update profile submit
    async function handleSubmit(e) {
        // e.preventDefault();
        // if (password !== passwordConf) {
        //   return setError("Passwords do not match");
        // }

        // const promises = [];
        // setLoading(true);
        // setError("");

        // if (email !== currentUser.email) {
        //   promises.push(updateEmail(email));
        // }
        // if (password) {
        //   promises.push(updatePassword(password));
        // }

        // Promise.all(promises)
        //   .then(() => {
        //     setMessage("Account Updated Successfully");
        //     setTimeout(() => {
        //       history.push("/");
        //     }, 1500);
        //   })
        //   .catch((err) => {
        //     if (err.code === "auth/invalid-email") {
        //       setError("Invalid Email Address")
        //     }
        //     else if(err.code === "auth/requires-recent-login") setError("Too many attempts, login again before updating profile")
        //     else setError(err.message);
        //   })
        //   .finally(() => {
        //     setLoading(false);
        //   });
    }

    return (
        <div className="login-signup-container" >

            <Container component="main" maxWidth="xs" >

                <CssBaseline />

                <Grid component={Paper} elevation={6} sx={{
                    // marginTop: 8,
                    // marginBottom:8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // background:"none",
                }} >
                    {/* Top form icon */}
                    <Avatar sx = {{mt:2}}>
                        <PersonOutlineOutlinedIcon />
                    </Avatar>

                    {/* Form Header */}
                    <Typography component="h1" variant="h5">
                        Update Profile
                    </Typography>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>

                        {/* Errors And Messages */}
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

                        <Grid container spacing={2}>

                            <Grid item xs={12} >
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    autoFocus
                                    value={email}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    placeholder="Leave blank to keep the same"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    value={password}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    name="confirm-password"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirm-password"
                                    placeholder="Leave blank to keep the same"
                                    onChange={(e) => {
                                        setPasswordConf(e.target.value);
                                    }}
                                    value={passwordConf}
                                />
                            </Grid>

                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            // color="primary"
                            sx ={{background:"#0B2DAC" , }}
                            //   className={classes.submit}
                            disabled={loading}
                        >
                            Update
                        </Button>

                        {/* Links */}
                        <Grid container justifyContent="flex-end" sx = {{marginTop:"-20px"}}>
                            <Grid item>
                                <Link href="/app/dashboard" variant="body2">
                                    Cancel
                                </Link>
                            </Grid>
                        </Grid>

                    </form>

                </Grid>

                {/* <Box mt={5} mb={5}>
                    <Copyright />
                </Box> */}

            </Container>

        </div>
    );
}
