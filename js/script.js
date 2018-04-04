var femalNames = ["María", "Ángeles", "Nuria", "Inés", "Luar"];
var maleNames = ["Unai", "Javier", "Pablo", "Iker", "Sergio"];
var allNames = femalNames.concat(maleNames);
  console.log(allNames);
  document.write(allNames + ". ");
var newName ="Mónica";

  if (allNames.indexOf(newName) === -1) {
    console.log(allNames.push(newName));
    document.write("<br>" + allNames.push(newName));
  }
  else {
    console.log("Wrong parameter!");
    alert("Wrong parameter!");
  };

var allNamesToString = allNames.join(' | ');
  console.log(allNamesToString);
  document.write("<br>" + allNamesToString);

var getName = allNames.pop();
  console.log(getName);
  console.log(allNames);
  document.write("<br>" + getName);
  document.write("<br>" + allNames);

allNames.splice(2, 2, "Tomás", "Sofía", "Cristobal");
  console.log(allNames);
  document.write("<br>" + allNames);

var allNamesWithoutSergioAndCristobal = allNames.filter(function(name) {
  console.log("name in filter" + name);
  document.write("<br>" + "name in filter" +" " + name);
  return name != "Sergio" && name != "Cristobal";
});
  console.log(allNamesWithoutSergioAndCristobal);
  document.write("<br>" + allNamesWithoutSergioAndCristobal);
