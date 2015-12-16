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
		//$('#container').append('<div id=' + i + '> <p>' + cohortArray[i] + '</p> </div>');
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







// function buttonClick() {

// 	$('#container').append("<div> <p> </p> </div>");
// 	$('#container').children().last().append("<button class = 'remove'> Remove </button>");
//     $('#container').children().last().children().first().append(cohortArray[cohortArray.length-1]);
//     revealed.append(cohortArray.pop());
    
// }



// function buttonClick() {
// 	//take the last student in cohort Array, embed it in a paragraph and a div
// 	//append the whole thing to container div 
// 	$('#container').append('<div> <p>' + cohortArray[cohortArray.length-1] + '</p> </div>');
// 	//append a Remove Button to our new div, under the paragraph with the student name
// 	$('#container').children().last().append("<button class = 'remove'> Remove </button>");
// 	//$('#container')
// 	//remove that student from cohort array and push to revealed array
//     revealed.push(cohortArray.pop());
    
//}

//original code before robby's new addition. new code may have fault in it over creating undefined classmates
// $('#container').append('<p>' + theta[clickCounter] + '<button class="button">Remove</button></p>');
// 		$('#container').children().last().hide().slideDown();
// 		clickCounter++;







// });

