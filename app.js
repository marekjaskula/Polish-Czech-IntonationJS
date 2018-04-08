
var Symulacja;					//zmienna logiczna
	Symulacja = true;			//symulacja
	// Symulacja = true;			//przyciski	

var webSocketServer = require('ws').Server;
var http = require('http');
var fs = require('fs');

var webSocketServerObject = new webSocketServer({port: 8090});




// if (Symulacja == false){
	// var timeout = 3000;
	// var wpi = require('wiring-pi');
// }


var ReadFlagEnable = 1;

//z app
var path = require('path');
var appDir = path.dirname(require.main.filename);
var csvWriter = require('csv-write-stream');


// var pins = ["L", "M", "R"];

var ReadFlagEnable = false;

var startTimeout = null;

var reactionTime = 0;
//z app


webSocketServerObject.on('connection', function(socketObject) {

//old
    socketObject.on('message', function(message) {
        //       console.log('The ' + message + ' Message Received from \n from IP ' + socketObject.upgradeReq.connection.remoteAddress);
        console.log(message);

        if (message=="true") ReadFlagEnable = 0;

        socketObject.send("Received " + message +"\n");
    });
//old



//new onmessage
socketObject.on('message', function(message) {
        //console.log('The ' + message + ' Message Received from \n from IP ' + socketObject.upgradeReq.connection.remoteAddress);
        var parsedMessage;

        try {
            parsedMessage = JSON.parse(message);

            socketObject.send("Received " + message);

            ReadFlagEnable = parsedMessage.command === 'start';

            if(ReadFlagEnable) {
                reactionTime = Date.now();
            }

            if(parsedMessage.command === 'csv') {
                handleCSV(parsedMessage.payload);
            }

		    if(parsedMessage.command === 'upload_audio') {
                // uploadAudio(parsedMessage.payload.src, parsedMessage.payload.filename,  parsedMessage.payload.wavName, parsedMessage.payload.nameFolder);
                uploadAudio(parsedMessage.payload.src, parsedMessage.payload.filename, parsedMessage.payload.wavName, parsedMessage.payload.tempLicz, parsedMessage.payload.imgs, parsedMessage.payload.nameFolder);
            }
        }
        catch(exepction) {

        }
    });
//new onmessage


    socketObject.on('close', function(c, d) {
        console.log('Disconnect ' + c + ' -- ' + d);
    });


	
//z app generowanie csv
    function handleCSV(payload) {
        //var baseFolder = appDir + '\\DATA\\';
		var baseFolder = appDir + '//DATA//';

        var folder = baseFolder + decodeURIComponent(payload.nameFolder);
        //var fileName = folder + '\\' + decodeURIComponent(payload.filename) + '.csv';
		var fileName = folder + '//' + decodeURIComponent(payload.filename) + '.csv';

        if(!fs.existsSync(baseFolder)) {
            fs.mkdirSync(baseFolder);
            console.log('mkDirsync');
        }

        if(!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
        }

        var headers = [];
        Object.keys(payload.data).forEach(function(header) {
            headers.push(decodeURIComponent(header));
        });

        var data = [];
        headers.forEach(function(header) {
            data.push(decodeURIComponent(payload.data[header]));
        });

        var writer = csvWriter({headers: headers, separator: ';'})
        writer.pipe(fs.createWriteStream(fileName));
        writer.write(data);
        writer.end();
    }
//z app generowanie csv

		
//z app upload audio	
function uploadAudio(blob, fileName, wavName, tempLicz, imgs, nameFolder) {
        var buf = new Buffer(blob, 'base64');
        // fs.writeFile('DATA/' + nameFolder + '/' + fileName + wavName + "__" + tempLicz + ".wav", buf, function(err) {
        fs.writeFile('DATA/' + nameFolder + '/' + fileName + '_' + wavName + ".wav", buf, function(err) {
            if(err) {
                console.log("err", err);
            }
            else {
                //return res.json({'status': 'success'});
            }
        });

        }
//z app upload audio	
	
	
	
	


});	//koniec "webSocketServerObject.on('connection', function(socketObject) {...... "

var server = http.createServer(function(req, resp) {
});

server.listen(5050);
console.log('Server started');

