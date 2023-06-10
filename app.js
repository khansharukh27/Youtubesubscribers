const mongoose = require('mongoose') ; //mongoose import
const express = require('express');//import express
const data  = require('./data');//import data
const subscriberModel = require('./models/subscribers');//import schema and modal
const app = express()// create app


app.use(express.json())//for conver data in json
app.use(express.urlencoded({ extended: false }));

// The code snippet contains a route handler for a GET request to the /subscribers endpoint. When a request is received, it calls subscriberModel.find() to retrieve all documents from the MongoDB collection. If there's an error during the query, it logs the error. Otherwise, it sends the retrieved documents as the response.
app.get('/subscribers',(req,resp)=>{
    
    subscriberModel.find((err,val)=>{
        if(err){
            console.log(err)
        }else{
            resp.send(val)
        }
    })
    
})


app.get('/subscribers/names', (req, resp) => {
    // Handler for GET request to '/subscribers/names' endpoint

    subscriberModel.find((err, val) => {
        // Use the subscriberModel to find all documents in the collection

        if (err) {
            // If there's an error while querying the database
            console.log(err); // Log the error to the console
        } else {
            // If the query is successful
            resp.send(data); // Send the predefined 'data' variable as the response
        }
    });
});

    

app.get('/subscribers/name/:name', async (req, resp) => {
    // Handler for GET request to '/subscribers/name/:name' endpoint

    const name = req.params.name; // Extract the 'name' parameter from the request URL
    
    subscriberModel.find({ name: name }, (err, subscribers) => {
        // Use the subscriberModel to find documents in the collection with the specified name

        if (err) {
            // If there's an error while querying the database
            console.log(err); // Log the error to the console
            resp.status(500).json({ error: 'Internal Server Error' }); // Send a 500 response with an error message
        } else {
            // If the query is successful
            resp.send({ name: name }); // Send a response with the extracted 'name' parameter as JSON
            // resp.send(); // Alternative: Send an empty response
        }
    });
});

  

app.get('/subscribers/:id', (req, resp) => {
    // Handler for GET request to '/subscribers/:id' endpoint

    const id = req.params.id; // Extract the 'id' parameter from the request URL
    console.log(`{_id:${id}}`); // Log the extracted 'id' parameter to the console
    
    subscriberModel.findById(id)
        .then(result => {
            // Use the subscriberModel to find a document in the collection with the specified ID
            if (result) {
               image.png // If a document is found
                resp.status(200).json({
                    subscriber: result // Send the retrieved document as JSON response
                });
            } else {
                // If no document is found
                resp.status(404).json({
                    error: 'Subscriber not found' // Send a 404 response with an error message
                });
            }
        })
        .catch(err => {
            // If there's an error while querying the database
            resp.status(500).json({
                error: 'Internal Server Error' // Send a 500 response with an error message
            });
        });
});

  
  