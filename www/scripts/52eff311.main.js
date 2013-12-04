var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        $("#camara").on("click", app.OpenCamara);
    },
    OpenCamara: function (event) {
        alert("entra");
        navigator.camera.getPicture(function(imageURI) {
            var image = document.getElementById('myImage');
            image.src = imageURI;
            alert("imagen en " + imageURI);
        }, function (message) {
            alert('Failed because: ' + message);
        }, {
            quality: 50,
            destinationType:  Camera.DestinationType.FILE_URI
        });




    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        //        var parentElement = document.getElementById(id);
        //        var listeningElement = parentElement.querySelector('.listening');
        //        var receivedElement = parentElement.querySelector('.received');
        //
        //        listeningElement.setAttribute('style', 'display:none;');
        //        receivedElement.setAttribute('style', 'display:block;');

        navigator.notification.alert(
            'fired!!!', // message
        null, // callback
        'Deviceready ', // title
        'Done' // buttonName
        );
        console.log('Received Event: ' + id);
    }
};