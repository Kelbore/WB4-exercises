
function parsePartCode(partCode) {
  const colonPosition = partCode.indexOf(":");
  const dashPosition = partCode.indexOf("-");
  const spplierNum = partCode.substring(0,colonPosition);
  const productNumber = partCode.substring(colonPosition + 1, dashPosition);
  const size = partCode.substring(dashPosition + 1);
  
  return {
   supplierCode: 'XYZ',
   productNumber: '1234',
   size: 'L'
  }
}
console.log(parsePartCode('ABC:1234-L'));