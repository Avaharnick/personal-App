/*
  todo.js -- Router for the ToDoList
*/
const express = require('express');
const router = express.Router();
const DogData= require('../models/DogData')


/*
this is a very simple server which maintains a key/value
store using an object where the keys and values are lists of strings

*/

// isLoggedIn = (req,res,next) => {
//   if (res.locals.loggedIn) {
//     next()
//   } else {
//     res.redirect('/login')
//   }
// }

//get the value associated to the key
router.get('/',
  //isLoggedIn,
  async (req, res, next) => {
    try{
      res.locals.dogInfo = await DogData.find({})
      res.render('dogData');
    }catch(err){
      console.log('Error in  dog')
            console.dir(err)
            next(err)
    }

});

// router.get((req, res)'/test')=> {
//     res.render('test');
// });
/* add the value in the body to the list associated to the key */
router.post('/',
  //isLoggedIn,
  async (req, res, next) => {
      const dogData = new DogData(
        {name:req.body.name,
          age:req.body.age,
         createdAt: new Date(),
        })
      await dogData.save();
      //res.render("todoVerification")
      res.redirect('/dog')
});

// router.get('/:dogId',
//   //isLoggedIn,
//   async (req, res, next) => {
//       const dogId = req.params.dogId
//       res.locals.dog= await DogData.findOne({_id:dogId})
//       //res.locals.courses = await IndMinorCourse.find({minorId:minorId})
//       //console.log(`courses=${JSON.stringify(res.locals.courses)}`)
//       res.render('dogDataPage');
// });

// router.get('/delete/:dogId',
// //  isLoggedIn,
//   async (req,res,next) => {
//       // delete the minor from the collection of minors
//       await DogData.remove({_id:req.params.dogId})
//       // also delete all of the courses associated with that minor!
//       await DogData.remove({dogId:req.params.dogId})
//       res.redirect('/')
// })


/* add the value in the body to the list associated to the key */



// handle data about adding new course to a minor
// router.post('/addDog/:dogId',
//   //isLoggedIn,
//   async (req, res, next) => {
//       const dogdata =
//       {name:req.body.name,
//        dogId:req.params.dogId,
//        createdAt: new Date(),
//        age: req.body.age
//       }
//       // console.log("imdata = ")
//       // console.dir(imdata)
//       const doginfo = new DogData(dogdata)
//       await doginfo.save();
//       //res.render("todoVerification")
//       res.redirect('/dog/'+req.params.dogId)
// });

module.exports=router;
