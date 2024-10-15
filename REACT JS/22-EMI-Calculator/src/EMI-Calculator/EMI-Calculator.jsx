import axios from "axios";
import { useState } from "react";
export function EMICalculator(){

     // Defining state variables at the top of the component
    const [amount, setAmount] = useState(10000);  // 'amount' holds the loan amount, default value is 10000
    const [year, setYears] = useState(1);         // 'year' holds the number of years, default value is 1
    const [rate, setRate ] = useState(10.45);     // 'rate' holds the interest rate, default value is 10.45%
    const [emi, setEmi] = useState(0);

     // Event handler for amount change
    function handleAmountChange(e){
        // Update the 'amount' state with the input's value
        setAmount(e.target.value); 
    }

    // Event handler for year change
    function handleYearChange(e){
        // Update the 'year' state with the input's value    
        setYears(e.target.value);
    }
     // Event handler for rate change
    function handleRateChange(e){
        // Update the 'rate' state with the input's value
        setRate(e.target.value);

    }
    function CalculateClick(){
        var P = amount;       // Assign 'P' to the loan amount (principal)
        var r = rate/12/100;   // Calculate monthly interest rate (annual rate divided by 12 months, then divided by 100 to convert to a percentage)
        var n = year * 12;      // Calculate total number of monthly payments (years multiplied by 12 months)
        
        // EMI calculation formula using the standard mathematical formula for EMI
        var result = P * r * Math.pow(1+r,n) / Math.pow(1+r,n) - 1;
        setEmi(result);

    }
    

    return(
        // Main container with some margin and padding 
        <div className="container-fluid bg-secondary m-2 p-4">

             {/* Heading for the EMI Calculator displayed in the center with white text */}
            <h4 className="text-center text-white ">Personal Loan EMI Calculator</h4>
            
              {/* Nested container with light background and dark text for the EMI calculator form */}
            <div className="bg-light text-dark p-4">

                 {/* First row containing inputs for amount, years, and interest rate */}
                <div className="row mt-4">

                     {/* Input field for loan amount */}
                    <div className="col">
                        Amount you need &#8377; < input type="text" value={amount} />
                    </div>

                     {/* Input field for number of years */}
                    <div className="col">
                        for < input type="text" size="4" value={year}/> years
                    </div>

                       {/* Input field for interest rate */}
                    <div className="col">
                        Interest rate  <input type="text" size="4" value={rate} /> %
                    </div>
                </div>

                 {/* Second row containing range sliders for the amount, years, and interest rate */}
                <div className="row mt-4">

                     {/* Range slider for selecting loan amount */}
                    <div className="col">
                       &#8377; 10,000 <input type="range" onChange={handleAmountChange} min="1000" value={amount} max="500000" /> 5,00,000
                    </div>

                      {/* Range slider for selecting loan duration in years */}
                    <div className="col">
                        1 <input type="range" min="1" max="5" onChange={handleYearChange} value={year} /> 5
                    </div>

                    {/* Range slider for selecting interest rate */}
                    <div className="col">
                        10.45% <input type="range" min="10.45" onChange={handleRateChange} step="0.01" max="18.45" value={rate} /> 18.45%
                    </div>

                      {/* Row containing the calculate button */}
                    <div className="row mt-4">
                        <div className="col text-end">
                            <button onClick={CalculateClick} className="btn btn-primary">Calculate</button>
                        </div>
                    </div>

                      {/* Row displaying the calculated EMI */}
                    <div className="mt-4 row">
                         {/* Display the EMI result formatted as Indian currency and the number of months */}
                        <p className="text-center"> Your Monthly Installment is <span className="h3 text-primary">{Math.round(emi).toLocaleString('en-in', {style:'currency',currency: 'INR'})} </span>for {year*12} months. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}