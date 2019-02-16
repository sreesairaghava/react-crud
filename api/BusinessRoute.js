const express = require('express');
const businessRoute = express.Router();

// Require Business Model in our routes module

let Business = require('./BusinessModel.js');

//Defined store Route

businessRoute.route('/add').post(function (req, res) {
    let business = new Business(req.body);
    business.save()
    .then(business =>{
        res.status(200).json({'business': 'business added successfully'})
    })
    .catch(err =>{
        res.status(400).send("unable to save to Database" + err);
    });
    
});

//Defined get data(index or listing ) route

businessRoute.route('/').get(function(req, res){
    Business.find(function(err, business){
        if (err) {
            console.log(err);
        }
        else{
            res.json(business);
        }
    });
});

//Define edit route

businessRoute.route('/edit/:id').get(function(req,res){
    let id = req.params.id;
    Business.findById(id, function(err, business){
       if(err){
           res.send("error"+ err)
       }
       else{
           res.json(business)
       }
    });

});

//Define Update Route

businessRoute.route('/update/:id').post(function(req, res){
    Business.findById(req.params.id, function(err, business){
        if(!business){
            res.status(404).send('Data is not found'+err);
        }
        else{
            business.person_name = req.body.person_name;
            business.business_name = req.body.business_name;
            business.business_gst_number = req.body.business_gst_number;
            
            business.save().then(business =>{
                res.json('Update Completed'+ business)
            })
            .catch(err =>{
                res.status(400).send("Unable to update the database"+ err);
            });
        }
    });
});

//Define Delete | remove |destroy route

businessRoute.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

//Export module

module.exports = businessRoute;