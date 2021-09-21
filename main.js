/*
	WEB 303
	Starting file for Assignment 1 
	{Palwinder kaur}
*/

$(document).ready(function () {
	//variables Declaralations
	//salary input
	let inputSalary = $("#salary");
	//percentage input
	let inputPercentage = $("#percent");
	//span to set percentage
	let setSpanSpend = $("span#spend");

	//Addition of change event listeners for both inputs
	inputSalary.change(onInputChanged);
	inputPercentage.change(onInputChanged);

	//onInputChanged function to monitor when the input value has changed
	function onInputChanged(e){
		//if value is empty before making a calculation
		if(inputSalary.val() != "" && inputPercentage.val() != ""){
			//Calculation of spending amount
			let spendAmount = inputSalary.val() * inputPercentage.val() / 100;
			//remove decimal places
			spendAmount = spendAmount.toFixed(2);
			//Set spendAmount to span
			setSpanSpend.text("$" + spendAmount);
		}
	}
});