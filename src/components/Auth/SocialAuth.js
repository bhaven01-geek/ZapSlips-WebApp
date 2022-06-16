import React from 'react'

//Material-UI Imports
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

//Image Imports
import Google from '../../Assets/Google.png';
import Facebook from '../../Assets/Facebook.png';

const SocialAuth = () => {
    return (
        <>
            <Grid item xs sm={6}>

                <Button
                    type="submit"
                    // onClick={handleGoogleLogin}
                    sx={{
                        mt: 3, mb: 2, ml: 1, mr: 1,
                        backgroundColor: '#ffffff'
                    }}
                >
                    <img className="signInLogo" src={Google} alt="google" />
                    <Typography variant="p" className="social-tag">Google</Typography>
                </Button>

                <Button
                    type="submit"
                    // onClick={handleFacebookLogin}
                    sx={{
                        mt: 3, mb: 2, ml: 1, mr: 1,
                        backgroundColor: '#ffffff',
                        border: "1px solid #2A66FF",
                        borderRadius: '5px'
                    }}
                >
                    <img className="signInLogo" src={Facebook} alt="facebook" />
                    <Typography variant="p" className="social-tag">Facebook</Typography>
                </Button>

            </Grid>

            <Divider sx={{ my: 2 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    OR CONTINUE WITH
                </Typography>
            </Divider>
        </>
    )
}

export default SocialAuth
