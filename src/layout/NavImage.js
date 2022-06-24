import navimage from '../Assets/brainstorming.png';
import { Box } from '@mui/material'

const NavImage = () => {
            return (
                <Box sx = {{ display:'flex' , p: '5px' , alignItems:'flex-end'}}>
                <img src = {navimage} alt = "brainstorming session" />
                    </Box>
                );

}

export default NavImage;