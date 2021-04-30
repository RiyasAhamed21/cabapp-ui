displayDetails();
function displayDetails() {
    // Get Values 0f Variables from the Local Storage
    let finalPrice = localStorage.getItem("finalPrice");
    let jdate = localStorage.getItem("jdate");
    let ptime = localStorage.getItem("ptime");
    let fare = localStorage.getItem("fare");
    let total = localStorage.getItem("total");
    let price = localStorage.getItem("price");
    let senior = localStorage.getItem("senior");
    let peakHour = localStorage.getItem("peakHour");
    let valid = seniorCitizen(senior);
    //Displays Booking Details
    document.getElementById("jdate").innerHTML = "Journey Date  : " + jdate;
    document.getElementById("ptime").innerHTML = "Pick Up Time  : " + ptime;
    document.getElementById("fare").innerHTML = "Base Fare      :Rs. " + fare;
    document.getElementById("total").innerHTML = "Price with GST :Rs. " + total;
    document.getElementById("peak").innerHTML = "Peak Hour: " + peakHour;
    document.getElementById("price").innerHTML = "Price with Peak Hour Charges:Rs. " + price;
    document.getElementById("senior").innerHTML = "Senior Citizen : " + valid;
    document.getElementById("finalPrice").innerHTML = "Final Price    :Rs. " + finalPrice;
}
// This Method Checks Whether the person is Senior Citizen or Not
function seniorCitizen(senior) {
    let valid;
    if (senior.includes("true")) {
        valid = "Yes";
    }
    else {
        valid = "No";
    }
    return valid;
}

