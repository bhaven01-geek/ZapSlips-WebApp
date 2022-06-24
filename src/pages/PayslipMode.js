// material-ui
import { Grid, Container, Typography, Divider } from '@mui/material';

import { gridSpacing } from '../store/constants';
import SelectMode from '../layout/MainComponents/SelectMode';
import { PeopleAltOutlined, PersonPin } from '@mui/icons-material';

const PayslipMode = () => (

    <Container maxWidth="xl">
        <Grid container spacing={gridSpacing} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={12} md={6}>
                <SelectMode bgcolor="#FFFFFF" text="Single Employee" btnColor="#341F97" icon={PersonPin} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectMode bgcolor="#FFFFFF" text="Multiple Employee" btnColor="#341F97" icon={PeopleAltOutlined} />
            </Grid>
        </Grid>
    </Container>
);

export default PayslipMode;