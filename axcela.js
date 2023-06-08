const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('./importData.xlsx');
const worksheetKnown = workbook.Sheets['Class_Data'];

// Define the range of cells you want to convert (e.g., A1 to C10)
const range = 'C255:I257';

// Convert the specified range to JSON
const jsonKnown = XLSX.utils.sheet_to_json(worksheetKnown, { range });

fs.writeFile('./1.json', JSON.stringify(jsonKnown), (err) => {
  if (err) throw err;
  console.log('Data written to file');
});
