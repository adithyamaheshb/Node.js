var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

//Limit the result to a certain count
MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find().limit(5).toArray(function (err, res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});