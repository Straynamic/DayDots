window.onload = function () {

    DisplayDots();
}

var AddDays = 0;

function DisplayDots()
{
    for (var i = 0; i < 6; i++) {
        var tablerow = document.createElement("TR");
        var tablecolumn0 = document.createElement("TC");
        var tablecolumn1 = document.createElement("TC");
        var tablecolumn2 = document.createElement("TC");
        tablerow.appendChild(tablecolumn0);
        tablerow.appendChild(tablecolumn1);
        tablerow.appendChild(tablecolumn2);

        var daydotText = document.createTextNode(DateText(i));
        tablecolumn0.appendChild(daydotText);

        var myDate = new Date();




        myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() + AddDays);





        myDate = DayDiffrence(i, myDate);


        var m = myDate.getMonth() + 1;

        var d = myDate.getDate();

        var displayDate = m + "/" + d;


        var f = document.createTextNode(displayDate);
        tablecolumn1.appendChild(f);

        var daydotImage = document.createElement("IMG");
        daydotImage.setAttribute("src", DayCase(myDate));

        tablecolumn2.appendChild(daydotImage);

        document.getElementById("MainTable").appendChild(tablerow);

    }

}

function DayDiffrence(index, myDate)
{
    switch (index) {
        case 0:
            myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() + 2); //3 Day
            break;
        case 1:
            myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() + 4); //5 Day
            break;
        case 2:
            myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() + 6); //7 Day
            break;
        case 3:
            myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() + 13); //14 Day
            break;
        case 4:
            myDate = new Date(myDate.getFullYear(), myDate.getMonth() + 1, myDate.getDate() - 1); //3 Day
            break;
        case 5:
            myDate = new Date(myDate.getFullYear(), myDate.getMonth() + 2, myDate.getDate() - 1); //3 Day
    }
    return myDate;
}

function DayCase(selectedDate) //selectedDate
{
    var day;
    var anotherDate = new Date();
    anotherDate = selectedDate;
    switch (anotherDate.getDay()) {

        case 0:
            return "../_images/DayDot_Sun.png";
        case 1:
            return "../_images/DayDot_Mon.png";
        case 2:
            return "../_images/DayDot_Tue.png";
        case 3:
            return "../_images/DayDot_Wed.png";
        case 4:
            return "../_images/DayDot_Thur.png";
        case 5:
            return "../_images/DayDot_Fri.png";
        case 6:
            return "../_images/DayDot_Sat.png";
    }
}

function DateText(index)
{
    switch (index) {
        case 0:
            return "3 Day:";
        case 1:
            return "5 Day:";
        case 2:
            return "7 Day:";
        case 3:
            return "14 Day:";
        case 4:
            return "1 Month:";
        case 5:
            return "2 Month:";
    }
}

function UpdateDots()
{

    while (document.getElementById("MainTable").firstChild) {
        document.getElementById("MainTable").removeChild(document.getElementById("MainTable").firstChild);
    }
    //if (typeof document.getElementById("DayInput").value == 'number') {
        AddDays = document.getElementById("DayInput").value;
        DisplayDots();
    //}
    //else
    //{
    //    console.log("NotNumber ye " + document.getElementById("DayInput").value);
    //}
}
