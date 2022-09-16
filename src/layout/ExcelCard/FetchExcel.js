import React, { useState, useEffect } from "react";
import { ExcelRenderer } from "react-excel-renderer";
import { firebase } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

// Material UI
import { Button, Typography } from "@mui/material";


const FetchExcel = () => {

    const navigate = useNavigate();
    const [fileName, setFileName] = useState(null);
    const [Excel, setExcel] = useState("");
    const [company_Data, setCompany_Data] = useState([]);
    const [Excelerror, setExcelError] = useState(null);

    // check if user is Logged or Not
    const { currentUser } = useAuth();
    const user_uid = currentUser
        ? currentUser.uid
        : console.log("Not Logged in ");


    const dbref = firebase.firestore().collection(process.env.APP_DB_NAME).doc(user_uid);

    // func to get Document Data of Logged In User from UID
    const getUser = async () => {
        dbref.get()
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

    const fileHandler = (event) => {

        let fileObj = event.target.files[0];
        setFileName(event.target.files[0].name);

        if (fileObj) {

            //just pass the fileObj as parameter
            //Retrives Data from Excel

            ExcelRenderer(fileObj, (err, resp) => {
                if (err) {
                    console.log(err);
                }

                //checks if Excel is Empty or Not
                if (resp.length === 0 || resp.cols.length === 0 || resp.rows[1].length === 0) {
                    setExcelError("Empty Excel File !");
                }

                else {
                    setExcel(resp);
                }
            });
        }
    };

    const handleExcelSubmit = (e) => {
        e.preventDefault();

        //checks if Excel is Empty or Not On Direct Submit Click
        if (Excel.length === 0 || Excel.cols.length === 0 || Excel.rows[1].length === 0) {
            setExcelError("Empty Excel File !");
        }
        else {
            const mode = '2'
            navigate('../themes',
                {
                    state: {
                        company_Data,
                        Excel,
                        mode
                    }
                });
        }
    };

    return (
        <>
            {
                <>
                    {Excelerror ?
                        <Alert severity="error">{Excelerror}</Alert>
                        : ""
                    }
                    <Button
                        // border={false}
                        component="label"
                        // variant="outlined"

                        type="submit"
                        sx={{ color: '#FFFFFF', background: "#0B2DAC", fontWeight: 600, width: '140px', borderRadius: '6px',
                        '&:hover':{
                            background:"#0B2DAC",
                            border:"none"
                        },
                        '&:focus':{
                            outline:"none",
                        }
                        }}
                    >
                        Upload
                        <input
                            className="upload-box"
                            type="file"
                            accept=".xlsx ,xlx , .csv"
                            onChange={fileHandler}
                            hidden
                        />
                    </Button>
                    <Typography variant="body2" style={{ marginLeft: '6px', display: 'inline-block' }}  color='textSecondary'>{fileName ? `    ${fileName}` : " "}</Typography>
                    {Excel != "" ?

                        <Button
                            // border={false}
                            type="submit"
                            // variant="outlined"
                            onClick={handleExcelSubmit}
                            sx={{
                                color: '#FFFFFF', background: "#D43F3F", fontWeight: 600, width: '140px', borderRadius: '6px',
                                '&:hover':{
                                    background:"#D43F3F",
                                    border:"none"
                                },
                                '&:focus':{
                                    outline:"none",
                                } ,  
                            }}
                        >
                            Generate
                        </Button> : <></>
                    }
                </>
            }
        </>
    );
};

export default FetchExcel;
