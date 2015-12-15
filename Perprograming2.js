/* */

var cohortArray = [ "scott", "kristy", "natalie", "charlie", "sam", "zach", "nathan", "paul", "anthony", "liz", "eric", "jeremy", "chris", "brooks", "altamir", "amber", "joe", "kenzie", "matthew", "robby", "mark","scott"]
var revealed = []
$(document).ready(function(){
	console.log("yup");
	
	$('#container').append("<button class = 'button-click'>Create</button>");
	$('#container').on('click','.button-click',buttonClick);
	$('#container').on('click','.remove',buttonRemove);

	
function buttonClick() {

	$('#container').append('<div> <p> </p> </div>');
	$('#container').children().last().append("<button class = 'remove'> Remove </button>");
    $('#container').append(cohortArray[cohortArray.length-1]);
    revealed.push(cohortArray.pop());
    
}

function buttonRemove (){
	$(this).parent().remove();
}


});

