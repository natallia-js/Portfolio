function showMyEducation() {
    var coll = document.getElementsByClassName("education-info");
    var content = coll[0];
    if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
};