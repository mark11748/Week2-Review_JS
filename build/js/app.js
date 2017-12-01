(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AgeConversion = exports.AgeConversion = function () {
  function AgeConversion(age) {
    _classCallCheck(this, AgeConversion);

    this.age = age;
  }

  _createClass(AgeConversion, [{
    key: "yearToSeconds",
    value: function yearToSeconds(age) {
      return age * (365 * 24 * 60 * 60);
    }
  }, {
    key: "mercuryAge",
    value: function mercuryAge(age) {
      return parseFloat(age * .24);
    }
  }, {
    key: "venusAge",
    value: function venusAge(age) {
      return parseFloat(age * .62);
    }
  }, {
    key: "marsAge",
    value: function marsAge(age) {
      return parseFloat(age * 1.88);
    }
  }, {
    key: "jupiterAge",
    value: function jupiterAge(age) {
      return parseFloat(age * 11.86);
    }
  }, {
    key: "getLifeExpectancy",
    value: function getLifeExpectancy() {
      var currentDate = new Date();
      if (currentDate.getFullYear() - this.age < 2000) {
        return 70;
      } else {
        return 75;
      }
    }
  }]);

  return AgeConversion;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _ageConversion = require("./../js/ageConversion.js");

$(document).ready(function () {
  $("#age-form").submit(function (event) {
    event.preventDefault();
    $("#output-list li").remove();
    var age = $("#age").val();
    var ageConverter = new _ageConversion.AgeConversion(age);
    var expectancy = ageConverter.getLifeExpectancy();

    $("#output-list").append("<li id=\"earth\">" + "<p>You are: " + ageConverter.yearToSeconds(age) + " seconds old.</p>" + "<p>Your life expectancy is: " + expectancy + " years old.</p>" + "</li>");
    if (age >= expectancy) {
      $("#output-list #earth").append("<p>Congradulations you're not dead!</p>");
    }
    if (age < expectancy) {
      $("#output-list #earth").append("<p>You have approximately: " + (expectancy - age) + " years left.</p>");
    }
    $("#output-list #earth").append("<br>");
    $("#output-list #earth").prepend("<h6>ON EARTH:</h6>");

    $("#output-list").append("<li id=\"mercury\">" + "<p>You are: " + ageConverter.mercuryAge(age) + " years olds on mercury</p>" + "<p>Your life expectancy on mercury is: " + ageConverter.mercuryAge(expectancy) + " years old.</p>" + "</li>");
    if (age < expectancy) {
      $("#output-list #mercury").append("<p>You have approximately: " + ageConverter.mercuryAge(expectancy - age) + " years left.</p>");
    }
    $("#output-list #mercury").append("<br>");
    $("#output-list #mercury").prepend("<h6>ON MERCURY:</h6>");

    $("#output-list").append("<li id=\"venus\">" + "<p>You are: " + ageConverter.venusAge(age) + " years olds on venus</p>" + "<p>Your life expectancy on venus is: " + ageConverter.venusAge(expectancy) + " years old.</p>" + "</li>");
    if (age < expectancy) {
      $("#output-list #venus").append("<p>You have approximately: " + ageConverter.venusAge(expectancy - age) + " years left.</p>");
    }
    $("#output-list #venus").append("<br>");
    $("#output-list #venus").prepend("<h6>ON VENUS:</h6>");

    $("#output-list").append("<li id=\"mars\">" + "<p>You are: " + ageConverter.marsAge(age) + " years olds on mars</p>" + "<p>Your life expectancy on mars is: " + ageConverter.marsAge(expectancy) + " years old.</p>" + "</li>");
    if (age < expectancy) {
      $("#output-list #mars").append("<p>You have approximately: " + ageConverter.marsAge(expectancy - age) + " years left.</p>");
    }
    $("#output-list #mars").append("<br>");
    $("#output-list #mars").prepend("<h6>ON MARS:</h6>");

    $("#output-list").append("<li id=\"jupiter\">" + "<p>You are: " + ageConverter.jupiterAge(age) + " years olds on jupiter</p>" + "<p>" + "Your life expectancy on jupiter is: " + ageConverter.jupiterAge(expectancy) + "years old.</p>" + "</li>");
    if (age < expectancy) {
      $("#output-list #jupiter").append("<p>You have approximately: " + ageConverter.jupiterAge(expectancy - age) + " years left.</p>");
    }
    $("#output-list #jupiter").append("<br>");
    $("#output-list #jupiter").prepend("<h6>ON JUPITER:</h6>");
  });
});

},{"./../js/ageConversion.js":1}]},{},[2]);
