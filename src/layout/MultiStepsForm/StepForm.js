import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
// import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useForm, useStep } from "react-hooks-helper";
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import empData from './EmpTemplate';
import EmployeeForm from './EmployeeForm';
import Earnings from './Earnings';
import Deductions from './Deductions';

function MultiStepEmpForm() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
   
    const [correct , setCorrect] = React.useState(false);
    const [EmpformData, setForm] = useForm(empData);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const props = { EmpformData, setForm, handleNext, handleBack };
    const steps = [
        { id: "Employee Detail", element: <EmployeeForm {...props} /> },
        { id: "Earnings", element: <Earnings {...props} /> },
        { id: "Deductions", element: <Deductions {...props} /> },
        // { id: "submit", element: <Submit {...props} /> },
    ];
    const maxSteps = steps.length;

    return (
        <Box  sx={{flexGrow: 1 }}>
            <Box container sx= {{flexGrow:1 , p:2}}>
                <Typography component="h1" variant="h5">{steps[activeStep].id}</Typography>
            </Box>
            <Box  sx={{ width: '100%', p: 2  }}>
                {steps[activeStep].element}
            </Box>
            {/* <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1 || !correct}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            /> */}
        </Box>
    );
}


export default MultiStepEmpForm;