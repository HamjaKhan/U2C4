// write js code here corresponding to matches.html
var matchlists=JSON.parse(localStorage.getItem("schedule"))

var mymatches=JSON.parse(localStorage.getItem("favourites"))||[]
matchlists.map(function(elem)
{
    var tr=document.createElement("tr")
    var td1=document.createElement("td")
    td1.innerText=elem.matchnumber
    var td2=document.createElement("td")
    td2.innerText=elem.TeamA
    var td3=document.createElement("td")
    td3.innerText=elem.TeamB
    var td4=document.createElement("td")
    td4.innerText=elem.Dates
    var td5=document.createElement("td")
    td5.innerText=elem.Venues
    var td6=document.createElement("td")
    td6.innerText="favourites" 
    td6.style.color="green"
    td6.style.cursor="pointer"
    td6.addEventListener("click",function(){
        myfavmatch(elem);
    })
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr)


})

function myfavmatch(elem){
    mymatches.push(elem)
    localStorage.setItem("favourites",JSON.stringify(mymatches))
}
