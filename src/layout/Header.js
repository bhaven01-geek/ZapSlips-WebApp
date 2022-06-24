import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, Typography, Chip, Grid } from '@mui/material';

// assets
// import { IconMenu2 } from '@tabler/icons';
import { MenuSharp } from '@mui/icons-material';


// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
    const theme = useTheme();

    return (
        <>
            {/* logo & toggler button */}
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    {/* <ButtonBase disableRipple component={Link} to={config.defaultPath}> */}
                    <ButtonBase disableRipple >
                        <Typography variant='h5' sx={{ color: '#FFFFFF' }}>ZapSlips</Typography>
                    </ButtonBase>
                </Box>
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            // background: theme.palette.secondary.light,
                            color: '#1565C0',
                            // color: theme.palette.secondary.dark,
                            backgroundColor: 'white',
                            '&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light
                            }
                        }}
                        onClick={handleLeftDrawerToggle}
                        color="inherit"
                    >
                        {/* <IconMenu2 stroke={1.5} size="1.3rem" /> */}

                        <MenuSharp />
                    </Avatar>
                </ButtonBase>
            </Box>


            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />

            <Chip
                sx={{
                    height: '48px',
                    alignItems: 'center',
                    borderRadius: '27px',
                    transition: 'all .2s ease-in-out',
                    borderColor: '#e3f2fd',
                    backgroundColor: '#e3f2fd',
                    '& .MuiChip-label': {
                        lineHeight: 0
                    }
                }}
                icon={
                    <Avatar
                        src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                        sx={{
                            // ...theme.typography.mediumAvatar,
                            width: '34px',
                            height: '34px',
                            fontSize: '1.2rem',
                            margin: '0 auto',
                            cursor: 'pointer'
                        }}

                        color="inherit"
                    />
                }
                label={<Typography variant='body1'>Zapone</Typography>}
                variant="outlined"

                color="primary"
            />
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;