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