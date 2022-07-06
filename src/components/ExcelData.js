const GetCols = (data) => {

    let arrayOfEmployees = [];
    // extract rows from excelḍata
    const _rows = data.rows;
  
    for (let i = 1; i <= _rows.length - 1;) {
      //cols 0-11 --> Employee Details
      //cols 12-18 --> Earnings Details
      //cols 19-21 --> Deductions Details
      let arr_cols_0_11 = [];
      let arr_cols_12_18 = [];
      let arr_cols_19_21 = [];
  
      // if value is undefined (Empty) then comvert it to '-'
      for (let j = 0; j <= 11; j++) {
        if (_rows[i][j] === undefined) {
          _rows[i][j] = "-";
        }
        arr_cols_0_11.push(_rows[i][j]);
      }
  
      for (let j = 12; j <= 18; j++) {
        if (_rows[i][j] === undefined) {
          _rows[i][j] = "-";
        }
        arr_cols_12_18.push(_rows[i][j]);
      }
  
      for (let j = 19; j <= 21; j++) {
        if (_rows[i][j] === undefined) {
          _rows[i][j] = "-";
        }
        arr_cols_19_21.push(_rows[i][j]);
      }
  
      StoreArrayofEmployees(arr_cols_0_11, arr_cols_12_18, arr_cols_19_21);
      //counter for every row 
      i++;
    }
  
  
    function StoreArrayofEmployees(arr_cols_0_11, arr_cols_12_18, arr_cols_19_21) {
      let emp_details = Cols_01_11(arr_cols_0_11);
      let earningsSection = Cols_12_18(arr_cols_12_18);
      let decuceSection = Cols_19_21(arr_cols_19_21);
  
      let obj = {
        deductions: decuceSection,
        employeeDetails: emp_details,
        earnings: earningsSection,
      };
      // Employee Info stored in arrayof Employees (Array)
      arrayOfEmployees.push(obj);
  
    }
  
    // stores employeeDetails column values from excelData
    function Cols_01_11(excel_01_11) {
      let employeeDetails = [
        {
          title: "Employee Name",
          value: "",
        },
        {
          title: "Address",
          value: "",
        },
        {
          title: "Email",
          value: "",
        },
        {
          title: "Contact",
          value: "",
        },
        {
          title: "Designation",
          value: "",
        },
        {
          title: "Department",
          value: "",
        },
        {
          title: "Employee ID",
          value: "",
        },
        {
          title: "Working Hours",
          value: "",
        },
        {
          title: "Leaves",
          value: "",
        },
        {
          title: "Pay rate per hour",
          value: "",
        },
        {
          title: "PAN",
          value: "",
        },
        {
          title: "Currency",
          value: "",
        },
      ];
      let count1 = 0;
  
      employeeDetails.map((emp_det) => {
        emp_det.value = excel_01_11[count1];
        count1++;
      });
      return employeeDetails;
    }
  
    // stores earnings column values from excelData
    function Cols_12_18(excel_12_18) {
      let earnings = [
        {
          title: "Basic Salary",
          value: "",
        },
        {
          title: "HRA",
          value: "",
        },
        {
          title: "Reimbursements",
          value: "",
        },
  
        {
          title: "Bonus",
          value: "",
        },
        {
          title: "Leave Travel Allowance",
          value: "",
        },
        {
          title: "Commission",
          value: "",
        },
        {
          title: "Special Allowance",
          value: "",
        },
      ];
  
      let count2 = 0;
      earnings.map((earns) => {
        earns.value = excel_12_18[count2];
        count2++;
      });
      return earnings;
    }
  
    // stores deductions column values from excelData
    function Cols_19_21(excel_19_21) {
      let deductions = [
        {
          title: "Provident Fund",
          value: "",
        },
        {
          title: "Advance Salary",
          value: "",
        },
        {
          title: "TDS",
          value: "",
        },
      ];
      let count3 = 0;
      deductions.map((deducts) => {
        deducts.value = excel_19_21[count3];
  
        count3++;
      });
      return deductions;
    }
  
    return arrayOfEmployees;
  };
  export { GetCols };
  