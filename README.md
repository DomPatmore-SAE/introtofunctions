# Introduction to functions

Functions (or methods) are fundamental to programming. They allow you to reuse code which supports readability,scalability, and reduces errors. *Please do not continue with the next section until you are comfortable with the previous one.*

1. In this repository there is a `function.js` file. In it, there are 3 functions. How can you be sure they are functions? Write your answer below


2. What are the names of these functions?


3. On line 9, there are some extra characters in section A. What do we call these?


4. What is line 6 called, and do we need it?


5. Create your own method. It should be called `myName`, take no arguments/parameters. and should print `Hello` to the console. You should verify this works.


6. Inside your method, create a variable that holds your name. Try to access this variable outside of your method. What happens? This is an example of scope, which means that what happens inside the method stays inside. Try to do the same by creating a for-loop and access the counter variable outside of it.


7. Add a return statement at end of your method, before the last closing brace. It should read something like ```return <your variable>``` 


8. Move your console statement so that it's before the function. Edit the statement so that it reads ```console.log(`Hello ${myName()}`)```. Run the code in the browser. Write below what you think `myName()` is doing.


9.  Now move the console statement so that it's after the function. Has there been any change?


10. Add a parameter to the method. You can make the label whatever you wish. Now, instead of returning the variable within the method, return the parameter you have just added. Return to your console line, and edit it so it says ```console.log(`Hello ${myName("<put your name here>")}`)```. What gets displayed? Write down what you think the parameter is doing.


11. Now, create a string variable, and place that within the method in your console. What's happened? Does that meet your expectations?


12.  Inside the method, make it so the return statement adds the word "there". This time, runs your console.log line, then ask for the value of the variable created in step 11. Write below what happened.


13.  If-and only-if the values are different, what could you do to make them the same?

14. Rather than using console.log, show the results of the function on a web page.


## Extra Challenges

With each of these, you should try to display the results on a web page.

1. Create a function that takes a string and returns its length.

2. Change the function so that it checks to see if they length is larger than 3. If it's not, it should return with "Not enough letters". How would verify this works?


3. Returning back to the heroes last week, write a function that will return the hero with the longest name.


4. Write a function that will take in a name, and search for it in the list of heroes. If it's found, it will return the name; it it's not found, it should return "Not Found"

## Super Challenge

1. Create a function that will take in a list of numbers, and only return the sum of the even numbers. If there are length of the list is odd, it should return the message "Not Available". 







[ ] I have completed the tasks and feel uneasy/comfortable/confident (delete as appropriate) with functions.