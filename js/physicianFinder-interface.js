import{ physicianFinder } from "./../js/physicianFinder.js";

let displayResults = function (search){
  $("#CNT").text(search.found);
  search.results.forEach(function(n){
    $("#MATCHES").append(`<li><p>${n.name}</p><ol>`); //create opening tags and list name of match
    n.specialties.forEach(function(listedSpec) { $("#MATCHES").append(`<li>${listedSpec}</li>`); }); //loop to append specialties
    $("#MATCHES").append(`</ol></li>`); //append close tags
  });
};

$(document).ready(function(){
  $("#field2").hide();
  $("#field3").hide();
  $("#field1 button[name=field1]").on('click',function(){
    switch ($("#field1 select[name=search type]").val()) {
      case 2:
      $("#field1").hide();
      $("#field2").show();
      break;

      case 3:
      $("#field1").hide();
      $("#field3").show();
      break;

      default:
      alert("Something went wrong: we couldn't process your selection");
      break;
    };
  });

  $("#field2 button[name=field2]").on('click',function(){
    if (!$("#field2 input[name=doc]").val()) { alert("Something went wrong: we couldn't process your selection"); }
    else {
      let newNameSearch = new physicianFinder($("#field2 input[name=doc]").val(),0);
      $("#field2 input[name=doc]").val("");
      newNameSearch.searchAPI();
      displayResults(newNameSearch);
    }
  });
  $("#field3 button[name=field3]").on('click',function(){
    if (!$("#field3 input[name=spec]").val()) { alert("Something went wrong: we couldn't process your selection"); }
    else {
      let newSpecSearch = new physicianFinder($("#field2 input[name=doc]").val(),1);
      $("#field2 input[name=doc]").val("")
      newSpecSearch.searchAPI();
      displayResults(newSpecSearch);
    }
  });

});
