 
$(document).ready(function () {
    $('.form').submit(function (e) {
      e.preventDefault();
      });
    });

function output() {

    var dd = parseInt(document.getElementById("date").value);
    var mm = parseInt (document.getElementById("month").value );
    var yy = parseInt (document.getElementById("year").value.slice(2,4));
    var cc = document.getElementById("year").value.slice(0,2);
    var male = document.getElementById("male");
    var female = document.getElementById("female");


    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var day = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
    var akanDay = days[Math.floor(day)];


    if (  mm == "" || mm <1 || mm > 12 || mm == 2 && dd > 29){
        alert("INVALID MONTH");
    } else if (  dd == "" || dd < 1 || dd > 31){
        alert( "INVALID DAY");
    } else if ( yy == ""|| yy.length < 4 || yy.length > 4){
        alert( "INVALID YEAR");
    }
}
    if( male){
        if (akanDay === '0'){
            document.getElementById("output").innerHTML = alert("Born on Sunday ,Your Akan Name is" + boy[0]);
        } else if (akanDay === '1'){
            document.getElementById("output").innerHTML = alert("Born on Monday ,Your Akan Name is" + boy[1]);
        } else if (akanDay === '2'){
            document.getElementById("output").innerHTML = alert("Born on Tuesday ,Your Akan Name is" + boy[2]);
        } else if (akanDay === '3'){
            document.getElementById("output").innerHTML = alert("Born on Wednesday ,Your Akan Name is" + boy[3]);
         } else if (akanDay === '4'){
            document.getElementById("output").innerHTML = alert("Born on Thursday ,Your Akan Name is" + boy[4]);
        } else if (akanDay === '5'){
            document.getElementById("output").innerHTML = alert("Born on Friday ,Your Akan Name is" + boy[5]);
        } else if (akanDay === '6'){
            document.getElementById("output").innerHTML = alert("Born on Saturday ,Your Akan Name is" + boy[6]);
        }
    }

    if( female){
        if (akanDay === '0'){
            document.getElementById("output").innerHTML = alert("Born on Sunday ,Your Akan Name is" + female[0]);
        } else if (akanDay === '1'){
            document.getElementById("output").innerHTML = alert("Born on Sunday ,Your Akan Name is" + female[1]);
        } else if (akanDay === '2'){
            document.getElementById("output").innerHTML = alert("Born on Sunday ,Your Akan Name is" + female[2]);
        } else if (akanDay === '3'){
            document.getElementById("output").innerHTML = alert("Born on Sunday ,Your Akan Name is" + female[3]);
        } else if (akanDay === '4'){
            document.getElementById("output").innerHTML = alert("Born on Sunday ,Your Akan Name is" + female[4]);
        } else if (akanDay === '5'){
            document.getElementById("output").innerHTML = alert("Born on Sunday ,Your Akan Name is" + female[5]);
        } else if (akanDay === '6'){
            document.getElementById("output").innerHTML = alert("Born on Sunday ,Your Akan Name is" + female[6]);
        } 
    }
    

      