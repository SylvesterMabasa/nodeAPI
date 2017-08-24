const Park = require('../models/parksModels');

module.exports.addPark =  (req, res, next) => {
	let prk = new Park(req.body);
	prk.save(function(err, park) {
    if (err)
      res.send(err);
    res.json(park);
  });
}

module.exports.getPark = (req, res, next) => {
	
Park.findOne({_id: req.params.id}, req.body, {new: true}, function(err, park) {
    if (err)
      res.send(err);
    res.json(park);
  });
}

module.exports.getAllParks = (req, res, next) => {
	Park.find({}, function(err, park) {
    if (err)
      res.send(err);
    res.json(park);
  });
}



module.exports.updatePark = (req, res, next) =>{
	Park.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, park) {
    if (err)
      res.send(err);
    res.json(park);
  });
}

module.exports.deletePark = (req, res, next) => {
	Park.remove({
    _id: req.params.id
  }, function(err, park) {
    if (err)
      res.send(err);
    res.json({ message: 'Park successfully deleted' });
  });
}

