map.on("click", e =>{
    lat = e.latlng.lat;
    lon = e.latlng.lon;
    location = [lat,lon];
    const marker = L.marker(location);
    marker.bindPopup("gay").openPopup();
    
});