const express=require('express')
const router=express.Router();
const alienSchema = require('../models/alienSchema')

// router.get('/',function(req , res){
//     // console.log('Get request')
//     res.send('Getting request from app.js');
// })

router.get('/' , async(req , res) =>{
  const aliens_get = await alienSchema.find()
  res.send(aliens_get);
})

router.get('/:id' , async(req , res) =>{
    const alien_get = await alienSchema.findById(req.params.id)
    res.send(alien_get);
  })

router.post('/',async(req , res) => {
 const alien = new alienSchema({
     name: req.body.name,
     tech: req.body.tech,
     sub: req.body.sub
 })
 
 try{
  const aliens_post =await alien.save();
  res.send(aliens_post);
 }catch(err){
    console.log(err)
 }
})

module.exports = router