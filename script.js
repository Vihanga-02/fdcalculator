function calculateMaturityAmount(){

    // Get input values from the form elements

    const principle = parseFloat(document.getElementById('principle').value);
    const intersRate = parseFloat(document.getElementById('interestRate').value);
    const month = parseFloat(document.getElementById('month').value);

    // Perform the Calculation

    const maturityAmount = principle + ((principle * intersRate * month)/12) /100;
    const intrestAmount = ((principle * intersRate * month)/12)/100;

    // Display the Result

    document.getElementById('result1').innerText = `Interest Earned: Rs.${intrestAmount.toFixed(2)}`;
    document.getElementById('result2').innerText = `Total Amount After Maturity: Rs.${maturityAmount.toFixed(2)}`;

}

// Attach the event listener to the calculate Button
document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);