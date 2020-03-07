const express = require('express');
const router = express.Router();
const p =require('../models/model');
  router.get('/', (req, res,next) => {
      p.find()
      .then((result)=>
      {
          res.json(result);
          console.log(result);
      })
     .catch (err=> console.log(err)) 
  });

  router.post('/employees', (req, res , next) => {
    const name = req.body.name;
    const area = req.body.area;
    Newemp =new p({
        name : name,
        area : area
    });
    Newemp.save()
    .then(resp=>
        {
            res.json(resp);
            
        })
        .catch(err => console.log(err));
  });

router.put('/update/:id',(req,res,next)=>
{
 let id = req.params.id;
 p.findById(id)
 .then( emp=>
    {
        emp.name = req.body.name;
        emp.area = req.body.area;
        emp.save()
        .then(emp =>
            {
                res.send({message:'employee updated successfully' , status :'success', emp:emp})
                console.log(emp);
            })
            .catch(err => console.log(err));
    })
    .catch(err=> console.log(err));
});

router.delete('/:id',(req,res,next)=>
{
    let id = req.params.id;
    p.findById(id)
    .then( emp=>
       {
           emp.delete()
           .then(emp =>
               {
                   res.send({message:'employee deleted successfully' , status :'success', emp:emp})
                   console.log(emp);
               })
               .catch(err => console.log(err));
       })
       .catch(err=> console.log(err));
});
module.exports = router;

