/*
function nextInline(arr,item){
    arr.push(item);
    return arr.shift();
}
var testArray = [1,2,3,4,5];
console.log(JSON.stringify(testArray));
console.log(nextInline(testArray,6));
console.log(JSON.stringify(testArray));

function testStrict(val){
    if(val === 7){
        return "equal";
    }
    else
     return "not equal";
}
console.log(testStrict(7));

function isLess(a,b){
    return a<b;
}
console.log(isLess(10,15));

*/
var count = 0;

function cc(card)
{
    switch(card){
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 6 :
            count++;
            break;
        case 10 :
        case "J" :
        case "Q" :
        case "K" :
        case "A" :
            count--;
            break;    
        }
        var holdBet = "Hold";
        if(count > 0)
        {
            holdBet = "Bet";
        }
        return count + " "+holdBet;
}
console.log(cc("A"));
console.log(cc("K"));
console.log(cc("Q"));
console.log(cc("J"));

//add a cooment

// accessing objects by dot

var myObject = {
    "name":"Mahid",
    "surname":"Rahman",
    "class" :["no class"]
};
console.log(myObject.class);

// accessing objects by bracets
//here properties must have space

var ourObjects = {
    "Versity Name": "pstu",
    "Faculty Name": "c.s.e"
};
console.log(ourObjects["Versity Name"]);
console.log(ourObjects["Faculty Name"]);

// lookup objects

function practiceLookup(val)
{
    var result="";

    var lookup = {
        "ava":"adams",
        "charles":"babege",
        "eva":"marie",
        "angela":"white"

    };
    result = lookup[val];

    return result;
}
console.log(practiceLookup("charles"));

