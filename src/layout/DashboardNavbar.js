import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
// components
// import Iconify from '../../components/Iconify';

import { MenuSharp } from '@mui/icons-material';
import AccountPopover from './MainComponents/AccountPopover';


const DRAWER_WIDTH = 260;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  background: "#162458",
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));



DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({ onOpenSidebar }) {
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: '#FFFFFF', display: { lg: 'none' } }}>
          {/* <Iconify icon="eva:menu-2-fill" /> */}
          <MenuSharp />
        </IconButton>
        <Typography variant='h6'>Welcome</Typography>

        {/* <Searchbar /> */}
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          {/* <Typography variant = 'h5'>Taylor</Typography> */}
          {/* <Box
            component="img"
            src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
            sx={{ width: '50px', height: '50px' }}
          /> */}
        <AccountPopover />

        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}