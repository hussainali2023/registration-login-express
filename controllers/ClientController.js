const { response } = require("express")
const Client = require("../models/Client")

const index = (req, res, next) =>{
    Client.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: "An error occur"
        })
    })
}

// show single client 

const show = (req, res, next) =>{
    let clientId = req.body.clientId
    Client.findByIn(clientId)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({

            message: "an error occur"
        })
    })
}

const store = (req, res) =>{
    let client = new Client({
        name: req.body.name,
        email: req.body.email
    })
    client.save()
    .then(response =>{
        res.json({
            message: "Client added successfully"
        })
    })
    .catch(error =>{
        res.json({
            message: "an error occur"
        })
    })


}

// update client 

const update = (req, res, next) =>{
    let clientId = req.body.clientId

    let updatedData = {
        name: req.body.name,
        emal:req.body.email
    }
    Client.findByIdAndUpdate(clientId,{$set: updatedData} )
    .then(() =>{
        res.json({
            message: "Client updated successfully"
        })
    })
    .catch(error =>{
        res.json({
            message: "An error occur"
        })
    })
}

// delete client 
const destroy = (req, res, next) =>{
    let clientId = req.body.clientId
    Client.findOneAndRemove(clientId)
    .then(() =>{
        res.json({
            message: "Client deleted successfully"
        })
    })
    .catch(error =>{
        res.json({
            message: "An error occur"
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}