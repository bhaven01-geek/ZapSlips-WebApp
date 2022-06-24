// import react from 'react';
import { Avatar, Box, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';


// const BoxStyle = styled(Box)(({ theme }) => ({
//     maxWidth:"280px",
//     p: 0.5, pl: 0, cursor: 'pointer', display: "flex", flexDirection: 'column', wrap: 'nowrap', background: "lightblue",
//     borderRadius: '10px', alignItems: 'flex-start', justifyContent: "space-between",
//     boxShadow: "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41px 33px rgba(0, 0, 0, 0.0503198), 0px 22px 17px rgba(0, 0, 0, 0.04), 0px 12px 10px rgba(0, 0, 0, 0.035), 0px 6px 5px rgba(0, 0, 0, 0.02), 0px 2px 2px rgba(0, 0, 0, 0.019);",
//     // [theme.breakpoints.down('sm')]:{
//     //     margin: "0 0px",
//     // }
// }));
const ProvidentFundCard = ({ cssStyle }) => {

    const { background, avatarBg, color, avatar, content } = cssStyle;
    return (
        <>

            <Box sx={{
                maxWidth: "280px",
                p: 0.5, pl: 0, cursor: 'pointer', display: "flex", flexDirection: 'column', wrap: 'nowrap', background: background,
                borderRadius: '10px', alignItems: 'flex-start', justifyContent: "space-between",
                boxShadow: "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41px 33px rgba(0, 0, 0, 0.0503198), 0px 22px 17px rgba(0, 0, 0, 0.04), 0px 12px 10px rgba(0, 0, 0, 0.035), 0px 6px 5px rgba(0, 0, 0, 0.02), 0px 2px 2px rgba(0, 0, 0, 0.019);",
            }}>
                <Box sx={{ mr: 2, pl: 4 }}>

                    <Avatar
                        sx={{
                            // ...theme.typography.commonAvatar,
                            // width: '44px',
                            // height: '44px',
                            // ...theme.typography.largeAvatar,

                            backgroundColor: avatarBg,
                            cursor: 'pointer',
                            mt: 4,
                            p: 1,
                            width: '48px',
                            height: '48px'

                        }}
                    >
                        <img src={avatar} alt="PF" />
                    </Avatar>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 400, mt: 1, mb: 0.75, color: color }}>
                        {content}
                    </Typography> <Typography sx={{ fontSize: '1rem', fontWeight: 500, mr: 1, mt: 1, mb: 4, }}>
                        $500.00
                    </Typography>
                </Box>
            </Box>
            {/* <Divider orientation='vertical'/> */}

        </>
    );
}


export default ProvidentFundCard;