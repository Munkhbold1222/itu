function loadXMLDoc(b) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
      const xmlDoc = xmlhttp.responseXML;
      const item = xmlDoc.getElementsByTagName("item");
      myFunction(item, b);
    }
    xmlhttp.open("GET", "ikonrss.xml", true);
    xmlhttp.send();
  }
var medee = "";

function myFunction(item, b) {
  medee += "<h1>" + item[b-1].getElementsByTagName("title")[0].childNodes[0].wholeText + "</h1>" 
  + "<p>" + item[b-1].getElementsByTagName("description")[0].childNodes[0].wholeText + "</p>";
  console.log(medee);
  document.getElementById("hehe").innerHTML = medee;
}

function Medee1(medeeniiID){
  document.cookie = medeeniiID;
}
function Medee2(){
  return document.cookie;
}