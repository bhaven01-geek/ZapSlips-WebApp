// component
// import Iconify from '../../components/Iconify';

import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import ReceiptOutlined from '@mui/icons-material/ReceiptOutlined';
// ----------------------------------------------------------------------
const icons = { GridViewRoundedIcon , ReceiptOutlined , FaceOutlinedIcon , HailOutlinedIcon, LogoutOutlinedIcon };


// const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/app/dashboard',
    icon: <GridViewRoundedIcon />,
  },
  {
    title: 'Payslips',
    path: '/app/payslips',
    icon: <ReceiptOutlined />,
  },
  {
    title: 'Company Details',
    path: '/',
    icon: <HailOutlinedIcon />,
  },
  {
    title: 'Update Profile',
    path: '/',
    icon: <FaceOutlinedIcon />,
  },
  {
    title: 'Log Out',
    path: '/',
    icon: <LogoutOutlinedIcon />,
  },
];

export default navConfig;