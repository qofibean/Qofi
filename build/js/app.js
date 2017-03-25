(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
