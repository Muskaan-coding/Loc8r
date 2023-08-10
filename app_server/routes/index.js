var express = require('express');
var router = express.Router();
var ctrllocations=require('../controllers/locations');
var ctrlothers=require('../controllers/others');
var ctrlsignin=require('../controllers/sign');

router.get('/',ctrllocations.homelist);
router.get('/location',ctrllocations.locationInfo);
router.get('/location1',ctrllocations.locationInfo1);
router.get('/location2',ctrllocations.locationInfo2);
router.get('/location/review/new',ctrllocations.addreview);
router.get('/about',ctrlothers.about);
router.get('/signin',ctrlsignin.signin);

module.exports = router;
