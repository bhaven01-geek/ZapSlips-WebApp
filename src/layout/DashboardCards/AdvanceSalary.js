// import react from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import ShieldImg from '../../Assets/ShieldCheck.png'
const AdvanceSalary = () => {

    return (
        <>
        
            <Box sx={{ maxWidth:'280px' , p: 0.5, cursor: 'pointer', display: "flex", flexDirection: 'column', wrap:'nowrap', background:"#EAFFEF" , borderRadius:'10px' , alignItems:'center' , justifyContent:"space-between" , boxShadow:'0 2px 14px 10px rgb(32 40 45 / 8%)' , '&:hover': {
                            boxShadow: "0px 2px 2px 10px rgba(0, 0, 0, 0.0197),0px 6px 5px 10px rgba(0, 0, 0, 0.0283),0px 12px 10px 10px rgba(0, 0, 0, 0.035), 0px 22px 17px 10px rgba(0, 0, 0, 0.0417),0px 41px 33px 0px rgba(0, 0, 0, 0.0503), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)",
                        }}} >

                <Avatar
                    variant="rounded"
                    sx={{
                        // ...theme.typography.commonAvatar,
                        // width: '44px',
                        // height: '44px',
                        // ...theme.typography.largeAvatar,
                       
                        borderRadius: '8px',
                        backgroundColor: "lightblue",
                        cursor:'pointer',
                        mt: 1,
                        
                    }}
                >
                    <img src={ShieldImg} alt="PF" />
                </Avatar>
                <Typography sx={{ fontSize: '2rem', fontWeight: 400, mr: 1, mt: 1, mb: 0.75 , color:"#341F97" }}>
                    PF
                </Typography> <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1, mb: 0.75 }}>
                    $500.00
                </Typography>
            </Box>
        </>
    );
}


export default AdvanceSalary;