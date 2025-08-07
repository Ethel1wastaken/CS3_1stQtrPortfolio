let favSnack, numPerDay, age, maxAge;

favSnack = window.prompt("What is your favorite snack?");
numPerDay = window.prompt(`How many ${favSnack}s do you eat per day?`);
age = window.prompt("How old are you?");
maxAge = window.prompt("How old will you live to be? \nIf unknown, please consult a seer and come back later.");

let totalRequired = (numPerDay*365)*(maxAge-age);
if(totalRequired<0)
    document.write("Huh?");
else
    document.write(`You will need ${totalRequired} ${favSnack}s to last you until the ripe old age of ${maxAge}.`);