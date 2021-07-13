let name= function (greetings){
    alert (greetings);
}
// name("hellow there");

let subtraction= function(number1, number2){
    return number1-number2;
}
subtraction(89,67);
let multiplication= function(mult1, mult2){
    return mult1*mult2;
}
console.log(multiplication(90,78));

var threetimes=function(x,y,z){
    return x*y*z;
}
threetimes(90,90,90);

let divide= function(x,y,z){
    return (x/y)%z;
}
console.log(divide(90,3,3));



// prompting the user to enter the age and name
let myAge=parseInt(prompt("enter your age"));
let yourName=prompt("Kindly type you full name");
let favfood=prompt("enter your favorite food");

let shoMessage= function(details){
    alert(details);
}
var output="Hi, there mr "+yourName+ " pleasure knowing that you are "+myAge+"years old and your favorite food is "+favfood+".";
shoMessage(output);