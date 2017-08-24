 const express = require('express');
const router = express.Router();
const parks = require('../controllers/parksController');

router.get('/', parks.getAllParks);
router.get('/:id', parks.getPark);
router.post('/', parks.addPark);
router.put('/:id', parks.updatePark);
router.delete('/:id', parks.deletePark);

module.exports = router;