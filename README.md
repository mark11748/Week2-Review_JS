# **Code-Review2_JS**
#### By Mark Woodward

## _Description_
Allow user to:  
Enter medical issue **OR**
enter a name to receive a list of doctors in the Portland area that fit the search query.  
Matches are displayed with the following information: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
If the API call results in an error, the application will return a notification that states what the error is.
If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application will return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## _Installation_
1. download from github.
2. install necessary packages & dependancies through your command line by using "npm install" and "bower install"
3. run index.html in your browser of choice

## _Technologies Used_
* html
* css
* js (with ecma 6 using babel)
* node
* bower
* jquery
* bootstrap

## _Known Bugs_

## _Specs_
*  
_Description_: user input search fields via checkbox/radio buttons to determine type of search
_Input_:  user clicks selector buttons
_Output_: appropriate fields are displayed

*  
_Description_:  after filling in all fields user clicks button to compile and send their request to the 3rd party
_Input_:  user clicks "send query" button
_Output_: request is formatted and sent

*  
_Description_:  matches are displayed with relevant info
_Input_:  Response is returned from the 3rd party
_Output_: processed response is displayed to the screen

**schedule:**  

* +3:00 - fixing yesterdays work
* +1:00 - back-end skeleton <start10:30><end:1:43>
* +1:00 - lunch[amend1]
* +2:30 - Specs and testing  <start:12:50><>
* +1:30 - back-end and interface write up
* +0:45 - html & css

## _Support and Contact Details_   
Contact the developer if you find a way to monetize this product, or with bug reports or feedback. <markwood117@gmail.com>  

## _License_
This program uses an MIT license.
