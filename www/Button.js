window.onload = function () {
    document.addEventListener("deviceready", init, false);
//needs to be commented out when using phone gap.    
    init(); 
}

function init() {
    
    var x, y;
    
    y = "hello";
    
    // RETURNING DATA FROM THE DOM
    var x = $(".testing");
    
    console.log(x);
    
    // SEND DATA TO THE DOM
    
//    $(".testing").text(y + " Matthew");
    
    $("#submit").on("click" , function() {
        console.log("the button works!");
        
        var name = $("input[name=name]").val();
        
        $(".testing").text(y + name);
    });
}