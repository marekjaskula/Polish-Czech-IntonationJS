//<script type="text/javascript">
var NrZestawu=0
var IdZestawu="";
var AudioSource = "";






var ReactionTime = 0;
var time = 0;
var progress = 0;
var start = null;
var startTimout = null;
var timeLimit = 5200;                //limit czas max do generowania zmiennnego czasu (symulacja)
var koniecEtapu = 24;				//ilosc wariantow = 8 x 3
var soundAfterImagesTime;
	soundAfterImagesTime = 100;
var showedAlready;	
	showedAlready = false;
 
var communication = "";
 
 
 
 
var symulacja;						//zmienna taka sama jak na node OBIE trzeba ustawić
	symulacja == true;				//w pracy na RPi musi być "false"


var IdBazowe;
IdBazowe = "IDBazowe";
var imageDir;
imageDir = 'Pics/';                          // change to match images folder

var soundSource;					//które dzwieki są odtwarzanie

// SoundSource = "Child";  //or "Child"  "Peer"  -->
// SoundSource = "Peer";  //or "Child"  "Peer"  -->
// SoundSource = "Adult";  //or "Child"  "Peer"
var ws;

var etap3Index = 0;
var etap4Index = 0;

var wyniki = new Array();
var wynikicztery = new Array();


var biezacyEtap = 1;

// window.onload = function() {
$(document).ready(function() {
    var selector = 'a.etap';
    var etapy = $(selector);

    etapy.on('click', function() {
        var href = $(this).attr('href');
        if(href) {
            biezacyEtap = (Number((href.replace('#', ''))));
        }
    });

    etapy[0].click();
});














