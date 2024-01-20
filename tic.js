let cp = "x";
let points = ["", "", "", "", "", "", "", "", ""];
function play()
{
    let tag = event.target;
    // tag.innerText=cp;
    // cp=cp=="x"?"o":"x";
    if(tag.innerText != "")
     {
        alert("please click empty box");
        return;
    }
    tag.innerText = cp;
    assignPoints();
    cp = (cp == "x")?"o":"x";

}
function assignPoints()
{
    let tag = event.target;
    // points[tag.getAttribute("ind")] = cp;
    // console.log(points);
    let index=tag.getAttribute("ind");
    points[index]=cp;
    console.log(points);
    let x = points.filter((v)=>{return v==""});
    if(x.length < 5)
    {
        checkWinner();
    }
}
function checkWinner() {
    console.log("");
   
    let h1 = document.getElementById("result");

    if (points[0] == points[1] && points[1] == points[2] && points[0] != "") {
        h1.innerText = `${cp} winner winner  `;
     makeParty();
    } 
else if (points[3] == points[4] && points[4] == points[5] && points[3] != "") {
    h1.innerText = `${cp} winner winner  `;
    makeParty();
    } 
else if (points[6] == points[7] && points[7] == points[8] && points[6] != "") {
    h1.innerText = `${cp} winner winner`;
    makeParty();
    } 

else if (points[0] == points[4] && points[4] == points[8] && points[0] != "") {
    h1.innerText = `${cp} winner winner `;
    makeParty();
    } 

else if (points[2] == points[4] && points[4] == points[6] && points[2] != "") {
    h1.innerText = `${cp} winner winner`;
    makeParty();
    }
else if (points[0] == points[3] && points[3] == points[6] && points[0] != "") {
    h1.innerText = `${cp} winner winner`;
    makeParty();
    } 
else if (points[1] == points[4] && points[4] == points[7] && points[1] != "") {
    h1.innerText = `${cp} winner winner `;
    makeParty();
    } 
else if (points[2] == points[5] && points[5] == points[8] && points[2] != "") {
        h1.innerText = `${cp} winner winner `;
makeParty();
    } 
}
function makeParty(){
    let body=document.body;
    body.style.background=`url(https://th.bing.com/th/id/R.c2e6dcf1bdb7c351d77c9240b4788457?rik=o32avIYX3ArlEw&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fKXgJsSeOfvSgg%2fgiphy.gif&ehk=lUwfEVB1Ne1se7s0tKr4anXoZeTefseFmn6zkSxaPvU%3d&risl=&pid=ImgRaw&r=0)`;
    body.style.backgroundRepeat=`no-repeat`;
    body.style.backgroundSize=`cover`;


setTimeout(()=>{
    let result=confirm("want to  play again!!!");
    if(result){
        window.Location.reload();
    }
    else
    {
        let btns=document.getElementsByClassName("cls");
        for (let i = 0; i < btns.length; i++) 
        {
        btns[i].setAttribute("disabled","true")
        }
    }
    } ,4000)
}
