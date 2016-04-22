//Find the form
var tourForm = document.querySelector('#book-a-tour');

//glider flight  input vars and output message vars
var numberGlidersInput = document.querySelector('#number-gliders');
var numberGlidersMessage = document.querySelector('#number-gliders-message');

var gliderDateInput = document.querySelector('#glider-date');
var gliderDateMessage = document.querySelector('#glider-date-message');

var gliderHoursInput = document.querySelector('#glider-hours');
var gliderHoursMessage = document.querySelector('#glider-hours-message');

var gliderGroupMessage = document.querySelector('#glider-group-message');

//sightseeing flights input vars and output message vars
var sightseeingTypeInput = document.querySelector('#sightseeing-type');
var sightseeingTypeMessage = document.querySelector('#sightseeing-type-message');

var sightseeingDateInput = document.querySelector('#sightseeing-date');
var sightseeingDateMessage = document.querySelector('#sightseeing-date-message');

var aircraftTypeInput = document.querySelector('#aircraft-type');
var aircraftTypeMessage = document.querySelector('#aircraft-type-message');

var numberSightseersInput = document.querySelector('#number-sightseers');
var numberSightseersMessage = document.querySelector('#number-sightseers-message');

var sightseeingGroupMessage = document.querySelector('#sightseeing-group-message');

//charters and provisiong input vars and output message vars
var charterTypeInput = document.querySelector('#charter-type');
var charterTypeMessage = document.querySelector('#charter-type-message');

var charterDateInput = document.querySelector('#charter-date');
var charterDateMessage = document.querySelector('#charter-date-message');

var charterPlaceInput = document.querySelector('#charter-place');
var charterPlaceMessage = document.querySelector('#charter-place-message');

var charterGroupMessage = document.querySelector('#charter-group-message');

// deliveries and pick-ups input vars and output message vars 
var deliveryDateInput = document.querySelector('#delivery-date');
var deliveryDateMessage = document.querySelector('#delivery-date-message');

var deliveryPlaceInput = document.querySelector('#delivery-place');
var deliveryPlaceMessage = document.querySelector('#delivery-place-message');

var deliveryGroupMessage = document.querySelector('#delivery-group-message')

var pickupDateInput = document.querySelector('#pickup-date');
var pickupDateMessage = document.querySelector('#pickup-date-message');

var pickupPlaceInput = document.querySelector('#pickup-place');
var pickupPlaceMessage = document.querySelector('#pickup-place-message');

var pickupGroupMessage = document.querySelector('#pickup-group-message')

//customer contact details (customer group) vars for input & output msg 
var firstNameInput = document.querySelector('#firstname');
var firstNameMessage = document.querySelector('#firstname-message');

var surNameInput = document.querySelector('#surname');
var surNameMessage = document.querySelector('#surname-message');

var emailInput = document.querySelector('#email');
var emailMessage = document.querySelector('#email-message');

var landlineInput = document.querySelector('#landline');
var landlineMessage = document.querySelector('#landline-message');

var mobileInput = document.querySelector('#mobile');
var mobileMessage = document.querySelector('#mobile-message');

var customerMessage = document.querySelector('#customer-message');

// for debugging purposes only
	// console.log("for gliders");
	// console.log("glider numbers = " + numberGlidersInput.value + ";" );
	// console.log("glider date = " + gliderDateInput.value + ";" );
	// console.log("glider hours = " + gliderHoursInput.value + ";" );

	// console.log("for sightseeing");
	// console.log("sightseeing-type = " + sightseeingTypeInput.value + ";" );
	// console.log("sightseeing-date = " + sightseeingDateInput.value + ";" );
	// console.log("aircraft-type = " + aircraftTypeInput.value + ";" );
	// console.log("number-sightseers = " + numberSightseersInput.value + ";" );

	// console.log("for charter");
	// console.log("charter-type = " + charterTypeInput.value + ";" );
	// console.log("charter-date = " + charterDateInput.value + ";" );
	// console.log(" charter-place = " + charterPlaceInput.value + ";" );
	
	


tourForm.onsubmit = function (event)

