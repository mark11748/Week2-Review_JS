let testKey=require("./../.env").apiKey;
import{ physicianFinder } from "./../js/physicianFinder.js";
require("./../.env").apiKey;
describe("physicianFinder",function(){

  it("should create a valid url out of its properties",function(){
    let testModule = new physicianFinder("bob");
    testModule.setUrl();
    expect(testModule.targetUrl).toEqual(`https://api.betterdoctor.com/2016-03-01/doctors?name=bob&location=or-portland&skip=0&limit=5&user_key=${testKey}`);
  });
});
