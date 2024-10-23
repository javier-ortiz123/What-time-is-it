var time = new Date().getHours();

// Your conditional statements here
// console.log(time);
var greeting = "Hello";
var name = "Nina";

// Your code here
if (time < 11) {
  greeting = "Good morning";
} else if (time <= 14) {
  greeting = "Good afternoon";
} else if (time <= 21) {
  greeting = "Good evening";
} else {
  greeting = "Why are you still up? Go to bed :)";
}

// alert(=
alert(`${greeting}, ${name}!`);
