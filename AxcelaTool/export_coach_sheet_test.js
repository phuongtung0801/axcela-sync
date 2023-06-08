const axios = require('axios');
const moment = require('moment/moment');
const classInfor = require('../jsonGroup filtered/A.json');
const fs = require('fs');

const getDataBySheetId = async (sheet_id) => {
    try {
        const response = await axios.post('http://54.254.90.240:1880/coach-sheet-A', {
            sheet: sheet_id
        })

        let data = response.data;
        console.log(data)
        return data
        data = data.filter((d) => {
            return d[0] !== '';
        });
        return data
        data = data.map((d) => {
            return {
                "date": d[0],
                "class_time": d[1],
                "attendance": d[2],
                "coach_name": d[3],
                "lesson_name_and_number": d[4],
                "coach_id": d[5],
                "good_at": d[6],
                "need_to_improve": d[7]
            }
        })
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
            console.log("data okie", i, "/", _classInfor.length);
        }
        let data = JSON.stringify(allTeachData);
        // console.log("classInfor", allTeachData);
        // fs.writeFileSync('./A-part1.json', data);
        fs.writeFile('E:/TUNGTRAN/WORK/PLINK/ConvertTools/AxcelaTool/jsonResult/A-part1.json', data, (err) => {
            if (err) throw err;
            console.log('Data written to file');
          });
        
    } catch (error) {
        console.log(error)
    }
};
// getAllTeachData();
getDataBySheetId('1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4');
