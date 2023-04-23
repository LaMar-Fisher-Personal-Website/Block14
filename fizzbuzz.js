// print per line 1-100
for (let i = 1; i <= 100; i++) // conditions for multiples of 3 & 5 
{
    if (i % 3 === 0 && i % 5 === 0) {
 // print "FizzBuzz"
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        // print "Fizz"
      console.log("Fizz");
    } else if (i % 5 === 0) {
        // print "Buzz"
        console.log("Buzz");
        // print all
    } else {  
        console.log(i);
    }
  }
  