import{ physicianFinder , doctor } from "./../js/physicianFinder.js";

let displayResults = function (found,results){
  $("#CNT").text(found);
  results.forEach(function(n){
    $("#MATCHES").append(`<li><p>${n.name}</p><ol>`); //create opening tags and list name of match
    n.specialties.forEach(function(listedSpec) { $("#MATCHES ol").append(`<li>${listedSpec}</li>`); }); //loop to append specialties
    $("#MATCHES").append(`</ol></li><br>`); //append close tags

    $("#OUTPUT").show();
    $("#field1").show();
    $("#field2").hide();
    $("#field3").hide();
  });
};

$(document).ready(function(){
  $("#field2").hide();
  $("#field3").hide();
  $("#OUTPUT").hide();

  $("#field1 button[name=\"field1\"]").on('click',function(){
    switch (parseInt( $("#field1 select[name=\"search type\"]").val() ) ){
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
    }
  });

  $("#field2 button[name=\"field2\"]").on('click',function(){
    if (!$("#field2 input[name=\"doc\"]").val()) { alert("Something went wrong: we couldn't process your selection"); }
    else {
      let newNameSearch = new physicianFinder($("#field2 input[name=\"doc\"]").val(),0);
      $("#field2 input[name=\"doc\"]").val("");
      newNameSearch.setUrl();
      newNameSearch.searchAPI(displayResults);
    }
  });
  $("#field3 button[name=\"field3\"]").on('click',function(){
    if (!$("#field3 input[name=\"spec\"]").val()) { alert("Something went wrong: we couldn't process your selection"); }
    else {
      let newSpecSearch = new physicianFinder($("#field2 input[name=\"doc\"]").val(),1);
      $("#field2 input[name=\"doc\"]").val("");
      newNameSearch.setUrl();
      newSpecSearch.searchAPI(displayResults);
    }
  });

});
