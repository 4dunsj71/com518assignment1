const map = L.map ("map1");

const attrib="Map data copyright OpenStreetMap contributors, Open Database Licence";

L.tileLayer
        ("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            { attribution: attrib } ).addTo(map);
            
map.setView([50.908,-1.4], 14);



function goto(lat,lon){
    let location = [lat,lon];
    alert(location);
    map.setView(location,14);
    L.marker(location).addTo(map);
};

function pin(){
    let lat =  document.getElementById("0").getElementById("lat0");
    let lon =  document.getElementById("0").getElementById("lon0");
    console.log(lat,lon);
    let location = [lat,lon];
    map.setView(location,14);
    L.marker(location).addTo(map);
};