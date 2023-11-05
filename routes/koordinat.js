var express = require('express');
var router = express.Router();
const pointController = require('../controller/pointController');
const lineController = require('../controller/lineController');
const polygonController = require('../controller/polygonController');

//point
router.get('/point', pointController.getPoint);
router.post('/point/add', pointController.createPoint);
router.put('/point/edit/:id_point', pointController.editPoint);
router.delete('/point/delete/:id_point', pointController.deletePoint);

//line
router.get('/line', lineController.getLine);
router.post('/line/add', lineController.createLine);
router.put('/line/edit/:id_line', lineController.editLine);
router.delete('/line/delete/:id_line', lineController.deleteLine);

//polygon
router.get('/polygon', polygonController.getPolygon);
router.post('/polygon/add', polygonController.createPolygon);
router.put('/polygon/edit/:id_polygon', polygonController.editPolygon);
router.delete('/polygon/delete/:id_polygon', polygonController.deletePolygon);


module.exports = router;