function serwerStart() {
    $(document).ready(function() {

        ws = new WebSocket("ws://localhost:8090");
       

//dla #3
        // $("#nextBtnEtap3").on('click', function() {
// //                var message = $("#message").val();
            // // var message = "start";
            // // progress = 0;
            // // //         $('.animate').width(progress);
            // // ws.send(JSON.stringify({command: 'start'}));
            // // communication += 'Send Message ' + message;

            // if(start === null) {

                // // start = setInterval(function() {
                // //     progress =  progress + 5;
                // //     $('.animate').width(progress + "%")
                // // }, 150)

                // //            $("#dvMessage").html('start');

                // if(startTimout === null) {
                    // startTimout = setTimeout(function() {
                        // ws.send(JSON.stringify({command: 'stop'}));
                        // //                    $("#dvMessage").html('stop');
                        // clearInterval(start);
                        // clearTimeout(startTimout);
                    // }, timeLimit);
                // }
            // }
        // });
		
		


//dla #4
        // $("#nextBtnEtap4").on('click', function() {
// //                var message = $("#message").val();
            // // var message = "start";
            // // progress = 0;
            // // //         $('.animate').width(progress);
            // // ws.send(JSON.stringify({command: 'start'}));
            // // communication += 'Send Message ' + message;

            // if(start === null) {

                // // start = setInterval(function() {
                // //     progress =  progress + 5;
                // //     $('.animate').width(progress + "%")
                // // }, 150)

                // //            $("#dvMessage").html('start');

                // if(startTimout === null) {
                    // startTimout = setTimeout(function() {
                        // ws.send(JSON.stringify({command: 'stop'}));
                        // //                    $("#dvMessage").html('stop');
                        // clearInterval(start);
                        // clearTimeout(startTimout);
                    // }, timeLimit);
                // }
            // }
        // });

        var info;

        function sendTrue(info) {	//wysyla wiadomosc do serwera node
            var message = info;
            ws.send(message);
            communication += message;

            //    $("#dvMessage").html(communication);   //wyswietla message na ekranie (np. wartosc )
        }

        function anscmp(a, b) {								//porownuje dwa Stringi (Odpowiedzi)
            if(a.toString() === b.toString()) {
                return 1;
            }
            return 0;
        }

        ws.onmessage = function(evt) {
            try {
                var result = JSON.parse(evt.data);

                // if(result.hasOwnProperty('pin')) {
                    // switch(result.pin) {
                        // case "M":
                            // $("#czerwony").animate({top: '20px'}, 100).animate({top: '0px'}, 100);
                            // $("#czerwony4").animate({top: '20px'}, 100).animate({top: '0px'}, 100);
                            // break;
                        // case "L":
                            // $("#niebieski").animate({top: '20px'}, 100).animate({top: '0px'}, 100);
                            // $("#niebieski4").animate({top: '20px'}, 100).animate({top: '0px'}, 100);
                            // break;
                        // case "R":
                            // // ReactionTime = (time - Date.now()) / 1000;

                            // $("#zielony").animate({top: '20px'}, 100).animate({top: '0px'}, 100);
                            // $("#zielony4").animate({top: '20px'}, 100).animate({top: '0px'}, 100);
                            // //sendTrue("Reaction Time = " + ReactionTime);
                            // // sendTrue("Reaction Time = " + ReactionTime);
                            // break;
                    // }

                    // clearInterval(start);
                    // clearTimeout(startTimout);
                    // start = null;
                    // startTimout = null;

                    // //$("#dvMessage").html('stop with pin ' + result.pin + ', reaction time = '
                    // //    + result.reaction + ' ms');

                    // //progress = 0;

                    // //format danych
                    // // dla #3

                    // // if(biezacyEtap === 3) {
						   // // $("#dvMessage3").html('stop with pin ' + result.pin + ', reaction time = '
                        // // + result.reaction + ' ms');



                        // // wyniki.push(
                            // // {
                                // // set: [etap3Index-1],
                                // // soundSource: 'soundAdult',
                                // // sound: PicsArray[order[etap3Index-1]][0],
                                // // //Pic_1: PicsArray[order[i]][1],
                                // // //Pic_2: PicsArray[order[i]][2],
                                // // //Pic_3: PicsArray[order[i]][3],
                                // // loc: PicsArray[order[etap3Index-1]][4],
                                // // ans: result.pin,
                                // // correct: anscmp(PicsArray[order[etap3Index-1]][4], result.pin),
                                // // reaction: result.reaction/1000
                            // // }
                        // // );
						// // //if (symulacja == true){
						// // //	$('#nextBtnEtap3').click();	 //automatyczna zmina - autoClick
						// // //}
 					// // }

                    // // dla #4  /wrzuca do zmiennej wynikiczery  
                    // // if(biezacyEtap === 4) {
						   // // $("#dvMessage4").html('stop with pin ' + result.pin + ', reaction time = '
                        // // + result.reaction + ' ms');
                        // // wynikicztery.push(
                            // // {
                                // // set: [etap4Index-1],
                                // // soundSource: 'soundChild',
                                // // sound: PicsArray[order[etap4Index-1]][0],
                                // // //Pic_1: PicsArray[order[i]][1],
                                // // //Pic_2: PicsArray[order[i]][2],
                                // // //Pic_3: PicsArray[order[i]][3],
                                // // loc: PicsArray[order[etap4Index-1]][4],
                                // // ans: result.pin,
                                // // correct: anscmp(PicsArray[order[etap4Index-1]][4], result.pin),
                                // // reaction: result.reaction/1000
                            // // }
                        // // );
						// // //if (symulacja == true){
						// // //	$('#nextBtnEtap4').click();	//automatyczna zmina - autoClick
						// // //}
					// // }
                // }

                 					// AutoClick
                //$('#imageButton4').click();
            }
            catch(event) {
            }

        };

// if(biezacyEtap === 3) {
        // ws.onclose = function(evt) {
            // communication += 'Conenction Closed ' + evt.code;
            // $("#dvMessage3").html(communication);
        // };

        // ws.onerror = function(evt) {
            // communication += 'Error Occured ' + evt.data;
            // $("#dvMessage3").html(communication);
        // };
// }


// if(biezacyEtap === 4) {
        // ws.onclose = function(evt) {
            // communication += 'Conenction Closed ' + evt.code;
            // $("#dvMessage4").html(communication);
        // };

        // ws.onerror = function(evt) {
            // communication += 'Error Occured ' + evt.data;
            // $("#dvMessage4").html(communication);
        // };
// }




    });
}


