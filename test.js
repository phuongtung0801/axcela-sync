const moment = require('moment/moment');

let user = [[
    {
        "class_id": "AEA19722",
        "total_student": 1,
        "student_id": "C-2300014",
        "status": "Active",
        "Level": "CEFR-A1",
        "Student_name": "Nguyễn Quang Hải",
        "sheet_url": "https://docs.google.com/spreadsheets/d/1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4/edit#gid=2049227854",
        "sheet_id": "1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4",
        "lesson_number": "1",
        "lesson_name": "What's your name",
        "date": "28/02/2023",
        "class_time": "9:05:00 PM",
        "attentdance": "x",
        "teacher_id": "PTT-23054",
        "teacher": "NGỌC",
        "good_at": "He was very cooperative and willing to practice pronunciation. He was able to spell faster by the end of the lesson.",
        "need_to_improve": "- Spell: Đánh vần\r\n- Ask me: Hỏi tôi\r\n- Do you like Putin? Yes, I like Putin\r\n- His name is Putin.\r\n- How old is he? ~> He is about 50 years old.\r\n- Comedian: Diễn viên hài \r\n- Actor: Diễn viên\r\n- Athlete: Vận động viên\r\n- Swimming: Bơi lội\r\n- Beauty queen: Hoa hậu\r\n- Do you have a dog? Bạn có nuôi chó ko?\r\nYes, I do. No, I don't.\r\n- What's your mother's name? My mother's name is Hoa.\r\n* Practice: Luyện tập ~> H, R, E, G, X"
    },
    {
        "class_id": "AEA19722",
        "total_student": 1,
        "student_id": "C-2300014",
        "status": "Active",
        "Level": "CEFR-A1",
        "Student_name": "Nguyễn Quang Hải",
        "sheet_url": "https://docs.google.com/spreadsheets/d/1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4/edit#gid=2049227854",
        "sheet_id": "1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4",
        "lesson_number": "2",
        "lesson_name": "what's your phone number",
        "date": "14/03/2023",
        "class_time": "9:05:00 PM",
        "attentdance": "x",
        "teacher_id": "PTT-23054",
        "teacher": "NGỌC",
        "good_at": "He remembered the alphabets better and could answer the questions about age and phone number.",
        "need_to_improve": " - Who is it? Ai?\r\n- Famous: Nổi tiếng\r\n- 77: Double 7, 555: triple five\r\n- Sivin ~> Seven\r\n- Aight ~> Eight\r\n- Final sound: Âm cuối\r\n- Age: Tuổi\r\n- How old is she?\r\n- How old is he?\r\n- How old is your father?\r\n- What's your telephone number? ~> My telephone number is....."
    },
    {
        "class_id": "AEA19722",
        "total_student": 1,
        "student_id": "C-2300014",
        "status": "Active",
        "Level": "CEFR-A1",
        "Student_name": "Nguyễn Quang Hải",
        "sheet_url": "https://docs.google.com/spreadsheets/d/1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4/edit#gid=2049227854",
        "sheet_id": "1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4",
        "lesson_number": "3",
        "lesson_name": "What's your job",
        "date": "29/03/2023",
        "class_time": "9:05:00 PM",
        "attentdance": "x",
        "teacher_id": "PTT-23054",
        "teacher": "NGỌC",
        "good_at": "He said the numbers more quickly and accurately. He remembered the jobs learned today and could ask/answer about other people's jobs e.i. What's her job? What's his job?",
        "need_to_improve": "- You are a teacher.\n- Housewife: Nội trợ\n- Architect: Kiến trúc sư\n- Is your wife a housewife? No, she isn't.\n- An hour = Một giờ\n- Ask: Hỏi\n- Again: Một lần nữa\n- Listen: Nghe\n- He \"is\" / She \"is\"'"
    },
    {
        "class_id": "AEA19722",
        "total_student": 1,
        "student_id": "C-2300014",
        "status": "Active",
        "Level": "CEFR-A1",
        "Student_name": "Nguyễn Quang Hải",
        "sheet_url": "https://docs.google.com/spreadsheets/d/1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4/edit#gid=2049227854",
        "sheet_id": "1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4",
        "lesson_number": "4",
        "lesson_name": "Say Yes/No",
        "date": "04/04/2023",
        "class_time": "9:05:00 PM",
        "attentdance": "x",
        "teacher_id": "PTT-23054",
        "teacher": "NGỌC",
        "good_at": "He could say \"I see\" to show that he understands. Today he started to understand English explanations of new words.",
        "need_to_improve": "- Sentence: Câu\r\n- Subject: Chủ ngữ\r\n- Or: Hoặc\r\n- Male: Thuộc nam giới, thuộc giống đực\r\n- Female: Thuộc nữ giới, thuộc giống cái\r\n- Talk: Nói\r\n- About: Về\r\n- I work at ANE Vietnam.\r\n- I work in Saigon.\r\nPRONUNCIATION (Phát âm)\r\nEnglish, Vietnamese, Japanese, Chinese"
    },
    {
        "class_id": "AEA19722",
        "total_student": 1,
        "student_id": "C-2300014",
        "status": "Active",
        "Level": "CEFR-A1",
        "Student_name": "Nguyễn Quang Hải",
        "sheet_url": "https://docs.google.com/spreadsheets/d/1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4/edit#gid=2049227854",
        "sheet_id": "1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4",
        "lesson_number": "5",
        "lesson_name": "Open the book!",
        "date": "11/04/2023",
        "class_time": "9:05:00 PM",
        "attentdance": "x",
        "teacher_id": "PTT-23054",
        "teacher": "NGỌC",
        "good_at": "He could now understand some English explanations of new words. ",
        "need_to_improve": "- Can you do this?\n~> No, I can't.\n~> Yes, I can.\n- Do you have this?\n~> Yes, I do.\n~> No, I don't.\n- I type on my laptop.\n- Read a book\n- Draw something\n- Close your eyes\n- I am angry. I am scared.\nPRONUNCIATION\nRaise, Listen, Draw, Write, Seat, Angry, Scared"
    },
   
    {
        "class_id": "AEA19722",
        "total_student": 1,
        "student_id": "C-2300014",
        "status": "Active",
        "Level": "CEFR-A1",
        "Student_name": "Nguyễn Quang Hải",
        "sheet_url": "https://docs.google.com/spreadsheets/d/1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4/edit#gid=2049227854",
        "sheet_id": "1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4",
        "lesson_number": "7",
        "lesson_name": "Welcome to my family",
        "date": "25/04/2023",
        "class_time": "9:10:00 PM",
        "attentdance": "x",
        "teacher_id": "PTT-23054",
        "teacher": "NGỌC",
        "good_at": "He recognized some family members but not quickly enough.",
        "need_to_improve": "- Vocabulary = Words = Từ vựng\r\n- Introduce: Giới thiệu\r\n- Pronunciation: Phát âm\r\n- He's my brother-in-law, my husband's older brother/ younger brother. \r\n- Plural form: Thể số nhiều\r\n~> A son/One son, 2 sons, 3 daughters, 4 sisters, 5 brothers, 2 nephews, 3 nieces\r\n- How many nieces do you have? I have 3 nieces.\r\n- What are their names? They are Huyen, Tran, and My. \r\n- How many brothers-in-law do you have? I don't have any.\r\n- I have one older brother and three younger brothers.\r\n- Amy is my sister-in-law.\r\n- My aunt-in-law is Ann."
    },
     {
        "class_id": "AEA19722",
        "total_student": 1,
        "student_id": "C-2300014",
        "status": "Active",
        "Level": "CEFR-A1",
        "Student_name": "Nguyễn Quang Hải",
        "sheet_url": "https://docs.google.com/spreadsheets/d/1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4/edit#gid=2049227854",
        "sheet_id": "1VpJtU9Ea8o4eA1StbsbzOUuu-DaLu3SmszJ5LhdQ7s4",
        "lesson_number": "6",
        "lesson_name": "Simulation",
        "date": "18/04/2023",
        "class_time": "9:15:00 PM",
        "attentdance": "x",
        "teacher_id": "PTT-23054",
        "teacher": "NGỌC",
        "good_at": "He could respond quickly to some short questions. He avoided using Vietnamese in class as much as he could. ",
        "need_to_improve": "- Study by myself: Tôi tự học\n- Watch movies / Watch cartoons (phim hoạt hình)\n- Watch short videos for children\n- Read English stories for children: Đọc truyện tiếng Anh dành cho thiếu nhi\n- I work at Apple company.\n- I work in a studio.\n- I work in a hospital.\n- Is your wife a housewife? No, she isn't.\n- Anh trai: Older brother\n- Em trai: Younger brother\n- Chị gái: Older sister\n- Em gái: Younger sister\n- What does he teach? Anh ấy dạy gì?\nHe teaches /iz/ Chemistry.\n- /: Slash\n- Hamlet: Ấp\n- Commune: Xã --> Long An commune\n- District: Huyện\n- Province: Tỉnh\nPHÁT ÂM\nG, J, 5, Chef"
    }
]]

let tung = user.map((sln) => {
    let lessonArr = sln
    lessonArr.sort((a, b) => {
      const dateA = moment(a.date);
      const dateB = moment(b.date);
      return dateA.diff(dateB);
    });
    return []
  })

console.log(tung);

