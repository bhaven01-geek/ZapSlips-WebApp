import React, {useState} from 'react'

//Material-UI Imports
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

//Image Imports
import Google from '../../Assets/Google.png';
import Facebook from '../../Assets/Facebook.png';

import { provider, Fbprovider } from '../../firebase'
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SocialAuth = () => {
    const [error, setError] = useState("");
    const { signInGoogle, signInFacebook } = useAuth();
    const navigate = useNavigate();

    async function handleGoogleLogin(e) {
        e.preventDefault();
        try {
          await signInGoogle(provider)
          navigate("../app/dashboard" , {replace:true});
        } catch (error) {
            setError(error);
            console.log(error);
        }
      }
    
      async function handleFacebookLogin(e) {
        e.preventDefault();
        try {
          signInFacebook(Fbprovider)
        } catch (error) {
            setError(error);
        }
      }


    
    return (
        <>
        <Grid container sx = {{alignItems:"center" , justifyContent:"center"}}>

            <Grid item xs = {4} sm={4} md = {3}  >

                <Button
                    type="submit"
                    onClick={handleGoogleLogin}
                    sx={{
                        mt: 3, mb: 2, ml: 1, mr: 1,
                        backgroundColor: '#ffffff'
                    }}
                >
                    <img className="signInLogo" src={Google} alt="google" />
                    <Typography variant="p" className="social-tag">Google</Typography>
                </Button>
                </Grid>
                <Grid item xs = {4}  sm={4} md ={3} >
                <Button
                    type="submit"
                    onClick={handleFacebookLogin}
                    sx={{
                        mt: 3, mb: 2, ml: 1, mr: 1,
                        backgroundColor: '#ffffff',
                        // border: "1px solid #2A66FF",
                        // borderRadius: '5px'
                    }}
                >
                    <img className="signInLogo" src={Facebook} alt="facebook" />
                    <Typography variant="p" className="social-tag">Facebook</Typography>
                </Button>

            </Grid>

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
