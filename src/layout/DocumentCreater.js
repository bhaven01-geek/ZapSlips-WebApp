import {
  Page,
  Font,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Line,
  Svg
} from "@react-pdf/renderer";

import { getYear } from "../layout/utils/DateMonth";
import converter from "number-to-words";
import font from "../fonts/NotoSans-Regular.ttf";
import React from "react";
import { currencies } from "../layout/utils/Currency";

// function to create PDF blob of document
function DocumentCreater(props) {
  const { companyDetails, deductions, employeeDetails, earnings, currency , MonthName } = {
    ...props,
  };
  let currencyForPaySlip = currencies[0]; // currency initialized to INR


  currencies.forEach(element => {
    // if currency came as argument found in currencies change currency
    if (currency === element.value) {
      currencyForPaySlip = element
    }
  });

  // helper function to capitalize first letter of a string
  function capitalizeFirstLetter(words) {
    var separateWord = words.toLowerCase().split(" ");
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] =
        separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    return separateWord.join(" ");
  }

  // helper function to determine total of som quantities
  function getGross(quantities) {
    let grossTotal = 0;
    for (let i = 0; i < quantities.length; i++) {
      const quantity = quantities[i];
      if (quantity.value === undefined || isNaN(quantity.value) || quantity.value === "-" || quantity.value === "") {
        grossTotal = grossTotal + 0;
      } else {
        grossTotal = grossTotal + parseInt(quantity.value);
      }
    }
    return grossTotal;
  }

  // Net Salary For Document
  const netSalary = getGross(earnings) - getGross(deductions);

  // Horizontal Rule for document
  const HorRule = () => (
    <Svg height="5px" width="562">
      <Line x1="0" y1="0" x2="100%" y2="0" strokeWidth={0.5} stroke="grey" />
    </Svg>
  );

  // font for document
  Font.register({ family: "Noto Sans", src: font });

  // Create styles for document
  const styles = StyleSheet.create({
    page: {
      fontFamily: "Noto Sans",
      flexDirection: "row",
      backgroundColor: props.bgColor,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    image: {
      height: "32px",
    },
    innerPadding: { padding: "0 10px" },
    earningCss: {
      width: "100%",
      flexDirection: "row",
      marginBottom: "20px",
      marginTop: "8px",
      padding: "8px",
      backgroundColor: "white",
      borderRadius: "4px",
    },
    summary: {
      fontSize: "15px",
      marginTop: "10px",
      marginBottom: "20px",
      backgroundColor: "white",
      flexDirection: "row",
      padding: "2px 8px",
      borderRadius: "4px",
    },
    employeeDetailsCss: {
      width: "50%",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "8px",
    },
    details: {},
    hardCoded: {},
    netSalaryCss: {
      width: "50%",
      alignItems: "center",
      justifyContent: "center",
    },
    containerSalary: {
      alignItems: "center",
      justifyContent: "center",
      padding: "16px 25px",
      borderRadius: "4px",
      backgroundColor: props.bgColor2,
    },

    tableText: { fontSize: "15px" },
    cloumn: {},
    earningSectionTotal: {
      width: "100%",
      flexDirection: "row",
      marginTop: "4px",
      fontSize: "14px",
      padding: "4px 8px",
      borderRadius: "4px",
      backgroundColor: "white",
    },
    earningHeader: {
      flexDirection: "row",
      marginTop: "20px",
      backgroundColor: props.bgColor2,
      padding: "2px 8px",
      borderRadius: "4px",
    },
    netPayable: {
      marginTop: "30px",
      width: "100%",
      backgroundColor: props.bgColor2,
      fontSize: "14px",
      alignItems: "baseline",
      padding: "10px 0",
      borderRadius: "4px",
      justifyContent: "center",
      textAlign: "center",
    },
  });

  // Creates PDF blob of Document
  const MyDocument = () => (

    <Document>

      <Page size="A4" style={styles.page}>

        {/* View is like DIV of HTML in react-pdf*/}
        <View
          style={
            (styles.section,
            {
              padding: "0 16px",
              height: "100%",
              width: "100%",
            })
          }
        >

          {/* COMPANY DETAILS SECTION */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: "80px",
            }}
          >
            <View style={{ color: props.color0 }}>
              <Text style={{ fontSize: "17px", marginBottom: "4px" }}>
                {companyDetails.companyName}
              </Text>
              <Text style={{ fontSize: "10px", marginBottom: "4px" }}>
                {companyDetails.companyAddress}
              </Text>
            </View>
            <View style={(styles.section, {})}>
              <Image
                style={styles.image}
                src={companyDetails.imageSource}
              ></Image>
            </View>
          </View>

          <HorRule />

          <Text
            style={{
              color: props.color0,
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "4px",
              fontSize: "15px",
            }}
          >
            Payslip for the month of {`${MonthName}, ${getYear()}`}
          </Text>

          <Text
            style={{
              color: props.color0,
              textAlign: "center",
              fontSize: "15px",
            }}
          >
            Employee Pay Summary
          </Text>


          {/* EMPLOYEE DETAILS SECTION */}
          <View style={styles.summary}>

            {/* EMPLOYEE DETAIL TITLES */}
            <View style={styles.employeeDetailsCss}>
              <View style={styles.hardCoded}>
                {employeeDetails.map((data, index) => {
                  return data.title || data.title !== undefined ? (
                    <Text key={index + 'emp-details-title'}
                      style={{
                        marginBottom: "6px",
                        fontSize: "10px",
                        color: props.color2,
                      }}
                    >
                      {data.title}
                    </Text>
                  ) : null;
                })}
              </View>

              {/* EMPLOYEE DETAIL VALUES */}
              <View style={styles.details}>
                {employeeDetails.map((data, index) => {
                  return (
                    <Text key={index + 'emp-details-value'}
                      style={{
                        color: props.color3,
                        marginBottom: "6px",
                        fontSize: "10px",
                      }}
                    >
                      {"   :   "}
                      {
                        data.value && data.value !== undefined && data.value !== ''
                          ? data.value
                          : 0
                      }
                    </Text>
                  );
                })}
              </View>

            </View>

            {/* NETSALARY VIEW */}
            <View style={styles.netSalaryCss}>

              <View style={styles.containerSalary}>
                <Text style={{ whiteSpace: "nowrap", color: "grey" }}>
                  Employee Net Pay
                </Text>
                <Text
                  style={{
                    color: "#7579E7",
                    fontSize: "25px",
                    marginTop: "6px",
                  }}
                  id="emp-pay"
                >{`${currencyForPaySlip.symbol}${netSalary} /-`}</Text>
              </View>

            </View>

          </View>

          <HorRule />


          {/* EARNIGS AND DEDUCTIONS HEADER SECTION */}
          <View style={styles.earningHeader}>
            <Text style={{ width: "25%", color: props.color1 }}>EARNINGS</Text>

            <Text
              style={{
                textAlign: "right",
                width: "25%",
                marginRight: "30px",
                color: props.color1,
              }}
            >
              AMOUNT
            </Text>

            <Text style={{ width: "25%", color: props.color1 }}>
              DEDUCTIONS
            </Text>

            <Text
              style={{ textAlign: "right", width: "25%", color: props.color1 }}
            >
              AMOUNT
            </Text>
          </View>

          {/* EARNING AND DEDUCTION SECTION */}
          <View style={styles.earningCss}>

            {/* EARNINGS TITLES */}
            <View
              style={(styles.cloumn, { width: "25%" })}
              className="earningsCss-title"
            >
              {earnings.map((data, index) => {
                return data.title || data.title !== undefined ? (
                  <Text key={index + 'earn-title'}
                    style={
                      (styles.tableText,
                      {
                        color: props.color2,
                        marginBottom: "6px",
                        fontSize: "10px",
                      })
                    }
                  >
                    {data.title}
                  </Text>
                ) : null;
              })}
            </View>

            {/* EARNINGS VALUES */}
            <View
              style={
                (styles.cloumn,
                  { width: "25%", textAlign: "right", marginRight: "30px" })
              }
              className="earnings-value"
            >
              {earnings.map((data, index) => {
                return (
                  <Text key={index + 'earn-value'}
                    style={
                      (styles.tableText,
                      {
                        color: props.color3,
                        marginBottom: "6px",
                        fontSize: "10px",
                      })
                    }
                  >
                    {
                      data.value && data.value !== undefined && data.value !== '-' && data.value !== ''
                        ? `${currencyForPaySlip.symbol} ${data.value}`
                        : 0
                    }
                  </Text>
                );
              })}
            </View>

            {/* DEDUCTIONS TITLES */}
            <View
              style={(styles.cloumn, { width: "25%" })}
              className="deductions-title"
            >
              {deductions.map((data, index) => {
                return data.title || data.title !== undefined ? (
                  <Text key={index + 'ded-title'}
                    style={
                      (styles.tableText,
                      {
                        color: props.color2,
                        marginBottom: "6px",
                        fontSize: "10px",
                      })
                    }
                  >
                    {data.title}
                  </Text>
                ) : null;
              })}
            </View>

            {/* DEDUCTIONS VALUES */}
            <View
              style={(styles.cloumn, { width: "25%", textAlign: "right" })}
              className="deductions-value"
            >
              {deductions.map((data, index) => {
                return (
                  <Text key={index + 'ded-value'}
                    style={
                      (styles.tableText,
                      {
                        color: props.color3,
                        marginBottom: "6px",
                        fontSize: "10px",
                      })
                    }
                  >
                    {
                      data.value && data.value !== undefined && data.value !== '-' && data.value !== ''
                        ? `${currencyForPaySlip.symbol} ${data.value}`
                        : 0
                    }
                  </Text>
                );
              })}
            </View>
          </View>

          {/* GROSS SECTION */}
          <View style={styles.earningSectionTotal} id="earning-section-total">

            {/* GROSS EARNINGS */}
            <Text style={{ color: props.color1, width: "25%" }}>
              Gross Earnings
            </Text>
            <Text
              style={{
                color: props.color3,
                textAlign: "right",
                width: "25%",
                marginRight: "30px",
              }}
            >
              {currencyForPaySlip.symbol}{getGross(earnings) + " /-"}
            </Text>

            {/* GROSS DEDUCTIONS */}
            <Text style={{ color: props.color1, width: "25%" }}>
              Total Deductions
            </Text>
            <Text
              style={{ color: props.color3, textAlign: "right", width: "25%" }}
            >
              {currencyForPaySlip.symbol}{getGross(deductions) + " /-"}
            </Text>

          </View>

          {/* NET PAYABLE SECTION */}
          <View style={styles.netPayable} className="net-payable">

            <Text
              style={{
                color: props.color1,
                fontSize: "16px",
                marginBottom: "4px",
              }}
            >
              {`Total Net Payable : `} {currencyForPaySlip.symbol}{netSalary} /-{" "}
            </Text>

            <Text style={{ fontSize: "11.5px", color: "#7579E7" }}>
              {`( ${currencyForPaySlip.name} ${capitalizeFirstLetter(
                converter.toWords(parseInt(netSalary))
              )} Only )`}
            </Text>

          </View>

          {/* FOOTER SECTION */}
          <Text
            style={{
              position: "absolute",
              bottom: "16px",
              textAlign: "center",
              fontSize: "8px",
              color: "grey",
            }}
          >
            -This is a system generated payslip-
          </Text>

        </View>

      </Page>

    </Document>

  );

  const myPDF = MyDocument();
  return myPDF;
}

export default DocumentCreater;