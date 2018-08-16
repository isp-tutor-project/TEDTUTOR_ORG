$("document").ready(function () {
         
    var flashvars = {};
	var params = {};
	var attributes = {};    
    
    var playerVersion = swfobject.getFlashPlayerVersion(); 
    
    var version = playerVersion.major + "." + playerVersion.minor + "." + playerVersion.release + " installed"; 
    
    $("#flashError").hide(0);
    $("#portError").hide(0);
    $("#readyForTED").hide(0);

    $("#SgoTedTutor").click(goTedHandler);
    $("#SgoTedTutor").mousedown(buttonDnHandler);
    $("#SgoTedTutor").mouseup(buttonUpHandler);
    $("#SgoTedTutor").mousemove(buttonMvHandler);
    $("#SgoTedTutor").mouseout(buttonOtHandler);
        
    if(playerVersion.major == "0") {
        
        $("#flashVersion").html("Flash not Found");
        $("#flashVersion").css("color","#F00");
        $("#reqimgA").attr("src","assets/errorMark.png");
        $("#flashError").show(700);
        
    } else if(playerVersion.major <= "11" && playerVersion.minor <= "3") {
        
        $("#flashVersion").html(version);
        $("#flashVersion").css("color","#F00");
        $("#reqimgA").attr("src","assets/errorMark.png");
        $("#flashError").show(700);
        
    } else {
        
        $("#flashVersion").html(version);
        $("#flashVersion").css("color","#0A0");
        $("#reqimgA").attr("src","assets/checkMark.png");
        
        params.allowscriptaccess = "always";
        params.menu = false;        
	    attributes.id = "portTest";
        
	    swfobject.embedSWF("assets/App_ReqTest.swf", "portTestFL", "55", "55", "11.3.0", false, flashvars, params, attributes);        
        
        //portTestResult("PASSED");    
    }
    
});



function goTedHandler(evt) {
    window.location = "http://go.tedtutor.org";
}

function buttonDnHandler(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    $("#SgoTedTutor").toggleClass("btnUp btnDn");
}

function buttonUpHandler(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    $("#SgoTedTutor").toggleClass("btnUp btnDn");
}

function buttonMvHandler(evt) {
    evt.stopPropagation();
    evt.preventDefault();
}

function buttonOtHandler(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    $("#SgoTedTutor").toggleClass("btnUp", true);
    $("#SgoTedTutor").toggleClass("btnDn", false);
}

function portTestResult(result) {
    
     $("#portTestResult").html(result);
    
    if(result == "PASS")
        $("#readyForTED").show(700);
    else
        $("#portError").show(700);
    
}



