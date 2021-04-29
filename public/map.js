
const map = L.map ("map1");

const attrib="Map data copyright OpenStreetMap contributors, Open Database Licence";

L.tileLayer
        ("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            { attribution: attrib } ).addTo(map);
            
map.setView([50.908,-1.4], 14);



function goto(lat,lon){
    let location = [lat,lon];
    map.setView(location,10);
};

function pin(lat,lon,name,desc,rec,id){
    let location = [lat,lon];
    console.log(name);
    console.log(desc);
    console.log(rec);
    console.log(id);
    const marker = L.marker(location).addTo(map);
    marker.bindPopup(`name:${name}<br>description:${desc}<br>recommendations:${rec}<br><input type="button" onclick="recommend(${id})" value="recommend"/>`);
    marker.on('click', () =>{
        marker.openPopup();
    });
};

map.on('click', function(ev) {
    let lat = ev.latlng.lat;
    let lon = ev.latlng.lng;
    let location = [lat,lon];
    console.log(lat);
    console.log(lon);
    const marker = L.marker(location).addTo(map);
    marker.bindPopup("").openPopup();
    
});


