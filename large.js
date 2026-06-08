var sc = require('readline-sync');

var num1=sc.question("Enter your firt number:");

var num2=sc.question("Enter your second number:");

if(num1>num2){
    console.log(num1+"is greater than"+num2);
}
else{
    console.log(num2+"is greater than"+num1);
}