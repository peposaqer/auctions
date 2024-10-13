const express = require('express');
const test = require('../controllers/testcontroller/test');

const authMiddleware = require('../middleware/authMiddleware');

const mult = require('../utils/multer');
const AppError = require('../utils/appError');
const router = express.Router();

  router.post('/',(req,res)=>{  
    console.log(req.body)    
    res.status(200).json({message:"success",body:req.body});
  });
  


module.exports = router;







