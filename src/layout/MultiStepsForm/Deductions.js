import React, { useState } from "react";

import { Button, TextField, Grid, Typography, MenuItem, Alert, Box } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';


const TextFieldStyle = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root':{
        borderRadius:"12px",
    }
  }));


const Deductions = ({ EmpformData, setForm,  handleNext, handleBack }) => {

    console.log("Dducutip error");
  let errorObj = {
    common: "",
  }
  
  const { ProvidentFund, AdvanceSalary, TDS } = EmpformData;
  const [error, setError] = useState(errorObj);

  // Checks Empty Fields (Only Required Fields)
  const handleDeductionsValidate = () => {
    if (!ProvidentFund) {
      setError({
        common: "Please Fill Required Details"
      })
    }
    else {
        handleNext();
    }
  }


  return (
    // <Container component="main" maxWidth="xs">

    <Box Container>
        {Boolean(error.common) ? <Alert severity="error">{error.common}</Alert> : ""}
        <div className="form">

          {/* <Typography component="h1" variant="h5">Deductions</Typography> */}

          <Grid container spacing={4} direction="row" justifyContent="space-between" alignItems="center">

            <Grid item xs={10} sm={5}>
              <TextFieldStyle
                variant="outlined"
                fullWidth
                value={ProvidentFund}
                name="ProvidentFund"
                onChange={
                  (e) => {
                    e.target.value < 0 && (e.target.value = 0);
                    setForm(e)
                  }}
                type="number"
                label="Provident Fund (Employee Part)"
                required
              />
            </Grid>

            <Grid item xs={10} sm={5}>
              <TextFieldStyle
                variant="outlined"
                fullWidth
                value={AdvanceSalary}
                name="AdvanceSalary"
                onChange={
                  (e) => {
                    e.target.value < 0 && (e.target.value = 0);
                    setForm(e)
                  }}
                type="number"
                label="Advance Salary"
              />
            </Grid>

            <Grid item xs={10} sm={5}>
              <TextFieldStyle
                variant="outlined"
                fullWidth
                value={TDS}
                name="TDS"
                onChange={
                  (e) => {
                    e.target.value < 0 && (e.target.value = 0);
                    setForm(e)
                  }}
                type="number"
                label="TDS"
              />
            </Grid>

          </Grid>
        </div>

        <Grid container spacing={4} direction="column" justifyContent="center" alignItems="center">
          <Grid item xs={10} sm={5}>
            <Button
             sx = {{color: '#ffffff', background: "#D43F3F",fontWeight: 500, width: '90px', borderRadius: '5px' ,
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
             sx={{color: '#ffffff', background: "#0B2DAC", fontWeight: 600, width: '90px', borderRadius: '5px',
             '&:hover': {
              background: "#0B2DAC",
              borderRadius: "none"
            },
            '&:focus': {
              outline: "none",
            }
            }}
            onClick={() => handleDeductionsValidate()}>
              Next
            </Button>
          </Grid>
        </Grid>

        </Box>
    // </Container>
  );
};

export default Deductions;
