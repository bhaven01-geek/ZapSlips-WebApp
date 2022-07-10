import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { firebase } from "../../firebase";

import { useNavigate } from "react-router-dom";
import { Button , Box} from '@mui/material';


const Submit = ({ EmpformData }) => {

  const navigate = useNavigate();
  const mode = "1";
  const [company_Data, setCompany_Data] = useState({});

  // Check if Logged In User
  const { currentUser } = useAuth();
  const user_uid = currentUser.uid


  const dbref = firebase.firestore().collection("users").doc(user_uid);

  //Fetch Company Data from Firebase
  const getUser = async () => {
    dbref
      .get()
      .then((querySnapshot) => {
        const obj = {
          ...querySnapshot.data(),
        }
        setCompany_Data(obj);
        return obj;
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);



  const handleTheme = (e) => {
    e.preventDefault();
    navigate('../themes',
      {
      state: {
        EmpformData,
        mode,
        company_Data
      }
    });

  }
  return (
    <>
      {<Box container >
        <Button
         sx={{
          color: '#ffffff', background: "#0B2DAC", fontWeight: 500, width: '150px', borderRadius: '5px',
          '&:hover': {
            background: "#0B2DAC",
            borderRadius: "none"
          },
          '&:focus': {
            outline: "none",
          }
        }}
          onClick={handleTheme}>Choose Theme
        </Button>
      </Box>
      }
    </>
  );
};

export default Submit;
