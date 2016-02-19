/*looping a triangle*/

for (var triangle = "#"; triangle <= 7; triangle += "#")
  console.log(triangle.length);


/*Fizz buzz*/

for (var number = 1; number < 101; number ++) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
    console.log("FizzBuzz");
  } if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}

/*chess game*/
