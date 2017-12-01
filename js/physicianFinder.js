require("./../.env").exports.apiKey;

export class physicianFinder
{

  constructor(searchTerm, searchType=0, limit=5, location = "or-portland")
  {
    this.searchTerm = searchTerm; //term queried
    this.searchType = searchType; //0=name search; for simplicity anything else searches specializations
    this.limit      = limit;      //max results to see; defaults to five
    this.location   = location;   //target search location
    this.targetUrl  = undefined;
  };
  setUrl()
  {
    this.targetUrl="https://api.betterdoctor.com/2016-03-01/doctors?";
    if (searchType===0) {
      this.targetUrl = "https://api.betterdoctor.com/2016-03-01/doctors?"+`name=${searchTerm}&location=${location}&skip=0&limit=${limit}&user_key=${apiKey}`;
    } else {
      this.targetUrl = "https://api.betterdoctor.com/2016-03-01/doctors?"+`specialty_uid=${searchTerm}&location=${location}&skip=0&limit=${limit}&user_key=${apiKey}`;
    }
  }
  

};
