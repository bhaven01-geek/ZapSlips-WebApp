import { useRef, useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// @mui
// import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, MenuItem, Avatar, IconButton } from '@mui/material';
// components
import MenuPopover from './MenuPopOver';
// mocks_
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
// ----------------------------------------------------------------------

export default function AccountPopover() {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(null);
  const { currentUser } = useAuth();
  const navigate =  useNavigate();
  const email = currentUser.email;
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  
  const handleClose = () => {
    setOpen(null);
  };
  const handleLogout = () => {
    navigate('../app/logout' , {replace:true});
  };

  return (
    <>
      <IconButton
        ref={anchorRef}

        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              borderColor:"none",
              outline:"none",
            },
          }),
        }}
      >
        <Avatar src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="photoURL"/>
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {/* <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack> */}

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}