const express = require('express');
const router = express.Router();
const BusListModel = require('../models/BusListmodel')



router.get('/list',async (req,res)=>{
    const bus = await BusListModel.find();
    // console.log(bus);
    res.status(200).json(bus);
})

router.post('/create',async (req,res)=>{
    const bus = await BusListModel.create(req.body);
    console.log(bus);
    res.status(200).json(bus);
})


router.get('/list/:bus_id',async (req,res)=>{
    const id = req.params.bus_id;
    const bus = await BusListModel.find({"bus_id":id})
    console.log(bus);
    res.status(200).send(bus);
})


// router.put('/list/:bus_id/update')

module.exports = router;