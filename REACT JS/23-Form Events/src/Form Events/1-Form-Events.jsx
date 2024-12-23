{/*
Form Events :-
- onSubmit
- onReset

- Form events are defined for "<form>" element.
- They trigger the functionality using generic buttons like submit & reset.

Syntax:
     <form  onSubmit={ }   onReset={ }>

        <button type="submit"> Submit </button>
         <button type="reset"> Reset </button>
    </form>
 */}

 {/*
 Timer Events :-
- setTimeout()
- setInterval()
- clearTimeout()
- clearInterval()

FAQ: What is debounce?
Ans : It is a mechanism used to delay the task triggered by any event.
     You can control by using "setTimeout()".

Syntax:
        setTimeout(function(){ }, interval);

 */}

 {/*
Timer Events in JavaScript:
 (1) setTimeout():-
- This method is used to execute a function or a piece of code after a specified delay (in milliseconds).
- It runs the code only once after the delay.
Syntax:

let timeoutId = setTimeout(function, delay);
Example:

setTimeout(() => {
    console.log("This message appears after 3 seconds");
}, 3000); // Executes the code after 3000 milliseconds (3 seconds)

(2) setInterval():-
- This method is used to repeatedly execute a function or piece of code at regular intervals of time.
- It continues executing the code at the specified interval until it is stopped using clearInterval().
Syntax:

let intervalId = setInterval(function, interval);
Example:

setInterval(() => {
    console.log("This message repeats every 2 seconds");
}, 2000); // Executes every 2000 milliseconds (2 seconds)

(3) clearTimeout():-
- This method is used to stop the execution of a function set by setTimeout().
- You need to pass the timeoutId returned by setTimeout() to clear it.
Syntax:

clearTimeout(timeoutId);
Example:

let timeoutId = setTimeout(() => {
    console.log("This won't appear if we clear it");
}, 5000);

clearTimeout(timeoutId); // Cancels the scheduled timeout

(4) clearInterval():-

This method is used to stop the repeated execution of a function set by setInterval().
You need to pass the intervalId returned by setInterval() to clear it.
Syntax:

clearInterval(intervalId);
Example:

let intervalId = setInterval(() => {
    console.log("This will stop after 10 seconds");
}, 1000);

setTimeout(() => {
    clearInterval(intervalId); // Stops the interval after 10 seconds
}, 10000);

Summary:
setTimeout(): Executes code once after a delay.
setInterval(): Executes code repeatedly at regular intervals.
clearTimeout(): Cancels the setTimeout() call.
clearInterval(): Cancels the setInterval() call.
 */}
 