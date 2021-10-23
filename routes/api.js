const express = require ('express');
const router =express.Router();
const Note = require('../models/modelNote.js');

router.post('/save',function (req,res){
  const title = req.body.title;
  const content = req.body.content;

  const newNote = new Note ({
    title,content
  });
  newNote.save();
  });

router.get('/notes',function(req,res){
  Note.find()
  .then(foundNotes =>{
    res.json(foundNotes);
  });
});


router.post('/delete',function(req,res){
 const delTitle=req.body.title;

 Note.deleteOne({title: delTitle }, (err) =>{
   if(err){
       console.log(err);
   }else{
     console.log("deleted");
   }
});
});

module.exports = router;
