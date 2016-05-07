function onAppReady() {

    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }

}

function ejercicio01() {
    var sonido = prompt("Cuantas veces quieres que suene:");
    navigator.notification.beep(sonido);
}

function ejercicio02() {
    var vibracion = prompt("Cuantas veces quieres que vibre:");
    navigator.notification.vibrate(500);
}

function onFail(){}

function ejercicio03(){

    jQuery.mobile.changePage("#detalle");

    $("#result-ej03").css('display','block');
    $("#result-ej04").css('display','none');
    $("#brujula").css('display','none');
    $("#info").css('display','none');

     navigator.camera.getPicture(takePictureSuccess, onFail, {
        quality: 100
        , saveToPhotoAlbum: true
            ,destinationType: navigator.camera.DestinationType.DATA_URL
            , sourceType: navigator.camera.PictureSourceType.CAMERA
        });
}

function takePictureSuccess(imageData) {
   var imagen = $('<img style="width:10%"/>');
   imagen.attr('src', "data:image/jpeg;base64," + imageData);
   imagen.appendTo('#myImg03');
}

function ejercicio04() {

	jQuery.mobile.changePage("#detalle");

    $("#result-ej04").css('display','block');
	$("#result-ej03").css('display','none');
    $("#brujula").css('display','none');
    $("#info").css('display','none');

    navigator.camera.getPicture(getPictureSuccess, onFail, {
        destinationType: navigator.camera.DestinationType.FILE_URI
        , sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });

}

function getPictureSuccess(imageData) {
   var imagen = $('<img style="width:10%"/>');
   imagen.attr('src', imageData);
   imagen.appendTo('#myImg04');
}

var onError;
var watchID;
var accelID;
var controlOrientation;
var options = { frequency: 1000 }; //llama a la funcion cada segundo

function ejercicio05(){

    jQuery.mobile.changePage("#detalle");

    $("#brujula").css('display','block');
    $("#result-ej03").css('display','none');
    $("#result-ej04").css('display','none');
    $("#info").css('display','none');


    watchID = navigator.compass.watchHeading(showCompass, onError, options); 
}

function showCompass(heading){

    var deg = heading.magneticHeading;

  $('#aguja').css({
        '-ms-transform':'rotate('+deg+'deg)',
        '-webkit-transform': 'rotate('+deg+'deg)', 
        'transform': 'rotate('+deg+'deg)'
    });
  
} 

function ejercicio06(){

    if (watchID) {
        navigator.compass.clearWatch(watchID);
        watchID = null;
    } 

    jQuery.mobile.changePage("#detalle");
    $("#info").css('display','block');
    $("#result-ej03").css('display','none');
    $("#result-ej04").css('display','none');
    $("#brujula").css('display','none');

    window.addEventListener('deviceorientation', controlOrientation, false ); 
    accelID = navigator.accelerometer.watchAcceleration(infoAcceleration, onError, options); 
}

function infoAcceleration(acceleration) {
    $('#infoz').html("Posicion Z: " + acceleration.z);
    $('#infox').html("Posicion X: " + acceleration.x); 
    $('#infoy').html("Posicion Y: " + acceleration.y);  
}

function controlOrientation(event) {   
    $('#rotationx').html("Posicion Gamma: " + Math.round(event.gamma));
    $('#rotationz').html("Posicion Beta: " + Math.round(event.beta)); 
    $('#rotationy').html("Posicion Alpha: " + Math.round(event.alpha)); 
}

function ejercicio07(){

}


function extra(){

}

document.addEventListener("app.Ready", onAppReady, false) ;

