var frm=document.getElementById("frm");
var output=document.getElementById("output");
var btn=document.getElementById("btn");
var passwordlength=document.getElementById("password");
var capital=document.getElementById("capital");
var smaller=document.getElementById("smaller");
var number=document.getElementById("number");
var symbols=document.getElementById("symbols");


btn.addEventListener("click",async function() {
    var save=output.value
    if (save){
        await navigator.clipboard.writeText(save)
    }else{
        alert("please click the checked button")
    }
})
/* ascii value */

/* 0-128
0-255

65-90 - A-Z
98-122 - a-z
48-57 - 0-9
32 - space */
/* ex  90-65=25+1=26 letter*/

function generatepassword(min,max){
    var limit=max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min);
}

function capitalletter(){
    return generatepassword(65,90);
}

function smallletter(){
    return generatepassword(98,122);
}

function numberitem(){
    return generatepassword(48,57);
}

function symbolitem(){
    var symbolelement="~!@#$%^&*()_+=|\{}[]?><>."
    return symbolelement[Math.floor(Math.random()*symbolelement.length)];
}

/* object create */

var functionarray=[
    {
        element:capital,
        fun:capitalletter
    },
    {
        element:smaller,
        fun:smallletter
    },
    {
        element:number,
        fun:numberitem
    },
    {
        element:symbols,
        fun:symbolitem
    }
]


frm.addEventListener("submit",function(e){
    e.preventDefault()

    var limit=passwordlength.value

    var genarate="";

    var funarray=functionarray.filter(({element})=>element.checked);

    for(i=0;i<limit;i++){
        var index=Math.floor(Math.random()*funarray.length)
        var letter=funarray[index].fun();
        genarate+=letter;
    }
    output.value=genarate
})