{


//  Check that the user is booking for a glider flight
	if (numberGlidersInput.value == "" && gliderDateInput.value == "" && 
		( gliderHoursInput.value == "" || gliderHoursInput.value == "0" )  ) 
	{ 	
	
		numberGlidersMessage.innerHTML = "";
		gliderDateMessage.innerHTML = "";
		gliderHoursMessage.innerHTML = "";
		gliderGroupMessage.innerHTML = "";
	
	}
	else
		// validate glider booking details
	{	
		// console.log("glider flight selected");
		
		if ( numberGlidersInput.value == "" || numberGlidersInput.value == "0") 
		{ 
			numberGlidersMessage.innerHTML = "*";	
			gliderGroupMessage.innerHTML = "Required information marked by an *.";
		}
		if ( gliderDateInput.value == "" ) 
		{ 
			gliderDateMessage.innerHTML = "*" 
			gliderGroupMessage.innerHTML = "Required information marked by an *.";
		}
		if ( gliderHoursInput.value == "" || gliderHoursInput.value == "0") 
		{ 
			gliderHoursMessage.innerHTML = "*";
			gliderGroupMessage.innerHTML = "Required information marked by an *.";
	  	}
	}

//  Check if the user is booking for a sightseeing tour
	if ( sightseeingTypeInput.value == "" && sightseeingDateInput.value == "" && 
		aircraftTypeInput.value == "" && 
		( numberSightseersInput.value == "" || numberSightseersInput.value == "0")  ) 
	{ 	
		 sightseeingTypeMessage.innerHTML, 
		 sightseeingDateMessage.innerHTML,
		 aircraftTypeMessage.innerHTML,
		 numberSightseersMessage.innerHTML,
		 sightseeingGroupMessage.innerHTML = "";
	}
	else
		// validate sightseeing flight details
	{	
		// console.log("sightseeing flight selected");
		
		if ( sightseeingTypeInput.value == "" ) 
			{ 
			sightseeingTypeMessage.innerHTML = "*";	
			sightseeingGroupMessage.innerHTML = "Required information marked by an *.";
			}
		if ( sightseeingDateInput.value == "" ) 
			{ 
			sightseeingDateMessage.innerHTML = "*" ;
			sightseeingGroupMessage.innerHTML = "Required information marked by an *.";
			}
		if ( aircraftTypeInput.value == "" ) 
			{ 
			aircraftTypeMessage.innerHTML = "*";
			sightseeingGroupMessage.innerHTML = "Required information marked by an *.";
			}
		if ( numberSightseersInput.value == "" ) 
			{
			numberSightseersMessage.innerHTML = "*";
			sightseeingGroupMessage.innerHTML = "Required information marked by an *.";
			} 

	}	


//  Check if the user is booking for a charter and provisioning service
	if ( charterTypeInput.value == "" && charterDateInput.value == "" && charterPlaceInput.value == "" )
	{ 	
		 charterTypeMessage.innerHTML, 
		 charterDateMessage.innerHTML,
		 charterPlaceMessage.innerHTML,
		 charterGroupMessage.innerHTML = "";
	}
	else
		// validate charter and provisioning service details
	{	
		console.log("charter and provisioning service selected");
		
		if ( charterTypeInput.value == "" ) 
			{ 
			charterTypeMessage.innerHTML = "*";	
			charterGroupMessage.innerHTML = "Required information marked by an *.";
			}
		if ( charterDateInput.value == "" ) 
			{ 
			charterDateMessage.innerHTML = "*" ;
			charterGroupMessage.innerHTML = "Required information marked by an *.";
			}
		if ( charterPlaceInput.value == "" ) 
			{ 
			charterPlaceMessage.innerHTML = "*";
			charterGroupMessage.innerHTML = "Required information marked by an *.";
			}
	}

//  Check if the user is booking for delivery
	if ( deliveryDateInput.value == "" && deliveryPlaceInput.value == "" )
	{ 	
		 deliveryDateMessage.innerHTML,
		 deliveryPlaceMessage.innerHTML, 
		 deliveryGroupMessage.innerHTML = "";
	}
	else
		// validate delivery details
	{	
		console.log("delivery service selected");
		
		if ( deliveryDateInput.value == "" ) 
		{ 
			deliveryDateMessage.innerHTML = "*";	
			deliveryGroupMessage.innerHTML = "Required information marked by an *.";
		}
		if ( deliveryPlaceInput.value == "" ) 
		{ 
			deliveryPlaceMessage.innerHTML = "*" ;
			deliveryGroupMessage.innerHTML = "Required information marked by an *.";
		}
	}

//  Check if the user is booking for pickup service
	if ( pickupDateInput.value == "" && pickupPlaceInput.value == "" )
	{ 	
		 pickupDateMessage.innerHTML,
		 pickupPlaceMessage.innerHTML, 
		 pickupGroupMessage.innerHTML = "";
	}
	else
		// validate pickup details
	{	
		console.log("pickup service selected");
		
		if ( pickupDateInput.value == "" ) 
		{ 
			pickupDateMessage.innerHTML = "*";	
			pickupGroupMessage.innerHTML = "Required information marked by an *.";
		}
		if ( pickupPlaceInput.value == "" ) 
		{ 
			pickupPlaceMessage.innerHTML = "*" ;
			pickupGroupMessage.innerHTML = "Required information marked by an *.";
		}
	}

//  Check if the user is booking for pickup service
	if ( pickupDateInput.value == "" && pickupPlaceInput.value == "" )
	{ 	
		 pickupDateMessage.innerHTML,
		 pickupPlaceMessage.innerHTML, 
		 pickupGroupMessage.innerHTML = "";
	}
	else
		// validate pickup details
	{	
		console.log("pickup service selected");
		
		if ( pickupDateInput.value == "" ) 
		{ 
			pickupDateMessage.innerHTML = "*";	
			pickupGroupMessage.innerHTML = "Required information marked by an *.";
		}
		if ( pickupPlaceInput.value == "" ) 
		{ 
			pickupPlaceMessage.innerHTML = "*" ;
			pickupGroupMessage.innerHTML = "Required information marked by an *.";
		}
	}


	event.preventDefault();
	
}


