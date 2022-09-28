const { models } = require('mongoose');
const { db } = require('./HospitalModel');
const Hospital = require('./HospitalModel');

const hospitalController = {
    async getHospitals(req, res) {
        const target = await Hospital.find();
        if(!target) res.status(400).send('nothing was found');
        res.status(200).json(target);
    },
    createHospital(req, res, next) {
        const {name, city, zipcode, phoneNumber, isOpen, isAcceptingNewPatients, isAcceptingWalkIns, hasUrgentCare} = req.body;
        const newHospital = new Hospital({
            name: name,
            city: city,
            zipcode: zipcode,
            phoneNumber: phoneNumber,
            isOpen: isOpen,
            isAcceptingNewPatients: isAcceptingNewPatients,
            isAcceptingWalkIns: isAcceptingWalkIns,
            hasUrgentCare: hasUrgentCare
        });
        newHospital.save(function (err, std) {
        if(err) res.status(400).send('this Hospital cannot be created');
        res.status(200).json(std);
        return next();
        });
    }, 
   async deleteHospital(req, res) {
        console.log('in delete method')
        const targetId = req.body._id;
        console.log('targetid is ', targetId)
        const result = await Hospital.findByIdAndDelete(targetId)
        console.log(result);
        if (!result) res.status(400).send('this item could not be deleted');
        else res.status(200).send('successfully deleted');
    }   
};


module.exports = hospitalController;