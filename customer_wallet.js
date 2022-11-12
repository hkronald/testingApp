var http = require('http');
var url = require('url');
var util = require('util');
 

var customerID = 1234;
var cMMD = 1000;


//cMMD = 1000;

var merchantID;
var c_Type;
var c_product;
var c_quantity;
var c_point;

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
 
    res.write("cMMD - " + cMMD);

    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("Merchant - " + params.merchant);
    res.write("\n");
    if (params.Type < 2){
      res.write("Type - BUY");
    }else{
      res.write("Type - REDEEM");
      cMMD = cMMD - params.point * params.quantity;
    }
    
    res.write("\n");
    res.write("Product - " + params.product);
    res.write("\n");
    res.write("Quantity - " + params.quantity);
    res.write("\n");
    res.write("Customer ID - " + customerID);
    res.write("\n");
    res.write("cMMD - " + cMMD);
    res.write("\n");
    res.write("point - " + params.point);

    c_Type = params.Type;
    c_product = params.product;
    c_quantity = params.quantity;
    

    //if (cMMD < 940){
      res.end();
    //}
      
 
}).listen(8080);
//}).listen(80, "192.168.1.1");