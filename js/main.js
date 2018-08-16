var player;
var done = false;

$("document").ready(function () {

    console.log('Configuring button handlers');

    console.log('The DOM is now loaded and scripts are queued to fire');
    
    
    // Everyone gets the copyright notice.
    var copyRight = "<p>Copyright &#169; 2008-2014 Carnegie Mellon University, <br>All Rights Reserved.</p>";
    $('.copyright').html(copyRight);    
    
    
    // LightBox initialization

    $('#Sintro').click(function (e) {

        //prevent default action (hyperlink)
        e.preventDefault();

        /* 	
		If the lightbox window HTML already exists show it
		
		If the lightbox window HTML doesn't exists, create it and insert it.
		*/

        if ($('#lightbox').length > 0) { // #lightbox exists

            //show lightbox window - you could use .show('fast') for a transition
            $('#lightbox').show();
            $("#playerbox").css("margin-top", (window.innerHeight - 568) / 2);
            player.playVideo();

        } else { //#lightbox does not exist - create and insert (runs 1st time only)

            //create HTML markup for lightbox window
            var lightbox =
                '<div id="lightbox">' +
                    '<p>Click to close</p>' +
                    '<div id="playerbox">' +
                        '<div id="player"></div>' +
                        '<div id="closeButton"><img id="closeButtonIcn" src="assets/closeButton.png" ></div>' +
                    '</div>' +
                '</div>';

            //insert lightbox HTML into page
            $('body').append(lightbox);

            $("#playerbox").css("margin-top", (window.innerHeight - 568) / 2);

            createPlayer();
        }

        //Click anywhere on the page to get rid of lightbox window
        $('#lightbox').on('click', function () {
            player.pauseVideo();
            $('#lightbox').hide();
        });
      });
    
    
   $('#Smanual').click(function (e) {
       
        //prevent default action (hyperlink)
        e.preventDefault();

        /* 	
		If the lightboxB window HTML already exists show it
		
		If the lightboxB window HTML doesn't exists, create it and insert it.
		*/

        if ($('#lightboxB').length > 0) { // #lightbox exists

            //show lightbox window - you could use .show('fast') for a transition
            $('#lightboxB').show();

        } else { //#lightboxB does not exist - create and insert (runs 1st time only)

            //create HTML markup for lightbox window
            var lightbox =
                '<div id="lightboxB">' +
                '<p>Click to close</p>' +
                '<div id="playerboxB">' +
                '<div id="CaptivateContent"></div>' +                                
                '</div>';
            
            //insert lightbox HTML into page
            $('body').append(lightbox);

            $("#playerboxB").css("margin-top", (window.innerHeight - 568) / 2);

            createSWFObject();

            var closeButton = 
                '<div id="closeButtonB"><img id="closeButtonIcn" src="assets/closeButton.png" ></div>';                
            
            $('#CaptivateContent').prepend(closeButton);
        }

        //Click anywhere on the page to get rid of lightbox window
        $('#lightboxB').on('click', function () {            
            $('#lightboxB').hide();
        }); 
      });
    
});



// LightBox Support code

function onYouTubeIframeAPIReady() {}

function createPlayer() {

    player = new YT.Player('player', {
        height: '480',
        width: '787',
        videoId: 'IRZz2VPv-j8',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function createSWFObject() {
    
    var strURLFull = window.document.location.toString();
    var intTemp = strURLFull.indexOf("?");
    var	strURLParams = "";
    
    if(intTemp != -1)
    {
        strURLParams = strURLFull.substring(intTemp + 1, strURLFull.length);
    }
    var so = new SWFObject("DocMod/Documentation_Module.swf", "Captivate", "1010", "568", "10", "#FFF");
    so.addParam("quality", "high");
    so.addParam("name", "Captivate");
    so.addParam("id", "Captivate");
    so.addParam("wmode", "window");
    so.addParam("bgcolor","#fff");
    so.addParam("seamlesstabbing","false");
    so.addParam("menu", "false");
    so.addParam("AllowScriptAccess","always");
    so.addVariable("variable1", "value1");
    if(strURLParams != "")
    {
        so.addVariable("flashvars",strURLParams);
    }
    so.setAttribute("redirectUrl", "http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash");
    so.write("CaptivateContent");

    document.getElementById('Captivate').focus();
    document.Captivate.focus();    
}



function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {}

function stopVideo() {}

function autoResize(id){
    var newheight;
    var newwidth;

    if(document.getElementById){
        newheight=document.getElementById(id).contentWindow.document .body.scrollHeight;
        newwidth=document.getElementById(id).contentWindow.document .body.scrollWidth;
    }

    document.getElementById(id).height= (newheight) + "px";
    document.getElementById(id).width= (newwidth) + "px";
}
