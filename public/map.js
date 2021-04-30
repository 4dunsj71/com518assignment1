
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
    document.getElementById("latIn").value = lat;
    document.getElementById("lonIn").value = lon;
    const marker = L.marker(location).addTo(map);
    marker.bindPopup(`<p>${lat},${lon}</p>`
        
    /*
    `
        <form>
            <div class ="form-group">
                <label for="nameIn">Name</label>
                <input type="text" class="form-control" id="nameIn">
            </div>
            <div class ="form-group">
                <label for="typeIn">type</label>
                <input type="text" class="form-control" id="typeIn">
            </div>
            <div class ="form-group">
                <label for="countryIn">Country</label>
                <input type="text" class="form-control" id="countryIn">
            </div>
            <div class ="form-group">
                <label for="regionIn">Region</label>
                <input type="text" class="form-control" id="regionIn">
            </div>
            <div class ="form-group">
                <label for="descriptionIn">Description</label>
                <input type="text" class="form-control" id="descriptionIn">
            </div>
            <p class="d-none" id="latIn">${lat}</p>
            <p class="d-none" id="lonIn">${lon}</p>
            <script type="text/javascript">
            let nameIn = document.getElementById("nameIn").value;
            let typeIn = document.getElementById("typeIn").value;
            let countryIn = document.getElementById("countryIn").value;
            let regionIn = document.getElementById("regionIn").value;
            let latIn = document.getElementById("latIn").value;
            let lonIn = document.getElementById("lonIn").value;
            let description = document.getElementById("descriptionIn").value;
            </script>
            <input type="button"  id="subDetails" value="Submit" onclick="newpoi(
                nameIn,
                typeIn,
                countryIn,
                regionIn,
                latIn,
                lonIn,
                descriptionIn)"></input>
        </form>
    `
    */
).openPopup();

});


