async function newpoi(name,type,country,region,lat,lon,description){
    try{
        const poi ={
            name: name, 
            type: type, 
            country: country, 
            region: region, 
            lon: lon, 
            lat: lat, 
            description: description, 
            recommendations: 0
        };
        console.log(poi);

        const response = await fetch('http://localhost:3000/newpoi',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'
            },
            body: JSON.stringify(poi)

        });
        console.log(poi);
    }catch(e){
        alert(`Error: ${e}`);
        console.log(poi);
    }
}

    
    