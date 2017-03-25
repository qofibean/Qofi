var multiply=function(number1,number2){
return number1 * number2
};
$(document).ready(function() {
    $("button#10ml").click(function() {
        var number1= 3000
        console.log(number1)
        })
    $("#quantity").submit(function(event){
        event.preventDefault();
        var number2= parseInt($("#more").val())
   console.log(number2);
    });
   
    $("#equal").click(function() {
var payment = multiply(number2,number1) 
 console.log(payment);
        $("h1#total").text("Your total is " + payment)
    });
    
    }); 

                



// var number1 = parseInt($("#add1").val());