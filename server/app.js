const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


//allow cross origin requests
app.use(cors())

//connest to mlab database
mongoose.connect('mongodb://superfunguy:test123@ds047524.mlab.com:47524/gql-ninja');
mongoose.connection.once('open', ()=>{
  console.log("connected to database");
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql:true
}));

app.listen(4000, () =>{
  console.log("listening for requests on port 4000");
})
