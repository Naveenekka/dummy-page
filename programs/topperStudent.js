// Program to determine whether a student is tpper or not //

var isTopper = false;

var marksObtained = window.prompt('Please enter the marks obtained')
if (marksObtained == undefined || marksObtained == null || marksObtained || '')
{
    alert('Invalid Input')
}
else if (marksObtained < 0 || marksObtained >100)
{
    alert('Input a number between 0 to 100')
}
else{
    marksObtained = number(marksObtained)
    var totalMarks =100;
    var percentageOfMarksObtained = (marksObtained/totalMarks)*100;

   /* if (percentageOfMarksObtained > 90)
    {
        isTopper = true
    }
    else{
        isTopper = false
    }*/

    //Ternary Operator //
    isTopper = (percentageOfMarksObtained >90)?true:false
    alert(isTopper)
}