import{AgeConversion} from "./../js/ageConversion.js";

$(document).ready(function(){
  $("#age-form").submit(function(event){
    event.preventDefault();
    $("#output-list li").remove();
    let age = $("#age").val();
    let ageConverter = new AgeConversion(age);
    let expectancy = ageConverter.getLifeExpectancy();

    $("#output-list").append("<li id=\"earth\">"+"<p>You are: "+ageConverter.yearToSeconds(age)+" seconds old.</p>"+"<p>Your life expectancy is: "+expectancy+" years old.</p>"+"</li>");
    if(age>=expectancy){$("#output-list #earth").append("<p>Congradulations you're not dead!</p>");}
    if(age<expectancy) {$("#output-list #earth").append("<p>You have approximately: "+(expectancy-age)+" years left.</p>");}
    $("#output-list #earth").append("<br>");
    $("#output-list #earth").prepend("<h6>ON EARTH:</h6>");


    $("#output-list").append("<li id=\"mercury\">"+"<p>You are: "+ageConverter.mercuryAge(age)+" years olds on mercury</p>"+"<p>Your life expectancy on mercury is: "+ageConverter.mercuryAge(expectancy)+" years old.</p>"+"</li>");
    if(age<expectancy) {$("#output-list #mercury").append("<p>You have approximately: "+ageConverter.mercuryAge(expectancy-age)+" years left.</p>");}
    $("#output-list #mercury").append("<br>");
    $("#output-list #mercury").prepend("<h6>ON MERCURY:</h6>");

    $("#output-list").append("<li id=\"venus\">"+"<p>You are: "+ageConverter.venusAge(age)+" years olds on venus</p>"+"<p>Your life expectancy on venus is: "+ageConverter.venusAge(expectancy)+" years old.</p>"+"</li>");
    if(age<expectancy) {$("#output-list #venus").append("<p>You have approximately: "+ageConverter.venusAge(expectancy-age)+" years left.</p>");}
    $("#output-list #venus").append("<br>");
    $("#output-list #venus").prepend("<h6>ON VENUS:</h6>");


    $("#output-list").append("<li id=\"mars\">"+"<p>You are: "+ageConverter.marsAge(age)+" years olds on mars</p>"+"<p>Your life expectancy on mars is: "+ageConverter.marsAge(expectancy)+" years old.</p>"+"</li>");
    if(age<expectancy) {$("#output-list #mars").append("<p>You have approximately: "+ageConverter.marsAge(expectancy-age)+" years left.</p>");}
    $("#output-list #mars").append("<br>");
    $("#output-list #mars").prepend("<h6>ON MARS:</h6>");


    $("#output-list").append("<li id=\"jupiter\">"+"<p>You are: "+ageConverter.jupiterAge(age)+" years olds on jupiter</p>"+"<p>"+"Your life expectancy on jupiter is: "+ageConverter.jupiterAge(expectancy)+ "years old.</p>"+"</li>");
    if(age<expectancy) {$("#output-list #jupiter").append("<p>You have approximately: "+ageConverter.jupiterAge(expectancy-age)+" years left.</p>");}
    $("#output-list #jupiter").append("<br>");
    $("#output-list #jupiter").prepend("<h6>ON JUPITER:</h6>");


  });
});
