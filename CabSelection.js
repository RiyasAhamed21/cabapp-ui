// This Method Calculates the fare and shows Price With Gst
function priceEstimator() {
    event.preventDefault();
    let cabtype = document.querySelector("#cabtype").value;
    let kms = document.querySelector("#kms").value;
    let fare = 0;
    if (cabtype.includes("AUTO")) {
        fare = 10 * kms;    //Calculates fare for Auto 
    }
    else if (cabtype.includes("MINI")) {
        fare = 15 * kms;   //Calculates fare for Mini Cab Type
    }
    else if (cabtype.includes("PRIME")) {
        fare = 20 * kms;   //Calculates fare for Prime Cab Type
    }
    let gst = fare * 0.07;
    let total = fare + gst;
    // Displaying the Fare Details
    document.getElementById("demo").innerHTML = "Base Fare is: Rs. " + fare;
    document.getElementById("gst").innerHTML = "GST- 7%";
    document.getElementById("total").innerHTML = "Total Fare is: Rs. " + total;
    localStorage.setItem("total", total);
    localStorage.setItem("fare", fare);
    document.getElementById("continue").style.visibility = "visible";
    document.getElementById("back").style.visibility = "visible";
}
// This Methods redirect to the Next Page
function nextPage() {
    event.preventDefault();
    window.location.href = "Booking.html";
}
function returnLogin() {
    window.location.href = "Login.html";
}