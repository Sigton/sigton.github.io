function set_date() {
	
	// Get todays date
	var date = new Date();
	
	// Get the day of the month
	var day = date.getDate();
	
	// Calculate the days left
	var difference = 22 - day;
	
	// Then update the HTML page
	document.getElementById('number').innerHTML = difference;
	
}