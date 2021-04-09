/*
const scores =[90, 98, 89, 100, 100, 86, 94];
let sum = 0;
let avg = 0;
for(var i = 0; i < scores.length;i++){
//Taking sum of all the arraylist
    sum = sum + scores[i];   
       console.log(sum) }
//Taking average     
     avg = sum/scores.length; 
     console.log(avg)       
//this is the function to round a decimal no    
     const round = avg.toFixed();
     console.log(round);
    

//end/


   //  Javascript program to find area and perimeter of circle	//area=PI*rad*rad, perm=2*PI*rad;

     function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };

  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(4); // not understandable;
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));
//end/


//Javascript program to convert temperature from  Celsius to Fahrenheit  //fahrenheit = (celsius * 9 / 5) + 32;  //celsius to fahrenheit

function cToF(celsius) 
{
 
  var cToFahr = celsius * 9 / 5 + 32;
  return cToFahr;
    
}

var message = cToF(77)
console.log("77 C TO",message,"F");
 //
function FToC(fahrenheight) 
{
 
  var fahrToc = (fahrenheight *32 -32)* 5/9;
  return fahrToc;
    
}

var message2 = FToC(77)
console.log("77 F TO",message2.toFixed(2),"C");
//end/

// Javascript program to swap two
// numbers without using temporary
// variable


 
// Code to swap 'x' and 'y'
 
// x now becomes 15

let x = 10, y = 5;
  x = x + y;




// y becomes 10
y = x - y;
 
// x becomes 5
x = x - y;
 
console.log("After Swapping: x =" + x + ", y=" + y);

// Javascript program to swap two
// numbers with using temporary
// variable

let a = 1;
let b = 2;
let temp;

temp = a;a = b;b = temp;
console.log(a); // => 2
console.log(b); // => 1

//end//


//Click the button to display the square root of different numbers
function myFunction(number) {
    const a = Math.sqrt(number);
    
    return a
  }

  const result = myFunction(9)
  console.log(result)
  //end/
  //Javascript program to find sum of all numbers from 0 to N without using loop //sum = n*(n+1)/2

  const numSum = (n) =>{ 
    
   const result = n * (n+1) / 2
  return result};

  const totalSum = numSum(100)
  console.log(totalSum)
  //end

  //Javascript program to printing value in Decimal, Octal, Hexadecimal, binary // toString()
  let totn_number = 115;

console.log(totn_number.toString(2));
console.log(totn_number.toString(8));
console.log(totn_number.toString(16))





//program to read weekday number and print weekday name using switch.</h3>

    let wDay=Number('5')
     
    switch(wDay)
    {
        case 0: 
            console.log("Sunday");
            break;
        case 1: 
            console.log("Monday");
            break;
        case 2: 
            console.log("Tuesday");
            break;
        case 3: 
            console.log("Wednesday");
            break;
        case 4: 
            console.log("Thursday");
            break;
        case 5: 
            console.log("Friday");
            break;
        case 6: 
            console.log("Saturday");
            break;
        default:
            console.log("Invalid weekday number.");
    }

   // program to read gender (M/F) and print corresponding gender using switch.</h3>


    let gender=String('m')
    switch(gender)
    {
        case 'M':
        case 'm':
            console.log("Male.");
            break;
        case 'F':
        case 'f':
            console.log("Female.");
            break;
        default:
            console.log("Unspecified Gender.");
    }

    //Calculator program with Basic operations using switch</h3>


    let num1, num2, result5, ch;
    num1=15
    num2=3
    ch= ('-')
     
    result5=0;
    switch(ch)    
    {
        case '+':
            result5=num1+num2;
            break;
             
        case '-':
            result5=num1-num2;
            break;
         
        case '*':
            result5=num1*num2;
            break;
             
        case '/':
            result5=num1/num2;
            break;
             
        case '%':
            result5=num1%num2;
            break;
        default:
            console.log("Invalid operation.\n");
    }
 console.log(`${num1} ${ch} ${num2} = ${result5}`)
///// ternary practice

 let age =  1;

 let message10 = (age < 3) ? 'Hi, baby!' :
   (age < 18) ? 'Hello!' :
   (age < 100) ? 'Greetings!' :
   'What an unusual age!';
 
 console.log( message10 );

 

///// buji nai
let ab = 5.31;
let resultab = (ab >= 0) ? (ab == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${resultab}.`);

let x1;
x1 = 5 > 8 ? 10 : 1 != 2 < 5 ? 20 : 30;
console.log('X is: ',x1)

// 1. Food order system menu bar and calculate prices

// demo:

// choose your food
// 1. Burger 180 tk
// 2. Pizza  250 tk
// 3. Shawrma 120 tk
// 4. Drinks 80 tk

// pressed 2:

// how many burgers?

// pressed 2

// Final ouput: Total is 500 tk

const Burger = 180 
const Pizza = 250 
const Shawrma = 120 
const Drings = 80 
let Food =('any number not > 4 ')
FoodItem = 1

     
let result6,result7 ;
switch(FoodItem)    
{
    case 1:
        result6=Burger
        result7= 'how many burger';
       
        break;
         
    case 2:
        result6=Pizza;
        result7= 'how many Pizza';
        break;
     
    case 3:
        result6=Shawrma;

        result7= 'how many Shawrma';
        break;
         
    case 4:
        result6=Drings;
        result7= 'how many Drings';
        break;
         
   
    default:
        console.log("Invalid operation.\n");
}
console.log(`${result7}`)

 let HowMany = 0
let result8 = HowMany*result6 ;
 console.log(`${HowMany} * ${result6} = ${result8} taka`)
//end

// 3. Given an integer, n, perform the following conditional actions:


// If n is odd, print Weird
// If n is even and in the inclusive range of 2 to 5, print Not Weird
// If n is even and in the inclusive range of 6 to 20, print Weird
// If n is even and greater than 20, print Not Weird
// Input Format:
// A single line containing a positive integer, n.
// Constraints:
// n lies between 1 and 100

// Input:
// 17

// Output:
// Weird
let n = 17;
if (n%2 != 0 || (n > 5 && n < 21))
console.log("Weird");
else
console.log("Not Weird")

//end of input

const num4 = 33;
const num5 = 44 ;
const num6 = 11;
let largest;

// check the condition
if (num4 >= num5 && num4 >= num6) {
    largest = num4;
}
else if (num5 >= num4 && num5 >= num6) {
    largest = num5;
}
else {
    largest = num6;
}

// display the result
console.log("The largest number is " + largest);



let i=0, N
N=8

while(i<=N){
   console.log(i)
   i=i+1
}
// while loop works with its given formula
//jokhon sortho dilam 10 er besi jabe na tokhon value i er against e set kore dibo..
//  >print 1 to N numbers<

   
let N = 0,i=0;

while (i<=10){
  N= i
  console.log(N)
  i++
}

// print 20 horizontal asterisks (*) 

let i=0, output='';

while(i<19){
   output+= '*'
   i++;
}
console.log('value of i: '+i);
console.log(output);

// write a program to calculate the sum of numbers from M to N


let N= 68,i=13, sum=0;

while (i<=N){
  sum = i+ sum
  console.log(sum)
  i++
  
}


*/

// wte a program to calculate the sum of 2nd to 5th numbers


//        
let i =0,number=[1,2,3,4,5,6,7,8,9],sum=0
while(i<number.length){
   
   if(number[i]>0 && number[i]<5 )
   {
     sum = sum + number[i]
   }
  i++
}
console.log(sum)




function flashText() {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
        }
    document.body.style.backgroundColor = colors[i]
    i++;
    if (i == colors.length) {
      i = 0;
    }

  }