//Write your code here
 //Declaring an objkect
 const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
 }

 //Function to log the attendee's name
 function logAttendeeName(attendee) {
    console.log(attendee.name);
 }

 //Function to log the ticket price
 function logTicketPrice(attendee) {
    console.log(attendee.ticketPrice);
 }

//Function to log to update the ticket type
function updateTicketType(attendee, newTicketType) {
    attendee["ticketType"] = newTicketType;
}

//Function to update ticket price
function updateTicketPrice(attendee, newTicketPrice) {
    attendee.ticketPrice = newTicketPrice;
}

//Function to remove event property
function removeEventProperty(attendee) {
    delete attendee.event;
}

//Function to add checked in property
function addCheckedInProperty(attendee) {
    attendee.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};