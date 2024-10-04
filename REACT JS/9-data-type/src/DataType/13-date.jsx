/*
Date Data Type :-

- Date type is configured using "Date()" constructor
- The date constructor loads default date and time into memory.

	      var now = new Date();		// current date & time

- Specific date and time values are stored using following format

		"year-month-day  hrs:min:seconds.milliseconds"

	      var departure = new Date("2024-02-22  14:32:56.67");

- To read date and time value you have to all date and time methods

		getHours()
		getMinutes()
		getSeconds()
		getMilliSeconds()
		getDate()
		getDay()
		getMonth()
		getFullYear()
		toString()
		toLocaleDateString()
		toDateString()
		toLocaleTimeString()
		toTimeString() 
		etc..
		
Syntax:
	 var now = new Date();
	
	 { now.toLocaleDateString() }
	 
- To set any date or time value dynamically

	  setHours()
	  setMinutes()
	  setSeconds()
	  setMilliSeconds()
	  setDate()
	  setMonth()
	  setYear()
	  etc..

Syntax:
	   var now = new Date();
	    now.setMonth(2);		// March
*/

export function Datess(){

    var departure = new Date("2024-02-22 14:56:34.67");
	departure.setMonth(2); // March
    
    return(
        <div className="conatiner-fluid">
            <h2>Date</h2>
			{departure.toString()}

        </div>
    )
}

// op is = Fri Mar 22 2024 14:56:34 GMT+0530 (India Standard Time)