

document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
    battery()
    camera()
}



function battery(){
    window.addEventListener ("batterystatus", onBatteryStatus, false);
    function onBatteryStatus (status) {
        var etat = document.querySelector('.etat')
        etat.innerText= status.level 
        var chargeur= document.querySelector('.charge')
        if(!status.isPlugged){
            chargeur.innerText = "chargeur deconnecte"
        }else {
            chargeur.innerText = "charging ..."
        }

    }}

function camera(){
    //console.log(navigator.camera);
    var bouton = document.querySelector("#pic")
    bouton.addEventListener("click", cameraTakePicture)
    //navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
}


function cameraTakePicture() { 
   navigator.camera.getPicture(onSuccess, onFail, {  
      quality: 50, 
      destinationType: Camera.DestinationType.DATA_URL 
   });  
   
   function onSuccess(imageData) { 
      var image = document.getElementById('image'); 
      image.src = "data:image/jpeg;base64," + imageData; 
   }  
   
   function onFail(message) { 
      alert('Failed because: ' + message); 
   } 
}