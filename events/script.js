var events;
var useRealData = false;
div = document.createElement('div');
document.body.appendChild(div);


function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);
    
    //TODO doesn't belong here
    xhr.setRequestHeader('Accept', 'application/json');

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}


if(useRealData){
    var url = 'https://app.ticketmaster.eu/mfxapi/v1/events?apikey=LhNuq4GM6t7PGCzWAqkLY8W0zDbGvQ00&domain_ids=unitedkingdom&lang=en-us&lat=51.6324405&long=0.3515475&radius=50&eventdate_from=2015-07-29T00:00:00Z&eventdate_to=2015-08-29T00:00:00Z&max_price=3000&is_seats_available=true&is_not_cancelled=true&is_not_package=true&sort_by=proximity'
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      throw new Error('CORS not supported');
    }

xhr.onload = function() {
    if (this.readyState === 4) {
        if(this.status === 200) {
            var responseText = xhr.responseText;
            console.log(responseText);
            // process the response.
            handleSuccess(responseText);
        }
    }
};

xhr.onerror = function() {
     console.log('There was an error!');
};
    xhr.send();
}else{
    var fakeData=getFakeData();
    handleSuccess(fakeData);
}

function handleSuccess(responseText){    

        obj = JSON.parse(responseText);
        events = obj.events;
        console.log('Success');
        populateEvent(events[0], 1);
        populateEvent(events[1], 2);
        populateEvent(events[2], 3);
/*
        for (var i = 0; i < events.length; i++) {
            printEvent(events[i]);
        }
*/
                
}

// .toLocaleFormat('%d-%b-%Y');

function truncateString(s) {
   if(s.length > 30) {
       return (s.substring(0, 28) + '...');  
    }
    else{
        return(s)
    }
}

function populateEvent(e, number) {
    
    var date = Date.parse(e.localeventdate);
    console.log(date.toString('dd-MMM-yyyy HH:mm:ss'));
    
    var element = document.getElementById("eventTitle" + number);
    element.innerHTML = truncateString(e.name);

    var element = document.getElementById("venue" + number);
    element.innerHTML = e.venue.location.address.address + ', <br/>' + e.venue.location.address.city + ', <br/>' + e.venue.location.address.country + ', <br/>' + e.venue.location.address.postal_code;
    
    var element = document.getElementById("price" + number);
    element.innerHTML = '£' + e.price_ranges.including_ticket_fees.min + ' - £' + e.price_ranges.including_ticket_fees.max; 
    
    var element = document.getElementById("date" + number);
    element.innerHTML = (date.toString('dd-MMM-yyyy HH:mm:ss'));
    
    var element = document.getElementById("category" + number);
    element.innerHTML = e.categories[0].name;

}



/*
function createAndAppend(text, p) {
    var node = document.createTextNode(text);
    p.appendChild(node);
}
*/
      
/*
function printEvent(e) {
    
    var p = document.createElement("p");
    
    var name = e.name;
    var date = e.localeventdate;
    var price = '£' + e.price_ranges.including_ticket_fees.min + ' - £' + e.price_ranges.including_ticket_fees.max;
    var address = e.venue.location.address.address + ', ' + e.venue.location.address.city + ', ' + e.venue.location.address.country + ', ' + e.venue.location.address.postal_code;
    var category = e.categories[0].name;
    
    createAndAppend(name, p);
    createAndAppend(date, p);
    createAndAppend(price, p);
    createAndAppend(address, p);
    createAndAppend(category, p);
    
    div.appendChild(p);
}
*/


/*

*/
/*
  }
};
*/
