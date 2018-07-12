function GenerateCustomerSalesMap(salesData, customerData) {
  // return empty object if empty arrays passed
  if (salesData === [] || customerData === []) {
    return {};
  }
  var returnArr = salesData.reduce((accumObj, currentObj) => {
    // find the name object for corresponding customerId from customerData
    var nameObj = customerData.find(element => {
      return element.id === currentObj.customerId;
    });
    // check if the name doesn't exists, then do nothing
    if (!nameObj) {
      return accumObj;
    }
    // if customer with this name/id already bought smth, add to the grand total
    if (accumObj[nameObj.name]) {
      accumObj[nameObj.name] += currentObj.total;
      return accumObj;
    } else {
      // else create name and add a new total
      accumObj[nameObj.name] = currentObj.total;
      return accumObj;
    }
  }, {});
  return returnArr;
}
module.exports = GenerateCustomerSalesMap;
