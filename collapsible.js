function showMyEducation() {
    var coll = document.getElementsByClassName("education-info");
    var content = coll[0];
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        document.getElementById("show-education-info").innerHTML = "&#9660;";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        document.getElementById("show-education-info").innerHTML = "&#9658;";
      }
};