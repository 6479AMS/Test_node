document.addEventListener('deviceready', onDeviceReadyTest, false);

function onDeviceReadyTest() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function testFunction() {
    alert("Task Added");
}

$(document).ready(function(){

    $('#addTask').on('click', function(){
        alert('Task Added');
        
    });
    $('#addTask').on("click", function(e){

        
            var task =$("<div class='task'></div>").text($('#txtBox').val());
            var del = $("<i class='ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-inline'></i>").click(function(){

                var p =$(this).parent();
                p.fadeOut(function(){
                    p.remove();
                })
            });

            var check = $("<i class='ui-btn ui-shadow ui-corner-all ui-icon-check ui-btn-icon-notext ui-btn-inline'></i>").click(function(){

                var p =$(this).parent();


                p.fadeOut(function(){
                    $(".complete").append(p);
                    p.fadeIn();
            });

            $this.remove();
            });

            task.append(del, check);

            $(".incomplete").append(task);

            $('#txtBox').val("");
        

    });
});


