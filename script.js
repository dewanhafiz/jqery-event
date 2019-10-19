
$('#add').click(function () {
   var firstNamevalue= $('#firstNumber').val();
    var lastNamevalue= $('#secondName').val();
    var result=firstNamevalue+lastNamevalue;
   $('#result').val(result);
});


$('#sub').click(function () {
    var firstNamevalue= $('#firstNumber').val();
    var lastNamevalue= $('#secondName').val();
    var result=firstNamevalue-lastNamevalue;
    $('#result').val(result);
});

$('#mul').click(function () {
    var firstNamevalue= $('#firstNumber').val();
    var lastNamevalue= $('#secondName').val();
    var result=firstNamevalue*lastNamevalue;
    $('#result').val(result);
});


$('#div').click(function () {
    var firstNamevalue= $('#firstNumber').val();
    var lastNamevalue= $('#secondName').val();
    var result=firstNamevalue/lastNamevalue;
    $('#result').val(result);
});








/*
alert($('#h1').html(''));   //text,html alert*/
