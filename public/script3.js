function displayRequired() {
    let favSnack, numPerDay, age, maxAge;

    favSnack = document.getElementById("favSnack").value;
    numPerDay = document.getElementById("numPerDay").value;
    age = document.getElementById("age").value;
    maxAge = document.getElementById("maxAge").value;

    let sure = window.confirm("Are you sure?");
    if(sure) {
        let totalRequired = (numPerDay*365)*(maxAge-age);
        if(totalRequired<0) {
            document.getElementById("totalRequired").innerText = "Huh?";
            console.log("Huh?");
        }
        else {
            document.getElementById("totalRequired").innerText = `You will need ${totalRequired} ${favSnack}s to last you until the ripe old age of ${maxAge}.`;
            console.log(`You will need ${totalRequired} ${favSnack}s to last you until the ripe old age of ${maxAge}.`);
        }
    }
    else {
        window.alert("Please run again.");
    }
}

