const XLSX = require('xlsx');
const fs = require('fs');


const jsonKnown = JSON.parse(fs.readFileSync('./jsonGroup/A.json', 'utf8'));
const formattedJsonKnown = jsonKnown.map(obj => {
  let convertedUrl = obj.sheet_url.replace(/`//`/g, "\/\\/").replace(/`/`/g, "\\/");

  return {
    "class_id": obj.class_id,
    "total_student": obj.total_student,
    "student_id": obj.student_id,
    "status": obj.status,
    "Level": obj.Level,
    "Student_name": obj.Student_name,
    "sheet_url": convertedUrl
  };
});
fs.writeFile('./B1.json', JSON.stringify(formattedJsonKnown), (err) => {
  if (err) throw err;
  console.log('Data written to file');
});
