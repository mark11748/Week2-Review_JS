let testKey=require("./../.env").apiKey;
import{ physicianFinder , doctor } from "./../js/physicianFinder.js";
require("./../.env").apiKey;

describe("physicianFinder",function(){

  it("should create a valid url out of its properties",function(){
    let testModule1 = new physicianFinder("bob");
    let testModule2 = new physicianFinder("neurologist",1);

    testModule1.setUrl();
    expect(testModule1.targetUrl).toEqual(`https://api.betterdoctor.com/2016-03-01/doctors?name=bob&location=or-portland&skip=0&limit=5&user_key=${testKey}`);
    testModule2.setUrl();
    expect(testModule2.targetUrl).toEqual(`https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=neurologist&location=or-portland&skip=0&limit=5&user_key=${testKey}`);
  });

  it("should create a list of doctor objects from the response gathered",function(){
    let testModule3 = new physicianFinder("bob");
    let testModule4 = new physicianFinder("neurologist",1);

    testModule3.setUrl();
    testModule3.searchAPI();
    expect(testModule3.results.length).toEqual(0);
    expect(testModule3.results[0].name).toEqual("Bobak Ghaheri");
  });
});
