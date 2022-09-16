import React, { useEffect, useContext } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { firebase } from '../firebase';

// Create Context For Auth
const DashboardContext = React.createContext();

// Export AuthContext
export function useDashboard() {
    return useContext(DashboardContext);
}


export const DashboardProvider = ({ children }) => {
    const PayYears = [];
    const { currentUser } = useAuth();
    let date = new Date();
    let nowYear = date.getFullYear();

    const storePayData = async (currYearData) => {
        if (currentUser.uid != undefined) {
            const user_uid = currentUser.uid;
            // console.log("Dasboard datata");
            const dbref = firebase.firestore().collection("users").doc(user_uid);
            const Dashbobj = {
                [`${nowYear}`]: currYearData,
            }
            dbref
                .get()
                .then((querySnapshot) => {
                    const obj = {
                        ...querySnapshot.data(),
                    }
                    storeSummary(obj, Dashbobj, dbref);
                    //if Company Details Not Filled Redirect to fill Form
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        const storeSummary = (compData, sumData, dbref) => {
            // console.log(compData);
            if (compData.Year != undefined) {

                compData.Year.map((data, index) => {
                    // console.log(Object.keys(sumData) === Object.keys(data));
                    // console.log(Object.keys(sumData));
                    if (Object.keys(sumData)[0] === Object.keys(data)[0]) {

                        // console.log("myData", Object.values(sumData));
                        // console.log("Firebase Data", Object.values(data));
                        // console.log("myData obj", sumData);
                        // console.log("firebase Obj", data);
                        // console.log("Firebase Data keys values", Object.keys(data));
                        let summary_Vals = Object.values(sumData)[0];
                        let Data_Vals = Object.values(data)[0];

                        let summObj = {
                            [`${nowYear}`]: {

                                AdvanceSalary: Data_Vals.AdvanceSalary + summary_Vals.AdvanceSalary,
                                BasicSalary: Data_Vals.BasicSalary + summary_Vals.BasicSalary,
                                EmployeeCount: Data_Vals.EmployeeCount + summary_Vals.EmployeeCount,
                                NetPay: Data_Vals.NetPay + summary_Vals.NetPay,
                                PF: Data_Vals.PF + summary_Vals.PF,
                                TDS: Data_Vals.TDS + summary_Vals.TDS,
                            }
                        }
                        compData.Year[index] = summObj;

                        dbref
                            .set({
                                Year: compData.Year,
                            }, { merge: true }).then((res) => {
                                // setMessage("Successfully Uploaded Company Details");
                                // setLoading(false);
                                // console.log("done");
                            })
                            .catch(function (error) {
                                // setError("Failed, Please Try Again!");
                                console.log(error);
                            });
                    }
                    else {
                        compData.Year.push(sumData);
                        dbref
                            .set({
                                Year: compData.Year,
                            }, { merge: true }).then((res) => {
                                // setMessage("Successfully Uploaded Company Details");
                                // setLoading(false);
                                // console.log(res);
                            })
                            .catch(function (error) {
                                // setError("Failed, Please Try Again!");
                                console.log(error);
                            });
                    }
                })
            }
            else {
                // console.log(PayYears.push(sumData));
                PayYears.push(sumData);
                dbref
                    .set({
                        Year: PayYears,
                    }, { merge: true }).then((res) => {
                        // setMessage("Successfully Uploaded Company Details");
                        // setLoading(false);
                        // console.log(res);
                    })
                    .catch(function (error) {
                        // setError("Failed, Please Try Again!");
                        console.log(error);
                    });
            }
            // PayYears.push(Dashbobj);
        }
    };

    const value = { storePayData }
    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    );
}

