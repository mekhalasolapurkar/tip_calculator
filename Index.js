let totalTip;
let individualTip;

const calculateTip = () => {

    //get user input
    const billAmount = document.getElementById("bill-amount").value;
    const quality = document.getElementById("quality").value;
    const people = document.getElementById("people").value;

    let numberOfPeople;
    if(people === "" || people <= 0) {
        numberOfPeople = 1;
    } else {
        numberOfPeople = people;
    }

    if(billAmount <= 0 || quality === 0 ) {
        window.alert("Please enter the valid values");
    }

    //calculate tip

    totalTip = Math.round(billAmount*quality/100);
    totalTip = totalTip.toFixed(2);
    individualTip = totalTip/numberOfPeople;
    individualTip = individualTip.toFixed(2);

    //pass calculated tip to HTML document
    document.getElementById("total-tip").innerHTML = totalTip;
    document.getElementById("individual-tip").innerHTML = individualTip;
    document.getElementById("tip-1").style.visibility = "visible";

    if (numberOfPeople > 1) {
        document.getElementById("tip-2").style.visibility = "visible";  
    } else {
        document.getElementById("tip-2").style.visibility = "hidden";  
    }
      

}

document.getElementById("calculate").addEventListener("click", calculateTip);

