const mongoose = require('mongoose')

const jsonSchema = new mongoose.Schema({



    query:[ {

      query_string: {

        order_number: {

          type: String,

          required: true,

        },

        stamp: {

          type: String,
    
          required: true,
    
        },
         

    status: {

      type: String,

      required: true,
      _id: false 

    },

      },
     
    }]

  });
  
    
module.exports = mongoose.model('Format',jsonSchema)