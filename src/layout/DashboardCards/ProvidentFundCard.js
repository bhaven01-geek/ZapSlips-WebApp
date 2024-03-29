// import react from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import leafImg from '../../Assets/Leaf.png';


const BoxStyle = styled(Box)(({ theme }) => ({
    width: "280px",
    p: 0.5, pl: 0, cursor: 'pointer', display: "flex", flexDirection: 'column', wrap: 'nowrap', background: "lightblue",
    borderRadius: '10px', alignItems: 'flex-start', justifyContent: "space-between",
    boxShadow: "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41px 33px rgba(0, 0, 0, 0.0503198), 0px 22px 17px rgba(0, 0, 0, 0.04), 0px 12px 10px rgba(0, 0, 0, 0.035), 0px 6px 5px rgba(0, 0, 0, 0.02), 0px 2px 2px rgba(0, 0, 0, 0.019);",
    [theme.breakpoints.down('sm')]: {
        width: "90%",
        //   margin:"0 20px",
    },
    [theme.breakpoints.down('md')]: {
        //   width:"100%",
        margin: "0 auto"
    }
}));

const cssStyle = {
    background: "#D6E8FA",
    avatarBg: "#AFC8FF",
    color: "#0048B4",
    // avatar: leafImg,
    content: 'PF'
}

const ProvidentFundCard = ({ isLoading, CardsData }) => {

    // PF_val = 0;
    // if(JSON.stringify(CardsData) != '{}'){

        const vals = Object.values(CardsData);
        let PF_val = vals[0] ? vals[0].PF : 0;
        PF_val = PF_val.toLocaleString();
    // }


    return (
        <>
            {isLoading ? <p>Loading...</p> :

                <BoxStyle sx={{ background: cssStyle.background, }}>
                    <Box sx={{ mr: 2, pl: 4 }}>

                        <Avatar
                            sx={{
                                // ...theme.typography.commonAvatar,
                                // width: '44px',
                                // height: '44px',
                                // ...theme.typography.largeAvatar,
                                backgroundColor:cssStyle.avatarBg,
                                cursor: 'pointer',
                                mt: 4,
                                p: 1,
                                width: '48px',
                                height: '48px'

                            }}
                        >
                            <img src={leafImg} alt="PF" />
                        </Avatar>
                        <Typography sx={{ fontSize: '1.2rem', fontWeight: 400, mt: 1, mb: 0.75, color: cssStyle.color }}>
                            {cssStyle.content}
                        </Typography> <Typography sx={{ fontSize: '1rem', fontWeight: 600, mr: 1, mt: 1, mb: 4, }}>
                            {`$${PF_val}`}
                        </Typography>
                    </Box>
                </BoxStyle>
}
        </>
    );
}


export default ProvidentFundCard;