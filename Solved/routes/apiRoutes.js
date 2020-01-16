// Pull in data to use in API Routes

var tableData = require('../data/tableData');
var waitingListData = require ('../data/waitinglistData')

module.exports = function (app) {
    app.get('/api/tables', function(req, res){
        res.json(tableData);
    })
    app.get('/api/reservations', function(req, res) {
        res.json(waitingListData);
    })
}