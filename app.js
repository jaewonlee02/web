const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const Data = {
        name: '이재원',
        age: 24,
        major: '정보통신공학과 (취업 준비 중)',
        daily: '편의점 알바와 학업, 그리고 꾸준한 운동(헬스, 배드민턴)',
        skills: ['C', 'Java', 'Python', 'JavaScript', 'VHDL','React','Node'],
        hobbies: ['NMIXX, 리센느 무대 및 콘텐츠 챙겨보기', 'wargame 연습', '영화 감상']
    };

    res.render('index', Data);
});

app.listen(port, () => {
    console.log(`로컬호스트 ${port}에서 작동중`);
});