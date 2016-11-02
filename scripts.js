$(document).ready(function(){
	"use strict";
	$("p").click(function(){
		$(this).toggleClass("highlight");
	});
	$("h1").click(function(){
		$(this).css("color", "#FF00FF");
	});
	$("#small").click(function(){
		$("body").css("font-size", "1em");
	});
	$("#medium").click(function(){
		$("body").css("font-size", "1.3em");
	});
	$("#big").click(function(){
		$("body").css("font-size", "1.6em");
	});
});


$(document).ready(function(){
    $("button").click(function(){
        $("this").removeClass("color");
    });
});

$(document).ready(function(){
    $("#changelook").click(function(){
        $(this).css("border" , "solid");
    });
});

function myFunction() {
    window.print();
}