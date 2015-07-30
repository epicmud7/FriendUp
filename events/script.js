var request = new XMLHttpRequest();

var events;

request.open('GET', 'https://app.ticketmaster.eu/mfxapi/v1/events?apikey=LhNuq4GM6t7PGCzWAqkLY8W0zDbGvQ00&domain_ids=unitedkingdom&lang=en-us&lat=51.6324405&long=0.3515475&radius=50&eventdate_from=2015-07-29T00:00:00Z&eventdate_to=2015-08-29T00:00:00Z&max_price=3000&is_seats_available=true&is_not_cancelled=true&is_not_package=true&sort_by=proximity');

request.setRequestHeader('Accept', 'application/json');

div = document.createElement('div');
document.body.appendChild(div);

request.onreadystatechange = function () {
    
  if (this.readyState === 4) {
      if(this.status === 200) {
        obj = JSON.parse(this.responseText);
        events = obj.events;
        console.log('Success');
        populateFirstEvent(events[0]);
        populateSecondEvent(events[1]);
        populateThirdEvent(events[2])
/*
        for (var i = 0; i < events.length; i++) {
            printEvent(events[i]);
        }
*/
                
      }
    }
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

function populateFirstEvent(e) {
    
    
    var date = Date.parse(e.localeventdate);
    console.log(date.toString('dd-MMM-yyyy HH:mm:ss'));
    
    var element = document.getElementById("eventTitle");
    element.innerHTML = truncateString(e.name);
    var element = document.getElementById("venue");
    element.innerHTML = e.venue.location.address.address + ', <br/>' + e.venue.location.address.city + ', <br/>' + e.venue.location.address.country + ', <br/>' + e.venue.location.address.postal_code;
    var element = document.getElementById("price");
    element.innerHTML = '£' + e.price_ranges.including_ticket_fees.min + ' - £' + e.price_ranges.including_ticket_fees.max;
    var element = document.getElementById("date");
    element.innerHTML = (date.toString('dd-MMM-yyyy HH:mm:ss'));
    var element = document.getElementById("category");
    element.innerHTML = e.categories[0].name;
}

function populateSecondEvent(e) {
    
    var date = Date.parse(e.localeventdate);
    console.log(date.toString('dd-MMM-yyyy HH:mm:ss'));
    
    var element = document.getElementById("eventTitle2");
    element.innerHTML = truncateString(e.name);
    var element = document.getElementById("venue2");
    element.innerHTML = e.venue.location.address.address + ', <br/>' + e.venue.location.address.city + ', <br/>' + e.venue.location.address.country + ', <br/>' + e.venue.location.address.postal_code;
    var element = document.getElementById("price2");
    element.innerHTML = '£' + e.price_ranges.including_ticket_fees.min + ' - £' + e.price_ranges.including_ticket_fees.max;
    var element = document.getElementById("date2");
    element.innerHTML = (date.toString('dd-MMM-yyyy HH:mm:ss'));
    var element = document.getElementById("category2");
    element.innerHTML = e.categories[0].name;
}

function populateThirdEvent(e) {
    
    var date = Date.parse(e.localeventdate);
    console.log(date.toString('dd-MMM-yyyy HH:mm:ss'));
    
    var element = document.getElementById("eventTitle3");
    element.innerHTML = truncateString(e.name);
    var element = document.getElementById("venue3");
    element.innerHTML = e.venue.location.address.address + ', <br/>' + e.venue.location.address.city + ', <br/>' + e.venue.location.address.country + ', <br/>' + e.venue.location.address.postal_code;
    var element = document.getElementById("price3");
    element.innerHTML = '£' + e.price_ranges.including_ticket_fees.min + ' - £' + e.price_ranges.including_ticket_fees.max;
    var element = document.getElementById("date3");
    element.innerHTML = (date.toString('dd-MMM-yyyy HH:mm:ss'));
    var element = document.getElementById("category3");
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

request.send();