/*

var redbtnElement=document.getElementById('red');
redbtnElement.onclick=function () {
   var divOneElement= document.getElementById('divOne');
    divOneElement.className ='.red';
};

var greenbtnElement=document.getElementById('Green');
greenbtnElement.onclick=function () {
    var divOneElement= document.getElementById('divOne');
    divOneElement.className ='.class-two';
};

*/


var redBtnElement=document.getElementById('redbtn');

redBtnElement.onclick = function () {
    var divOneElement = document.getElementById('divone');

divOneElement.style.backgroundColor = 'red';
}







var btnElement=document.getElementById('btn');
btnElement.onclick=function () {
    var startingNumberValue=document.getElementById('startingNumber').value;
    var endingNumberValue=document.getElementById('endingNumber').value;

    var res='';
    for(var x=startingNumberValue; x<=endingNumberValue; x++){

        res+=x;
    }
    document.getElementById('result').value= res;
}