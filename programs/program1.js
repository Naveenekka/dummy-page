//program to check whether a student is a topper or not//
var marksObtained = window.prompt('Please enter the marks obtained');

if (marksObtained == undefined || marksObtained == null || marksObtained == '')
{alert('Invalid Input');
} else if (marksObtained <0 || marksObtained >100){
	alert('Input a number between 0 to 100')
} else {
	//calculating the percentage
	marksObtained = Number(marksObtained)
	var totalMarks = 100;
	var percentagOfMarksObtaines = (marksObtained/totalMarks)*100;
	//end of calculating the percentage
if(percentagOfMarksObtaines > 90)
{
	isTopper = true
}else {
	isTopper = false
}

//Else use of ternary operator//
// isTopper = (percentageOfMarksObtaines >90)?true:false

alert(isTopper);
}

//End Of Program //