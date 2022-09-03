// material-ui
import { Grid, Container, Typography, Divider } from '@mui/material';

import { gridSpacing } from '../store/constants';
import SelectMode from '../layout/MainComponents/SelectMode';
import { PeopleAltOutlined, PersonPin } from '@mui/icons-material';
import CompanyData from '../components/CompanyData';

const PayslipMode = () => (
<>
<CompanyData />
    <Container maxWidth="xl">
        <Grid container spacing={gridSpacing} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={12} md={6}>
                <SelectMode bgcolor="#FFFFFF" text="Single Employee" paraText="Generate a single payslip as pdf by manually giving input for employee details, earnings, etc" btnColor="#0B2DAC" icon={PersonPin} url='/employee' />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectMode bgcolor="#FFFFFF" text="Multiple Employee" paraText="Generate multiple payslip as pdf by uploading employee details in excel template" btnColor="#0B2DAC" icon={PeopleAltOutlined}  url='/excel'/>
            </Grid>
        </Grid>
    </Container>
                </>
);

export default PayslipMode;

// 0B2DAC violet - 341F97 