function formt() {
 var x=document.getElementById("formtablo");
tex=""
for (var i = 0; i < x.length; i++) {
  tex+=x.elements[i].value;
};
document.getElementById("tablom").innerHTML =tex;
};

