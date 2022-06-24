import React from 'react'

// Material UI Imports
import { Box, Grid, Card, CardContent, Button, CardActions, Typography } from '@mui/material';
import { styled, } from '@mui/material/styles';

import uploadFile from '../../Assets/excel-table.png';
import excelFile from '../../Assets/excel_logo_icon.png';

// import { CloudDownloadOutlinedIcon } from '@mui/icons-material';

const CardWrapper = styled('div')(({ theme }) => ({
    width: "100%",
    // overflow: 'hidden',
    // position: 'relative',
    // background: "#FFFFFF",
    // boxShadow: "0px 2px 2px 10px rgba(0, 0, 0, 0.0197),0px 6px 5px 10px rgba(0, 0, 0, 0.0283),0px 12px 10px 10px rgba(0, 0, 0, 0.035), 0px 22px 17px 10px rgba(0, 0, 0, 0.0417),0px 41px 33px 0px rgba(0, 0, 0, 0.0503), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)",
    // [theme.breakpoints.up('lg')]: {
    //     width: '500px',
    // },
}));




const ExcelCard = () => {
    return (
        <>
            <CardWrapper>
                <Grid container justifyContent="center" spacing={2} sx={{ px: 2 }}>
                    <Grid item xs={12} md={10} lg={8} sm={12} >
                        <Card sx={{ boxShadow: "0px 2px 2px 5px rgba(0, 0, 0, 0.0197),0px 6px 5px 5px rgba(0, 0, 0, 0.0283),0px 12px 10px 5px rgba(0, 0, 0, 0.035), 0px 22px 17px 5px rgba(0, 0, 0, 0.0417),0px 41px 33px 0px rgba(0, 0, 0, 0.0503), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)" }}>
                            <CardContent>
                                <Typography variant="h5"> Don't Have Our Spreadsheet Template? </Typography>
                                <Box
                                    component="img"
                                    src={excelFile}
                                    sx={{ width: "80px", height: "80px", }}
                                    alt="ExcelFile"
                                />
                                <Typography variant="body1" color='textPrimary'>
                                    If you don't have our spread sheet template file, click download button below.
                                </Typography>
                            </CardContent>

                            <CardActions>

                                <Button
                                    type="submit"
                                    variant="outlined"
                                    sx={{ color: '#FFFFFF', background: "#0B2DAC", fontWeight: 600, width: '150px', borderRadius: '5px' }}
                                >
                                    Download
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item xs={12} md={10} lg={8} sm={12}>
                        <Card sx={{ boxShadow: "0px 2px 2px 5px rgba(0, 0, 0, 0.0197),0px 6px 5px 5px rgba(0, 0, 0, 0.0283),0px 12px 10px 5px rgba(0, 0, 0, 0.035), 0px 22px 17px 5px rgba(0, 0, 0, 0.0417),0px 41px 33px 0px rgba(0, 0, 0, 0.0503), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)" }} >
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
                                <Typography variant="body1" color='textPrimary'>
                                    Done filling the template. Upload Here to get instant payslips.
                                </Typography>
                            </CardContent>

                            <CardActions >
                                <Button
                                    // border={false}
                                    type="submit"
                                    sx={{ color: '#FFFFFF', background: "#0B2DAC", fontWeight: 600, width: '150px', borderRadius: '5px' }}
                                >
                                    Upload
                                </Button> <Button
                                    // border={false}
                                    type="submit"
                                    sx={{ color: '#FFFFFF', background: "#C12AA0", fontWeight: 600, width: '150px', borderRadius: '5px' }}
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