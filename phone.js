$(document).ready(function() { // do this when the document is loaded
	$("#content_dialer").show(); // show the element with ID "element"
    $("#content_list").hide(); // hide the element with ID "otherElement"
    $("#content_add").hide();
    $("#content_help").hide();
});

$("#dialer_b").click(function() { 
	$("#content_dialer").show(); 
    $("#content_list").hide();	
    $("#content_add").hide();
    $("#content_help").hide();
});

$("#contList_b").click(function() { 
	$("#content_list").show(); 
    $("#content_dialer").hide();	
    $("#content_add").hide();
    $("#content_help").hide();
});

$("#contAdd_b").click(function() { 
	$("#content_add").show(); 
    $("#content_list").hide();
    $("#content_dialer").hide();
    $("#content_help").hide();
});

$("#help_b").click(function() { 
	$("#content_help").show(); 
    $("#content_list").hide();
    $("#content_dialer").hide();
    $("#content_add").hide();
});