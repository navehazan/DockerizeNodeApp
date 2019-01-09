const response = require('./response.json');
const sendResponse = function(res, responseData, next) {
    res.locals.response = {
        status: response.status.ok,
        message: response.successMessage,
        data: responseData,
    };
    next();
};

module.exports = sendResponse;

