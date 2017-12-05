const apiKey = require("./../.env").apiKey;

export class physicianFinder
{

  constructor(searchTerm, searchType=0, limit=5, location = "or-portland")
  {
    this.searchTerm = searchTerm; //term queried
    this.searchType = searchType; //0=name search; for simplicity anything else searches specializations
    this.limit      = limit;      //max results to see; defaults to five
    this.location   = location;   //target search location
    this.targetUrl  = "";
  }
  setUrl()
  {
    if (this.searchType===0)
    {
      this.targetUrl = "https://api.betterdoctor.com/2016-03-01/doctors?"+`name=${this.searchTerm}&location=${this.location}&skip=0&limit=${this.limit}&user_key=${apiKey}`;
    }
    else
    {
      this.targetUrl = "https://api.betterdoctor.com/2016-03-01/doctors?"+`specialty_uid=${this.searchTerm}&location=${this.location}&skip=0&limit=${this.limit}&user_key=${apiKey}`;
    }
  }

  searchAPI(displayResults) {
    if (!this.targetUrl)
    { this.setUrl(); }
    let that = this;
    let myPromise = new Promise( (success,fail)=>{
      let myRequest = new XMLHttpRequest();

      myRequest.open("GET",that.targetUrl,true);
console.log(myRequest);
      myRequest.onload = ()=>{
        if (myRequest.status == 200)
        {
          success(myRequest.response);
        } else {
          fail(`Sorry, there was an error. [request status]:${myRequest.status};[request text]:${myRequest.statusText}.`);
        }
      };

      myRequest.send();
    });
    myPromise.then(
      function(good){
        let matches = JSON.parse(good);
        let results    = [];
        let found      = 0;
        matches.data.forEach(function(x){
          results.push(new doctor(x.profile.first_name, x.profile.last_name, x.specialties)) ;
          found++;
        });
        displayResults(found,results);
      },
      function(bad){
        alert(bad);
      }
    );
  }
}

export class doctor {
  constructor(x,y,z){
    this.name=x+" "+y;
    this.specialties=[];
    z.forEach( (spec)=>{this.specialties.push(spec.name);} );
  }
}
