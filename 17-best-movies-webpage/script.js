 document.getElementById("latest").addEventListener("click", updateLatest);
 document.getElementById("oldest").addEventListener("click", updateOldest);
 
 function updateLatest() {
   document.getElementById("movies").style["flex-direction"] = "column-reverse";
 }
 
 function updateOldest() {
   document.getElementById("movies").style["flex-direction"] = "column";
 }