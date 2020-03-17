function automaticallyScroll(){
	window.scrollBy(0,5);
	scrolldelay = setTimeout(automaticallyScroll,5);
	var height = window.pageYOffset;
    var maxHeight = Math.round(window.innerHeight/10) * 10;
    if(maxHeight > window.innerHeight){
        maxHeight -= 5;
    } else if(maxHeight < window.innerHeight){
        maxHeight += 5;
    }
	if (height == maxHeight){
		clearTimeout(scrolldelay);
	
    }
}

var dropOn = 0
var navBarStayWhite = false


$(document).ready(function(){
    
    if ($(window).width() <= 1114) {
        var height = $(".videoPlayerContainer").height();
        var toAdd = $(window).height()*0.09;
        height+= toAdd
        $(".leftContainer").css("top", height+"px");
    } 

    $(".right_logo").click(function(){
        $(".contactsPage").fadeIn(700);
        $(".overlay").fadeIn(700);
    });
    $(".borderOfExit").click(function(){
    	$(".contactsPage").fadeOut(700);
    	$(".overlay").fadeOut(700);
    });

    $(".title1").load(function(){
    	
    });

    $(".title1").fadeIn(1000);    


});


setInterval(function(){

    var $circleJ1 = $("#circleJ1");
    $circleJ1.hover(function(){
        $circleJ1.css("background-color" , "#1FAB54");
            $("#lineB1").css("background-color" , "#1FAB54");
            $("#lineA1").css("background-color" , "#1FAB54");
            $("#jd1").css("display", "block");
            $("#title1").css("color", "#1FAB54");
    }, function() {
            $circleJ1.css("background-color" , "white");
            $("#lineB1").css("background-color" , "white");
            $("#lineA1").css("background-color" , "white");
            $("#jd1").css("display", "none");
            $("#title1").css("color", "white");

    });

    var $circleJ2 = $("#circleJ2");
    $circleJ2.hover(function(){
        $circleJ2.css("background-color" , "#1FAB54");
        $("#lineB2").css("background-color" , "#1FAB54");
        $("#lineA2").css("background-color" , "#1FAB54");
        $("#jd2").css("display", "block");
        $("#title2").css("color", "#1FAB54");
    } , function(){
        $circleJ2.css("background-color" , "white");
        $("#lineB2").css("background-color" , "white");
        $("#lineA2").css("background-color" , "white");
        $("#jd2").css("display", "none");
        $("#title2").css("color", "white");
    });

    var $circleJ3 = $("#circleJ3");
    $circleJ3.hover(function(){
        $circleJ3.css("background-color" , "#1FAB54");
        $("#lineB3").css("background-color" , "#1FAB54");
        $("#lineA3").css("background-color" , "#1FAB54");
        $("#jd3").css("display", "block");
        $("#title3").css("color", "#1FAB54");
    } , function(){
        $circleJ3.css("background-color" , "white");
        $("#lineB3").css("background-color" , "white");
        $("#lineA3").css("background-color" , "white");
        $("#jd3").css("display", "none");
        $("#title3").css("color", "white");
    });

    var $circleJ4 = $("#circleJ4");
    $circleJ4.hover(function(){
        $circleJ4.css("background-color" , "#1FAB54");
        $("#lineB4").css("background-color" , "#1FAB54");
        $("#lineA4").css("background-color" , "#1FAB54");
        $("#jd4").css("display", "block");
        $("#title4").css("color", "#1FAB54");
    } , function (){
        $circleJ4.css("background-color" , "white");
        $("#lineB4").css("background-color" , "white");
        $("#lineA4").css("background-color" , "white");
        $("#jd4").css("display", "none");
        $("#title4").css("color", "white");
    });

    var $circleJ5 = $("#circleJ5");
    $circleJ5.hover(function(){
        $circleJ5.css("background-color" , "#1FAB54");
        $("#lineB5").css("background-color" , "#1FAB54");
        $("#lineA5").css("background-color" , "#1FAB54");
        $("#jd5").css("display", "block");
        $("#title5").css("color", "#1FAB54");
    } , function (){
        $circleJ5.css("background-color" , "white");
        $("#lineB5").css("background-color" , "white");
        $("#lineA5").css("background-color" , "white");
        $("#jd5").css("display", "none");
        $("#title5").css("color", "white");
    });

    var $circleJ6 = $("#circleJ6");
    $circleJ6.hover(function(){
        $circleJ6.css("background-color" , "#1FAB54");
        $("#lineB6").css("background-color" , "#1FAB54");
        $("#lineA6").css("background-color" , "#1FAB54");
        $("#jd6").css("display", "block");
        $("#title6").css("color", "#1FAB54");
    } , function (){
        $circleJ6.css("background-color" , "white");
        $("#lineB6").css("background-color" , "white");
        $("#lineA6").css("background-color" , "white");
        $("#jd6").css("display", "none");
        $("#title6").css("color", "white");
    });
    

}, 10);

function showHamburger(){
    $(".hamburger-icon").click(function(){
            $(".hamburger-menu").slideDown("medium");
            $(".hamburger-icon").css("display","none");
            $(".hamburger-icon-exit").css("display","block");
         
          });
    $(".hamburger-icon-exit").click(function(){
        $(".hamburger-menu").slideUp("medium");
        $(".hamburger-icon").css("display","block");
        $(".hamburger-icon-exit").css("display","none");

    });
    

}

function dropdown(){

	var $topics = $(".topicsHoverReveal");
	var $separator = $(".separator");

	if (dropOn == 0){
		$topics.css("display","block");
		$separator.css("background-color","grey");
		dropOn = 1
	} else{
		$topics.css("display","none");
		$separator.css("background-color","white");
		dropOn = 0
	}	

}

window.onclick = function(event) {
	  if (!event.target.matches('.left_logo')) {
	    var dropdowns = document.getElementsByClassName("dropdown");
	   	var $topics = $(".topicsHoverReveal");
	   	var $separator = $(".separator");
	   	$topics.css("display","none");
	   	$separator.css("background-color","white");
	  }



}






