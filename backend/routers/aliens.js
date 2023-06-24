const express = require('express');

const router = express.Router();

const Format = require('../models/data');



//getting the json format


// router.get('/sec', async (req, res) => {

//   try {

//     const jsonData = await Format.find()

//     res.json(jsonData)


//   } catch (error) {

//     res.status(500).json({ error: 'internal server error' })

//   }

// })




// router.post('/data', async (req, res) => {

//   console.log(req.body, 'sending data')

//   const query = {

//     query: {

//       query_string: {

//         order_number: req.body.order_number

//       }

//     }

//   };

//   try {
//     const newQuery = new Format(query);

//     const savedQuery = await newQuery.save();

//     res.json(savedQuery);

//   } catch (error) {

//     res.status(500).json({ error: 'Failed to save query' });
//   }
// });


// //geting the json format by ordernumber

// //     router.get('/aliens/:orderNumber', (req, res) => {
    
// //       console.log(req.params)

// //   const orderNumber = req.params.orderNumber;

// //   console.log(orderNumber)

  
// //   Format.findOne({ 'query.query_string.order_number': `_id:${orderNumber}` }, (err, alien) => {

// //     if (err) {

// //       console.error(err);

// //       res.status(500).send('Error retrieving data from the database');

// //     } else if (!alien) {

// //       res.status(404).send('Data not found');

// //     } else {
      
// //       res.json(alien);
      
// //     }

// //   });

// // });


// router.get('/aliens/:id', (req, res) => {

//   console.log(req.params,"dgdui")

//   const id = req.params.id;
//   console.log(id)

//   Format.findById(_id, (err, alien) => {

//     if (err) {

//       console.error(err);

//       res.status(500).send('Error retrieving data from the database');

//     } else if (!alien) {
//       res.status(404).send('Data not found');
      
//     } else {
//       const formattedData = {
//         query: {
//           query_string: {
//             query: alien.query.query_string.query
//           }
//         },
//         // _id: alien._id,
//         // __v: alien.__v
//       };
//       res.json(formattedData);
//     }

//   });

// });


// //using the id fetching the formatted data

//  router.get('/',async (req, res) => {

//  console.log(req.params.id,"qwerty-keyboard")

//   const id = req.params.id;
  
//   console.log(id)

//  const name =  await Format.findById({ _id: id }, (err, alien) => {

//   console.log(name)

//     if (err) {

//       console.error(err);

//       res.status(500).send('Error retrieving data from the database');

//     } else if (!alien) {

//       res.status(404).send('Data not found');

//     } else {
//       res.json(alien);
//     }
//   });

// });





//   router.get('/:orderNumber', (req, res) => {

//   const orderNumber = req.params.orderNumber;

//   Format.findOne({ 'query.query_string.order_number': orderNumber })

//     .exec()

//     .then(data => {

//       if (!data) {

//         res.status(404).send('Data not found');

//       } else {

//         const formattedData = {

//           order_number: data.query.query_string.order_number,
            
          
//           // _id: data._id,

//           // __v: data.__v

//         };

//         res.json(formattedData);

//       }
//     })

//     .catch(err => {

//       console.error(err);


//       res.status(500).send('Error retrieving data from the database');

//     });
// });



//new post request

 router.post('/date', async (req, res) => {

  console.log(req.body, 'sending data');

  const { order_number, stamp, status } = req.body;

  const query = {

    query: {

      query_string: {

        order_number: order_number
      
      }
    },

    stamp: stamp,

    status: status

  };

  try {

    const newQuery = new Format(query);

    const savedQuery = await newQuery.save();

    res.json(savedQuery);

  } catch (error) {

    res.status(500).json({ error: 'Failed to save query' });

  }
});



// //new get

// router.get('/:orderNumber', (req, res) => {

//   const orderNumber = req.params.orderNumber;

//   Format.findById({ 'query.query_string.order_number.stamp.status': orderNumber })

//     .exec()

//     .then(data => {

//       if (!data) {

//         res.status(404).send('Data not found');

//       } else {

//         res.json(data);

//       }

//     })
//     .catch(err => {

//       console.error(err);

//       res.status(500).send('Error retrieving data from the database');

//     });
// });



// router.get('/:order_number', (req, res) => {
//   try {
//     const orderNumber = req.params.order_number;

//     if (!orderNumber) {
//       return res.status(400).send('Order number is required');
//     }

//     Format.findOne({ 'query.query_string.order_number': orderNumber })
//       .exec()
//       .then(alien => {
//         if (!alien) {
//           return res.status(404).send('Data not found');
//         }
//         res.json(alien);
//       })
//       .catch(err => {
//         console.error(err);
//         res.status(500).send('Error retrieving data from the database');
//       });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });




// router.get('/:order_number', (req, res) => {
//   try {
//     const orderNumber = req.params.order_number;

//     if (!orderNumber) {
//       return res.status(400).send('Order number is required');
//     }

//     Format.findOne({ 'query.query_string.order_number': orderNumber })
//       .exec()
//       .then(alien => {
//         if (!alien) {
//           return res.status(404).send('Data not found');
//         }
//         res.json(alien);
//       })
//       .catch(err => {
//         console.error(err);
//         res.status(500).send('Error retrieving data from the database');
//       });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });



// router.get('/:order_number', (req, res) => {
//   try {
//     const orderNumber = req.params.order_number;

//     if (!orderNumber) {
//       return res.status(400).send('Order number is required');
//     }

//     Format.findOne({ 'query.query_string.order_number': orderNumber })
//       .exec()
//       .then(alien => {
//         if (!alien) {
//           return res.status(404).send('Data not found');
//         }

//         // Exclude _id and __v fields from the response
//         const { _id, __v, ...data } = alien.toObject();

//         res.json(data);
//       })
//       .catch(err => {
//         console.error(err);
//         res.status(500).send('Error retrieving data from the database');
//       });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });


// router.get('/:order_number', (req, res) => {
//   try {
//     const orderNumber = req.params.order_number;

//     if (!orderNumber) {
//       return res.status(400).send('Order number is required');
//     }

//     Format.findOne({ 'query.query_string.order_number': orderNumber })
//       .exec()
//       .then(alien => {
//         if (!alien) {
//           return res.status(404).send('Data not found');
//         }

//         // Remove _id field from the top-level object
//         const data = alien.toObject();
//         delete data._id;
//         delete data._v;

//         // Remove _id field from nested objects within the query array
//         data.query.forEach(queryItem => delete queryItem._id);



//         res.json(data);
//       })
//       .catch(err => {
//         console.error(err);
//         res.status(500).send('Error retrieving data from the database');
//       });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });


router.get('/:order_number', (req, res) => {

  try {

    const orderNumber = req.params.order_number;
    
   console.log(orderNumber)

    if (!orderNumber) {

      return res.status(400).send('Order number is required');

    }


    Format.findOne({ 'query.query_string.order_number': orderNumber })

      .select('-_id -__v ') // Exclude _id and __v fields from the response

      .exec()

      .then(alien => {

        if (!alien) {

          return res.status(404).send('Data not found');
        }

        res.json(alien);
      })

      .catch(err => {

        console.error(err);

        res.status(500).send('Error retrieving data from the database');
      });

  } catch (error) {

    console.error(error);

    res.status(500).send('Server error');
  }
});



module.exports = router;










