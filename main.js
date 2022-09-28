const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const hospitalController = require('./HospitalController');
var cors = require('cors')

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const retrieverRouter = express.Router();

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, './build')));
};
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, './index.html'));
});


app.get('/welcome',function(req, res) {
  res.sendFile(path.join(__dirname, './welcome.html'));
});
// app.get('/', (req, res) => {
//   res.sendFile('/')
// })
app.use('/retriever', retrieverRouter);



// Create a new wishlist in the database
// http://localhost:3000/hungry
retrieverRouter.post('/', hospitalController.createHospital);
retrieverRouter.get('/', hospitalController.getHospitals);
retrieverRouter.delete('/', hospitalController.deleteHospital);
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));