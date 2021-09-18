const Pirates = require("../models/pirates.model");

module.exports.findAllPirates = (req, res) =>{
    Pirates.find({}).collation({locale:"en"}).sort({name:1})
    .then(allPirates => res.json({results:allPirates}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.getSinglePirate = (req, res) => {
    Pirates.findOne({_id:req.params._id})
    .then(singlePirate => res.json({results:singlePirate}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.createPirate = (req, res) => {
    Pirates.create(req.body)
    .then(newPirate => res.json({results:newPirate}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.updatePirate = (req, res) => {
    Pirates.updateOne({_id:req.params._id},
    {$set: {name:req.body.name, imgURL:req.body.imgURL, numChests:req.body.numChests, phrase:req.body.phrase, position:req.body.position, pegLeg:req.body.pegLeg, eyePatch:req.body.eyePatch, hookHand:req.body.hookHand }},{runValidators:true})
    .then(singlePirate => res.json({results:singlePirate}))
    .catch(err => res.json({message:"bummer", err}))
}
module.exports.deletePirate = (req,res) => {
    Pirates.deleteOne({_id:req.params._id})
    .then(deletePirate => res.json({results:deletePirate}))
    .catch(err => res.json({message:"bummer", err}))
}