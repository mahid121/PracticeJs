/*
var age = 24;
var myStr = "i am mahidur rahman and my age is "+age+"\n";
console.log(myStr);
var length=myStr.length;
console.log(length);
var first= myStr[0];
console.log(first);
var last = myStr[myStr.length-2];
console.log(last); 

function wordBlank(noun,adjective,verb,adverb){
    result="";
    result +="I am "+noun+" and i am a "+adjective+" boy and i "+verb+" nothing "+adverb+".";
    return result;
}
console.log(wordBlank("mahid","bad","do","fast"));


var myArray = [[1,2,3],[4,5,6],[7,8,9]];
var myData = myArray[2][1];
console.log(myData);
var a = 2;
console.log(typeof a);

var outWear = "T-Shirt";

function outFit(){
    var outWear = "Sweater";
    return outWear;
}
console.log(outFit());
console.log(outWear);
*/
fetch("./config.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));

//accessing nested array objects

var myPlants = [
    {
        type:"flowers",
        list:[
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type:"trees",
        list:[
            "fir",
            "pine",
            "birch"
        ]
    }
];
console.log(myPlants[1].list[2]);