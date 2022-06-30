import React from 'react'
import { useNavigate } from "react-router-dom";
// Material UI Imports
import { Box, Grid, Card, CardContent, Button, CardActions, Typography } from '@mui/material';
import { styled, } from '@mui/material/styles';

import excelFile from '../../Assets/excel-file-3-512.png';
import uploadFile from '../../Assets/file18.png';

// import { CloudDownloadOutlinedIcon } from '@mui/icons-material';

const CardWrapper = styled('div')(({ theme }) => ({
    width: "100%",
    // minHeight:"500px",
    // overflow: 'hidden',
    // position: 'relative',
    // background: "#FFFFFF",
    // boxShadow: "0px 2px 2px 10px rgba(0, 0, 0, 0.0197),0px 6px 5px 10px rgba(0, 0, 0, 0.0283),0px 12px 10px 10px rgba(0, 0, 0, 0.035), 0px 22px 17px 10px rgba(0, 0, 0, 0.0417),0px 41px 33px 0px rgba(0, 0, 0, 0.0503), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)",
    // [theme.breakpoints.up('lg')]: {
    //     width: '500px',
    // },
    
}));

const ExcelCard = () => {

    let navigate = useNavigate();
    
    return (
        <>
            <CardWrapper>
                <Grid container justifyContent="center" spacing={5} sx={{ px: 4 }}>
                    <Grid item xs={12} md={8} lg={6} sm={12} sx = {{alignItems:"center"}} >
                        <Card sx={{background : "" , boxShadow: "0px 2px 2px 4px rgba(0, 0, 0, 0.0197),0px 6px 5px 4px rgba(0, 0, 0, 0.0283),0px 12px 5px 4px rgba(0, 0, 0, 0.035), 0px 10px 10px 4px rgba(0, 0, 0, 0.0417),0px 41px 33px 0px rgba(0, 0, 0, 0.0503), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)",}}>
                            <CardContent>
                                <Typography variant="h5"> Don't Have Our Spreadsheet Template? </Typography>
                                <Box
                                    component="img"
                                    src={excelFile}
                                    sx={{ width: "80px", height: "80px" }}
                                    alt="ExcelFile"
                                />
                                <Typography variant="body1" color='textPrimary' sx = {{mt:2}}>
                                    If you don't have our spread sheet template file, click download button below.
                                </Typography>
                            </CardContent>

                            <CardActions sx ={{mt:1 }}>

                                <Button
                                    type="submit"
                                    variant="outlined"
                                    sx={{ color: '#FFFFFF', background: "#0B2DAC", fontWeight: 600, width: '140px', borderRadius: '6px','&:hover':{
                                        background:"#0B2DAC",
                                    } }}
                                >
                                    Download
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item xs={12} md={8} lg={6} sm={12}>
                        <Card sx={{  boxShadow: "0px 2px 2px 4px rgba(0, 0, 0, 0.0197),0px 6px 5px 4px rgba(0, 0, 0, 0.0283),0px 12px 5px 4px rgba(0, 0, 0, 0.035), 0px 10px 10px 4px rgba(0, 0, 0, 0.0417),0px 41px 33px 0px rgba(0, 0, 0, 0.0503), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)",}} >
                            <CardContent>
                                <Typography variant="h5">
                                    Upload The SpreadSheet Here!
                                </Typography>
                                <Box
                                    component="img"
                                    src={uploadFile}
                                    sx={{ width: "80px", height: "80px", }}
                                    alt="ExcelFile"
                                />
                                <Typography variant="body1" color='textPrimary' sx = {{mt:2}}>
                                    Done filling the template. Upload Here to get instant payslips.oad Here to get instant payslips.
                                </Typography>
                            </CardContent>

                            <CardActions sx = {{mt:1 }} >
                                <Button
                                    // border={false}
                                    variant="outlined"
                                    type="submit"
                                    sx={{ color: '#FFFFFF', background: "#0B2DAC", fontWeight: 600, width: '140px', borderRadius: '6px' }}
                                >
                                    Upload
                                </Button> <Button
                                    // border={false}
                                    type="submit"
                                    // variant="outlined"
                                    
                                    sx={{ color: '#FFFFFF', background: "#D43F3F", fontWeight: 600, width: '140px', borderRadius: '6px','& :hover':{
                                        background:"#D43F3F",} }}
                                >
                                    Generate
                                </Button>
                            </CardActions>

                        </Card>
                    </Grid>
                </Grid>
            </CardWrapper>
        </>
    )
}

export default ExcelCard


// #F8A253transform: rotate(-2deg) translateY(-10px);
// #D96161
// #C12AA0
// 1976D2