import { Box, Typography } from '@mui/material'
import React from 'react'

export const EmployeeCard = () => {
    return (
        <>
                {/* <Typography variant='h5' sx={{ fontWeight: 600, p: 2 , ml:1 }}>Employees </Typography> */}
            <Box sx={{
                maxWidth: '240px', p: 0.5, pl: 0, ml:2, cursor: 'pointer', display: "flex", flexDirection: 'column', wrap: 'nowrap', background: "#FFFFFF",
                borderRadius: '10px', alignItems: 'flex-start', justifyContent: "space-between",
                boxShadow: "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41px 33px rgba(0, 0, 0, 0.0503198), 0px 22px 17px rgba(0, 0, 0, 0.04), 0px 12px 10px rgba(0, 0, 0, 0.035), 0px 6px 5px rgba(0, 0, 0, 0.02), 0px 2px 2px rgba(0, 0, 0, 0.019);",
            }}>
                <Box container  sx={{ p: 2 }}>
                    <Typography sx = {{fontSize: "20px", fontWeight: 600, mt: 1, mb:2 , color:"#5837AB" }}>No of Employee(s)</Typography>
                    <Typography sx = {{my:2}}>226</Typography>
                </Box>
            </Box>
        </>
    )
}

export default EmployeeCard;