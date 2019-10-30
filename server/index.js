// // db configuration
// const firebase = require('firebase/app');
// require('firebase/firestore')

// const firebaseConfig = {
//   apiKey: "AIzaSyB9yigsAO4xOW8yjT-MpxybPr1uVqSV-qo",
//   authDomain: "agrostat-c15e0.firebaseapp.com",
//   databaseURL: "https://agrostat-c15e0.firebaseio.com",
//   projectId: "agrostat-c15e0",
//   storageBucket: "agrostat-c15e0.appspot.com",
//   messagingSenderId: "931320071862",
//   appId: "1:931320071862:web:e054d9a6d00c205cfa4817"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore()

// express config
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 20000;

app.use(bodyParser.json())
app.use(cors);

app.get('/gg', (req, res) => {
  console.log('Hi Joemar');
  res.send('Hi Joemar')
})

app.post('/', (req, res) => {
  console.log('Hi Joemar');
})

app.listen(port, () => console.log(`Server Running at port ${port}`));