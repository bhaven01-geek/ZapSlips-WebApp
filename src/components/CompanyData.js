import React, { useState , useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

import { firebase } from "../firebase";

const CompanyData = () => {

const [loading, setloading] = useState(false)
    // const [Data, setData] = useState({});
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    //Checks if user is Logged in Or Not
    const user_uid = currentUser ? currentUser.uid : console.log("Not Logged in ");

    const dbref = firebase.firestore().collection(process.env.APP_DB_NAME).doc(user_uid);

    //Get Company Data from firebase from Logged in User UID
    const getUser = async () => {

        dbref
            .get()
            .then((querySnapshot) => {

                let docfound = false;
                const obj = {
                    ...querySnapshot.data(),
                }
                if (Object.keys(obj).length !== 0) {
                    docfound = true;
                    // setData(obj);
                    setloading(true);
                }

                //if Company Details Not Filled Redirect to fill Form
                if (!docfound) {
                    // setloading(true);
                   navigate('../companydetails')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getUser();
    }, []);


    return (
        <>

        </>
    )
}

export default CompanyData
