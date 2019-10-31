// db conf
var admin = require("firebase-admin");

var serviceAccount = require("./agrostat-c15e0-firebase-adminsdk-rkn9e-1a35202628.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://agrostat-c15e0.firebaseio.com"
});
const db = admin.firestore()
// express config
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.get('/', (req, res) => {
  console.log('Hi Joemar');
  res.send('Hi Joemar')
})

app.post('/api/remote', (req,res) => {
  console.log(req.body)
  // db.collection('reading').add(req.body);
  db.collection('reading').doc('ggwp').set({status: parseInt(req.body.status),
    station: 'A',
    anaV: parseInt(req.body.anaV),
    perV: parseInt(req.body.perV),
    humV: parseInt(req.body.humV),
    Temperature: parseInt(req.body.Temperature),
    HeatInC: parseInt(req.body.HeatInC),
    HeatInF: parseInt(req.body.HeatInF) })

  res.status(200).send('Gwapo ka kapatid!');
})

app.post('/', (req, res) => {
  console.log('Hi Joemar');
  res.send('nicesuu');
})

app.listen(port, () => console.log(`Server Running at port ${port}`));