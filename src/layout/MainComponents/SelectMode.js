import PropTypes from 'prop-types';
import '../../Assets/scss/_theme_vars.scss'
// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, Typography, Stack, Divider } from '@mui/material';
import { PersonPin } from '@mui/icons-material';
// project imports
import MainCard from './MainCard'


// ===========================|| - MODE CARD ||=========================== //

const SelectMode = (props) => {

    const CardWrapper = styled(MainCard)(({ theme }) => ({

        overflow: 'hidden',
        position: 'relative',
        title: "hello",
        background: props.bgcolor,
        boxShadow: "0px 2px 2px 10px rgba(0, 0, 0, 0.0197),0px 6px 5px 10px rgba(0, 0, 0, 0.0283),0px 12px 10px 10px rgba(0, 0, 0, 0.035), 0px 22px 17px 10px rgba(0, 0, 0, 0.0417),0px 41px 33px 0px rgba(0, 0, 0, 0.0503), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)",
        [theme.breakpoints.up('lg')]: {
            width: '360px',
        },
    }));

    const theme = useTheme();
    return (
        <>

            <CardWrapper border={false} sm sx={{ width: '300px', borderRadius: '10px' }}>
                <Box sx={{ p: 0.5 }}>
                    <Stack spacing={3} justifyContent="space-between" alignItems="center" sx={{ margin: '20px' }} >
                        <Typography sx={{ fontSize: '2rem', fontWeight: 500, color: props.btnColor, textAlign: "center" }}>
                            {props.text}
                        </Typography>
                        <Avatar
                            sx={{
                                cursor: 'pointer',
                                backgroundColor: "transparent",
                                color: props.btnColor,
                                width: '70px',
                                height: '60px'
                            }}
                        >
                            <props.icon sx={{
                                width: '70px',
                                height: '60px'
                            }} />
                        </Avatar>
                        <Typography
                            sx={{
                                fontSize: '1rem',
                                // fontWeight: 400,
                                textAlign: 'center',
                            }}
                        >
                            Generate a single payslip as pdf by manually giving input for employee details, earnings, etc
                        </Typography>
                        <Button
                            type="submit"
                            variant="outlined"
                            sx={{ border: '1px solid #AFC8FF', color: '#FFFFFF', background: props.btnColor, fontWeight: 600, width: '200px', borderRadius: '10px' }}
                        >
                            SELECT
                        </Button>
                    </Stack>
                </Box>
            </CardWrapper>

        </>
    );
};

SelectMode.propTypes = {
    isLoading: PropTypes.bool
};

export default SelectMode;
