function back(){
    localStorage.removeItem("un");
    localStorage.removeItem("iv");
    window.location="index.html";
}
uno=localStorage.getItem("iv");
document.getElementById("un").innerHTML="Welcome "+uno+"!";
rn=document.getElementById("i1").value;

addRoom(){
    localStorage.setItem("rn", rn);
    window.location("kwitter_page.html");
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
rn = childKey;
//Start code
row="<div class='rn' id="+rn+" onclick='rrn()' #>+rn+</div><hr>";
document.getElementById("output").innerHTML  += row;
//End code
});});}
getData();
function rrn(){
localStorage.setItem("rn2", rn);
window.location("kwitter_page.html");
}
