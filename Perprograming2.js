/* */

var cohortArray = [ "scott", "kristy", "natalie", "charlie", "sam", "zach", "nathan", "paul", "anthony", "liz", "eric", "jeremy", "chris", "brooks", "altamir", "amber", "joe", "kenzie", "matthew", "robby", "mark","scott"]
var revealed = []
$(document).ready(function(){
	console.log("yup");
	
	$('#container').append("<button class = 'button-click'>Create</button>");
	$('#container').on('click','.button-click',buttonClick);
	$('#container').on('click','.remove',buttonRemove);
	$('#button').on('click', buttonReload);
	

	for (var i = 0; i < cohortArray.length;i++) {

		$('#container').append('<div class = "stylish" id=' + i + '> <p>' + cohortArray[i] + '</p> </div>');
		$('#container').children().last().hide();
		$('#container').children().last().append("<button class = 'remove'> Remove </button>");
	    
	}

var counter = 0;

function buttonClick() {
    $("#" + counter).slideDown(); 
    counter++;	
}

function buttonRemove (){
	
	$(this).parent().fadeOut();
}

function buttonReload(){
	$('#button').click(function(){
		location.reload();
	});
}

});
