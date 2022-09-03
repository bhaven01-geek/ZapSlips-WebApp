import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
// import Iconify from './Iconify';

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 55,
  position: 'relative',
  textTransform: 'capitalize',
  // color: theme.palette.text.secondary,
  color: "#000000",
  fontSize: '0.9rem',
  fontWeight: 500,
  fontFamily: 'Rubik',
  borderRadius: theme.shape.borderRadius,
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});


// NavItem.propTypes = {
//   item: PropTypes.object,
//   active: PropTypes.func,
// };

function NavItem({ item, active }) {
  const theme = useTheme();
  const isActiveRoot = active(item.path);
  // const isActiveRoot = currPath === item.path ? true : false

  const { title, path, icon, children } = item;

  // const [open, setOpen] = useState(isActiveRoot);

  // const handleOpen = () => {
  //   setOpen((prev) => !prev);
  // };

  const activeRootStyle = {
    color: 'primary.main',
    color: '#0B2DAC',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  };

  // const activeSubStyle = {
  //   color: 'text.primary',
  //   fontWeight: 'fontWeightMedium',
  // };

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
        mt: 1,
        mb: 1,
      }}
    >
      {/* <ListItemIconStyle>icon</ListItemIconStyle> */}
      <ListItemIcon sx={{
        width: 22,
        height: 22,
        color: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>{item.icon}</ListItemIcon>
      <ListItemText disableTypography primary={title} />
    </ListItemStyle>
  );
}

// NavSection.propTypes = {
//   navConfig: PropTypes.array,
// };

export default function NavSection({ navConfig }) {
  const { pathname } = useLocation();

  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);
  const match1 = (path) => {console.log(path)};
  { console.log(match, pathname) }
  return (
    <Box >
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  );
}