// generowanie pliku csv po stronie clienta z danych "wyniki" lub "wynikicztery"
// function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    // //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    // var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

    // var CSV = '';
    // //Set Report title in first row or line

    // //CSV += ReportTitle + '\r\n\n';

    // if(ShowLabel) {					//pierwszy wiersz
        // var row = "Id Base ;";

        // //This loop will extract the label from 1st index of on array
        // for(var index in arrData[0]) {
            // row += index + ';'; 		//Now convert each value to string and semicolon-seprated
        // }
        // row = row.slice(0, -1);
        // CSV += row + '\r\n';			//append Label row with line break
    // }

    // //1st loop is to extract each row
    // for(var i = 0; i < arrData.length; i++) {
        // // var row = IdBazowe; //pierwsza  kolumna
        // // var row = FileName; //pierwsza  kolumna
        // var row = ReportTitle; //pierwsza  kolumna

        // for(var index in arrData[i]) {			//2nd loop will extract each column and convert it in ";" seprated
            // //row += '"' + arrData[i][index] + '",';
            // row += ';' + arrData[i][index];
        // }

        // row.slice(0, row.length - 1);
        // CSV += row + '\r\n';					//add a line break after each row
    // }

    // if(CSV == '') {
        // alert("Invalid data");
        // return;
    // }

    // //Generate a file name
    // //var fileName = "MyReport_";
    // //this will remove the blank-spaces from the title and replace it with an underscore
    // //fileName += ReportTitle.replace(/ /g,"_");

    // //Initialize file format you want csv or xls
    // var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

    // // Now the little tricky part.
    // // you can use either>> window.open(uri);
    // // but this will not work in some browsers
    // // or you will not get the correct file extension

    // //this trick will generate a temp <a /> tag
    // var link = document.createElement("a");
    // link.href = uri;

    // //set the visibility hidden so it will not effect on your web-layout
    // link.style = "visibility:hidden";
    // //link.download = fileName + ".csv";
    // // link.download = IdBazowe + ReportTitle + ".csv";
    // link.download = FileName + ReportTitle + ".csv";

    // //this part will append the anchor tag and remove it after automatic click
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
// }




// function ExportCSVwyniki(JSONData, ReportTitle, ShowLabel)
// {
		 // var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
		 // var CSV = '';
		 
		 // for(var i = 0; i < arrData.length; i++) {
			// // var row = ReportTitle; 					//pierwsza  kolumna
			// var row = window.userData.filename; 					//pierwsza  kolumna

			// for(var index in arrData[i]) {			//2nd loop will extract each column and convert it in ";" seprated
				// //row += '"' + arrData[i][index] + '",';
				// row += ';' + arrData[i][index];
			// }

			// row.slice(0, row.length - 1);
			// CSV += row + "\r\n";					//add a line break after each row
		// }
		
				
	// if(ws) {
		// ws.send(JSON.stringify({
			// command: 'csv',
			// payload: {
				// filename: encodeURIComponent(window.userData.filename + ReportTitle),
				// nameFolder: encodeURIComponent(window.userData.nameFolder),
				// data: {
					// CSV: encodeURIComponent(CSV)
					// }
			// }
		// }));
	// }
		
		
// }


// function fisherYates(array) {
    // var tmp, current, top = array.length;
    // if(top) {
        // while(--top) {
            // current = Math.floor(Math.random() * (top + 1));
            // tmp = array[current];
            // array[current] = array[top];
            // array[top] = tmp;
        // }
    // }
    // return array;
// }

			 // var images = ["startClip.jpg", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"]; 
			 // var images = ["startClip.jpg", "kasia2.jpg", "kasa2.jpg", "kasza2.jpg", "sanki2.jpg", "szafa2.jpg", "siatka2.jpg", "zabcia2.jpg", "slonko2.jpg", "rybka2.jpg"]; 
			// var images = ["startClip.jpg", "kasia2.jpg", "kasa2.jpg", "kasza2.jpg", "sanki2.jpg", "szafa2.jpg", "siatka2.jpg", "zabcia2.jpg", "slonko2.jpg", "rybka2.jpg"]; 
			 // var images = ["startClip.jpg", "kasia3.png", "kasa3.png", "kasza3.png", "sanki3.png", "szafa3.png", "siatka3.png", "zabcia3.png", "slonko3.png", "rybka3.png"];




