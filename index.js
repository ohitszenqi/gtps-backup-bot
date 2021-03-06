var http = require('http'),
    url = require('url'),
    fs = require('fs');
 
 
//create the http server listening on port 3333
http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
     
    if (typeof query.file === 'undefined') {
        //specify Content will be an attachment
        res.setHeader('Content-disposition', 'attachment; filename=backup.zip');
        res.setHeader('Content-type', 'application/zip');
        res.end("Hello, here is a file for you!");
    } else {
        //read the image using fs and send the image content back in the response
        fs.readFile('/storage/emulated/0/back/' + query.file, function (err, content) {
            if (err) {
                res.writeHead(400, {'Content-type':'application/zip'})
                console.log(err);
                res.end("No such file");    
            } else {
                //specify Content will be an attachment
                res.setHeader('Content-disposition', 'attachment; filename='+query.file);
                res.end(content);
            }
        });
    }
 
}).listen(3333);
console.log("Server running at http://localhost:3333/");