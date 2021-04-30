minDate();
maxDate();
// This Method Sets Minimum Date of Journey 
function minDate() {
    let todayStr = new Date().toJSON().substr(0, 10);
    console.log(todayStr);
    document.querySelector("#jdate").setAttribute("min", todayStr);
}
// This Method sets Maximum Date of Journey    
function maxDate() {
    let date = new Date();
    date.setDate(date.getDate() + 5);
    let endDate = date.toJSON().substring(0, 10);
    document.querySelector("#jdate").setAttribute("max", endDate);
    return endDate
}
function book() {
    event.preventDefault();
    // Get Value from the User
    let jdate = document.querySelector("#jdate").value;
    let ptime = document.querySelector("#ptime").value;
    let hour = ptime.substr(0, 2);
    let total = localStorage.getItem("total");
    let fare = localStorage.getItem("fare");
    let peakHour = checkPeakHour(hour);
    let price = peakHourCharges(hour, total);
    let senior = document.querySelector("#senior").checked;
    let finalPrice = seniorCitizen(price, senior);
    saveitems(finalPrice, jdate, ptime, fare, total, price, senior, peakHour);
}
//This function checks whether the journey time is in peak hour or not
function checkPeakHour(hour) {
    let valid;
    if (hour >= 17 && hour <= 19) {
        valid = "Yes";
    }
    else {
        valid = "No";
    }
    return valid;

}
//This Method Calculates the Price with Peak Hour Charges
function peakHourCharges(hour, total) {
    if (hour >= 17 && hour <= 19) {
        total = parseFloat(total);
        price = (total + (0.10 * total));
    }
    else {
        price = total;
    }
    return price;
}

// This Method offers Discount for the Senior Citizen
function seniorCitizen(price, senior) {
    let finalPrice = 0;
    if (senior) {
        finalPrice = (price / 2);
    }
    else {
        finalPrice = price;
    }
    return finalPrice;

}
// This Method saves the Varibles in local Storage
function saveitems(finalPrice, jdate, ptime, fare, total, price, senior, peakHour) {
    event.preventDefault();
    localStorage.setItem("finalPrice", finalPrice);
    localStorage.setItem("jdate", jdate);
    localStorage.setItem("ptime", ptime);
    localStorage.setItem("fare", fare);
    localStorage.setItem("total", total);
    localStorage.setItem("price", price);
    localStorage.setItem("senior", senior);
    localStorage.setItem("peakHour", peakHour);
    window.location.href = "BookingDetails.html";
}