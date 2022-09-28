const mongoose = require('mongoose');
const moment = require('moment-timezone');
const datePacific = moment.tz(Date.now(), "America/Los_Angeles")
const Schema = mongoose.Schema;
// The document schema should have 3 things
// A "firstName" that is a string
// A "lastName" that is a string
// An "age" that is a number
// All of these should be required.
// Create your schema here
const MONGO_URI = "mongodb+srv://risao-10:EdZbqCwBdPTiFtRq@cluster0.asl10zu.mongodb.net/test";

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "hospitalsDB",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const hospitalsSchema = new Schema({
  name: String,
  city: String,
  zipcode: Number,
  phoneNumber: String,
  isOpen: Boolean,
  isAcceptingNewPatients: Boolean,
  isAcceptingWalkIns: Boolean,
  hasUrgentCare: Boolean,
  createdAt: { type: Date, default: datePacific }
})

const Hospital = mongoose.model('hospital', hospitalsSchema);
// You must export your model through module.exports
// The collection name should be 'student'
module.exports = Hospital;
