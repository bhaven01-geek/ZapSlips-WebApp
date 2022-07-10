  // helper function to determine total of som quantities
  export function getGross(quantities) {
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
  
export function checkNumeric(quantity) {
    if (quantity.value === undefined || isNaN(quantity.value) || quantity.value === "-" || quantity.value === "") {
      return 0;
    } else {
      return parseInt(quantity.value);
    }
  }