var Zestaw = new Array(
["01","Co się tutaj dzieje?","Jan maluje lamy.","2"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Milena maluje maliny?","62"],
["19","Zapytaj, kto maluje mandarynki.","Kto maluje mandarynki?","75"],
["01","Co się tutaj dzieje?","Milena, Małgorzata, Ewa i Jan malują lamy.","19"],
["20","Zapytaj, jaki dom maluje Milena.","Jaki dom ona maluje?","76"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Milena maluje mandarynki?!","91"],
["01","Co się tutaj dzieje?","Ewa maluje lamy.","6"],
["07","Ewa kupuje maliny?","Nie. Ewa ma maliny.","40"],
["13","Jak się nazywa ta osoba?","Jan.","48"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Kto maluje dom? ","100"],
["30","Poproś Jana, żeby namalował Ci lamy.","Chodź! Namaluj mi lamy!","113"],
["04","Co maluje Ewa?","Ewa maluje maliny.","30"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Jan maluje lamy?","53"],
["03","Co maluje Jan?","Jan maluje dom.","24"],
["01","Co się tutaj dzieje?","Jan, Ewa, Milena i Małgorzata malują dom.","17"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Co maluje Jan?!","96"],
["02","Kto maluje maliny?","Małgorzata maluje maliny.","23"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Jaki dom maluje?","104"],
["11","Na drugiej stronie ulicy widzisz kolegę. Zawołaj go.","Jan!","44"],
["06","Co maluje Małgorzata?","Małgorzata maluje mandarynki.","39"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Małgorzata maluje lamy?!","93"],
["03","Co maluje Jan?","Jan maluje maliny.","26"],
["23","Zapytaj, jakie mandarynki maluje Milena. ","Jakie mandarynki ona maluje?","79"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Jan maluje mandarynki?","55"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Kto maluje maliny?","102"],
["15","Jesteś zainteresowany tym, co ta osoba maluje. Zapytaj","Co maluje Ewa?","69"],
["26","Ewa pyta, co powinna namalować","Namaluj lamy!","109"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Małgorzata maluje dom?","64"],
["01","Co się tutaj dzieje?","Jan maluje mandarynki.","4"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Milena maluje lamy?","61"],
["01","Co się tutaj dzieje?","Małgorzata maluje lamy.","14"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Małgorzata maluje lamy?","65"],
["01","Co się tutaj dzieje?","Ewa maluje maliny.","7"],
["09","Ewa kupuje maliny?","Nie. Ewa maluje maliny.","42"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Milena maluje maliny?!","90"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Ewa maluje mandarynki?","59"],
["28","Małgorzata pyta, co powinna namalować?","Namaluj mandarynki!","111"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Ewa maluje dom?","56"],
["13","Jak się nazywa ta osoba?","Ewa.","49"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Jan maluje dom?!","80"],
["22","Zapytaj, jakie maliny maluje Milena. ","Jakie maliny ona maluje?","78"],
["01","Co się tutaj dzieje?","Milena maluje mandarynki.","12"],
["02","Kto maluje maliny?","Ewa maluje maliny.","21"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Ewa maluje lamy?","57"],
["10","Ewa jadła maliny?","Nie. Ewa  malowała maliny.","43"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Małgorzata maluje dom?!","92"],
["05","Co maluje Milena?","Milena maluje lamy.","33"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Jan maluje dom?","52"],
["01","Co się tutaj dzieje?","Milena maluje dom.","9"],
["18","Zapytaj, kto maluje maliny.","Kto maluje maliny?","74"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Małgorzata maluje mandarynki?!","95"],
["04","Co maluje Ewa?","Ewa maluje mandarynki.","31"],
["08","Ewa je maliny?","Nie. Ewa widzi maliny.","41"],
["16","Zapytaj, kto maluje dom.","Kto maluje dom?","72"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Małgorzata maluje maliny?!","94"],
["01","Co się tutaj dzieje?","Milena maluje lamy.","10"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Małgorzata maluje maliny?","66"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Jakie mandarynki maluje?","107"],
["01","Co się tutaj dzieje?","Milena maluje maliny.","11"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Co maluje Małgorzata?!","99"],
["21","Zapytaj, jakie lamy maluje Milena.","Jakie lamy ona maluje?","77"],
["06","Co maluje Małgorzata?","Małgorzata maluje lamy.","37"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Milena maluje dom?","60"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Milena maluje lamy?!","89"],
["25","Jan pyta, co powinien namalować","Namaluj dom!","108"],
["15","Jesteś zainteresowany tym, co ta osoba maluje. Zapytaj","Co maluje Małgorzata?","71"],
["05","Co maluje Milena?","Milena maluje dom.","32"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Jan maluje lamy?!","81"],
["01","Co się tutaj dzieje?","Małgorzata maluje dom.","13"],
["06","Co maluje Małgorzata?","Małgorzata maluje dom.","36"],
["15","Jesteś zainteresowany tym, co ta osoba maluje. Zapytaj ","Co maluje Jan?","68"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Milena maluje mandarynki?","63"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Co maluje Ewa?!","97"],
["13","Jak się nazywa ta osoba?","Małgorzata.","51"],
["02","Kto maluje maliny?","Jan maluje maliny.","20"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Kto maluje mandarynki?","103"],
["02","Kto maluje maliny?","Milena maluje maliny.","22"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Ewa maluje maliny?!","86"],
["12","Na drugiej stronie ulicy widzisz koleżankę Zawołaj ją.","Milena!","46"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Ewa maluje lamy?!","85"],
["12","Na drugiej stronie ulicy widzisz koleżankę Zawołaj ją.","Ewa!","45"],
["03","Co maluje Jan?","Jan maluje lamy.","25"],
["27","Milena pyta, co powinna namalować","Namaluj maliny!","110"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Co maluje Milena?!","98"],
["06","Co maluje Małgorzata?","Małgorzata maluje maliny.","38"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Jan maluje mandarynki?!","83"],
["17","Zapytaj, kto maluje lamy.","Kto maluje lamy?","73"],
["13","Jak się nazywa ta osoba?","Milena.","50"],
["31","Poproś Jana, żeby namalował Ci maliny.","Chodź! Namaluj mi maliny!","114"],
["05","Co maluje Milena?","Milena maluje maliny.","34"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Małgorzata maluje mandarynki?","67"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Jan maluje maliny?!","82"],
["03","Co maluje Jan?","Jan maluje mandarynki.","27"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Ewa maluje mandarynki?!","87"],
["01","Co się tutaj dzieje?","Jan maluje dom.","1"],
["15","Jesteś zainteresowany tym, co ta osoba maluje. Zapytaj","Co maluje Milena?","70"],
["01","Co się tutaj dzieje?","Jan maluje maliny.","3"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Jan maluje maliny?","54"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Kto maluje lamy?","101"],
["01","Co się tutaj dzieje?","Małgorzata maluje maliny.","15"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Jakie maliny maluje?","106"],
["01","Co się tutaj dzieje?","Małgorzata maluje mandarynki.","16"],
["12","Na drugiej stronie ulicy widzisz koleżankę. Zawołaj ją.","Małgorzata!","47"],
["01","Co się tutaj dzieje?","Ewa maluje mandarynki.","8"],
["05","Co maluje Milena?","Milena maluje mandarynki.","35"],
["14","Wchodzisz do atelie i pytasz co która osoba maluje.","Czy Ewa maluje maliny?","58"],
["04","Co maluje Ewa?","Ewa maluje lamy.","29"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Jakie lamy maluje?","105"],
["01","Co się tutaj dzieje?","Ewa maluje dom.","5"],
["04","Co maluje Ewa?","Ewa maluje dom.","28"],
["32","Poproś Jana, żeby namalował Ci mandarynki.","Chodź! Namaluj mi mandarynki!","115"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Ewa maluje dom?!","84"],
["29","Poproś Jana, żeby namalował Ci dom.","Chodź! Namaluj mi dom!","112"],
["01","Co się tutaj dzieje?","Ewa, Małgorzata, Jan i Milena malują maliny.","18"],
["24","Ktoś Ci coś powiedział, a Ty nie możesz w to uwierzyć Jak zareagujesz?","Co? Milena maluje dom?!","88"]);








			 
			 
// var images = [
    // "startClip.jpg",
    // "kasia4.png",
    // "kasa4.png",
    // "kasza4.png",
    // "sanki4.png",
    // "szafa4.png",
    // "siatka4.png",
    // "zabcia4.png",
    // "slonko4.png",
    // "rybka4.png"
// ];

// var sounds = ["", "1.wav", "2.wav", "3.wav", "4.wav", "5.wav", "6.wav", "7.wav", "8.wav", "9.wav"];
// //Kasia. 		Kasa, 		Kasza		sanki		szafa		siano		żaba		słonce		ryba

// var multArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

// //		alert('wejscie = ' + multArr);

// //fisherYates(multArr[0][0],[0][1],[0][2],[0][3],[0][4]);
// var order = fisherYates(multArr);
// //alert('order = ' + order);

// var PicsArray = new Array( //pierwsza kolumna jaki dzwiek odegrac czyli o jaki obrazek pytam
    // [1, 1, 2, 3, "L"],
    // [1, 2, 1, 3, "M"],
    // [1, 2, 3, 1, "R"],
    // [2, 2, 1, 3, "L"],
    // [2, 1, 2, 3, "M"],
    // [2, 1, 3, 2, "R"],
    // [3, 3, 1, 2, "L"],
    // [3, 1, 3, 2, "M"],
    // [3, 1, 2, 3, "R"],
    // [4, 4, 5, 6, "L"],
    // [4, 5, 4, 6, "M"],
    // [4, 5, 6, 4, "R"],
    // [5, 5, 4, 6, "L"],
    // [5, 4, 5, 6, "M"],
    // [5, 4, 6, 5, "R"],
    // [6, 6, 4, 5, "L"],
    // [6, 4, 6, 5, "M"],
    // [6, 4, 5, 6, "R"],
    // [7, 7, 8, 9, "L"],
    // [7, 8, 7, 9, "M"],
    // [7, 8, 9, 7, "R"],
    // [8, 8, 7, 9, "L"],
    // [8, 7, 8, 9, "M"],
    // [8, 7, 9, 8, "R"]);

// var i = -1;					//dla soundAdult
// var k = -1;					//dla soundChild

// //alert(PicsArray[order[0]]);

// // function playPolCzech() {
    // // var audio = document.getElementById("audio");
    // // audio.src = "Q/QPLCZ" + Zestaw[1][0] + ".wav";
    // //etap3Index++;
    // // audio.play();
// // }





// function play() {
    // var audio = document.getElementById("audio");
    // audio.src = "Sound/" + PicsArray[order[etap3Index-1]][0] + ".wav";
    // //etap3Index++;
    // audio.play();
// }

// function playExt(newNameFolder, FileName) {  // playExt(i,'Sound',PicsArray[order[i]][0])
    // var audio = document.getElementById("audio");
    // audio.src = "DATA/" + newNameFolder + "/" + FileName + "_" + PicsArray[order[etap4Index-1]][0] + ".wav";
    // //etap4Index++;
    // try {
        // audio.play();
    // }
    // catch(exception) {
        // console.log('Error');
    // }

// }

//for (var i=0;i<24;i++){
//	alert(PicsArray[order[i]]);

//   SHOW
//var counter=0;

// var etap;

function playNew(source) {
  return new Promise(function(resolve, reject) { // return a promise
    var audio = new Audio();                     // create audio wo/ src
    audio.preload = "auto";                      // intend to play through
    audio.autoplay = true;                       // autoplay when loaded
    audio.onerror = reject;                      // on error, reject
    audio.onended = resolve;                     // when done, resolve

    audio.src = source
  });
}




                

function displayZestaw(NrZestawu) {
	

	
	$("#Pytanie").html("");
	$("#Nagranie").html("");

	

	
	IdZestawu = Zestaw[NrZestawu][3];  //UZUPELNIENIE nazwy pliku

	
	var textPytanie = document.getElementById("Pytanie")
	textPytanie.value =  Zestaw[NrZestawu][1];
	$("#Pytanie").html(textPytanie.value);
	
	
	
	AudioSource = "QPLCZ" + Zestaw[NrZestawu][0];
	
	
	playNew("Q/" + AudioSource + ".wav").then(function() {
		var textNagranie = document.getElementById("Pytanie")
		
	textNagranie.value =  Zestaw[NrZestawu][2];
		$("#Nagranie").html(textNagranie.value);
		
		$("#StartRecord").trigger("click");	
	})
	
	
	//PROGRESS BAR
	var progressBar;
	progressBar = new ProgressBar("my-progressbar", {'width':'800%', 'height':'6px'});
	progressBar.setPercent((NrZestawu/115)*100);
	

	// logDisplay('IdZestawu = ' + IdZestawu);
	logDisplay("Zestaw " + NrZestawu + ':  SŁUCHAJ UWAŻNIE!');

	 	


}




var counter;
counter = -1;
var wavName;
wavName = "";
var tempLicz; //tymczasowy licznik do przechowywania wartosci licznikow Licz1img...Licz8img
tempLicz = 0;

var soundSource;  //zwraca, ktory dzwiek jest poprawny. Uzyty do zrobienia kopii dla etapu #4
soundSource = 0;



function initAudio() {

    try {
        // webkit shim
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
        window.URL = window.URL || window.webkitURL;

        audi_context = new AudioContext;
        <!-- __log('Audio context set up.'); -->
        <!-- __log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!')); -->
    }
    catch(e) {
        alert('No web audio support in this browser!');
    }

    navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
        <!-- __log('No live audio input: ' + e); -->
    });

    // document.getElementById("orderElem").innerHTML = orderPics;
    // document.getElementById("random").innerHTML = imgs;
    // document.getElementById("pole").innerHTML = wavName;  // wypisanie nazwy 

}

function __log(e, data) {
    log.innerHTML += "\n" + e + " " + (data || '');
}

function logDisplay(data) {
    log.innerHTML = data;
}


var audi_context;
var recorder;

window.recordCounter = 0;

function startUserMedia(stream) {
    var input = audi_context.createMediaStreamSource(stream);
    <!-- __log('Media stream created.'); -->

    // Uncomment if you want the audio to feedback directly
    //input.connect(audi_context.destination);
    //__log('Input connected to audio context destination.');

    recorder = new Recorder(input);
    <!-- __log('Recorder initialised.'); -->
}


// function doc_keyUp(e) { //zdarzenia z klawiatury
    // // this would test for whichever key is 40 and the ctrl key at the same time
    // //if (e.ctrlKey && e.keyCode == 40) {
    // if (e.keyCode == 13) { //ENTER
        // // call your function to do the thing
        // $("#StopRecord").trigger("click");	
    // } 
// }
// // register the handler 




function startRecording(button) {
	//document.addEventListener('keyup', doc_keyUp, false);  //NASŁUCHUJ KLAWIATURE
    logDisplay(''); //wyczyść LOGA
	recorder && recorder.record();
	document.getElementById("NEXT_button").disabled = true;
    button.disabled = true;
	    button.nextElementSibling.disabled = false;
    __log('Przeczytaj tekst na głos. Nagrywam ...');
}

function stopRecording(button) {
	logDisplay('');
    recorder && recorder.stop();
    button.disabled = true;
    button.previousElementSibling.disabled = false;
	document.getElementById("NEXT_button").disabled = false;

    __log('Koniec nagrywania. Naciśnij UPLOAD i NEXT / lub X i RECORD');

    // create WAV download link using audio data blob
    createDownloadLink();

    recorder.clear();
}

function createDownloadLink() {
	    recorder && recorder.exportWAV(function(blob) {
        var url = URL.createObjectURL(blob);
        var li = document.createElement('div');
        var au = document.createElement('audio');
        var hf = document.createElement('a');
        /* to dodalem*/

        var actionBtnWrapper = document.createElement('div');
        actionBtnWrapper.className = 'btn-wrapper';

        var actionBtn = document.createElement('i');
        actionBtn.className = "fa fa-times";

        actionBtn.onclick = function() {
            li.removeChild(au);
            //li.removeChild(hf);
            li.removeChild(actionBtnWrapper);
            recordingslist.removeChild(li);
        }

        actionBtnWrapper.appendChild(actionBtn);

        var actionBtnDownloadWrapper = document.createElement('div');
        actionBtnDownloadWrapper.className = 'btn-wrapper-upload';

        var actionDownloadBtn = document.createElement('i');
        actionDownloadBtn.className = "fa fa-upload";

        actionDownloadBtn.onclick = function() {

            if(!window.userData) {
                alert('Najpierw wprowadź i zatwiedź dane w części DATA');
                return;
            }

            // blobToBase64(blob, function(result) {
            // ws.send(JSON.stringify({
            // command: 'upload_audio',
            // payload: {
            // // filename: window.userData.filename + '_nagranie' + date.getMilliseconds(),
            // filename: window.userData.filename,
            // wavName: wavName,
            // nameFolder: window.userData.nameFolder,
            // src: result
            // }
            // }));
            // });

            blobToBase64(blob, function(result) {
                ws.send(JSON.stringify({
                    command: 'upload_audio',
                    payload: {
                        // filename: window.userData.filename + '_nagranie' + date.getMilliseconds(),
                        filename: window.userData.filename,
                        // wavName: AudioSource,
                        wavName: Zestaw[NrZestawu-1][3],
                        // tempLicz: tempLicz,
                        tempLicz: tempLicz,
                        // imgs: imgs[counter];
                        imgs: soundSource,
                        nameFolder: window.userData.nameFolder,
                        src: result
                    }
                }));
            });
		
			
         
        

		



		//po upload  wyczyc liste nagran, usun bloba i wygeneruj click   nastepny	
		li.removeChild(au);
        //li.removeChild(hf);
        li.removeChild(actionBtnWrapper);
        recordingslist.removeChild(li);	
		
// if (NrZestawu <=115) 
	// {
	// NrZestawu++
	// } 
	// else {alert('KONIEC')};
	
// $("#NEXT_button").trigger("click");	
       }//koniec  działania upload

        actionBtnDownloadWrapper.appendChild(actionDownloadBtn);   //dołaczenie przycisku UPLOAD!!!

        var blobToBase64 = function(blob, callback) {
            var reader = new FileReader();
            reader.onload = function() {
                var dataUrl = reader.result;
                var base64 = dataUrl.split(',')[1];
                callback(base64);
            };
            reader.readAsDataURL(blob);
        };

        var date = new Date();
        <!-- var imie = 'User'; -->
        <!-- var name = (++window.recordCounter) + '_' + date.getFullYear() + '_' + (date.getMonth() + 1) + FileName; -->

        <!-- FileName - nazwa utworzona wczesniej jako zlepek danych lektora -->

        //var FileName = "IDBazowe";
        <!-- var name = FileName+ (++window.recordCounter); -->
        var name = FileName + wavName;
        /* to dodalem*/

        au.controls = true;
        au.id = "player" + date.getMilliseconds();
        au.src = url;
        hf.href = url;
        /* tu zmienilem */
        hf.download = name + '.wav';
        /* tu zmienilem */
        hf.innerHTML = hf.download;
        li.appendChild(au);
        // li.appendChild(hf);

        $('#player' + date.getMilliseconds()).attr('controls', '');
        /* to dodalem */
        li.appendChild(actionBtnWrapper);
        li.appendChild(actionBtnDownloadWrapper);
        /* to dodalem */

        recordingslist.appendChild(li);
		
		
		
		       ws.send(JSON.stringify({
                    command: 'txt',
                    payload: {
                        // filename: window.userData.filename + '_nagranie' + date.getMilliseconds(),
                        filename: window.userData.filename,
                        // wavName: AudioSource,
						wavName: Zestaw[NrZestawu-1][3],
                        text: Zestaw[NrZestawu-1][2],
                        // tempLicz: tempLicz,
                        tempLicz: tempLicz,
                        // imgs: imgs[counter];
                        imgs: soundSource,
                        nameFolder: window.userData.nameFolder
                    }
                }));

        //ws.send(JSON.stringify({command:'start'}));
		
    });
}

//</script>

//</script>
