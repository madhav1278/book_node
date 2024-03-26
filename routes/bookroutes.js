const express = require('express');
const router = express.Router();
const db=require('./../db');
const book = require('./../models/book');

router.post("/",(req,res) => {
  var book_title= req.body.book_title
  var author_name=req.body.author_name
  var publisher_name=req.body.publisher_name
  var published_year=req.body.published_year
  var ISBN=req.body.ISBN
  var quantity=req.body.quantity

  var data={
      "book_title":book_title,
      "author_name":author_name,
      "publisher_name":publisher_name,
      "published_year":published_year,
      "ISBN":ISBN,
      "quantity":quantity
  }
  db.collection('book').insertOne(data,(err,collection) => {
      if(err){
          throw err;
      }
      console.log("Record Inserted Succesfully")
  })
  return res.send('data saved')
})
module.exports = router;