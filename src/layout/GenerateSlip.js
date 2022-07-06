import React, { useState, useEffect } from "react";
import DocCreator from "./DocumentCreater";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import JSZip from "jszip";
import { useLocation } from "react-router-dom";

// Material UI
import {
  Box,
  Button,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";

// Components and templates
import { earnings, employeeDetails, deductions } from "./utils/DataFields";
import { GetCols } from "./ExcelData";

// GenerateSlip Component
function GenerateSlip() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [createDocProgress, setCreateDocProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("");
  const location = useLocation();
  const props = location.state;

  // To Generate Single Slip
  function generateOneSlip(slipInfo) {
    setLoading(true);
    const employeeData = slipInfo.data.EmpformData;
    // THEME
    const theme = slipInfo.yourTheme;

    // company details
    const companyDetails = slipInfo.companyDetails;

    // earnings
    earnings[0].value = employeeData.BasicSalary;
    earnings[1].value = employeeData.HRA;
    earnings[2].value = employeeData.Reimbursements;
    earnings[3].value = employeeData.Bonus;
    earnings[4].value = employeeData.LeaveTravelAllowance;
    earnings[5].value = employeeData.Commission;
    earnings[6].value = employeeData.SpecialAllowance;

    // deductions
    deductions[0].value = employeeData.ProvidentFund;
    deductions[1].value = employeeData.AdvanceSalary;
    deductions[2].value = employeeData.TDS;

    // employee details
    employeeDetails[0].value = employeeData.EmployeeName;
    employeeDetails[1].value = employeeData.Address;
    employeeDetails[2].value = employeeData.Email;
    employeeDetails[3].value = employeeData.Contact;
    employeeDetails[4].value = employeeData.Designation;
    employeeDetails[5].value = employeeData.Department;
    employeeDetails[6].value = employeeData.EmployeeID;
    employeeDetails[7].value = employeeData.WorkingHours;
    employeeDetails[8].value = employeeData.Leaves;
    employeeDetails[9].value = employeeData.Payrateperhour;
    employeeDetails[10].value = employeeData.PAN.toUpperCase();
    employeeDetails[11].value = employeeData.Currency;

    const currency = employeeDetails[11].value;

    // removed currency from employee details
    const filteredEmployeeDetails = employeeDetails.filter(
      (detail) => detail.title !== "Currency"
    );

    const values = {
      ...theme,
      deductions,
      companyDetails,
      earnings,
      employeeDetails: filteredEmployeeDetails,
      currency,
    };

    // Create PDF BLOB with data
    let blobPdf = pdf(
      DocCreator({
        ...values,
      })
    );
    blobPdf.updateContainer(
      DocCreator({
        ...values,
      })
    );
    const result = blobPdf.toBlob();

    // save blob as pdf
    result.then((r) => {
      saveAs(
        r,
        `ID-${employeeDetails[6].value}-${employeeDetails[0].value}-ZapSlip.pdf`
      );
      // FILE NAME -> ID-{Employee id}-{Employee name}-ZapSlip.pdf
    });
    setLoading(false);
  }

  function generateExcelSlips(excelData) {
    setLoading(true);
    setProgress(0);
    setCreateDocProgress(0);
    setLoadingMessage("Accessing data from spreadsheet ...");

    // Start after 1 second so that loader will get mounted first
    setTimeout(() => {
      let promiseARR = []; // promises of blobs of PDF documents
      const employees = GetCols(excelData.data.Excel);
      const totalEmployees = employees.length;
      const theme = excelData.yourTheme; // THEME
      const companyDetails = excelData.companyDetails; // company details

      let timer = 0; // initialize timer
      let timerINCR = 500; // timer increment
      setLoadingMessage("Creating payslips from data ...");

      employees.forEach((employee, indx) => {
        
        // increment timer on each iteration
        timer = timer + timerINCR;

        const earnings = employee.earnings;
        const unFilteredEmployeeDetails = employee.employeeDetails;
        // Removing Currency From Employee Details
        const employeeDetails = unFilteredEmployeeDetails.filter(
          (employeeDetail) => employeeDetail.title !== "Currency"
        );
        const currency = unFilteredEmployeeDetails[11].value;
        const deductions = employee.deductions;
        
        // Will be passed to document creator
        const values = {
          ...theme,
          deductions,
          companyDetails,
          earnings,
          employeeDetails,
          currency,
        };

        // set timer
        setTimeout(() => {

          setCreateDocProgress(
            (prevValue) => prevValue + (1 / totalEmployees) * 100
          );

          // create pdf blob promise
          let blobPdf = pdf(
            DocCreator({
              ...values,
            })
          );
          blobPdf.updateContainer(
            DocCreator({
              ...values,
            })
          );
          const result = blobPdf.toBlob();

          // Push blob promise in promise Array
          promiseARR.push(result);
          
          // If this is the last promise
          if (indx === employees.length - 1) {
            makeBlobArrayFromPromises(promiseARR, employees, totalEmployees);
          }
        }, timer);

      });

    }, 1000);

  }

  // to make PDF blob array from promises
  function makeBlobArrayFromPromises(promiseARR, employees, totalEmployees) {
    let timer = 0; // timer
    let timerIncr = 100; // timer increment
    const blobsVAR = []; // blob array

    setLoadingMessage("Zipping your payslips ...");

    promiseARR.map((promiseOfBlob, index) => {
      promiseOfBlob.then((payslipPDF) => {
        // if promise fullfilled increase timer
        timer += timerIncr;
        setTimeout(() => {

          setProgress((prevValue) => {
            return prevValue + (1 / totalEmployees) * 100;
          });

          // added blob to array
          blobsVAR.push([
            payslipPDF,
            employees[index].employeeDetails[0].value,
            employees[index].employeeDetails[6].value,
          ]);

          // IF last blob -> download as zip
          if (index === promiseARR.length - 1) {
            setLoading(false);
            downloadAsZip(blobsVAR);
          }
        }, timer);
      });
    });
  }

  function downloadAsZip(blobArray) {
    var zip = new JSZip();

    for (let i = 0; i < blobArray.length; i++) {
      const pdfBlob = blobArray[i][0];
      const employeeName = blobArray[i][1];
      const employeeID = blobArray[i][2];

      zip.file(`ID-${employeeID}-${employeeName}-ZapSlip.pdf`, pdfBlob);
      // FILE NAME -> ID-{Employee id}-{Employee name}-ZapSlip.pdf
    }

    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, "ZapSlips.zip");
      // Zip name
    });

    setLoadingMessage("");
    setProgress(0);
  }

  return loading ? (
    <Loader
      mode={props.data.mode}
      progress={progress}
      loadingMessage={loadingMessage}
      createDocProgress={createDocProgress}
    />
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        width: "90%",
        flexDirection: "column",
      }}
    >
      {props.data.mode === "1" ? (
        <Button
          disabled={loading}
          color="primary"
          variant="contained"
          onClick={() => {
            generateOneSlip(props);
          }}
        >
          Generate PaySlip
        </Button>
      ) : (
        <Button
          disabled={loading}
          color="primary"
          variant="contained"
          onClick={() => {
            generateExcelSlips(props);
          }}
        >
          Generate PaySlips
        </Button>
      )}
    </div>
  );
}

export default GenerateSlip;

const Loader = ({ mode, progress, loadingMessage, createDocProgress }) => {
  if (mode === "1") {
    // single payslip loader
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          width: "100%",
          // flexDirection: "column",
        }}
      >
        <div
          style={{
            marginRight: "25px",
          }}
        >
          <Typography variant="body2" color="textSecondary">
            It will take few seconds ...
          </Typography>
        </div>
        <CircularProgress
          style={{ width: "25px", height: "25px" }}
          color="primary"
        ></CircularProgress>
      </div>
    );
  } else {
    // bulk payslips loader
    if (createDocProgress < 100 && progress === 0) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
            width: "80%",
            // flexDirection: "column",
          }}
        >
          <div
            style={{
              marginRight: "25px",
            }}
          >
            <Typography variant="body2" color="textSecondary">
              {`${loadingMessage}`}
            </Typography>
          </div>
          <CircularProgressWithLabel color='secondary' value={createDocProgress} />
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
            width: "100%",
            // flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography variant="body2" align="center">
              {loadingMessage}
            </Typography>
            <LinearProgressWithLabel color="secondary" value={progress} />
          </Box>
        </div>
      );
    }
  }
};

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const LinearProgressWithLabel = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};
