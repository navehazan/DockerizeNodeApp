const express = require('express');
const router = express.Router();
const XlApiController = require('../controllersApi/xl.api.controller');
const xlApiController = new XlApiController();
router
    .post('/create', xlApiController.create.bind(xlApiController))
    .put('/update/', xlApiController.update.bind(xlApiController))
    .get('/get/', xlApiController.get.bind(xlApiController))
    .get('/get/:id', xlApiController.get.bind(xlApiController))
    .delete('/delete/:id', xlApiController.delete.bind(xlApiController));

module.exports = router;
