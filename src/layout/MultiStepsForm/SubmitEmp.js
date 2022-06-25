import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { firebase } from "../../firebase";

import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';


const Submit = ({ EmpformData }) => {

  const history = useHistory();
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
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);



  const handleTheme = (e) => {
    e.preventDefault();
    history.replace({
      pathname: './choosetheme',
      state: {
        EmpformData,
        mode,
        company_Data
      }
    });

  }
  return (
    <>
      {<div>
        <Button variant="contained"
          color="secondary"
          onClick={handleTheme}>Choose Theme
        </Button>
      </div>
      }
    </>
  );
};

export default Submit;
