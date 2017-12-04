// Take the contents of the sonnet div and place it in a variable.
// Find and output the starting position of the word "orphans".
// Output the number of characters in the sonnet.
// Replace the first occurance of the string "winter" with "yuletide".
// Replace all occurances of the string "the" with "a large".
// Set the content of the sonnet div with the new string.

let sonnet = document.getElementById("sonnet").innerHTML;
console.log(sonnet.indexOf("orphans"));

console.log(sonnet.length)

sonnet = sonnet.replace("winter", "yuletide");
sonnet = sonnet.replace(/the/gi, "a large");
document.getElementById("sonnet").innerHTML=sonnet

