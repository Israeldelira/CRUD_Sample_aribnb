const express = require('express');
const Customer = require('../models/customer');
const _ = require('underscore');
const app = express();


app.post('/GetCustNom', (req, res) => {
    let customer = req.body.user;
    console.log(customer);
    Customer.find({ $and: [{ firstName: customer }, { status: true }] })
        .exec((err, customers) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            return res.status(200).json({
                ok: true,
                customers
            });
        });
});


app.post('/GetCustId', (req, res) => {
    let id = req.body.id;
    console.log(id);
    Customer.find({ $and: [{ id: id }, { status: true }] })
        .exec((err, customers) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            return res.status(200).json({
                ok: true,
                customers
            });
        });
});

app.post('/GetCustCountry', (req, res) => {
    let country = req.body.country;
    console.log(country);
    Customer.find({ $and: [{ country: country }, { status: true }] }) //select * from usuario where estado=true
        .exec((err, customers) => { //ejecuta la funcion
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            return res.status(200).json({
                ok: true,
                customers
            });
        });
});

app.post('/RegCustomer', (req, res) => {
    let body = req.body;
    let customer = new Customer({
        //para poder mandar los datos a la coleccion

        firstName: body.firstName,
        lastName: body.lastName,
        address: body.address,
        city: body.city,
        country: body.country,
        district: body.district
    });

    customer.save((err, customerDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            customerDB
        });
    });
});


app.put('/UpdCustomer', (req, res) => {
    let id = req.body.id;
    let body = _.pick(req.body, ['firstName', 'lastName', 'address', 'city', 'country', 'district']); //FILTRAR del body, on el pick seleccionar los campos que interesan del body 
    //id 'su coleccion, new -> si no existe lo inserta, runVali-> sirve para validar todas las condiciones del modelo 
    Customer.findOneAndUpdate({ id: id }, body, { new: true, runValidators: true, context: 'query' }, (err, usrDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            usrDB
        });

    });
});

app.delete('/DelCusId', (req, res) => {
    let id = req.body.id;

    Customer.findOneAndUpdate({ id: id }, { status: false }, { new: true, runValidators: true, context: 'query' }, (err, resp) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            resp

        });

    });

});

app.delete('/DelCusName', (req, res) => {
    let firstName = req.body.firstName;

    Customer.findOneAndUpdate({ firstName: firstName }, { status: false }, { new: true, runValidators: true, context: 'query' }, (err, resp) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            resp

        });

    });

});

module.exports = app;