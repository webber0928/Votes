// npm install express
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format
    , express = require('express')
    , cons = require('consolidate')
    , app = express();

  app.engine('html', cons.swig);
  app.set('view engine', 'html');
  app.set('views', __dirname + '/views/');

//連接資料庫
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
  var collection = db.collection('test_insert');//連接資料表
  //~ collection.insert({
    //~ aaa:54545621546
    //~ },function(err, docs) {
      //~ console.log(docs)
      //~ });
  //~ collection.remove({
      //~ name: "Andy"
    //~ },function(err, docs) {
      //~ console.log(docs)
    //~ });
    //~ var BSON = require('mongodb').BSONPure;
    //~ var o_id = new BSON.ObjectID('5316f39121b6236040000001');
  //~ collection.update(
   //~ { _id: o_id },
   //~ {
      //~ $set: {
        //~ price: 20,
        //~ bbb:[546,564]
        //~ }
   //~ },
   //~ function(err, docs) {
     //~ console.log(docs)
     //~ });
//~
  //~ collection.find().toArray(function(err, docs) {
    //~ console.log(docs)
  //~ });
    app.get('/', function(req, res){
      res.render('first', {
        title: 'Hello',
      });
    });
});
app.listen(3000);
console.log('Express server listening on port 3000');
