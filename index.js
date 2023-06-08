const XLSX = require('xlsx');
const fs = require('fs');
const array = require('./convertedKnown.json');
const { exit } = require('process');
const workbook = XLSX.readFile('./mapping-error-code-rpi.xlsx');
const worksheetKnown = workbook.Sheets['known_code'];
const worksheetUnKnown = workbook.Sheets['unknown_code'];


const jsonKnown = XLSX.utils.sheet_to_json(worksheetKnown);
const jsonUnknown = XLSX.utils.sheet_to_json(worksheetUnKnown);


fs.writeFile('./convertedKnown.json', JSON.stringify(jsonKnown), (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });

fs.writeFile('./convertedUnKnown.json', JSON.stringify(jsonUnknown), (err) => {
  if (err) throw err;
  console.log('Data written to file');
});


// console.log(json);
