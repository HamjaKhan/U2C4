// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",match)
var  matchlist=JSON.parse(localStorage.getItem("schedule"))||[]
function match(){
    event.preventDefault()
    var matchnum=document.querySelector("#matchNum").value
    var teama=document.querySelector("#teamA").value
    var teamb=document.querySelector("#teamB").value
    var dates=document.querySelector("#date").value
    var venues=document.querySelector("#venue").value

    var matchobj={
        matchnumber:matchnum,
        TeamA:teama,
        TeamB:teamb,
        Dates:dates,
        Venues:venues,
    }
    matchlist.push(matchobj)
    localStorage.setItem("schedule",JSON.stringify(matchlist))
}
