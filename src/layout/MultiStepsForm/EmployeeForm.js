import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button, TextField, Grid, Typography, MenuItem, Alert, Box } from "@mui/material";
import {  styled } from '@mui/material/styles';
import { currencies } from '../utils/Currency';


const TextFieldStyle = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root':{
        borderRadius:"12px",
    }
  }));


const EmployeeForm = ({ EmpformData, setForm, handleNext, handleBack }) => {

    const [Contact, setContact] = useState("");

    const {
        EmployeeName,
        Address,
        Email,
        Designation,
        Department,
        EmployeeID,
        WorkingHours,
        Leaves,
        Payrateperhour,
        PAN,
    } = EmpformData;

    let errorObj = {
        panError: "",
        common: "",
    }

    const [error, setError] = useState(errorObj);
    const [currency, setCurrency] = React.useState("");

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const handleTelephone = (phone) => {
        EmpformData.Contact = phone;
        setContact(phone);
    };

    const handleValidate = () => {

        let panregex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

        //checks Required Field is Empty or Not
        if (!EmployeeID || !EmployeeName || !Designation || !Email || !Address || !Department || !PAN) {
            setError({ common: "Please Fill Required Details" });
        }
        else if (!Contact) {
            setError({
                common: "Please Fill Contact Info"
            });
        }

        //checks if PAN is correct or Not
        else if (!panregex.test(PAN)) {
            setError({
                common: "Invalid Pan Card Details",
            });
        }
        else {
            handleNext();
        }

    }

    return (
        // <Container component="main" maxWidth="xs">
        <Box container>
                {Boolean(error.common) ? <Alert severity="error">{error.common}</Alert> : ""}

                <div className="form">
                    {/* <Typography component="h1" variant="h5">Employee Details</Typography> */}
                    <Grid container spacing={4} direction="row" justifyContent="space-between" alignItems="center" >
                        <Grid item xs={10} sm={5}>

                            <TextFieldStyle
                                variant="outlined"
                                required
                                fullWidth
                                value={EmployeeName}
                                name="EmployeeName"
                                id="EmployeeName"
                                label="Employee Name"
                                onChange={setForm}
                            />
                        </Grid>

                        <Grid item xs={10} sm={5}>
                            <TextFieldStyle
                                variant="outlined"
                                required
                                fullWidth
                                value={Email}
                                name="Email"
                                label="Email"
                                onChange={setForm}
                                type="em"
    
                            />
                        </Grid>

                        <Grid item xs={10} sm={5}>
                            <TextFieldStyle
                                variant="outlined"
                                required
                                fullWidth
                                multiline
                                maxcols={2}
                                value={Address}
                                name="Address"
                                label="Address"
                                onChange={setForm}
                            />
                        </Grid>

                        <Grid item xs={10} sm={5}>
                            <PhoneInput
                                className="phone-inp"
                                isValid={(value, country) => {
                                    if (value.match(/12345/)) {
                                        return "Invalid value: " + value + ", " + country.name;
                                    } else if (value.match(/1234/)) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                }}
                                name="Contact"
                                value={Contact}
                                onChange={(phone) => {
                                    handleTelephone(phone);
                                }}
                                required
                            ></PhoneInput>
                        </Grid>


                        <Grid item xs={10} sm={5}>
                            <TextFieldStyle
                                variant="outlined"
                                required
                                fullWidth
                                value={Designation}
                                name="Designation"
                                onChange={setForm}
                                label="Designation"
                            />
                        </Grid>

                        <Grid item xs={10} sm={5}>
                            <TextFieldStyle
                                variant="outlined"
                                required
                                fullWidth
                                value={Department}
                                name="Department"
                                onChange={setForm}
                                label="Department"
                            />
                        </Grid>

                        <Grid item xs={10} sm={5}>
                            <TextFieldStyle
                                variant="outlined"
                                fullWidth
                                value={EmployeeID}
                                name="EmployeeID"
                                onChange={setForm}
                                type="text"
                                required
                                label="Employee ID"
                            />
                        </Grid>

                        <Grid item xs={10} sm={5}>
                            <TextFieldStyle
                                variant="outlined"
                                fullWidth
                                value={Leaves}
                                name="Leaves"
                                onChange={
                                    (e) => {
                                        e.target.value < 0 && (e.target.value = 0);
                                        setForm(e)
                                    }}
                                type="number"
                                label="Leaves"
                                InputProps={{ inputProps: { min: 0, max: 31 } }}
                            />
                        </Grid>

                        <Grid item xs={10} sm={5}>
                            <TextFieldStyle
                                id="outlined-select-currency"
                                select
                                label="Select Currency"
                                value={currency}
                                onChange={handleChange}
                                required
                                helperText="Please select your currency"
                                variant="outlined"
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextFieldStyle>
                        </Grid>

                        <Grid item xs={10} sm={5}>
                            <TextFieldStyle
                                variant="outlined"
                                fullWidth
                                value={WorkingHours}
                                name="WorkingHours"
                                onChange={
                                    (e) => {
                                        e.target.value < 0 && (e.target.value = 0);
                                        setForm(e)
                                    }}
                                type="number"
                                label="Working Hours (per Day)"
                                InputProps={{ inputProps: { min: 0, max: 24 } }}
                            />
                        </Grid>

                        <Grid item xs={10} sm={5}>
                            <TextFieldStyle
                                variant="outlined"
                                // required
                                fullWidth
                                value={Payrateperhour}
                                name="Payrateperhour"
                                onChange={
                                    (e) => {
                                        e.target.value < 0 && (e.target.value = 0);
                                        setForm(e)
                                    }}
                                type="number"
                                label="Payrateperhour"
                                InputProps={{ inputProps: { min: 0 } }}
                            />
                        </Grid>

                        <Grid item xs={10} sm={5}>
                            <TextFieldStyle
                                helperText={Boolean(error.panError) ? "Invalid Pan Card " : ""}
                                error={Boolean(error.panError)}
                                variant="outlined"
                                fullWidth
                                value={PAN}
                                name="PAN"
                                onChange={setForm}
                                required
                                // InputProps={{ inputProps: { max: 10 } }}
                                inputProps={{ style: { textTransform: "uppercase" } }}
                                label="PAN"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                sx={{ background: "#0B2DAC", fontWeight: 600, width: '120px', borderRadius: '5px' }}
                                onClick={() =>
                                    handleValidate()
                                }>
                                Next
                            </Button>
                        </Grid>
                    </Grid>

                </div>
            </Box>
        // </Container>
    );
};

export default EmployeeForm;
