let favSnack, numPerDay, age, maxAge;

favSnack = window.prompt("What is your favorite snack?");
numPerDay = window.prompt(`How many ${favSnack}s do you eat per day?`);
age = window.prompt("How old are you?");
maxAge = window.prompt("How old will you live to be? \nIf unknown, please consult a seer and come back later.");

let sure = window.confirm("Are you sure?");
if(sure) {
    let totalRequired = (numPerDay*365)*(maxAge-age);
    if(totalRequired<0) {
        document.write("Huh?");
        alert("Huh?");
        console.log("Huh?");
    }
    else {
        document.write(`You will need ${totalRequired} ${favSnack}s to last you until the ripe old age of ${maxAge}.`);
        alert(`You will need ${totalRequired} ${favSnack}s to last you until the ripe old age of ${maxAge}.`);
        console.log(`You will need ${totalRequired} ${favSnack}s to last you until the ripe old age of ${maxAge}.`);
    }
}
