import React, { useState } from "react";
import { Button, TextField, Grid, Typography, MenuItem, Alert, Box } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';


const TextFieldStyle = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: "12px",
  }
}));


const Earnings = ({ EmpformData, setForm, handleNext, handleBack }) => {
  const {
    BasicSalary,
    HRA,
    Reimbursements,
    Bonus,
    LeaveTravelAllowance,
    Commission,
    SpecialAllowance,
  } = EmpformData;


  let errorObj = {
    common: "",
  }
  const [error, setError] = useState(errorObj);
  const theme = useTheme();

  //checks Required Field is Empty or Not On Submit
  const handleEarningsValidate = () => {
    // console.log("button rrorr occurred")
    if (!BasicSalary) {
      setError({
        common: "Please Fill Required Details"
      })
    }
    // if Filled Redirect to Next Pages
    else {
      handleNext();
    }
  }

  return (
    // Earnings Section
    // <Container component="main" maxWidth="xs">
    <Box container>
      {Boolean(error.common) ? <Alert severity="error">{error.common}</Alert> : ""}
      <div className="form">
        {/* <Typography component="h1" variant="h5">Earnings</Typography> */}
        <Grid container spacing={4} direction="row" justifyContent="space-between" alignItems="center">

          <Grid item xs={10} sm={5}>
            <TextFieldStyle
              variant="outlined"
              fullWidth
              label="Basic Salary"
              value={BasicSalary}
              name="BasicSalary"
              onChange={
                (e) => {
                  e.target.value < 0 && (e.target.value = 0);
                  setForm(e)
                }}
              type="number"
              required
            />
          </Grid>

          <Grid item xs={10} sm={5}>
            <TextFieldStyle
              variant="outlined"
              fullWidth
              label="HRA"
              value={HRA}
              name="HRA"
              onChange={
                (e) => {
                  e.target.value < 0 && (e.target.value = 0);
                  setForm(e)
                }}
              type="number"
            />
          </Grid>

          <Grid item xs={10} sm={5}>
            <TextFieldStyle
              variant="outlined"
              fullWidth
              label="Bonus"
              value={Bonus}
              name="Bonus"
              onChange={
                (e) => {
                  e.target.value < 0 && (e.target.value = 0);
                  setForm(e)
                }}
              type="number"
            />
          </Grid>

          <Grid item xs={10} sm={5}>
            <TextFieldStyle
              variant="outlined"
              fullWidth
              label="Reimbursements"
              value={Reimbursements}
              name="Reimbursements"
              onChange={
                (e) => {
                  e.target.value < 0 && (e.target.value = 0);
                  setForm(e)
                }}
              type="number"
            />
          </Grid>

          <Grid item xs={10} sm={5}>
            <TextFieldStyle
              variant="outlined"
              fullWidth
              label="Commission"
              value={Commission}
              name="Commission"
              onChange={
                (e) => {
                  e.target.value < 0 && (e.target.value = 0);
                  setForm(e)
                }}
              type="number"
            />
          </Grid>

          <Grid item xs={10} sm={5}>
            <TextFieldStyle
              variant="outlined"
              fullWidth
              label="Leave Travel Allowance"
              value={LeaveTravelAllowance}
              name="LeaveTravelAllowance"
              onChange={
                (e) => {
                  e.target.value < 0 && (e.target.value = 0);
                  setForm(e)
                }}
              type="number"
            />
          </Grid>

          <Grid item xs={10} sm={5}>
            <TextFieldStyle
              variant="outlined"
              fullWidth
              label="Special Allowance"
              value={SpecialAllowance}
              name="SpecialAllowance"
              onChange={
                (e) => {
                  e.target.value < 0 && (e.target.value = 0);
                  setForm(e)
                }}
              type="number"
            />
          </Grid>
        </Grid>
      </div>

      <Grid container spacing={4} direction="column" justifyContent="center" alignItems="center">

        <Grid item xs={10} sm={5}>
          <Button
            // color="secondary"
            sx={{
              color: '#ffffff', background: "#D43F3F", fontWeight: 500, width: '90px', borderRadius: '5px',
              '&:hover': {
                background: "#D43F3F",
                borderRadius: "none"
              },
              '&:focus': {
                outline: "none",
              }
            }}
            onClick={() => handleBack()}>
            Previous
          </Button>
        </Grid>

        <Grid item xs={10} sm={5}>
          <Button
            sx={{
              color: '#ffffff', background: "#0B2DAC", fontWeight: 500, width: '90px', borderRadius: '5px',
              '&:hover': {
                background: "#0B2DAC",
                borderRadius: "none"
              },
              '&:focus': {
                outline: "none",
              }
            }}
            onClick={() => handleEarningsValidate()}>
            Next
          </Button>

        </Grid>


      </Grid>

    </Box >
    // </Container>
    //Earnings Section Ends
  );
};

export default Earnings;
