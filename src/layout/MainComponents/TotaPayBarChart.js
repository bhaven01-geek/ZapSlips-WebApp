import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, MenuItem, TextField, Typography, Box } from '@mui/material';

// third-party
// import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
// import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from './MainCard';
// chart data
import chartData from '../chartData/total-pay-barChart';
const gridSpacing = 3;


const status = [
    {
        value: 2022,
        label: '2022'
    },
    {
        value: 2021,
        label: '2021'
    },
    {
        value: 2020,
        label: '2020'
    }
];
// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //
const CardWrapper = styled('div')(({ theme }) => ({

    overflow: 'hidden',
    position: 'relative',
    background: "#FFFFFF",
    boxShadow: "0px 2px 2px 10px rgba(0, 0, 0, 0.0197),0px 6px 5px 10px rgba(0, 0, 0, 0.0283),0px 12px 10px 10px rgba(0, 0, 0, 0.035), 0px 22px 17px 10px rgba(0, 0, 0, 0.0417),0px 41px 33px 0px rgba(0, 0, 0, 0.0503), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)",
    // [theme.breakpoints.up('lg')]: {
    //    width:'360px',
    //   },
}));
const TotalPayBarChart = ({ isLoading }) => {
    const [value, setValue] = useState('today');
    const theme = useTheme();

    // const primary = "#bdc8f0";
    // const darkLight = "#bdc8f0";
    // const grey200 = "#eeeeee";
    // const grey500 = "#9e9e9e";

    // const primary200 = theme.palette.primary[200];
    // const primaryDark = theme.palette.primary.dark;
    // const secondaryMain = theme.palette.secondary.main;
    // const secondaryLight = theme.palette.secondary.light;

    // useEffect(() => {
    //     const newChartData = {
    //         ...chartData.options,
    //         colors: [primary200, primaryDark, secondaryMain, secondaryLight],
    //         xaxis: {
    //             labels: {
    //                 style: {
    //                     colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
    //                 }
    //             }
    //         },
    //         yaxis: {
    //             labels: {
    //                 style: {
    //                     colors: [primary]
    //                 }
    //             }
    //         },
    //         grid: {
    //             borderColor: grey200
    //         },
    //         tooltip: {
    //             theme: 'light'
    //         },
    //         legend: {
    //             labels: {
    //                 colors: grey500
    //             }
    //         }
    //     };

    //     // do not load chart when loading
    //     if (!isLoading) {
    //         ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
    //     }
    // }, [navType, primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, grey200, isLoading, grey500]);

    return (
        <>
            {/* {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : ( */}
            {/* <MainCard > */}
            {/* <CardWrapper> */}
            <Box sx={{ p: 3, pb: 1 }} dir="ltr">

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item>
                                        <Typography variant="subtitle2">Total Salary Paid</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h4">$2,324.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="Filter By Time "
                                    select
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                >
                                    {status.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Chart {...chartData} />
                    </Grid>
                </Grid>
            </Box>
            {/* </CardWrapper> */}
            {/* </MainCard> */}
            {/* )} */}
        </>
    );
};

TotalPayBarChart.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalPayBarChart;