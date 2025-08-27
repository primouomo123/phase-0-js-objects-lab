//Write your code here
const attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
}

function logAttendeeName(attendeeObject) {
    if (attendeeObject.name) {
        console.log(attendeeObject.name);
    } else {
        console.log("There is no name key in this object.");
    }
}

function logTicketPrice(attendeeObject) {
    if (attendeeObject.ticketPrice) {
        console.log(attendeeObject.ticketPrice);
    } else {
        console.log("There is no ticketPrice key in this object.");
    }
}

function updateTicketType(attendeeObject, newTicketType) {
    attendeeObject.ticketType = newTicketType;
}

function updateTicketPrice(attendeeObject, newTicketPrice) {
    attendeeObject.ticketPrice = newTicketPrice;
}

function removeEventProperty(attendeeObject) {
    if (attendeeObject.event) {
        delete attendeeObject.event;
    } else {
        console.log("There is no event property in this object");
    }
}

function addCheckedInProperty(attendeeObject) {
    if (!attendeeObject.checkedIn) {
        attendeeObject.checkedIn = true;
    } else {
        console.log("The checkedIn property already exists");
    }
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