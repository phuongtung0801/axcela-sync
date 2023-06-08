const axios = require('axios');
const moment = require('moment/moment');
const classInfor = require('../jsonGroup filtered/A1.json');
const fs = require('fs');

const getDataBySheetId = async (sheet_id) => {
    try {
        const response = await axios.post('http://54.254.90.240:1880/teacher-sheet-A1', {
            sheet: sheet_id
        })
        let data
        try {
            data = response.data;
            data = data.filter((d) => {
                return d[0] !== '';
            }); 
        } catch (error) {
            console.log("Fuck you", "sheetid: ", sheet_id, "data: ",  data)
        }
        
        try {
            data = data.map((d) => {
                return {
                    "lesson_number": d[0],
                    "lesson_name": d[1],
                    "date": d[2],
                    "class_time": d[3],
                    "attentdance": d[4],
                    "teacher": d[5],
                    "good_at": d[6],
                    "need_to_improve": d[8]
                }
            })
        } catch (error) {
            console.log("fuck you")
        }
        
        console.log(data)
        return data;

    } catch (error) {
        console.log("error", error)
    }
};
// console.log(classInfor[13].sheet_url)
const getAllTeachData = async () => {
    try {
        let _classInfor = classInfor.map((e) => {
           
            let splitArr = e.sheet_url.split("\/d\/");

            e.sheet_id = splitArr[1].split("\/")[0];
            return e;
        });
        let allTeachData = [];

        for (let i = 0; i < classInfor.length; i++) {
            let _class = _classInfor[i];
            console.log("url: \n",_class.sheet_url)
            const teachData = await getDataBySheetId(_class.sheet_id);
            teachData.map((d) => {
                allTeachData.push({ ..._class, ...d });
            });
            console.log("data okie", i, "/", _classInfor.length - 1);
        }
        let data = JSON.stringify(allTeachData);
        // console.log("classInfor", allTeachData);
        // fs.writeFileSync('./A-part1.json', data);
        
        const filePath = 'E:/TUNGTRAN/WORK/PLINK/ConvertTools/AxcelaTool/jsonResult/A1-teacher-part1.json';
        if (false) {
       // if (fs.existsSync(filePath)) {
            // Append data to the existing file
            fs.appendFileSync(filePath, data, (err) => {
                if (err) throw err;
                console.log('Data appended to the file.');
              });
        } else {
            // Create a new file and write data to it
            fs.writeFileSync(filePath, data, (err) => {
                if (err) throw err;
                console.log('New file created and data written.');
              });
        }
        
    } catch (error) {
        console.log(error)
    }
};
getAllTeachData();
// getDataBySheetId('10h66zOS730DmM_0-oWTVrueUxajGO7VDf4CabP4ifi4');
