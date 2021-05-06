const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const data = await Tag.findAll(
      {
        include:
        [{
          model: Product
          }
        ]});
  res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json(err);
 
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const data = await Tag.findByPk(req.params.id,
      {
        include:
        [{
          model: Product
          
        }]});
    res.status(200).json(data);
     }
     catch(err){
      console.log(err);
      res.status(500).json(err);
     }
});

router.post('/', async (req, res) => {
  try {
    const data = await Tag.create(req.body);
    res.status(200).json(data);
     }
     catch(err){
      console.log(err);
      res.status(500).json(err);
     }
});

router.put('/:id', async (req, res) => {
  try {
    const data = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where:{
          id: req.params.id
        }
      }
    );
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
   }

});

router.delete('/:id', async (req, res) => {
  try{
    const data = await Tag.destroy(
      {
        where:{
          id:req.params.id
        }
      }
    );
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
   }
});

module.exports = router;
