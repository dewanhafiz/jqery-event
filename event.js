
var newHeadingElement =document.createElement('h1');
var newParagraphElement =document.createElement('p');

newHeadingElement.innerHTML =" This is a Heading";
 newParagraphElement.innerHTML =" This is a paragraph";


document.getElementById('div').appendChild(newHeadingElement);

document.getElementById('div').appendChild(newParagraphElement);






/*
$('#firstName').keyup(function () {

 var firstNameValue=$('#firstName').val();

$('#res1').html(firstNameValue);

});
$('#lastName').keyup(function () {

    var lastNameValue=$('#lastName').val();

    $('#res2').html(lastNameValue);

});


$('#fullName').keyup(function () {

    var firstNameValue=$('#firstName').val();
    var lastNameValue=$('#lastName').val();

    $('#res3').html(firstNameValue+' '+lastNameValue);

});
*/
