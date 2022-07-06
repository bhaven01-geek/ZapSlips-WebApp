import React, { useState } from "react";
import { storage, firebase } from "../firebase";
import { css } from "@emotion/react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Styles and Copyright
// import { Copyright, useStyles } from "./Signup";

// Material UI
import { Avatar, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CircularProgress, Paper } from "@mui/material";
import { Alert } from "@mui/material";
import '../components/login.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';



const StoreAgencyDetails = () => {

  const [fileName, setFileName] = useState("");
  // const classes = useStyles();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [Agency_name, setAgency_name] = useState("");
  const [_telephone, set_telephone] = useState("");
  const [_Logo, set_Logo] = useState(null);
  const [_Address, set_Address] = useState("");
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //Get the UID of loggedin User
  const { currentUser } = useAuth();
  const user_uid = currentUser.uid;

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const handleSubmit = async (e) => {

    if (
      _Logo === null ||
      _telephone.length === 0 ||
      Agency_name === "" ||
      _Address === ""
    ) {
      setError("Please Fill All Details");
    }

    else {
      setLoading(true);
      e.preventDefault();

      <RingLoader css={override} size={150} />;

      const Store_Agency = storage
        .ref(`${Agency_name}/${_Logo.name}`)
        .put(_Logo);
      await Store_Agency.on(
        "state_changed",
        (snapshot) => { },
        (error) => {
          setError("Failed, Please Try Again!");
        },
        () => {
          storage
            .ref(`${Agency_name}`)
            .child(_Logo.name)
            .getDownloadURL()
            .then((url) => {
              firebase
                .firestore()
                .collection("users")
                .doc(user_uid)
                .set({
                  AgencyName: Agency_name,
                  AgencyLogo: url,
                  AgencyAddress: _Address,
                  AgencyTelephone: _telephone,
                  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .catch(function (error) {
                  setError("Failed, Please Try Again!");
                });
            })
            .then(() => {
              setMessage("Successfully Uploaded Company Details");
              setLoading(false);
            })
            .catch(function (error) {
              setError("Failed, Please Try Again!");
            });
        }
      );
    }
  };

  const handleChange_logo = (e) => {
    setFileName(e.target.files[0].name)
    if (e.target.files[0]) {
      set_Logo(e.target.files[0]);
    }
  };

  return loading ? (
    <CircularProgress color="secondary" />
  ) : (
    <div className="details-cont">
      <Container component="main" maxWidth="xs" sx={{ gap: "25px" }}>
        <CssBaseline />
        <Grid component={Paper} elevation={6} sx={{
          // marginTop: 8,
          // marginBottom:8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // background:"none",
        }}>

          <Avatar sx={{ mt: 2 }}>
            {/* <InfoOutlinedIcon /> */}
            <PersonOutlineOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Company Details
          </Typography>

          <form >
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
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="company-name"
                  label="Company Name"
                  name="company-name"
                  onChange={(e) => {
                    setAgency_name(e.target.value);
                  }}
                  value={Agency_name}
                />
              </Grid>

              <Grid container item>
                <PhoneInput
                  isValid={(value, country) => {
                    if (value.match(/12345/)) {
                      return "Invalid value: " + value + ", " + country.name;
                    } else if (value.match(/1234/)) {
                      return false;
                    } else {
                      return true;
                    }
                  }}
                  onChange={(phone) => {
                    set_telephone(phone);
                  }}
                  value={_telephone}
                  required
                >
                </PhoneInput>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="office-address"
                  label="Office Address"
                  id="office-address"
                  value={_Address}
                  onChange={(e) => set_Address(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} className="wrap2">
                <Button variant="contained" component="label" sx={{ background: "#D43F3F", }}>
                  Upload Logo
                  <input
                    type="file"
                    name="image"
                    className="upload-box"
                    onChange={handleChange_logo}
                    accept="image/*"
                    required
                    hidden
                  />
                </Button>
                <Typography style={{ marginTop: '6px' }} variant='body2' color='textSecondary'>{fileName}</Typography>
              </Grid>

            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"

              sx={{
                background: "#0B2DAC",
                '&:hover': {
                  background: "#0B2DAC",
                  borderRadius: "none"
                },
                '&:focus': {
                  outline: "none",
                }
              }}
              // className={classes.submit}
              disabled={loading}
              onClick={handleSubmit}
            >
              Submit
            </Button>

          </form>
        </Grid>

        {/* <Box mt={5} mb={5}>
        <Copyright />
      </Box> */}

      </Container>
    </div>
  );
};

export default StoreAgencyDetails;
