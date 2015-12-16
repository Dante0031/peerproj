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



function buttonClick() {
	$('#container').append('<div> <p>' + cohortArray[cohortArray.length-1] + '</p> </div>');
	$('#container').children().last().append("<button class = 'remove'> Remove </button>");
    revealed.push(cohortArray.pop());
    
	
}
//Why is it that We have two buttonClick's but when I try to combine them it doesn't work properly?
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
