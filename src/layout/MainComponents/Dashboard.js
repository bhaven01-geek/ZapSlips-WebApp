import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography, Divider } from '@mui/material';

// project imports
import { gridSpacing } from '../../store/constants';
import TotalPayBarChart from './TotaPayBarChart';

import ProvidentFundCard from '../DashboardCards/ProvidentFundCard'

// image imports 
import leafImg from '../../Assets/Leaf.png';
import shieldImg from '../../Assets/ShieldCheck.png';
import percentImg from '../../Assets/Percent.png';
import EmployeeCard from '../DashboardCards/EmployeeCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const PF = {
    background: "#D6E8FA",
    avatarBg: "#AFC8FF",
    color: "#0048B4",
    avatar: leafImg,
    content: 'PF'
}
const AdSalary = {
    background: "#EAFFEF",
    avatarBg: "#C2FFD2",
    color: "#00A82C",
    avatar: shieldImg,
    content: 'Advance Salary',
}
const TDS = {
    background: "#FBE8DC",
    avatarBg: "#FFD9AF",
    color: "#CA6D07",
    avatar: percentImg,
    content: "TDS Deductions"
}

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container >
            <Grid item xs={12}>
                <Typography variant='h5' sx={{ fontWeight: 600, p: 2 }}>Summary</Typography>

            </Grid>
            <Grid item xs={12} lg={12}>
                <Grid container spacing={2}>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <ProvidentFundCard cssStyle={PF} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <ProvidentFundCard cssStyle={AdSalary} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        {/* <EarningCard isLoading={isLoading} /> */}
                        <ProvidentFundCard cssStyle={TDS} />
                    </Grid>
                    {/* <Grid item lg={4} md={6} sm={6} xs={12}> */}
                    {/* <TotalOrderLineChartCard isLoading={isLoading} /> */}
                    {/* <h1>Hello World</h1> */}

                    {/* </Grid> */}
                    {/* <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                        <h1>Hello World</h1>

                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                        <h1>Hello World</h1>

                            </Grid>
                        </Grid>
                    </Grid> */}
                    {/* </Grid>
            </Grid>
            {/* <Grid item xs={12}> */}
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }} >
                <Grid container   >
                    <Grid item xs={12} md={8} lg={8} sx={{ background: '#FFFFFF', borderRadius: "10px", border: "1px solid #FCFCFC" }} >
                        <TotalPayBarChart isLoading={isLoading} />
                    </Grid>

                    <Grid item xs={12} md={4} lg={4}>
                        {/* <PopularCard isLoading={isLoading} /> */}
                        {/* <ProvidentFundCard cssStyle = {PF} /> */}
                        <EmployeeCard />


                    </Grid>
                </Grid>
            </Grid>
            {/* </Grid> */}
            {/* </Grid> */}
        </Grid >
    );
};

export default Dashboard;