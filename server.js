const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
        'id': 1,
        'image': 'https://placeimg.com/64/64/any',
        'name': '형준혁',
        'birth': '970117',
        'gender': '남자',
        'job': '개발자'  
    },
    {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '이찬우',
        'birth': '961003',
        'gender': '남자',
        'job': '프로그래머'
    },
    {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '이창기',
        'birth': '961024',
        'gender': '남자',
        'job': '교사'
    },
    {
        'id': 4,
        'image': 'https://placeimg.com/64/64/4',
        'name': '이주희',
        'birth': '960809',
        'gender': '여자',
        'job': '관세사'
    },  
    {
      'id': 5,
      'image': 'https://placeimg.com/64/64/5',
      'name': '오동건',
      'birth': '970118',
      'gender': '남자',
      'job': '카카오페이'
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
