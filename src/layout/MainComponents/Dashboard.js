import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography, Divider , Skeleton} from '@mui/material';
import { styled } from '@mui/material/styles';
// project imports
import { gridSpacing } from '../../store/constants';
import TotalPayBarChart from './TotaPayBarChart';

import ProvidentFundCard from '../DashboardCards/ProvidentFundCard'

// image imports 
import leafImg from '../../Assets/Leaf.png';
import shieldImg from '../../Assets/ShieldCheck.png';
import percentImg from '../../Assets/Percent.png';
import EmployeeCard from '../DashboardCards/EmployeeCard';
import { useAuth } from '../../contexts/AuthContext';
import { firebase } from '../../firebase';
import AdvanceSalary from '../DashboardCards/AdvanceSalary';
import TaxDeductions from '../DashboardCards/TaxDeductions';
// ==============================|| DEFAULT DASHBOARD ||============================== //



const GridContainerStyle = styled(Grid)(({ theme }) => ({

}));

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [DasboardData, setDasboardData] = useState({});
    const { currentUser } = useAuth();
    const user_id = currentUser.uid;
    const dbref = firebase.firestore().collection(process.env.APP_DB_NAME).doc(user_id);
    let status = [];
    let GraphtObjsArray = [];
    const [filterYear, setfilterYear] = useState(0);
    const [CardsData, setCardsData] = useState({});
    // func to get Document Data of Logged In User from UID
    const getDashboardData = async () => {
        dbref.get()
            .then((querySnapshot) => {
                const obj = {
                    ...querySnapshot.data(),
                }

                // console.log(obj);
                // console.log(DasboardData);
                if (obj.Year != undefined) {
                    setDasboardData(obj.Year);

                    obj.Year.map((data, index) => {
                        let menuItemObj = {};
                        menuItemObj.label = Object.keys(data);
                        menuItemObj.value = index;
                        status.push(menuItemObj);
                        GraphtObjsArray.push(data);

                    })
                    setCardsData(GraphtObjsArray[filterYear]);
                }
                setLoading(false);
                return obj;
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(() => {
        getDashboardData();
    }, []);



    return (
        <>
            {
                    <Grid container >
                        <Grid item xs={12}>
                            <Typography variant='h5' sx={{ fontWeight: 600, p: 2 }}>Summary</Typography>

                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <GridContainerStyle container spacing={2} >
                                <Grid item lg={4} md={4} sm={6} xs={12} >
                                {isLoading ? <Skeleton variant="rectangular" width="280px" height="240px" /> : <ProvidentFundCard isLoading={isLoading} CardsData={CardsData} />}
                                </Grid>
                                <Grid item lg={4} md={4} sm={6} xs={12}>
                                {isLoading ? <Skeleton variant="rectangular" width="280px" height="240px" /> : <AdvanceSalary isLoading={isLoading} CardsData={CardsData} />}
                                </Grid>
                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    {/* <EarningCard isLoading={isLoading} /> */}
                                    {isLoading ?<Skeleton variant="rectangular" width="280px" height="240px" /> :  <TaxDeductions isLoading={isLoading} CardsData={CardsData} /> }
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
                            </GridContainerStyle>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 4 }}>
                            <Grid container sx={{ mx: 1 }}>
                                <Grid item xs={12} md={8} lg={8} sx={{ background: '#FFFFFF', borderRadius: "10px", border: "1px solid #FCFCFC" }} >
                                    <TotalPayBarChart isLoading={isLoading} DasboardData={DasboardData} />
                                </Grid>

                                <Grid item xs={12} md={4} lg={4}>
                                    {/* <PopularCard isLoading={isLoading} /> */}
                                    {/* <ProvidentFundCard cssStyle = {PF} /> */}
                                    {isLoading ?<Skeleton variant="rectangular" width="200px" height="100px" /> :<EmployeeCard isLoading={isLoading} CardsData={CardsData} /> }


                                </Grid>
                            </Grid>
                        </Grid>
                        {/* </Grid> */}
                        {/* </Grid> */}
                    </Grid >
            }
        </>
    );
};

export default Dashboard;