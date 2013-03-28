    var map       = null;
    var street    = null;
    var streetsvc = null;
	var mapOn     = false;
	var popMap    = false;
    var iconCnt   = 0;
    var iconMrk   = new Array();
    var iconHtml  = new Array();
    var iconLink  = new Array();
    var center;
    var bds;

    function load() 
	  {
      center = new google.maps.LatLng(clat, clng);

      var myOptions = {
        zoom: 15,
        center: center, 
        streetViewControl: false,
        zoomControl: true,
        panControl: true,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
    
      map = new google.maps.Map(document.getElementById("myMap"), myOptions);
      
	  if(noHomes > 1)
	    {
        bds = new google.maps.LatLngBounds(new google.maps.LatLng(slat, slng), new google.maps.LatLng(elat, elng));
        map.fitBounds(bds);
	    }

	  for(var lp = 0; lp < noHomes; lp++)
 	    createMarker(lp);
	
	  if(popMap)
	    {
	    iconCnt = noHomes;
		}
		
	  if(doStreet)
	    {
        streetsvc = new google.maps.StreetViewService();
        streetsvc.getPanoramaByLocation(center, 50, SetupStreetView);
	    }
      }

	function SetupStreetView(result, status)
	  {
      if(status == google.maps.StreetViewStatus.OK)
        {
        var panoOptions = { position: center, addressControl: false, pov: {heading: 0, pitch: 0, zoom: 1 }};
        street = new google.maps.StreetViewPanorama(document.getElementById("myStreet"), panoOptions);
        map.setStreetView(street);
	    }
	  else
        document.getElementById("myStreet").style.display = "none";
	  }
	  
    function createMarker(idx)
	  {
	  var marker;
	  var point;
      var ourIcon;
	  
      point  = new google.maps.LatLng(lat[idx], lng[idx]);

	  if(loc[idx].search("home") != -1)
	    {
        ourIcon = new google.maps.MarkerImage('http://www.proagentwebsites.com/images/homemrkr.png', new google.maps.Size(32, 37), new google.maps.Point(0,0), new google.maps.Point(12, 36));
        marker  = new google.maps.Marker({position: point, map: map, icon: ourIcon});
	    }
      else
        {
        popMap = true;

	    if(loc[idx].search("SOLD") != -1)
          ourIcon = new google.maps.MarkerImage('http://www.proagentwebsites.com/images/homesold.png', new google.maps.Size(32, 37), new google.maps.Point(0,0), new google.maps.Point(12, 36));
	    else if(loc[idx].search("favorite") != -1)
          ourIcon = new google.maps.MarkerImage('http://www.proagentwebsites.com/images/homefavorite.png', new google.maps.Size(32, 37), new google.maps.Point(0,0), new google.maps.Point(12, 36));
	    else if(loc[idx].search("visited") != -1)
          ourIcon = new google.maps.MarkerImage('http://www.proagentwebsites.com/images/homeviewed.png', new google.maps.Size(32, 37), new google.maps.Point(0,0), new google.maps.Point(12, 36));
        else
          ourIcon = new google.maps.MarkerImage('http://www.proagentwebsites.com/images/homemrkr.png', new google.maps.Size(32, 37), new google.maps.Point(0,0), new google.maps.Point(12, 36));

        iconMrk[idx]  = new google.maps.Marker({position: point, map: map, icon: ourIcon, title: idx.toString(10)});
	    iconHtml[idx] = des[idx];
	    iconLink[idx] = lnk[idx];

        google.maps.event.addListener(iconMrk[idx], "mouseover", function() { ShowPopup(this); });
        google.maps.event.addListener(iconMrk[idx], "mouseout",  function() { HidePopup(this); });
        google.maps.event.addListener(iconMrk[idx], "click",     function() { ShowProperty(this); });
	    }

	  return(marker);
	  }

    function showMap()
	  {
      mapobj = document.getElementById("myMap");
	  mapobj.style.visibility = "visible";
	  
	  if(!mapOn)
	    load();
	  
	  mapOn = true;
      }

    function hideMap()
	  {
	  mapobj = document.getElementById("myMap");
	  mapobj.style.visibility = "hidden";
	  }
	  

